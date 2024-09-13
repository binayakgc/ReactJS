import axios from 'axios';
import { Post } from '../interfaces';

const API_URL = 'http://127.0.0.1:8000/api';

export const blogService = {
  getPosts: async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${API_URL}/posts`);
    return response.data;
  },

  getPost: async (id: string): Promise<Post> => {
    const response = await axios.get<Post>(`${API_URL}/posts/${id}`);
    return response.data;
  },
};