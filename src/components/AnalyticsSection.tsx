
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AnalyticsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Detailed Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your QR code performance with comprehensive analytics and insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600">24,567</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Total Scans</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-600">156</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Active QR Codes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-600">89%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Mobile Scans</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-orange-600">45</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Countries</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              What You'll Track:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700"><strong>QR Scan Count:</strong> Total and unique scans per QR code</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700"><strong>Location Data:</strong> Country, city, and region insights</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700"><strong>Device Info:</strong> Mobile vs desktop usage patterns</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700"><strong>Time Analysis:</strong> Peak scanning hours and days</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700"><strong>Performance Metrics:</strong> Conversion rates and engagement</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h4 className="font-semibold text-gray-800 mb-3">Sample Dashboard View</h4>
              <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Interactive Charts & Graphs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
