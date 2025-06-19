
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '1',
      title: 'Choose Type of QR Code',
      description: 'Select from URL, text, email, Wi-Fi, payment, or other QR code types based on your needs.',
      color: 'bg-blue-500'
    },
    {
      step: '2', 
      title: 'Customize and Generate',
      description: 'Enter your content, customize colors and design, add your logo, and generate your QR code instantly.',
      color: 'bg-green-500'
    },
    {
      step: '3',
      title: 'Download and Print/Use',
      description: 'Download in multiple formats (PNG, SVG, PDF) and use in your marketing materials, products, or websites.',
      color: 'bg-purple-500'
    },
    {
      step: '4',
      title: 'Track & Manage',
      description: 'Monitor scan analytics, update dynamic QR content, and manage all your QR codes from one dashboard.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with QR codes in just 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rotate-45 translate-x-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
