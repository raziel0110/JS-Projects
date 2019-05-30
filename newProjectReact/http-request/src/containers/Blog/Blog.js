import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = { posts: [], selectedId: null, error: false };

  postSelectedHandler = id => {
    this.setState({ selectedId: id });
  };

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
      .catch(err => this.setState({ error: true }));
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
