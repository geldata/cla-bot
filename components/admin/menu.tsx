import AssignmentInd from "@mui/icons-material/AssignmentInd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Description from "@mui/icons-material/Description";
import GitHub from "@mui/icons-material/GitHub";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import React, {ReactElement} from "react";
import Settings from "@mui/icons-material/Settings";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";

interface MenuItem {
  href: string;
  text: string;
  icon: ReactElement;
}

export function getMenu(items: MenuItem[]): ReactElement {
  // Note: it would be possible to implement dynamic icon by name,
  // but it increases the bundle size (bad design here in the Material UI)
  return (
    <div>
      {items.map((item) => (
        <Link href={item.href} key={item.href}>
          <ListItem component="button">
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ))}
    </div>
  );
}

export const mainListItems = getMenu([
  {
    href: "/admin",
    text: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    href: "/admin/agreements",
    text: "Agreements",
    icon: <Description />,
  },
  {
    href: "/admin/repositories",
    text: "Repositories",
    icon: <GitHub />,
  },
  {
    href: "/admin/clas",
    text: "Signed CLAs",
    icon: <PeopleIcon />,
  },
  {
    href: "/admin/import",
    text: "Import CLAs",
    icon: <ImportContactsRoundedIcon />,
  },
  {
    href: "/admin/administrators",
    text: "Administrators",
    icon: <AssignmentInd />,
  },
]);

export const secondaryListItems = getMenu([
  {
    href: "/admin/preferences",
    text: "Preferences",
    icon: <Settings />,
  },
]);
