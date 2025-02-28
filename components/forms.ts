import {ChangeEvent} from "react";
import {SelectChangeEvent} from "@mui/material/Select";

/**
 * Generic input field change handler, that updates a value in the state
 * by input field name attribute.
 */
export function changeHandler(
  event:
    | ChangeEvent<
        | HTMLInputElement
        | HTMLTextAreaElement
        | {name?: string; value: unknown}
      >
    | SelectChangeEvent<string>
): void {
  const target = event.target;
  const name = target.name;
  if (!name) {
    throw new Error(
      "Missing name attribute in target input field. " +
        "Add a name attribute matching a property in the state."
    );
  }
  const update: {[key: string]: string | false} = {};
  update[name] = target.value as string;

  // @ts-ignore
  const self = this;

  // if the state contains properties like "<field_name>Error",
  // update automatically to remove error while the user is typing
  const fieldName = name.replace(/^mod_/, "");
  const fieldNameError = `${fieldName}Error`;
  const fieldNameHelperText = `${fieldName}HelperText`;

  if (self.state.hasOwnProperty(fieldNameError)) {
    update[fieldNameError] = false;
  }

  if (self.state.hasOwnProperty(fieldNameHelperText)) {
    update[fieldNameHelperText] = "";
  }

  self.setState(update);
}
