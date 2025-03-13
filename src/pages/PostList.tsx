

// import React, { useEffect, useState } from "react";
// import { postService } from "../services/axiosApi"; // Используем свой API
// import { Link } from "react-router-dom";
// import { Button, Card, CardContent, Typography, Box, CircularProgress, IconButton } from "@mui/material";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import "./Css-styles/PostList.css";  // Импортируем стили для PostList

// const PostList: React.FC = () => {
//   const [posts, setPosts] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     postService
//       .getPosts()
//       .then((response) => {
//         const postsArray = Object.entries(response.data).map(([id, post]) => ({
//           id,
//           ...post,
//         }));
//         console.log(postsArray); // Логируем все посты
//         setPosts(postsArray);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Не удалось загрузить посты.");
//         setLoading(false);
//       });
//   }, []);

//   const handleLike = (postId: string) => {
//     postService.incrementLikes(postId).then(() => {
//       setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)));
//     });
//   };

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ textAlign: "center", marginTop: 5 }}>
//         {error}
//       </Box>
//     );
//   }

//   return (
//     <div>
//       <h2>Все посты</h2>
//       {posts.length === 0 ? (
//         <div>Нет постов</div>
//       ) : (
//         posts.map((post) => {
//           console.log(post.content); // Логируем только content каждого поста
//           return (
//             <Card key={post.id} className="card">
//               <CardContent>
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   {post.title}
//                 </Typography>
//                 {/* Проверка на содержание */}
//                 <Typography variant="body2" sx={{ marginBottom: 2 }}>
//                   {post.content || "Нет содержимого"} {/* Если контент пустой, выводим "Нет содержимого" */}
//                 </Typography>
//                 <div className="card-actions">
//                   <Link to={`/posts/${post.id}`}>
//                     <Button variant="outlined" sx={{ backgroundColor: "#ff4500", color: "white" }}>
//                       Перейти к посту
//                     </Button>
//                   </Link>
//                   <div className="likes">
//                     <IconButton color="primary" onClick={() => handleLike(post.id)}>
//                       <ThumbUpIcon />
//                     </IconButton>
//                     <Typography variant="body2">{post.likes}</Typography>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default PostList;


// import React, { useEffect, useState } from "react";
// import { postService } from "../services/axiosApi"; // Используем свой API
// import { Link } from "react-router-dom";
// import { Button, Card, CardContent, Typography, Box, CircularProgress, IconButton } from "@mui/material";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import "./Css-styles/PostList.css";  // Импортируем стили для PostList

// const PostList: React.FC = () => {
//   const [posts, setPosts] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Получаем все посты при монтировании компонента
//   useEffect(() => {
//     postService
//       .getPosts()
//       .then((response) => {
//         const postsArray = Object.entries(response.data).map(([id, post]) => ({
//           id,
//           ...post,
//         }));
//         setPosts(postsArray);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Не удалось загрузить посты.");
//         setLoading(false);
//       });
//   }, []);

//   // Обработчик для увеличения лайков
//   const handleLike = (postId: string) => {
//     postService.incrementLikes(postId).then(() => {
//       setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)));
//     });
//   };

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ textAlign: "center", marginTop: 5 }}>
//         {error}
//       </Box>
//     );
//   }

//   return (
//     <div className="post-list-container">
//       <h2>Все посты</h2>
//       {posts.length === 0 ? (
//         <div>Нет постов</div>
//       ) : (
//         posts.map((post) => (
//           <Card key={post.id} className="card">
//             <CardContent>
//               <Typography variant="h5">{post.title}</Typography>
//               <Typography variant="body2">{post.content || "Нет содержимого"}</Typography>
//               <div className="card-actions">
//                 <Link to={`/posts/${post.id}`}>
//                   <Button variant="outlined" sx={{ backgroundColor: "#ff4500", color: "white" }}>
//                     Перейти к посту
//                   </Button>
//                 </Link>
//                 <div className="likes">
//                   <IconButton color="primary" onClick={() => handleLike(post.id)}>
//                     <ThumbUpIcon />
//                   </IconButton>
//                   <Typography variant="body2">{Number(post.likes) || 0}</Typography> 
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// };

// export default PostList;



import React, { useEffect, useState } from "react";
import { postService } from "../services/axiosApi"; // Используем свой API
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography, Box, CircularProgress, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./Css-styles/PostList.css";  // Импортируем стили для PostList

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Получаем все посты при монтировании компонента
  useEffect(() => {
    postService
      .getPosts()
      .then((response) => {
        const postsArray = Object.entries(response.data).map(([id, post]) => ({
          id,
          ...post,
          likes: post.likes || 0,  // Если likes нет, присваиваем 0
        }));
        setPosts(postsArray);
        setLoading(false);
      })
      .catch((error) => {
        setError("Не удалось загрузить посты.");
        setLoading(false);
      });
  }, []);

  // Обработчик для увеличения лайков
  const handleLike = (postId: string) => {
    postService.incrementLikes(postId).then(() => {
      setPosts(posts.map((post) => 
        post.id === postId ? { ...post, likes: (post.likes || 0) + 1 } : post
      ));
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
