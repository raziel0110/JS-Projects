import React from "react";
import Aux from "../../hoc/Auxiliar";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

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
        <Toolbar
          show={this.sideDrawerShowHandler}
          isAuth={this.props.isAuthenticated}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          closed={this.sideDrawerCloserHandler}
          open={this.state.showSideDrawer}
        />
        <main className="content">{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default connect(mapStateToProps)(Layout);
