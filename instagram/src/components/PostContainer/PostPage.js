import React from "react";
import PropTypes from "prop-types";
import "/Program Files/Git/projects/React-Insta-Clone/instagram/src/app.css";

import data from "/Program Files/Git/projects/React-Insta-Clone/instagram/src/dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostPage extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: data });
  }

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

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} />
        {this.state.posts.map((post, index) => {
          return <PostContainer key={index} post={post} />;
        })}
      </div>
    );
  }
}

PostPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired
    })
  )
};

export default PostPage;
