import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../services/axiosApi"; 
import { Button, TextField } from "@mui/material";
import "./Css-styles/CreatePost.css";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    if (!title || !content) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      await apiService.createPost({ title, content });
      navigate("/");
    } catch (error) {
      setError("Не удалось создать пост. Попробуйте снова.");
    }
  };

  return (
    <div className="create-post-container">
      <h2>Создать пост</h2>
      <div className="input-fields">
        <TextField
          label="Заголовок"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Содержимое"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
        sx={{ marginTop: "20px" }}
      >
        Создать пост
      </Button>
    </div>
  );
};

export default CreatePost;
