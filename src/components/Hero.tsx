import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  MapPin, 
  Clock, 
  Compass, 
  Dices, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { VibeCategory } from '../types';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (vibe: VibeCategory) => void;
  onSurpriseMe: () => void;
  onScrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCategory,
  onSurpriseMe,
  onScrollToCatalog,
}) => {
  const [localInput, setLocalInput] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localInput);
    onScrollToCatalog();
  };

  const quickPills = [
    { label: 'Under ₹5,000', action: () => { onSearchChange('under 5k'); onScrollToCatalog(); } },
    { label: 'Mountains', action: () => { onSelectCategory('Mountains'); onScrollToCatalog(); } },
    { label: 'Quiet Beaches', action: () => { onSelectCategory('Beach'); onScrollToCatalog(); } },
    { label: 'Mount Abu', action: () => { onSearchChange('Mount Abu'); onScrollToCatalog(); } },
    { label: 'Udaipur', action: () => { onSearchChange('Udaipur'); onScrollToCatalog(); } },
  ];

  return (
    <section 
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-stone-950 text-stone-100"
    >
      {/* Editorial Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="images/mount-abu.webp" 
          alt="Scenic mountain landscape" 
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform duration-1000 ease-out" loading="eager" fetchPriority="high" decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Mini Pill */}
        <div className="flex items-center justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800/90 border border-stone-700/80 text-stone-300 text-xs font-medium tracking-wide shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Curated Weekend Trips · Friday 5 PM → Sunday 9 PM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Content Area (Left 7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-serif text-stone-50 leading-[1.12]">
              Your next escape is <br className="hidden sm:inline" />
              <span className="italic font-normal text-amber-300">closer</span> than you think.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Skip endless tabs and planning fatigue. Discover vetted 48-hour destinations within driving distance, transparent budgets, and tested micro-itineraries.
            </p>

            {/* Interactive Search Box */}
            <div className="mt-8 max-w-xl mx-auto lg:mx-0">
              <form 
                id="hero-search-form"
                onSubmit={handleSearchSubmit}
                className="relative flex flex-col sm:flex-row items-stretch gap-2 p-2 rounded-2xl bg-stone-900/95 border border-stone-700 shadow-2xl backdrop-blur-md"
              >
                <div className="relative flex-1 flex items-center pl-3">
                  <Search className="w-5 h-5 text-amber-400 shrink-0 mr-2.5" />
                  <input
                    id="hero-search-input"
                    type="text"
                    value={localInput}
                    onChange={(e) => {
                      setLocalInput(e.target.value);
                      onSearchChange(e.target.value);
                    }}
                    placeholder="Where do you want to escape? (e.g. Mount Abu, Beach...)"
                    className="w-full bg-transparent text-sm sm:text-base text-stone-100 placeholder-stone-400 focus:outline-none py-2"
                  />
                  {localInput && (
                    <button
                      type="button"
                      onClick={() => {
                        setLocalInput('');
                        onSearchChange('');
                      }}
                      className="text-stone-400 hover:text-stone-200 text-xs px-2 py-1"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <button
                  id="hero-search-submit-btn"
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Explore Escapes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Search Chips */}
              <div className="mt-3 flex flex-wrap items-center gap-2 justify-center lg:justify-start text-xs text-stone-400">
                <span className="flex items-center gap-1 font-medium text-stone-500">
                  <TrendingUp className="w-3 h-3 text-amber-400" /> Popular:
                </span>
                {quickPills.map((pill) => (
                  <button
                    key={pill.label}
                    onClick={pill.action}
                    className="px-2.5 py-1 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-amber-300 border border-stone-700/60 transition-colors text-[11px]"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action: Surprise Generator Button */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-surprise-btn"
                onClick={onSurpriseMe}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 text-xs font-semibold border border-stone-700 hover:border-amber-500/50 transition-all group"
              >
                <Dices className="w-4 h-4 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                <span>Can&apos;t decide? Spin a Random Weekend Escape</span>
              </button>
            </div>
          </div>

          {/* Right Visual Highlight Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-700/80 shadow-2xl bg-stone-900 group">
                <img 
                  src="images/udaipur.webp" 
                  alt="Udaipur Lake Pichola Sunset" 
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" fetchPriority="high" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                
                {/* Floating Badge on Visual Card */}
                <div className="absolute top-4 right-4 bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/80 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  <span>Editor&apos;s Pick This Weekend</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-1">
                    Heritage & Lakes · 48 Hours
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    Udaipur, Rajasthan
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    Lakeside Havelis, quiet morning chai at Ambrai Ghat, and sunset boat reflections.
                  </p>
                  
                  <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
                    <span className="font-semibold text-amber-300">₹6,500 approx / person</span>
                    <button 
                      onClick={() => {
                        onSearchChange('Udaipur');
                        onScrollToCatalog();
                      }}
                      className="text-stone-200 hover:text-white font-medium flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Stat Widget */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-stone-900/95 backdrop-blur-md border border-stone-700 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-100">48-Hr Micro Itineraries</div>
                  <div className="text-[11px] text-stone-400">Tested hour-by-hour schedules</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
