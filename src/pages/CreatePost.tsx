
// import React, { useState } from "react";
// import { postService } from "../services/axiosApi";
// import { TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const CreatePost: React.FC = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleCreatePost = () => {
//     const newPost = { title, content };

//     postService.createPost(newPost).then(() => {
//       navigate("/");
//     }).catch(() => {
//       setError("Не удалось создать пост.");
//     });
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       <TextField
//         label="Заголовок"
//         variant="outlined"
//         fullWidth
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />
//       <TextField
//         label="Содержимое"
//         variant="outlined"
//         fullWidth
//         multiline
//         rows={4}
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />
//       <Button variant="contained" color="primary" onClick={handleCreatePost}>
//         Создать пост
//       </Button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </Box>
//   );
// };

// export default CreatePost;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postService } from "../services/axiosApi"; // Используем свой API
import { Button, TextField } from "@mui/material";
import "./Css-styles/CreatePost.css";  // Импортируем стили

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();  // Для редиректа на страницу со всеми постами

  const handleSubmit = () => {
    if (!title || !content) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    postService
      .createPost({ title, content })
      .then(() => {
        navigate("/"); // Перенаправляем на главную страницу с постами
      })
      .catch(() => {
        setError("Не удалось создать пост. Попробуйте снова.");
      });
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

