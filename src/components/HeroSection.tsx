
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <QrCode className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Generate <span className="text-yellow-300">QR Codes</span><br />
            In Seconds
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Create custom QR codes for your business, events, and personal use. 
            Track scans, customize designs, and boost your digital presence.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg"
          >
            Generate QR Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
          >
            See Pricing
          </Button>
        </div>

        {/* Live Preview QR Code */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
          <div className="bg-white p-4 rounded-lg">
            <div className="w-32 h-32 mx-auto bg-black" style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='qr' width='10' height='10' patternUnits='userSpaceOnUse'%3e%3crect width='5' height='5' fill='black'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23qr)'/%3e%3c/svg%3e")`,
              backgroundSize: '100% 100%'
            }}></div>
          </div>
          <p className="text-sm mt-3 text-blue-100">Sample QR Code</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
