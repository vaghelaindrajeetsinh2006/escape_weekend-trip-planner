import React from 'react';
import { Compass } from 'lucide-react';

interface EmptyResultsProps {
  onReset: () => void;
}

export const EmptyResults: React.FC<EmptyResultsProps> = ({ onReset }) => (
  <div id="no-results-box" className="text-center py-20 bg-stone-900/60 border border-stone-800 rounded-3xl p-8 max-w-xl mx-auto">
    <div className="w-14 h-14 rounded-2xl bg-stone-800 text-amber-400 flex items-center justify-center mx-auto mb-4">
      <Compass className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold font-serif text-stone-100">No escapes match your criteria</h3>
    <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-sm mx-auto">
      Try adjusting your search query, increasing your budget limit, or selecting “All Escapes”.
    </p>
    <button
      type="button"
      onClick={onReset}
      className="mt-6 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-lg transition-all"
    >
      View All Available Escapes
    </button>
  </div>
);
