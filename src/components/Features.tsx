import React from 'react';
import { Volume2, Droplets, Wind, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Volume2 className="w-8 h-8 text-blue-500" />,
      title: 'Sound Wave Technology',
      description: 'Uses precise frequencies to dislodge water and dust particles'
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: 'Water Ejection',
      description: 'Effectively removes water from speakers and ports'
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-500" />,
      title: 'Dust Removal',
      description: 'Cleans accumulated dust from device components'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Instant Results',
      description: 'Quick and effective cleaning process'
    }
  ];

  return (
    <section id="features" className="py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Features</h2>
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