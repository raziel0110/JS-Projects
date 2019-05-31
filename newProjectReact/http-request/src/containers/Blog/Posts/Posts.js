import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";
import "./Posts.css";

class Posts extends Component {
  state = { posts: [], selectedId: null, error: false };

  componentDidMount() {
    axios
      .get("posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updateData = posts.map(post => {
          return { ...post, author: "Max" };
        });
        this.setState({ posts: updateData });
      })
      .catch(err =>
        //  this.setState({ error: true })
        console.log(err)
      );
  }

  postSelectedHandler = id => {
    this.setState({ selectedId: id });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={"/" + post.id} key={post.id}>
            <Post
              post={post}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
