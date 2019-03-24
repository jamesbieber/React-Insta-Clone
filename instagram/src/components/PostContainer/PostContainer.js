import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CommentSection from "../CommentSection/CommentSection";

const Container = styled.div`
  background-color: #ffffff;
  margin-top: 5%;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 2%;
  border: 1px solid #dcdcdc;
`;
const Thumbnail = styled.img`
  width: 7%;
  margin-right: 1%;
  border-radius: 100px;
`;

const PostImage = styled.img`
  margin-bottom: -10px;
`;

const Comments = styled.div`
  border: 1px solid #dcdcdc;
`;

const PostContainer = props => {
  return (
    <Container>
      <UserInfo>
        <Thumbnail src={props.post.thumbnailUrl} />
        <h2>{props.post.username}</h2>
      </UserInfo>

      <PostImage src={props.post.imageUrl} />

      <Comments>
        <CommentSection
          key={props.key}
          index={props.post}
          likes={props.post.likes}
          comments={props.post.comments}
        />
      </Comments>
    </Container>
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
