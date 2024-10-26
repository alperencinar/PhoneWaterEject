import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Volume2, Droplets, Wind } from 'lucide-react';
import { FrequencyPlayer } from './components/FrequencyPlayer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { SEOHead } from './components/SEOHead';
import { Blog } from './components/Blog';
import { BlogPage } from './components/BlogPage';
import { BlogPostDetail } from './components/BlogPostDetail';
import { VibrationControl } from './components/VibrationControl';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostDetail />} />
    </Routes>
  );
}

export default App;