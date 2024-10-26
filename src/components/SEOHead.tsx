import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead: React.FC = () => {
  const title = 'PhoneWaterEject - Remove Water from Speakers Fast | Free Online Tool';
  const description = 'Free online tool to remove water and dust from phone speakers using sound waves. Our advanced technology helps restore speaker quality instantly with proven sound frequency techniques. Try PhoneWaterEject now - the safest way to fix water-damaged speakers!';
  const keywords = 'remove water from phone speakers, water stuck in phone speaker, fix water damaged speakers, phone speaker water removal, sound waves water removal, clean phone speakers, phone maintenance, speaker repair';
  const url = 'https://phonewatereject.com';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <link rel="canonical" href={url} />
      
      {/* Force HTTPS */}
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="PhoneWaterEject" />
      <meta property="og:image" content={`${url}/social-preview.jpg`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/social-preview.jpg`} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="application-name" content="PhoneWaterEject" />
      <meta name="apple-mobile-web-app-title" content="PhoneWaterEject" />
      
      {/* Structured Data */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "PhoneWaterEject",
          "url": "${url}",
          "description": "${description}",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
          },
          "featureList": [
            "Water ejection from speakers",
            "Dust removal",
            "Frequency control",
            "Device vibration"
          ],
          "about": {
            "@type": "Thing",
            "description": "PhoneWaterEject is a free online tool that uses specific sound frequencies to remove water and dust from phone speakers. It works by generating sound waves that create vibrations to physically push water droplets and dust particles out of your device's speaker grills."
          },
          "howTo": {
            "@type": "HowTo",
            "name": "How to Remove Water from Phone Speakers",
            "description": "Step-by-step guide to remove water from your phone speakers using sound waves",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Set Frequency",
                "text": "Adjust the frequency slider between 100-300 Hz"
              },
              {
                "@type": "HowToStep",
                "name": "Enable Vibration",
                "text": "Toggle vibration for enhanced water removal (optional)"
              },
              {
                "@type": "HowToStep",
                "name": "Start Ejection",
                "text": "Click Start Ejection and wait for 20-30 seconds"
              }
            ]
          }
        }
      `}</script>
    </Helmet>
  );
};