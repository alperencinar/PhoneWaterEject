import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { BlogPost } from './BlogPost';
import { blogPosts } from './blogData';

export const BlogPage: React.FC = () => {
  const canonicalUrl = 'https://phonewatereject.com/blog';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "PhoneWaterEject Blog",
    "description": "Expert articles about phone maintenance, water damage prevention, and speaker care tips.",
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "PhoneWaterEject",
      "logo": {
        "@type": "ImageObject",
        "url": "https://phonewatereject.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "url": `https://phonewatereject.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Blog - Expert Phone Maintenance Tips | PhoneWaterEject</title>
        <meta name="description" content="Read our expert articles about phone maintenance, water damage prevention, and speaker care tips. Learn how to keep your device in perfect condition." />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Phone Maintenance & Speaker Care Blog | PhoneWaterEject" />
        <meta property="og:description" content="Expert articles about phone maintenance, water damage prevention, and speaker care tips." />
        <meta property="og:image" content="https://phonewatereject.com/blog-preview.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Phone Maintenance & Speaker Care Blog | PhoneWaterEject" />
        <meta name="twitter:description" content="Expert articles about phone maintenance, water damage prevention, and speaker care tips." />
        <meta name="twitter:image" content="https://phonewatereject.com/blog-preview.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Latest Articles</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};