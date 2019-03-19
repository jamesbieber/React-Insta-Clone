import React, { Component } from "react";
import PropTypes from "prop-types";
import "./app.css";

import data from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  state = {
    posts: data
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map((post, index) => {
          return (
            <PostContainer posts={this.state.posts} key={index} post={post} />
          );
        })}
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired
    })
  )
};

export default App;
