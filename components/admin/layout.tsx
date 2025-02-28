import AppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import React, {ReactElement} from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {mainListItems, secondaryListItems} from "../../components/admin/menu";

interface AdminLayoutProps {
  title?: string;
  children: any;
}

interface AdminLayoutState {
  drawerOpen: boolean;
}

export default class AdminLayout extends React.Component<
  AdminLayoutProps,
  AdminLayoutState
> {
  constructor(props: AdminLayoutProps) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  readInitialOpen(): boolean {
    return localStorage.getItem("DRAWER_OPEN") === "1";
  }

  setInitialOpen(value: boolean): void {
    localStorage.setItem("DRAWER_OPEN", value ? "1" : "0");
  }

  componentDidMount(): void {
    this.setState({
      drawerOpen: this.readInitialOpen(),
    });
  }

  toggleDrawer(): void {
    const isOpen = this.state.drawerOpen;

    this.setState({
      drawerOpen: !isOpen,
    });

    this.setInitialOpen(!isOpen);
  }

  signOut(): void {
    sessionStorage.removeItem("ACCESS_TOKEN");

    setTimeout(() => {
      window.location.replace("/admin/login");
    }, 0);
  }

  render(): ReactElement {
    const open = this.state.drawerOpen;

    return (
      <div
        id="admin-layout"
        className={open ? "ui-drawer-open" : "ui-drawer-closed"}
      >
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar className="app-toolbar">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className="headline"
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >
              CLA-Bot
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Sign out"
              title="Sign out"
              onClick={() => this.signOut()}
            >
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" className="drawer" open={open}>
          <div className="drawer-toggle-btn">
            <IconButton onClick={() => this.toggleDrawer()}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main>
          <div id="content-area">{this.props.children}</div>
        </main>
      </div>
    );
  }
}
