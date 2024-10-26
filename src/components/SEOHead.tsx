import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead: React.FC = () => {
  const title = 'PhoneWaterEject - Remove Water from Speakers Fast | Free Online Tool';
  const description = 'Quickly remove water from your phone speakers with sound waves. Free online tool to restore speaker quality instantly. Try PhoneWaterEject now!';
  const keywords = 'remove water from phone speakers, water stuck in phone speaker, fix water damaged speakers, phone speaker water removal, sound waves water removal, clean phone speakers';
  const url = 'https://phonewatereject.com';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <link rel="canonical" href={url} />
      
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
          "featureList": [
            "Water ejection from speakers",
            "Dust removal",
            "Frequency control",
            "Device vibration"
          ],
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