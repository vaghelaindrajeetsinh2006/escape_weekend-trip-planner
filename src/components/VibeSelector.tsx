import React from 'react';
import { 
  Compass, 
  Mountain, 
  Palmtree, 
  Trees, 
  Landmark, 
  Flame, 
  Sparkles 
} from 'lucide-react';
import { VibeCategory } from '../types';
import { VIBE_CATEGORIES } from '../data/destinations';

interface VibeSelectorProps {
  selectedCategory: VibeCategory;
  onSelectCategory: (category: VibeCategory) => void;
  destinationsCountByCategory: Record<string, number>;
}

export const VibeSelector: React.FC<VibeSelectorProps> = ({
  selectedCategory,
  onSelectCategory,
  destinationsCountByCategory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain': return <Mountain className="w-5 h-5" />;
      case 'Palmtree': return <Palmtree className="w-5 h-5" />;
      case 'Trees': return <Trees className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="vibe-section" 
      className="py-12 bg-stone-900 border-b border-stone-800 text-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Curated Atmosphere
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-100 mt-1">
              Find your weekend vibe
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 mt-2 sm:mt-0 max-w-sm">
            What does your mind need right now? Select a mood to instantly filter weekend getaways.
          </p>
        </div>

        {/* Categories Grid / Horizontal Scroll for Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-3.5">
          {VIBE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'All' 
              ? Object.values(destinationsCountByCategory).reduce((a: number, b: number) => a + b, 0)
              : (destinationsCountByCategory[cat.id] || 0);

            return (
              <button
                key={cat.id}
                id={`vibe-btn-${cat.id.toLowerCase()}`}
                onClick={() => onSelectCategory(cat.id as VibeCategory)}
                className={`relative group flex flex-col items-start p-4 rounded-2xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-lg shadow-amber-500/20 -translate-y-1'
                    : 'bg-stone-950/60 hover:bg-stone-800/80 text-stone-200 border-stone-800 hover:border-stone-700'
                }`}
              >
                {/* Icon Container */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isSelected
                    ? 'bg-stone-950 text-amber-400'
                    : 'bg-stone-800/80 text-stone-300 group-hover:text-amber-400 group-hover:bg-stone-800'
                }`}>
                  {getIcon(cat.icon)}
                </div>

                {/* Title & Count Badge */}
                <div className="w-full flex items-center justify-between">
                  <span className={`text-sm font-bold tracking-tight ${isSelected ? 'text-stone-950' : 'text-stone-100'}`}>
                    {cat.label}
                  </span>
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
                    isSelected 
                      ? 'bg-stone-950/20 text-stone-950' 
                      : 'bg-stone-800 text-stone-400'
                  }`}>
                    {count}
                  </span>
                </div>

                {/* Subtitle / Mood hint */}
                <p className={`text-[11px] mt-1.5 line-clamp-1 leading-snug ${
                  isSelected ? 'text-stone-900 font-medium' : 'text-stone-400'
                }`}>
                  {cat.description}
                </p>

                {/* Active Indicator Dot */}
                {isSelected && (
                  <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-stone-950" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
