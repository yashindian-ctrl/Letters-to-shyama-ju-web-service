import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LetterForm from './components/LetterForm';
import LetterGallery from './components/LetterGallery';
import OfferingAnimation from './components/OfferingAnimation';
import { Letter } from './types/Letter';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

function App() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  const [offeringLetter, setOfferingLetter] = useState<Letter | null>(null);

  // Load letters from API on mount
  useEffect(() => {
    fetch(`${API_URL}/letters`)
      .then(res => res.json())
      .then(data => setLetters(data))
      .catch(err => console.error("Failed to fetch letters", err));
  }, []);

  const handleSubmitLetter = async (content: string) => {
    try {
      const res = await fetch(`${API_URL}/letters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });
      if (res.ok) {
        const newLetter = await res.json();
        setLetters(prev => [newLetter, ...prev]);
      }
    } catch (err) {
      console.error("Failed to submit letter", err);
    }
  };

  const handleOfferLetter = (letter: Letter) => {
    setOfferingLetter(letter);
    // Mark letter as offered after animation
    setTimeout(async () => {
      try {
        const res = await fetch(`${API_URL}/letters/${letter.id}/offer`, {
          method: 'PATCH'
        });
        if (res.ok) {
          setLetters(prev =>
            prev.map(l => l.id === letter.id ? { ...l, offered: true } : l)
          );
        }
      } catch (err) {
        console.error("Failed to offer letter", err);
      }
      setOfferingLetter(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Vintage paper texture overlay */}
      <div className='absolute inset-0 opacity-20 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4a574" fill-opacity="0.4"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="53" cy="53" r="1"/%3E%3Ccircle cx="23" cy="43" r="1"/%3E%3Ccircle cx="37" cy="17" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] pointer-events-none'></div>

      {/* Decorative border elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-amber-600 opacity-30"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-amber-600 opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-amber-600 opacity-30"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-amber-600 opacity-30"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-40 shadow-lg"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-50 shadow-md"></div>
        <div className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse opacity-30 shadow-lg"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-amber-500 rounded-full animate-pulse opacity-40 shadow-md"></div>
        <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-50 shadow-lg"></div>
      </div>

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-amber-100/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-amber-200">
              <button
                onClick={() => setShowGallery(false)}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${!showGallery
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105'
                  : 'text-amber-800 hover:text-amber-600 hover:bg-amber-50'
                  }`}
              >
                Write Letter
              </button>
              <button
                onClick={() => setShowGallery(true)}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${showGallery
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105'
                  : 'text-amber-800 hover:text-amber-600 hover:bg-amber-50'
                  }`}
              >
                Read Letters ({letters.length})
              </button>
            </div>
          </div>

          {/* Main content */}
          {!showGallery ? (
            <LetterForm onSubmit={handleSubmitLetter} />
          ) : (
            <LetterGallery
              letters={letters.filter(letter => !letter.offered)}
              onOffer={handleOfferLetter}
            />
          )}
        </main>
      </div>

      {/* Offering Animation */}
      {offeringLetter && (
        <OfferingAnimation letter={offeringLetter} />
      )}
    </div>
  );
}

export default App;