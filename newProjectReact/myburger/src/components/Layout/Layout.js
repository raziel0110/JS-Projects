import React from "react";
import Aux from "../../hoc/Auxiliar";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = { showSideDrawer: false };

  sideDrawerCloserHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerShowHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  render() {
    return (
      <Aux>
        <Toolbar show={this.sideDrawerShowHandler} />
        <SideDrawer
          closed={this.sideDrawerCloserHandler}
          open={this.state.showSideDrawer}
        />
        <main className="content">{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
