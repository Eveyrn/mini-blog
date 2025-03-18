import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiService } from "../services/axiosApi";
import { TextField, Button, Box } from "@mui/material";

const EditPost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      apiService.getPostById(id).then((response) => {
        setPost(response);
      }).catch(() => {
        setError("Не удалось загрузить пост.");
      });
    }
  }, [id]);

  const handleUpdatePost = async () => {
    if (id && post) {
      try {
        await apiService.updatePost(id, post);
        navigate(`/posts/${id}`);
      } catch (error) {
        setError("Не удалось обновить пост.");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  if (!post) {
    return <div>Загрузка...</div>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <TextField
        label="Заголовок"
        name="title"
        variant="outlined"
        fullWidth
        value={post.title}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Содержимое"
        name="content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={post.content}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleUpdatePost}>
        Обновить пост
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default EditPost;
