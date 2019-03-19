import React from "react";
import PropTypes from "prop-types";

import Comment from "../Comment/Comment";
import "./commentsection.css";
import { MessageCircle, Heart } from "react-feather";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: ""
    };
  }

  componentDidMount() {
    this.setState({ comments: props.comments });
    this.setState({ likes: props.likes });
  }

  addNewComment = (e, index) => {
    e.preventDefault();
    let newComment = {
      username: this.state
    };
  };

  render() {
    return (
      <div className="comment-section">
        <div className="symbols-comments">
          <Heart />
          <MessageCircle />
        </div>

        <h3 className="likes">{this.state.likes} likes</h3>

        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}

        <form onSubmit={this.addNewComment}>
          <input type="text" placeholder="Add a comment..." />
          <button>Add Comment</button>
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      likes: PropTypes.number,
      comment: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default CommentSection;
