import React, { Component } from "react";
import "./app.css";

import data from "./dummy-data";
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

class App extends Component {
  state = {
    posts: []
  };

  searchHandler = event => {
    if (event.target.value.length > 0) {
      let searchPosts = this.state.posts.filter(post => {
        if (post.username.includes(event.target.value)) {
          return post;
        }
      });
      this.setState({ posts: searchPosts });
    } else {
      this.setState({ posts: data });
    }
  };

  componentDidMount() {
    this.setState({ posts: data });
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate className="post-page" />
        {/* <PostPage className="post-page" searchHandler={this.searchHandler} posts={this.state.posts} /> */}
      </div>
    );
  }
}

export default App;
