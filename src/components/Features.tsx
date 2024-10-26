import React from 'react';
import { Volume2, Droplets, Wind, Zap, Shield, Clock, Smartphone, Settings } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Volume2 className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Sound Wave Technology',
      description: 'Uses precise frequencies between 100-300 Hz to effectively dislodge water and dust particles from your device speakers.'
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: 'Water Ejection System',
      description: 'Powerful sound waves create vibrations that physically push water droplets out of speaker grills and ports.'
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-500" />,
      title: 'Dust Removal Technology',
      description: 'Specialized frequencies help break up and remove accumulated dust from speaker components.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Instant Results',
      description: 'See immediate improvement in speaker quality with our quick and effective cleaning process.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Safe for All Devices',
      description: 'Completely safe technology that works with any device featuring speakers, including phones, tablets, and smartwatches.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Quick Process',
      description: 'Complete water and dust removal in just 20-30 seconds, getting your device back to perfect condition fast.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: 'Universal Compatibility',
      description: 'Works with all smartphone brands and models, including iPhone, Samsung, Google Pixel, and more.'
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'Customizable Settings',
      description: 'Fine-tune the frequency and enable vibration for optimal results based on your specific device.'
    }
  ];

  return (
    <section id="features" className="py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Advanced Features</h2>
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Our innovative technology combines precise sound frequencies and vibration patterns to effectively remove water and dust from your device's speakers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};