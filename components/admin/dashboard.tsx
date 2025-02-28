import Layout from "./layout";
import {ReactElement, Component} from "react";
import Link from "next/link";

export default class DashboardView extends Component {
  render(): ReactElement {
    return (
      <Layout title="Dashboard">
        <h1>Welcome to the CLA-Bot Admin UI.</h1>

        <section className="big-text">
          <h2>Getting started</h2>
          <ol>
            <li>
              <Link href="/admin/agreements/new">
                Create an agreement object
              </Link>
            </li>
            <li>Configure the text of the first version of the agreement</li>
            <li>Mark the agreement version as "Done"</li>
            <li>Assign the agreement to repositories</li>
            <li>Import CLAs from source files</li>
            <li>Search signed CLAs</li>
          </ol>
        </section>
      </Layout>
    );
  }
}
