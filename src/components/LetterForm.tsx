import React, { useState } from 'react';
import { Send, Feather, Scroll, Heart } from 'lucide-react';

interface LetterFormProps {
  onSubmit: (content: string) => void;
}

const LetterForm: React.FC<LetterFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    
    // Simulate submission delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit(content.trim());
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-2xl border-2 border-amber-200 relative overflow-hidden">
        {/* Vintage paper texture */}
        <div className='absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23d4a574" fill-opacity="0.6"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E")] pointer-events-none'></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-8 justify-center">
            <Scroll className="w-8 h-8 text-amber-700 mr-4" />
            <h2 className="text-3xl text-amber-900 font-serif font-semibold">Write Your Heart Out</h2>
            <Feather className="w-6 h-6 text-amber-600 ml-4" />
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label htmlFor="letter-content" className="block text-amber-800 mb-4 text-base font-medium">
                Your letter to Shyama Ju (Anonymous & Sacred)
              </label>
              <div className="relative">
                <textarea
                  id="letter-content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Priya Shyama Ju,&#10;&#10;Today my heart wishes to share with you..."
                  className="w-full h-72 p-6 bg-white/70 border-2 border-amber-300 rounded-2xl text-amber-900 placeholder-amber-500 resize-none focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-300 font-serif text-lg leading-relaxed shadow-inner"
                  disabled={isSubmitting}
                  required
                />
                {/* Vintage paper lines effect */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/20 to-transparent" 
                       style={{
                         backgroundImage: 'repeating-linear-gradient(transparent, transparent 28px, rgba(217, 119, 6, 0.1) 28px, rgba(217, 119, 6, 0.1) 30px)',
                       }}>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-amber-700 text-sm font-medium flex items-center">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                Your letter will be shared anonymously with love
              </p>
              <button
                type="submit"
                disabled={!content.trim() || isSubmitting}
                className={`px-10 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 flex items-center ${
                  (!content.trim() || isSubmitting)
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-2xl hover:scale-105 hover:from-amber-500 hover:via-orange-500 hover:to-red-500 transform active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Sending with Love...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Letter
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetterForm;