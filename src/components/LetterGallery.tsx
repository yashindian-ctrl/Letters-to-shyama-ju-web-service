import React from 'react';
import { ArrowUp, Clock, Mail, Flower2 } from 'lucide-react';
import { Letter } from '../types/Letter';

interface LetterGalleryProps {
  letters: Letter[];
  onOffer: (letter: Letter) => void;
}

const LetterGallery: React.FC<LetterGalleryProps> = ({ letters, onOffer }) => {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (letters.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-16 shadow-2xl border-2 border-amber-200 relative overflow-hidden">
          {/* Vintage texture */}
          <div className='absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23d4a574" fill-opacity="0.6"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E")] pointer-events-none'></div>
          
          <div className="relative z-10">
            <Mail className="w-20 h-20 text-amber-600 mx-auto mb-6 opacity-70" />
            <h3 className="text-3xl text-amber-900 font-serif font-semibold mb-6">No Letters Yet</h3>
            <p className="text-amber-800 text-lg leading-relaxed">
              Be the first to write a heartfelt letter to Shyama Ju in this sacred space. 
              Your words of devotion will inspire fellow devotees on their spiritual journey.
            </p>
            <div className="flex justify-center mt-6">
              <Flower2 className="w-6 h-6 text-amber-600 mx-2 opacity-60" />
              <Flower2 className="w-6 h-6 text-orange-600 mx-2 opacity-60" />
              <Flower2 className="w-6 h-6 text-red-600 mx-2 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-amber-900 font-serif font-bold mb-4">Letters of Devotion</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-4"></div>
        <p className="text-amber-800 text-lg max-w-2xl mx-auto leading-relaxed">
          Heartfelt words from fellow devotees, written in the timeless tradition of Vrindavan. 
          Click "Offer to Divine" to send a letter heavenward with sacred blessings.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {letters.map((letter, index) => (
          <div
            key={letter.id}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl border-2 border-amber-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative overflow-hidden"
          >
            {/* Vintage paper texture */}
            <div className='absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23d4a574" fill-opacity="0.4"%3E%3Ccircle cx="5" cy="5" r="1"/%3E%3Ccircle cx="25" cy="25" r="1"/%3E%3Ccircle cx="15" cy="20" r="1"/%3E%3C/g%3E%3C/svg%3E")] pointer-events-none'></div>
            
            {/* Letter number decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold opacity-60">
              {index + 1}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-amber-700 text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  {formatDate(letter.timestamp)}
                </div>
                <button
                  onClick={() => onOffer(letter)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white text-sm font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center transform active:scale-95"
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Offer to Divine
                </button>
              </div>
              
              <div className="text-amber-900 leading-relaxed font-serif">
                <p className="whitespace-pre-wrap break-words text-lg">
                  {letter.content}
                </p>
              </div>
              
              {/* Decorative bottom border */}
              <div className="mt-6 pt-4 border-t border-amber-300/50 flex justify-center">
                <Flower2 className="w-5 h-5 text-amber-600 opacity-50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterGallery;