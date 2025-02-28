import {Component, ReactElement} from "react";

import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ErrorPanel from "./error";
import {ApplicationError} from "../errors";

export interface ConfirmDialogProps {
  title: string;
  description: string;
  open: boolean;
  close: () => void;
  confirm: () => void;
  fragment?: ReactElement;
  error?: ApplicationError;
}

export default class ConfirmDialog extends Component<ConfirmDialogProps> {
  render(): ReactElement {
    const props = this.props;

    return (
      <Dialog
        open={props.open}
        onClose={() => props.close()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
          {props.fragment !== undefined && props.fragment}
          {props.error !== undefined && <ErrorPanel error={props.error} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.confirm()}>Confirm</Button>
          <Button onClick={() => props.close()} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export function closedDialog(): ConfirmDialogProps {
  return {
    open: false,
    title: "",
    description: "",
    close: () => false,
    confirm: () => false,
  };
}
