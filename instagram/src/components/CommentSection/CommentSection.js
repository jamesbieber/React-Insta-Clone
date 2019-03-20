import React from "react";
import PropTypes from "prop-types";

import Comment from "../Comment/Comment";
import "./commentsection.css";
import { MessageCircle, Heart } from "react-feather";

class CommentSection extends React.Component {
  state = {
    comments: [],
    likes: "",
    comment: ""
  };

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    });
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      ...this.state.likes,
      comments: [
        ...this.state.comments,
        {
          username: "Jamesbieber",
          text: this.state.comment
        }
      ],
      comment: ""
    });
  };

  incrementLikes = event => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="comment-section">
        <div className="symbols-comments">
          <Heart id="heart-symbol" onClick={this.incrementLikes} />
          <MessageCircle id="comment-symbol" />
        </div>

        <h3 className="likes">{this.state.likes} likes</h3>

        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}

        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            name="comment"
            value={this.state.comment}
            onChange={this.inputChangeHandler}
          />
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
