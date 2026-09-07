import React from 'react';
import { Sparkles, ArrowUp, Compass, Dices } from 'lucide-react';

interface FinalCTAProps {
  onFindEscape: () => void;
  onSurpriseMe: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onFindEscape, onSurpriseMe }) => {
  return (
    <section 
      id="final-cta-section"
      className="relative py-20 bg-stone-950 text-stone-100 overflow-hidden text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-white tracking-tight">
          Ready for your next escape?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-stone-300 font-serif italic">
          &ldquo;Pick a place. Pack light. Make the weekend count.&rdquo;
        </p>

        <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-md mx-auto">
          Friday evening will arrive regardless. Choose where you&apos;ll be when sunset strikes.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            id="final-cta-find-btn"
            onClick={onFindEscape}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm tracking-wide shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 stroke-[2.5]" />
            <span>Find My Escape</span>
          </button>

          <button
            id="final-cta-surprise-btn"
            onClick={onSurpriseMe}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Dices className="w-4 h-4 text-amber-400" />
            <span>Surprise My Weekend</span>
          </button>
        </div>
      </div>
    </section>
  );
};
