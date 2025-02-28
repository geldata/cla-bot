import React, {Component, ReactElement} from "react";
import ErrorPanel from "../error";
import Loader from "../loader";
import NamedSelect, {NamedItem} from "./select-named";
import {ApplicationError} from "../../errors";

export interface DynamicSelectProps<T> {
  load: () => Promise<T[]>;
  onSelect: (item: T | null) => void;
  disallowEmpty?: true;
  onLoaded?: (items: T[]) => void;
  initialValue?: string | T;
  disabled?: boolean;
  children?: React.ReactNode;
}

interface DynamicSelectState<T> {
  loading: boolean;
  error?: ApplicationError;
  items: T[];
  selectedItemId: string;
}

/**
 * Generic component to display select filters where options are fetched
 * dynamically.
 */
export default class DynamicSelect<T extends NamedItem> extends Component<
  DynamicSelectProps<T>,
  DynamicSelectState<T>
> {
  constructor(props: DynamicSelectProps<T>) {
    super(props);

    this.state = {
      loading: true,
      items: [],
      selectedItemId: "",
    };
  }

  setInitialItem(items: T[]): T | undefined {
    if (items.length === 0) {
      return undefined;
    }

    // if the options contain a single element, select it automatically
    if (items.length === 1) {
      const singleItem = items[0];

      this.props.onSelect(singleItem);
      return singleItem;
    }

    const {initialValue} = this.props;
    if (!initialValue) {
      return;
    }

    const selectedItem = items.find(
      (item) =>
        item === initialValue ||
        item.id === initialValue ||
        item.name === initialValue
    );

    this.props.onSelect(selectedItem || null);
    return selectedItem;
  }

  load(): void {
    this.setState({
      loading: true,
      error: undefined,
    });
    this.props.load().then(
      (items) => {
        if (this.props.onLoaded) {
          this.props.onLoaded(items);
        }

        const initialItem = this.setInitialItem(items);

        this.setState({
          items,
          loading: false,
          selectedItemId: initialItem ? initialItem.id : "",
        });
      },
      (error: ApplicationError) => {
        error.retry = () => {
          this.load();
        };
        this.setState({
          loading: false,
          error,
        });
      }
    );
  }

  componentDidMount(): void {
    this.load();
  }

  renderOptions(): ReactElement {
    const {disabled, disallowEmpty} = this.props;
    const {error, loading, items, selectedItemId} = this.state;

    if (error) {
      return <ErrorPanel error={error} />;
    }

    if (loading) {
      return <Loader className="mini" />;
    }

    return (
      <NamedSelect
        items={items}
        onSelect={this.props.onSelect}
        initialValue={selectedItemId}
        disallowEmpty={disallowEmpty}
        disabled={disabled}
      />
    );
  }

  render(): ReactElement {
    return (
      <React.Fragment>
        {this.renderOptions()}
        {this.props.children}
      </React.Fragment>
    );
  }
}
