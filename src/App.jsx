import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function TheDiigitalsHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use process.env.PUBLIC_URL for GitHub Pages deployment
  const getImagePath = (path) => `${process.env.PUBLIC_URL}${path}`;

  const models = [
    { name: 'SHUDU', image: getImagePath('/images/models/shudu.jpeg') },
    { name: 'GALAXIA', image: getImagePath('/images/models/galaxia.jpeg') },
    { name: 'DAGNY', image: getImagePath('/images/models/dagny.jpeg') },
    { name: 'BRENN', image: getImagePath('/images/models/brenn.jpeg') },
    { name: 'KOFFI', image: getImagePath('/images/models/koffi.jpeg') }
  ];

  const newsItems = [
    { image: getImagePath('/images/news/news1.jpeg') },
    { image: getImagePath('/images/news/news2.jpeg') },
    { image: getImagePath('/images/news/news3.jpeg') }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={getImagePath('/images/logo.png')}
                alt="The Diigitals Logo" 
                className="h-12"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">MODELS</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">PORTFOLIO</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">ABOUT</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">MUSES</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">CONTACT</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900">MODELS</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900">PORTFOLIO</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900">ABOUT</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900">MUSES</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with consistent padding */}
      <main className="pt-16 px-6 lg:px-12">
        {/* Hero Section - Centered with padding */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={getImagePath('/images/hero.jpeg')}
                alt="Hero" 
                className="w-full h-[60vh] md:h-[70vh] object-cover"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg">
                  SEE MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Models Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 tracking-wider">
              <a href="#" className="hover:underline">MEET OUR MODELS</a>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {models.map((model, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-full">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center mt-3 text-sm font-medium">{model.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications & Events Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 tracking-wider">
              <a href="#" className="hover:underline">PUBLICATIONS & EVENTS</a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img 
                  src={getImagePath('/images/publications/publication1.jpg')}
                  alt="Publication"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src={getImagePath('/images/publications/vogue.jpeg')}
                  alt="Vogue"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Margot and Zhi Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8 tracking-wider">
              MARGOT AND ZHI
            </h2>
            <div className="relative">
              <img 
                src={getImagePath('/images/featured/elle.jpeg')}
                alt="Elle"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="text-center mt-6">
                <button className="px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                  SEE MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 tracking-wider">
              VIDEOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md">
                <img 
                  src={getImagePath('/images/videos/video1.jpeg')}
                  alt="Video 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md">
                <img 
                  src={getImagePath('/images/videos/video2.jpeg')}
                  alt="Video 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-light tracking-wider">
                <a href="#" className="hover:underline">NEWS</a>
              </h2>
              <a href="#" className="text-sm font-medium hover:underline">SEE ALL</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="cursor-pointer group">
                  <img 
                    src={item.image} 
                    alt={`News ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md group-hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6 lg:px-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © THE DIIGITALS LTD
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900">PRIVACY</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">CONTACT</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">INSTAGRAM</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}