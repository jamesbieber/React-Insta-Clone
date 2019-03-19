import React from "react";
import PropTypes from "prop-types";

import "./comment.css";

const Comment = props => {
  return (
    <div className="comment">
      <h3>{props.comment.username}</h3>
      <p>{props.comment.text}</p>
    </div>
  );
};

Comment.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default Comment;
