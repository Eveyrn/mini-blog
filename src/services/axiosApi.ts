// import axios from "axios";

// // Используем ваш URL Firebase Realtime Database
// const API_URL = "https://mini-blog-aa31b-default-rtdb.europe-west1.firebasedatabase.app";

// // Настроим экземпляр axios для работы с Firebase
// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Сервис для работы с постами
// export const postService = {
//   createPost: (post: { title: string; content: string }) => {
//     return api.post("/posts.json", post);  // Используем .json в конце пути для работы с Firebase
//   },

//   getPosts: () => {
//     return api.get("/posts.json");  // Получаем все посты
//   },

//   getPostById: (id: string) => {
//     return api.get(`/posts/${id}.json`);  // Получаем пост по ID
//   },

//   updatePost: (id: string, post: { title: string; content: string }) => {
//     return api.put(`/posts/${id}.json`, post);  // Обновляем пост по ID
//   },

//   deletePost: (id: string) => {
//     return api.delete(`/posts/${id}.json`);  // Удаляем пост по ID
//   },

//   addComment: (postId: string, comment: { author: string; text: string }) => {
//     return api.post(`/posts/${postId}/comments.json`, comment);  // Добавляем комментарий к посту
//   },

//   deleteComment: (postId: string, commentId: string) => {
//     return api.delete(`/posts/${postId}/comments/${commentId}.json`);  // Удаляем комментарий по ID
//   },
// };


import axios from "axios";

const API_URL = "https://mini-blog-aa31b-default-rtdb.europe-west1.firebasedatabase.app";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postService = {
  createPost: (post: { title: string; content: string }) => api.post("/posts.json", post),
  getPosts: () => api.get("/posts.json"),
  getPostById: (id: string) => api.get(`/posts/${id}.json`),
  updatePost: (id: string, post: { title: string; content: string }) => api.put(`/posts/${id}.json`, post),
  deletePost: (id: string) => api.delete(`/posts/${id}.json`),
  addComment: (postId: string, comment: { author: string; text: string }) => api.post(`/posts/${postId}/comments.json`, comment),
  deleteComment: (postId: string, commentId: string) => api.delete(`/posts/${postId}/comments/${commentId}.json`),

  incrementLikes: (postId: string) => api.get(`/posts/${postId}.json`)
    .then(response => {
      const post = response.data;
      const updatedLikes = post.likes ? post.likes + 1 : 1;
      return api.put(`/posts/${postId}.json`, { ...post, likes: updatedLikes });
    }),
};

