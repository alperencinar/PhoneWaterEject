import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

export const BlogPost: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.image} 
          alt={post.imageAlt}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-700 transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};