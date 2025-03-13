import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postService } from "../services/axiosApi";
import { TextField, Button } from "@mui/material";

const EditPost: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      postService.getPostById(id).then((response) => {
        const post = response.data;
        setTitle(post.title);
        setContent(post.content);
      });
    }
  }, [id]);

  const handleSubmit = () => {
    if (id) {
      postService.updatePost(id, { title, content }).then(() => {
        navigate(`/posts/${id}`);
      });
    }
  };

  return (
    <div>
      <h2>Редактировать пост</h2>
      <TextField
        label="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Контент"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <Button onClick={handleSubmit} variant="outlined">Сохранить</Button>
    </div>
  );
};

export default EditPost;
