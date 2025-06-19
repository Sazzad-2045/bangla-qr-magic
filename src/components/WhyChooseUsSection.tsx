
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Plus, Search, Image, Download, CircleArrowUp } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: QrCode,
      title: 'Bangladesh-based Secured Service',
      description: 'Local data hosting with enterprise-grade security and privacy compliance for Bangladesh businesses.'
    },
    {
      icon: Plus,
      title: 'Supports Local Payment Gateways',
      description: 'Integrated with bKash, Nagad, Rocket, and other popular Bangladeshi payment systems.'
    },
    {
      icon: Search,
      title: 'Affordable for SMEs & Institutions',
      description: 'Pricing designed specifically for small businesses, educational institutions, and startups in Bangladesh.'
    },
    {
      icon: CircleArrowUp,
      title: '24/7 Local Support',
      description: 'Bengali and English support with local business hours coverage and understanding of regional needs.'
    },
    {
      icon: Image,
      title: 'Custom Branding & API Integration',
      description: 'White-label solutions and developer-friendly APIs for seamless integration with existing systems.'
    },
    {
      icon: Download,
      title: 'Bulk Operations Support',
      description: 'Handle large-scale QR code generation for events, inventory, and mass marketing campaigns.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The trusted QR code platform for Bangladesh businesses and institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-gray-600 mb-8">
              Join hundreds of businesses and institutions already using our platform
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                  <span className="text-sm font-semibold text-gray-500">University</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                  <span className="text-sm font-semibold text-gray-500">Hospital</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                  <span className="text-sm font-semibold text-gray-500">Restaurant</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                  <span className="text-sm font-semibold text-gray-500">Retail Chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
