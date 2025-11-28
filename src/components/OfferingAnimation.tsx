import React, { useState, useEffect } from 'react';
import { Mail, Sparkles, Flower, Heart } from 'lucide-react';
import { Letter } from '../types/Letter';

interface OfferingAnimationProps {
  letter: Letter;
}

const OfferingAnimation: React.FC<OfferingAnimationProps> = ({ letter }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {/* Backdrop with vintage feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-red-900/20 animate-fadeIn" />
      
      {/* Animated letter */}
      <div className="relative">
        {/* Letter envelope with vintage styling */}
        <div className="animate-floatUp">
          <div className="bg-gradient-to-br from-amber-200 via-orange-200 to-red-200 p-8 rounded-2xl shadow-2xl transform rotate-12 animate-wiggle border-2 border-amber-400">
            <Mail className="w-16 h-16 text-amber-800" />
            {/* Wax seal effect */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        
        {/* Floating flowers and sparkles */}
        <div className="absolute inset-0 animate-sparkle">
          <Flower className="absolute -top-6 -left-6 w-8 h-8 text-amber-500 animate-spin" />
          <Sparkles className="absolute -top-4 -right-8 w-6 h-6 text-orange-400 animate-pulse" />
          <Flower className="absolute -bottom-6 -left-4 w-7 h-7 text-red-500 animate-bounce" />
          <Sparkles className="absolute -bottom-4 -right-6 w-5 h-5 text-amber-400 animate-pulse" />
          <Flower className="absolute top-2 -left-8 w-5 h-5 text-orange-500 animate-spin" />
          <Sparkles className="absolute bottom-2 -right-8 w-4 h-4 text-red-400 animate-bounce" />
        </div>
      </div>
      
      {/* Message with vintage styling */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-fadeInUp">
        <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-amber-300 shadow-xl">
          <p className="text-amber-900 text-xl font-serif font-semibold">
            Your letter is being offered to the divine with sacred blessings...
          </p>
        </div>
      </div>
      
      {/* Floating petals */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-floatUp opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-floatUp opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-amber-400 rounded-full animate-floatUp opacity-70" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default OfferingAnimation;