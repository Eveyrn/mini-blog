import axios from "axios";

const API_URL = "https://mini-blog-aa31b-default-rtdb.europe-west1.firebasedatabase.app";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postService = {
  createPost: (post: { title: string; content: string }) => {
    return api.post("/posts.json", post);
  },

  getPosts: () => {
    return api.get("/posts.json");
  },

  getPostById: (id: string) => {
    return api.get(`/posts/${id}.json`);
  },

  updatePost: (id: string, post: { title: string; content: string }) => {
    return api.put(`/posts/${id}.json`, post);
  },

  deletePost: (id: string) => {
    return api.delete(`/posts/${id}.json`);
  },

  addComment: (postId: string, comment: { author: string; text: string }) => {
    return api.post(`/posts/${postId}/comments.json`, comment);
  },

  deleteComment: (postId: string, commentId: string) => {
    return api.delete(`/posts/${postId}/comments/${commentId}.json`);
  },

  incrementLikes: (postId: string) => {
    return api.get(`/posts/${postId}.json`)
      .then((response) => {
        const post = response.data;
        const updatedLikes = post.likes ? post.likes + 1 : 1;
        return api.put(`/posts/${postId}.json`, { ...post, likes: updatedLikes });
      });
  },
};

