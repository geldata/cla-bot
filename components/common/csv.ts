import {parse} from "csv-parse/sync";
import {cleanSpaces} from "./objects";

// https://csv.js.org/parse/api/sync/
export function parseSync(text: string): any {
  const records = parse(text, {
    columns: true,
    skip_empty_lines: true,
  });
  return cleanSpaces(records);
}
