import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Comment from "../Comment/Comment";
import "./commentsection.css";
import { MessageCircle, Heart } from "react-feather";

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  padding-bottom: 2%;
`;

const SymbolsComments = styled.div`
  margin-bottom: 1.5%;
  margin-left: 1%;
  margin-top: 2%;
  display: flex;
  justify-content: flex-start;
`;

const Likes = styled.h3`
  margin-left: 1%;
  margin-bottom: 1.5%;
`;

const Form = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;

  button {
    cursor: pointer;
    margin-top: 3%;
    padding-top: 1.2%;
    padding-bottom: 1.1%;
    text-align: center;
    height: 100%;
    width: 20%;
  }

  input {
    margin: 0 auto;
    width: 98%;
    height: 30px;
    margin-top: 3%;
    padding-left: 2%;
    background-color: #fafafa;
    color: #cacacc;
    border: 1px solid #dcdcdc;
  }
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: 3%;
  padding-top: 1.2%;
  padding-bottom: 1.1%;
  text-align: center;
  height: 100%;
  width: 20%;
`;

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
      <Comments>
        <SymbolsComments>
          <Heart id="heart-symbol" onClick={this.incrementLikes} />
          <MessageCircle id="comment-symbol" />
        </SymbolsComments>

        <Likes>{this.state.likes} likes</Likes>

        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}

        <Form onSubmit={this.addNewComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            name="comment"
            value={this.state.comment}
            onChange={this.inputChangeHandler}
          />
          <Button>Add Comment</Button>
        </Form>
      </Comments>
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
