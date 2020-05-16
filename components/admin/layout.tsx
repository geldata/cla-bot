import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Container from "@material-ui/core/Container";
import Copyright from "../../components/copyrights";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import React, { ReactElement } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  mainListItems,
  secondaryListItems
} from "../../components/admin/menu";


interface AdminLayoutProps {
  title?: string
  children: any
}

interface AdminLayoutState {
  drawerOpen: boolean
}

export default class AdminLayout
extends React.Component<AdminLayoutProps, AdminLayoutState> {

  constructor(props: AdminLayoutProps) {
    super(props)

    this.state = {
      drawerOpen: false
    }
  }

  toggleDrawer(): void {
    const isOpen = this.state.drawerOpen;

    this.setState({
      drawerOpen: !isOpen
    })
  }

  render(): ReactElement {
    const open = this.state.drawerOpen;

    return (
      <div className={open ? "ui-drawer-open" : "ui-drawer-closed"}>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className="drawer"
          open={open}
        >
          <div className="drawer-toggle-btn">
            <IconButton onClick={() => this.toggleDrawer()}>
              {open
                ? <ChevronLeftIcon />
                : <ChevronRightIcon />
              }
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main>
          <div />
          <Container>
            <Grid container spacing={3}>
              {this.props.children}
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}
