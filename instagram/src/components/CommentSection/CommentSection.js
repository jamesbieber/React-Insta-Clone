import React from "react";

import Comment from "../Comment/Comment";
import "./commentsection.css";
import { MessageCircle, Heart } from "react-feather";

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="symbols-comments">
        <Heart />
        <MessageCircle />
      </div>

      <h3 className="likes">{props.likes}</h3>

      {props.comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />;
      })}

      <input type="text" placeholder="Add a comment..." />
    </div>
  );
};
//   return props.comments.map((comment, index) => {
//     return <Comment key={index} comment={comment} />;
//   });
// };

export default CommentSection;
