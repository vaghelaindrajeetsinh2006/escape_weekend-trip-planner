import React from 'react';
import { Compass, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onScrollToSearch: () => void;
  onScrollToDestinations: () => void;
  onOpenSaved: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
  onScrollToSearch,
  onScrollToDestinations,
  onOpenSaved,
}) => {
  return (
    <footer 
      id="main-footer"
      className="bg-stone-950 border-t border-stone-800 text-stone-400 py-12 text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-black">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-lg font-extrabold tracking-widest uppercase font-serif text-stone-100">
                ESCAPE
              </span>
            </div>
            <p className="text-stone-400 mt-1 font-medium">
              Weekend trips, made simpler.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-stone-300 font-medium">
            <button 
              onClick={onScrollToSearch} 
              className="hover:text-amber-400 transition-colors"
            >
              Explore
            </button>
            <button 
              onClick={onScrollToDestinations} 
              className="hover:text-amber-400 transition-colors"
            >
              Destinations
            </button>
            <button 
              onClick={onOpenSaved} 
              className="hover:text-amber-400 transition-colors"
            >
              Saved Trips
            </button>
            <button 
              onClick={onScrollToTop} 
              className="hover:text-amber-400 transition-colors"
            >
              Back to Top
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} ESCAPE. Track 1 — Weekend Trip Planner Hackathon Edition.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted for swift 48-hour escapes with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
