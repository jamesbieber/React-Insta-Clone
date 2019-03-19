import React from "react";
import "./postcontainer.css";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="user-info">
        <img src={props.post.thumbnailUrl} />
        <h2>{props.post.username}</h2>
      </div>

      <img className="post-image" src={props.post.imageUrl} />

      <div className="comments">
        <CommentSection
          likes={props.post.likes}
          comments={props.post.comments}
        />
      </div>
    </div>
  );
};

PostContainer.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      posts: PropTypes.arrayOf(PropTypes.object),
      post: PropTypes.arrayOf(PropTypes.object)
    })
  )
};

export default PostContainer;
