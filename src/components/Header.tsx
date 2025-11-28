import React from 'react';
import { Heart, Flower } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-16 relative">
      {/* Decorative border */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-60"></div>
      
      <div className="flex items-center justify-center mb-6">
        <Flower className="w-8 h-8 text-amber-600 mr-4 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-serif text-amber-900 font-bold tracking-wide drop-shadow-sm">
          Letters to Shyama Ju
        </h1>
        <Flower className="w-8 h-8 text-amber-600 ml-4 animate-pulse" />
      </div>
      
      {/* Sanskrit-inspired decorative text */}
      <div className="text-amber-700 text-lg mb-4 font-serif italic">
        श्यामा जू के नाम पत्र
      </div>
      
      <p className="text-amber-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-light">
        A sacred space reminiscent of ancient Vrindavan, where devotees have poured their hearts 
        out in letters of love for centuries. Share your thoughts, prayers, and devotion 
        anonymously in this timeless tradition.
      </p>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-60"></div>
      
      {/* Small decorative elements */}
      <div className="absolute top-12 left-1/4 w-2 h-2 bg-amber-500 rounded-full opacity-40"></div>
      <div className="absolute top-12 right-1/4 w-2 h-2 bg-orange-500 rounded-full opacity-40"></div>
    </header>
  );
};

export default Header;