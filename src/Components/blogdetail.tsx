import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { Post } from '../interfaces';

export const BlogDetail: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const fetchedPost = await blogService.getPost(id);
          setPost(fetchedPost);
        } catch (error) {
          console.error('Failed to fetch post:', error);
        }
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <small>Posted by: {post.user?.name} on {new Date(post.created_at).toLocaleDateString()}</small>
    </div>
  );
};