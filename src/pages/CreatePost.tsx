// import React, { useState } from "react";
// import { postService } from "../services/axiosApi";
// import { TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const CreatePost: React.FC = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     postService.createPost({ title, content }).then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <div>
//       <h2>Создать новый пост</h2>
//       <TextField
//         label="Заголовок"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         fullWidth
//       />
//       <TextField
//         label="Контент"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         fullWidth
//         multiline
//         rows={4}
//       />
//       <Button onClick={handleSubmit} variant="outlined">Создать пост</Button>
//     </div>
//   );
// };

// export default CreatePost;


// import React, { useState } from "react";
// import { postService } from "../services/axiosApi";
// import { TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const CreatePost: React.FC = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     postService.createPost({ title, content }).then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <div>
//       <h2>Создать новый пост</h2>
//       <Box sx={{ marginBottom: 3 }}>
//         <TextField
//           label="Заголовок"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           fullWidth
//         />
//       </Box>
//       <Box sx={{ marginBottom: 3 }}>
//         <TextField
//           label="Контент"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           fullWidth
//           multiline
//           rows={4}
//         />
//       </Box>
//       <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: '#1976d2' }}>
//         Создать пост
//       </Button>
//     </div>
//   );
// };

// export default CreatePost;


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
