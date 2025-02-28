import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import HighlightOff from "@mui/icons-material/HighlightOff";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, {Component, ReactElement} from "react";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import {Button} from "@mui/material";

export enum AlertSeverity {
  error = "error",
  warning = "warning",
  info = "info",
  success = "success",
}

export interface AlertProps {
  title: string;
  message: string;
  severity: AlertSeverity;
  retry?: () => void;
  dismiss?: () => void;
}

export function iconBySeverity(severity: AlertSeverity): ReactElement {
  switch (severity) {
    case AlertSeverity.error:
      return <ErrorOutline />;

    case AlertSeverity.warning:
      return <ReportProblemOutlinedIcon />;

    case AlertSeverity.info:
      return <InfoOutlinedIcon />;

    case AlertSeverity.success:
      return <CheckCircleOutlineOutlinedIcon />;
  }
}

export default class AlertPanel extends Component<AlertProps> {
  dismiss(): void {
    if (this.props.dismiss) {
      this.props.dismiss();
    }
  }

  render(): ReactElement {
    const {title, message, severity, dismiss} = this.props;

    return (
      <div className={severity}>
        <div className={"alert alert-" + severity}>
          <div className="icon-wrapper">{iconBySeverity(severity)}</div>
          <h2>{title}</h2>
          {dismiss !== undefined && (
            <Button
              title="Dismiss"
              onClick={() => this.dismiss()}
              className="dismiss-btn"
            >
              <HighlightOff />
            </Button>
          )}
          {message && <p>{message}</p>}
        </div>
      </div>
    );
  }
}
