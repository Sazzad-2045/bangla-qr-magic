
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, QrCode } from 'lucide-react';

const QRGeneratorSection = () => {
  const [qrType, setQrType] = useState('url');
  const [inputValue, setInputValue] = useState('');
  const [generatedQR, setGeneratedQR] = useState(false);

  const handleGenerate = () => {
    if (inputValue.trim()) {
      setGeneratedQR(true);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Create Your QR Code
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate QR codes for URLs, text, Wi-Fi, payments, and more. 
            Customize and download instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Generator Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="w-5 h-5" />
                QR Code Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="qr-type">QR Code Type</Label>
                <Select value={qrType} onValueChange={setQrType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select QR type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="url">Website URL</SelectItem>
                    <SelectItem value="text">Plain Text</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone Number</SelectItem>
                    <SelectItem value="wifi">Wi-Fi</SelectItem>
                    <SelectItem value="payment">Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="qr-input">
                  {qrType === 'url' && 'Enter URL'}
                  {qrType === 'text' && 'Enter Text'}
                  {qrType === 'email' && 'Enter Email'}
                  {qrType === 'phone' && 'Enter Phone Number'}
                  {qrType === 'wifi' && 'Enter Wi-Fi Name'}
                  {qrType === 'payment' && 'Enter Payment Details'}
                </Label>
                <Input
                  id="qr-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    qrType === 'url' ? 'https://example.com' :
                    qrType === 'text' ? 'Your text here' :
                    qrType === 'email' ? 'email@example.com' :
                    qrType === 'phone' ? '+1234567890' :
                    qrType === 'wifi' ? 'Network Name' :
                    'Payment amount or details'
                  }
                />
              </div>

              {qrType === 'payment' && (
                <div>
                  <Label htmlFor="amount">Amount (Optional)</Label>
                  <Input id="amount" placeholder="Enter amount" />
                </div>
              )}

              <div>
                <Label htmlFor="title">Title/Note (Optional)</Label>
                <Input id="title" placeholder="Add a title or note" />
              </div>

              <Button onClick={handleGenerate} className="w-full bg-blue-600 hover:bg-blue-700">
                Generate QR Code
              </Button>
            </CardContent>
          </Card>

          {/* QR Preview */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>QR Code Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {generatedQR ? (
                <div className="text-center space-y-6">
                  <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 mx-auto w-fit">
                    <div className="w-48 h-48 mx-auto bg-black rounded-lg" style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='qr-pattern' width='8' height='8' patternUnits='userSpaceOnUse'%3e%3crect width='4' height='4' fill='black'/%3e%3crect x='4' y='4' width='4' height='4' fill='black'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23qr-pattern)'/%3e%3c/svg%3e")`,
                      backgroundSize: '100% 100%'
                    }}></div>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <Button className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download PNG
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download SVG
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <QrCode className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Enter your content and click "Generate QR Code" to see the preview</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QRGeneratorSection;
