
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UseCasesSection = () => {
  const useCases = [
    {
      title: 'Retail & Shops',
      description: 'Payment & Product QR',
      details: 'Enable quick payments and product information access for customers',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Educational Institutions', 
      description: 'Notice, Result, Payment Link',
      details: 'Share announcements, results, and collect fees seamlessly',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'eCommerce',
      description: 'Product Page QR',
      details: 'Bridge offline and online shopping with product QR codes',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Print Media',
      description: 'Brochure/Poster QR',
      details: 'Connect print materials to digital content and websites',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Event Management',
      description: 'Attendance & Check-in',
      details: 'Streamline event registration and attendance tracking',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Restaurants',
      description: 'Menu & Ordering',
      details: 'Contactless menu viewing and online ordering systems',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how different industries use QR codes to enhance their business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${useCase.color}`}>
                  <span className="text-2xl font-bold">
                    {useCase.title.charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {useCase.title}
                </CardTitle>
                <p className="text-sm font-medium text-blue-600">
                  {useCase.description}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{useCase.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
