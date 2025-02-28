import {Client, createClient} from "gel";

const client = createClient();

export async function getClient(): Promise<Client> {
  return client.ensureConnected();
}
