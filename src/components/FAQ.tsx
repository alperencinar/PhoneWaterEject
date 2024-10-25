import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How does PhoneWaterEject remove water from speakers?',
      answer: 'PhoneWaterEject uses specific sound frequencies (100-300 Hz) to create vibrations that help eject water from your device\'s speakers and ports. These frequencies generate sound waves that physically push water droplets out.'
    },
    {
      question: 'Is it safe to use PhoneWaterEject on my device?',
      answer: 'Yes, PhoneWaterEject is completely safe for your device. It uses the same principle as the water ejection feature found in many modern smartphones and smartwatches, utilizing safe sound frequencies that won\'t damage your speakers.'
    },
    {
      question: 'How long should I use PhoneWaterEject?',
      answer: 'For best results, run PhoneWaterEject for 20-30 seconds. If water remains, you can repeat the process. The exact time needed may vary depending on how much water is trapped in your device.'
    },
    {
      question: 'Which devices work with PhoneWaterEject?',
      answer: 'PhoneWaterEject works with any device that has speakers, including iPhones, Android phones, tablets, and smartwatches. It\'s particularly effective on water-resistant devices but can help with any water-exposed speaker.'
    },
    {
      question: 'What frequency works best for water removal?',
      answer: 'The most effective frequency typically ranges between 160-200 Hz, but you can adjust between 100-300 Hz to find what works best for your device. Different speaker sizes may respond better to different frequencies.'
    },
    {
      question: 'Can PhoneWaterEject fix water-damaged speakers?',
      answer: 'PhoneWaterEject can help remove water from speakers before damage occurs. For best results, use it as soon as possible after water exposure. However, if your speaker is already damaged, you may need professional repair.'
    }
  ];

  return (
    <section id="faq" className="py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};