import React from 'react';
import { BlogPost } from './BlogPost';
import { blogPosts } from './blogData';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};