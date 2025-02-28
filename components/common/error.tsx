import HighlightOff from "@mui/icons-material/HighlightOff";
import React, {Component, ReactElement} from "react";
import {iconBySeverity} from "./alert";
import {Button} from "@mui/material";
import {reprError} from "./errors-repr";
import {ApplicationError, ErrorDetails} from "../errors";

interface ErrorProps {
  error: ApplicationError;
  dismiss?: () => void;
}

function reprDetails(data: ErrorDetails | string): string {
  if (typeof data === "string") {
    return data;
  }

  return JSON.stringify(data, undefined, 2);
}

export default class ErrorPanel extends Component<ErrorProps> {
  render(): ReactElement {
    const {error, dismiss} = this.props;

    let details = "";
    const {title, message, severity} = reprError(error);

    if (error instanceof ApplicationError && error.data) {
      details = reprDetails(error.data);
    }

    const retry = error.retry;

    return (
      <div className={"alert-panel alert-" + severity}>
        <div className="alert">
          <div className="icon-wrapper">{iconBySeverity(severity)}</div>
          <h2>{title}</h2>
          {dismiss !== undefined ? (
            <Button
              title="Dismiss"
              onClick={() => dismiss()}
              className="dismiss-btn"
            >
              <HighlightOff />
            </Button>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <p>{message}</p>
          {details && <pre>{details}</pre>}
          {retry !== undefined ? (
            <Button
              className="btn btn-default"
              onClick={() => retry()}
              color="secondary"
            >
              Try again
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}
