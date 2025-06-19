
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Image, Search, Plus, CircleArrowUp, Download } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Custom QR Code with Branding',
      description: 'Add your logo, customize colors, and create branded QR codes that match your business identity.'
    },
    {
      icon: CircleArrowUp,
      title: 'Dynamic QR with Real-time Edit',
      description: 'Update QR code content anytime without reprinting. Perfect for changing promotions and links.'
    },
    {
      icon: Search,
      title: 'Analytics & Scan History',
      description: 'Track when, where, and how many times your QR codes are scanned with detailed analytics.'
    },
    {
      icon: Plus,
      title: 'Payment Integration Supported',
      description: 'Generate payment QR codes compatible with local and international payment gateways.'
    },
    {
      icon: Image,
      title: 'API Integration for Developers',
      description: 'Integrate QR generation into your applications with our comprehensive REST API.'
    },
    {
      icon: Download,
      title: 'Bulk QR Generation',
      description: 'Generate hundreds of QR codes at once with CSV upload and bulk download features.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and track QR codes for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
