import Link from "next/link";
import {Repository} from "./contracts";
import {Component, ReactElement} from "react";
import HighlightOff from "@mui/icons-material/HighlightOff";
import {Button} from "@mui/material";

export interface RepositoriesTableProps {
  items: Repository[];
  onRemove: (item: Repository) => void;
}

export class RepositoriesTable extends Component<RepositoriesTableProps> {
  render(): ReactElement {
    const items = this.props.items;

    if (items.length === 0)
      return <p>There are no configured repositories.</p>;

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Full name</th>
            <th>Agreement</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.fullName}</td>
                <td>
                  <Link href={`/admin/agreements/${item.agreementId}`}>
                    {item.agreementName}
                  </Link>
                </td>
                <td className="actions">
                  <Button
                    title="Remove binding"
                    onClick={() => this.props.onRemove(item)}
                  >
                    <HighlightOff />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
