import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndsUsers } from "../actions/index";
import UserHeader from "./UserHeader";
import "./PostList.css";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndsUsers();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <div className="list-group">
            <div className="list-group-item d-flex justify-space-between align-items-center items">
              <i className="fas fa-user-circle user " />
              <div className="">
                <h2 className="display-4">{post.title}</h2>
                <p>{post.body}</p>
                <UserHeader userId={post.userId} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndsUsers }
)(PostList);
