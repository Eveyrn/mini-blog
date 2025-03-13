
import React, { useState } from "react";
import { postService } from "../services/axiosApi";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreatePost = () => {
    const newPost = { title, content };

    postService.createPost(newPost).then(() => {
      navigate("/");
    }).catch(() => {
      setError("Не удалось создать пост.");
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <TextField
        label="Заголовок"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Содержимое"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleCreatePost}>
        Создать пост
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default CreatePost;
