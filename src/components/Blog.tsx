import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './BlogPost';
import { blogPosts } from './blogData';

export const Blog: React.FC = () => {
  // Get the first article (How to Use PhoneWaterEject.com...)
  const mainArticle = blogPosts[0];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="block mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-900 hover:text-blue-700 transition-colors">
            Latest Article
          </h2>
        </Link>
        <div className="max-w-2xl mx-auto">
          <BlogPost post={mainArticle} />
        </div>
      </div>
    </section>
  );
};