import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Droplets } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { blogPosts } from './blogData';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  const handleTryNowClick = () => {
    navigate('/', { state: { scrollToTool: true } });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <Link to="/" className="text-blue-700 hover:text-blue-800 font-semibold">
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://phonewatereject.com/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "PhoneWaterEject",
      "logo": {
        "@type": "ImageObject",
        "url": "https://phonewatereject.com/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>{post.title} | PhoneWaterEject Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="PhoneWaterEject" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="Phone Maintenance" />
        <meta property="article:tag" content="Speaker Care" />
        <meta property="article:tag" content="Water Damage" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <img 
            src={post.image} 
            alt={post.imageAlt}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          
          <div className="flex gap-4 text-sm text-gray-600 mb-4">
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

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.fullContent }} />

          {/* Call to Action Section */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Need to clean your device's speakers?
                </h2>
                <p className="text-gray-700 mb-6">
                  Remove water or dust from your device's speakers quickly and safely with our advanced sound wave & vibration tool.
                </p>
                <button 
                  onClick={handleTryNowClick}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors"
                >
                  <Droplets className="w-5 h-5" />
                  Try PhoneWaterEject Now
                </button>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                  <Droplets className="w-16 h-16 text-blue-700" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};