import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { apiService } from "../services/axiosApi"; 
import { IPost, IComment } from "../types";
import { Typography, IconButton, Box, CircularProgress, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete"; 
import "./Css-styles/PostDetails.css";

const PostDetails: React.FC = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState<IPost | null>(null);  
  const [comments, setComments] = useState<IComment[]>([]);  
  const [comment, setComment] = useState<IComment>({ id: "", author: "", text: "" });  
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    if (id) {
      apiService.getPostById(id).then((response) => {
        if (response) {
          setPost(response);
          setComments(Array.isArray(response.comments) ? response.comments : []);
        }
      }).catch((err) => {
        setError("Ошибка при загрузке поста.");
        console.error(err);
      });
    }
  }, [id]);

  const handleCommentSubmit = () => {
    if (id && comment.author && comment.text) {
      apiService.addComment(id, comment).then(() => {
        setComments([...comments, comment]);  
        setComment({ id: "", author: "", text: "" }); 
      }).catch(() => {
        setError("Не удалось добавить комментарий.");
      });
    }
  };

  const handleDeleteComment = (commentId: string) => {
    if (id) {
      apiService.deleteComment(id, commentId).then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId)); 
      }).catch(() => {
        setError("Не удалось удалить комментарий.");
      });
    }
  };

  const handleLike = () => {
    if (id && post) {
      apiService.incrementLikes(id).then(() => {
        setPost({ ...post, likes: (post.likes || 0) + 1 });
      }).catch(() => {
        setError("Не удалось увеличить количество лайков.");
      });
    }
  };

  if (!post) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

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
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <Typography variant="h6" className="author">{comment.author}</Typography>
              <Typography variant="body2" className="text">{comment.text}</Typography>
              <div className="comment-footer">
                <IconButton
                  className="delete-btn"
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
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
        <Button variant="outlined" sx={{ marginTop: 2 }}>
          Назад
        </Button>
      </Link>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default PostDetails;
