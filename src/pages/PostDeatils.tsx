
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { postService } from "../services/axiosApi";
// import { Box, Button, Card, CardContent, Typography, IconButton } from "@mui/material";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import "./Css-styles/PostDetails.css"; 

// const PostDetails: React.FC = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState<any | null>(null);
//   const [comment, setComment] = useState({ author: "", text: "" });
//   const [comments, setComments] = useState<any[]>([]);

//   useEffect(() => {
//     if (id) {
//       postService.getPostById(id).then((response) => {
//         setPost(response.data);
//         if (Array.isArray(response.data.comments)) {
//           setComments(response.data.comments);
//         } else {
//           setComments([]);
//         }
//       });
//     }
//   }, [id]);

//   const handleCommentSubmit = () => {
//     if (id && comment.author && comment.text) {
//       postService.addComment(id, comment).then(() => {
//         setComments([...comments, comment]);
//         setComment({ author: "", text: "" });
//       });
//     }
//   };

//   const handleLike = () => {
//     if (id) {
//       postService.incrementLikes(id).then(() => {
//         setPost({ ...post, likes: post.likes + 1 });
//       });
//     }
//   };

//   if (!post) return <div>Загрузка...</div>;

//   return (
//     <div>
//       <Card sx={{ boxShadow: 3, marginBottom: 2 }}>
//         <CardContent>
//           <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//             {post.title}
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 3 }}>
//             {post.content}
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <IconButton onClick={handleLike} color="primary">
//               <ThumbUpIcon />
//             </IconButton>
//             <Typography variant="body2">{post.likes}</Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       <Box sx={{ marginTop: 3 }}>
//         <Typography variant="h5" sx={{ marginBottom: 2 }}>
//           Комментарии
//         </Typography>
//         {comments.length === 0 ? (
//           <div>Нет комментариев</div>
//         ) : (
//           comments.map((comment, index) => (
//             <Card key={index} sx={{ marginBottom: 2, boxShadow: 1 }}>
//               <CardContent>
//                 <Typography variant="h6">{comment.author}</Typography>
//                 <Typography variant="body2">{comment.text}</Typography>
//               </CardContent>
//             </Card>
//           ))
//         )}
//       </Box>

//       <Box className="form-container" sx={{ marginTop: 3 }}>
//         <input
//           type="text"
//           placeholder="Ваше имя"
//           value={comment.author}
//           onChange={(e) => setComment({ ...comment, author: e.target.value })}
//         />
//         <textarea
//           placeholder="Комментарий"
//           value={comment.text}
//           onChange={(e) => setComment({ ...comment, text: e.target.value })}
//         />
//         <button onClick={handleCommentSubmit}>Добавить комментарий</button>
//       </Box>

//       <Button variant="outlined" sx={{ marginTop: 3 }}>
//         Назад
//       </Button>
//     </div>
//   );
// };

// export default PostDetails;


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { postService } from "../services/axiosApi"; // Используем свой API
import {  Typography, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./Css-styles/PostDetails.css";

const PostDetails: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any | null>(null);
  const [comment, setComment] = useState({ author: "", text: "" });
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      postService.getPostById(id).then((response) => {
        setPost(response.data);
        if (Array.isArray(response.data.comments)) {
          setComments(response.data.comments);
        } else {
          setComments([]);
        }
      });
    }
  }, [id]);

  const handleCommentSubmit = () => {
    if (id && comment.author && comment.text) {
      postService.addComment(id, comment).then(() => {
        setComments([...comments, comment]);
        setComment({ author: "", text: "" });
      });
    }
  };

  const handleLike = () => {
    if (id) {
      postService.incrementLikes(id).then(() => {
        setPost({ ...post, likes: post.likes + 1 });
      });
    }
  };

  if (!post) return <div>Загрузка...</div>;

  return (
    <div className="post-page">
      <div className="post-header">
        <h2>{post.title}</h2>
        <div className="likes">
          <IconButton color="primary" onClick={handleLike}>
            <ThumbUpIcon />
          </IconButton>
          <span>{post.likes}</span>
        </div>
      </div>
      <div className="post-content">
        <Typography variant="body2">{post.content}</Typography>
      </div>

      <div className="comments-section">
        <h3>Комментарии</h3>
        {comments.length === 0 ? (
          <div>Нет комментариев</div>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="comment">
              <Typography variant="h6" className="author">{comment.author}</Typography>
              <Typography variant="body2" className="text">{comment.text}</Typography>
            </div>
          ))
        )}
      </div>

      <div className="comment-form">
        <input
          type="text"
          placeholder="Ваше имя"
          value={comment.author}
          onChange={(e) => setComment({ ...comment, author: e.target.value })}
        />
        <textarea
          placeholder="Комментарий"
          value={comment.text}
          onChange={(e) => setComment({ ...comment, text: e.target.value })}
        />
        <button onClick={handleCommentSubmit}>Добавить комментарий</button>
      </div>

      <Link to="/">
        <button className="back-button">Назад</button>
      </Link>
    </div>
  );
};

export default PostDetails;
