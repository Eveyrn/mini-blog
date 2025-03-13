
import React, { useEffect, useState } from "react";
import { postService } from "../services/axiosApi"; 
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography, Box, CircularProgress, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./Css-styles/PostList.css"; 


const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    postService
      .getPosts()
      .then((response) => {
        const postsArray = Object.entries(response.data).map(([id, post]) => ({
          id,
          ...post,

          likes: post.likes || 0,

        }));
        setPosts(postsArray);
        setLoading(false);
      })
      .catch(() => {
        setError("Не удалось загрузить посты.");
        setLoading(false);
      });
  }, []);

  const handleLike = (postId: string) => {
    postService.incrementLikes(postId).then(() => {
      setPosts(
        posts.map((post) =>
          post.id === postId ? { ...post, likes: (post.likes || 0) + 1 } : post
        )
      );
    });
  };

  const handleDeletePost = (postId: string) => {
    postService.deletePost(postId).then(() => {
      setPosts(posts.filter((post) => post.id !== postId));
    }).catch(() => {
      setError("Не удалось удалить пост.");
    });
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 5 }}>
        {error}
      </Box>
    );
  }

  return (
    <div className="post-list-container">
      <h2>Все посты</h2>
      {posts.length === 0 ? (
        <div>Нет постов</div>
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="card">
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="body2">{post.content || "Нет содержимого"}</Typography>
              <div className="card-actions">
                <Link to={`/posts/${post.id}`}>
                  <Button variant="outlined" sx={{ backgroundColor: "#ff4500", color: "white" }}>
                    Перейти к посту
                  </Button>
                </Link>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeletePost(post.id)}
                  className="delete-button"
                >
                  Удалить
                </Button>

                <div className="likes">
                  <IconButton color="primary" onClick={() => handleLike(post.id)}>
                    <ThumbUpIcon />
                  </IconButton>
                  <Typography variant="body2">{post.likes}</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default PostList;

