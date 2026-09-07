import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Wallet, 
  Heart, 
  Calendar 
} from 'lucide-react';
import { Destination } from '../types';

interface FeaturedPickProps {
  destination: Destination;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onOpenDetails: (destination: Destination) => void;
}

export const FeaturedPick: React.FC<FeaturedPickProps> = ({
  destination,
  isFavorite,
  onToggleFavorite,
  onOpenDetails,
}) => {
  return (
    <section 
      id="featured-pick-section"
      className="py-16 bg-stone-950 text-stone-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-[2px] bg-amber-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
            This Weekend&apos;s Curated Pick
          </span>
        </div>

        {/* Editorial Feature Banner Box */}
        <div className="relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Editor&apos;s Recommendation · Highest Reviewed</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-stone-50 uppercase">
                  {destination.name}
                </h3>

                <p className="mt-2 text-base sm:text-lg text-amber-300/90 font-serif italic">
                  &ldquo;{destination.tagline}&rdquo;
                </p>

                <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{destination.location} · {destination.distanceInfo}</span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
                  {destination.whyVisit}
                </p>

                {/* Key Highlights Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-xs sm:text-sm text-stone-200 bg-stone-950/60 border border-stone-800/80 px-3 py-2 rounded-xl"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Details & CTA Bar */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" /> Duration
                    </div>
                    <div className="text-sm font-bold text-stone-100 mt-0.5">
                      {destination.duration}
                    </div>
                  </div>

                  <div className="h-8 w-[1px] bg-stone-800" />

                  <div>
                    <div className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                      <Wallet className="w-3 h-3 text-amber-400" /> Approx Budget
                    </div>
                    <div className="text-sm font-bold text-amber-400 mt-0.5">
                      {destination.budgetText}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    id="featured-pick-fav-btn"
                    onClick={(e) => onToggleFavorite(destination.id, e)}
                    className={`p-3 rounded-2xl border transition-all ${
                      isFavorite
                        ? 'bg-rose-500 text-white border-rose-400'
                        : 'bg-stone-800 text-stone-300 hover:text-white border-stone-700'
                    }`}
                    aria-label="Favorite Pick"
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
                  </button>

                  <button
                    id="featured-pick-explore-btn"
                    onClick={() => onOpenDetails(destination)}
                    className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 hover:-translate-y-0.5"
                  >
                    <span>Explore {destination.name} Itinerary</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panoramic Image Column (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img loading="lazy" decoding="async" 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover object-center absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 right-4 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700 text-[11px] text-stone-300">
                <span>Lake Pichola Waterfront</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
