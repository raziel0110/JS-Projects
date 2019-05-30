import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliar";

const sideDrawer = props => {
  return (
    <Aux>
      <BackDrop clicked={props.closed} show={props.open} />
      <div className={props.open ? "SideDrawer Open" : "SideDrawer Close"}>
        <Logo height="11%" />

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
