import React, { Component } from "react";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";
import FullPost from "../../containers/Blog/FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* if we want to add an css class to be active 
                  we have a property named 'activeClassName'
                */}
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path=" /:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
