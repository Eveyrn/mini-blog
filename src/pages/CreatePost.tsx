import React, { useState } from "react";
import { postService } from "../services/axiosApi";
import { useNavigate } from "react-router-dom";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    postService.createPost({ title, content }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="form-container">
      <h2>Создать новый пост</h2>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Контент"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Создать пост</button>
    </div>
  );
};

export default CreatePost;
