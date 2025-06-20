
import React from 'react';

const HowItWorks = () => {
  const steps = [
    { icon: '✍️', title: 'Submit your idea', step: '01' },
    { icon: '📞', title: 'We diagnose your need', step: '02' },
    { icon: '🧠', title: 'You receive a plan', step: '03' },
    { icon: '💻', title: 'We build it', step: '04' },
    { icon: '🚀', title: 'You launch + optimize', step: '05' }
  ];

  return (
    <section className="py-16 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-sm text-blue-400 font-mono mb-2">{item.step}</div>
              <p className="text-gray-300">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
