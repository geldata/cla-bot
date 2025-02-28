import formatDate from "../../format-date";
import Link from "next/link";
import {AgreementListItem} from "./contracts";
import {Component, ReactElement} from "react";

export interface AgreementsTableProps {
  items: AgreementListItem[];
}

export class AgreementsTable extends Component<AgreementsTableProps> {
  render(): ReactElement {
    const items = this.props.items;

    if (items.length === 0) return <p>There are no configured agreements.</p>;

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Created at</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    href="/admin/agreements/[id]"
                    as={"/admin/agreements/" + item.id}
                  >
                    {item.name}
                  </Link>
                </td>
                <td className="description-cell">{item.description}</td>
                <td>{formatDate(item.creationTime)}</td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
