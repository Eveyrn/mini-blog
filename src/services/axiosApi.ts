import axios, { AxiosResponse } from 'axios';
import { IPost, IPostResponse, IComment } from '../types'; 

const API_URL = "https://mini-blog-aa31b-default-rtdb.europe-west1.firebasedatabase.app"; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  getPosts: async (): Promise<IPostResponse | null> => {
    try {
      const response: AxiosResponse<IPostResponse> = await api.get('/posts.json');
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении постов:", error);
      return null;
    }
  },

  getPostById: async (id: string): Promise<IPost | null> => {
    try {
      const response: AxiosResponse<IPost> = await api.get(`/posts/${id}.json`);
      return response.data;
    } catch (error) {
      console.error(`Ошибка при получении поста с ID: ${id}`, error);
      return null;
    }
  },

  createPost: async (post: { title: string; content: string }): Promise<void> => {
    try {
      await api.post('/posts.json', post);
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
      throw new Error('Не удалось создать пост.');
    }
  },

  updatePost: async (id: string, post: { title: string; content: string }): Promise<void> => {
    try {
      await api.put(`/posts/${id}.json`, post);
    } catch (error) {
      console.error(`Ошибка при обновлении поста с ID: ${id}`, error);
      throw new Error('Не удалось обновить пост.');
    }
  },

  deletePost: async (id: string): Promise<void> => {
    try {
      await api.delete(`/posts/${id}.json`);
    } catch (error) {
      console.error(`Ошибка при удалении поста с ID: ${id}`, error);
      throw new Error('Не удалось удалить пост.');
    }
  },

  addComment: async (postId: string, comment: IComment): Promise<void> => {
    try {
      await api.post(`/posts/${postId}/comments.json`, comment);
    } catch (error) {
      console.error(`Ошибка при добавлении комментария к посту с ID: ${postId}`, error);
      throw new Error('Не удалось добавить комментарий.');
    }
  },

  deleteComment: async (postId: string, commentId: string): Promise<void> => {
    try {
      await api.delete(`/posts/${postId}/comments/${commentId}.json`);
    } catch (error) {
      console.error(`Ошибка при удалении комментария с ID: ${commentId}`, error);
      throw new Error('Не удалось удалить комментарий.');
    }
  },

 
  incrementLikes: async (postId: string): Promise<void> => {
    try {
      const response = await api.get(`/posts/${postId}.json`);
      const post = response.data;
      const updatedLikes = (post.likes || 0) + 1;
      await api.put(`/posts/${postId}.json`, { ...post, likes: updatedLikes });
    } catch (error) {
      console.error(`Ошибка при увеличении лайков для поста с ID: ${postId}`, error);
      throw new Error('Не удалось увеличить количество лайков.');
    }
  },
};
