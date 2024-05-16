import React, { useState } from "react";
import styled from "styled-components";

import MemoryIcon from "@mui/icons-material/Memory";
const Container = styled.div`
  margin-top: 20px;
`;

const Comment = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const CommentText = styled.p`
  margin: 5px 0;
`;

const CommentForm = styled.form`
  margin-top: 20px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentButton = styled.button`
  background-color: #0073e6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Comments = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <Container>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index}>
          <CommentText>
            <label>Lama dev....</label>
            {comment}
          </CommentText>
          <hr />
        </Comment>
      ))}
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleChange}
        ></CommentInput>
        <CommentButton type="submit">Comment</CommentButton>
      </CommentForm>
    </Container>
  );
};

export default Comments;
