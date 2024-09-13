import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { Post } from '../interfaces';

export const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await blogService.getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="blog-post-preview">
          <h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2>
          <p>{post.content.substring(0, 100)}...</p>
          <small>Posted on: {new Date(post.created_at).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
};