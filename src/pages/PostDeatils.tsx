
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { postService } from "../services/axiosApi"; 
import { Typography, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete"; 
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

  const handleDeleteComment = (commentId: string) => {
    if (id) {
      postService.deleteComment(id, commentId).then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId));
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
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <Typography variant="h6" className="author">{comment.author}</Typography>
              <Typography variant="body2" className="text">{comment.text}</Typography>
         
              <IconButton
                color="error"
                onClick={() => handleDeleteComment(comment.id)}
                sx={{ marginLeft: "10px" }}
              >
                <DeleteIcon />
              </IconButton>
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
