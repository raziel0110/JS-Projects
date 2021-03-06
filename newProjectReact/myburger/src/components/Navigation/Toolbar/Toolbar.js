import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle show={props.show} />

    <Logo height="80%" />

    <nav className="DesktopOnly">
      <NavigationItems isAuthendicated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
