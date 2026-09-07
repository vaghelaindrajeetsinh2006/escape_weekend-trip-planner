import React from 'react';
import { 
  Heart, 
  Clock, 
  MapPin, 
  Star, 
  ArrowRight, 
  Car, 
  Layers, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  isFavorite: boolean;
  isPlanned: boolean;
  isCompared: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onToggleCompare: (id: string, e: React.MouseEvent) => void;
  onOpenDetails: (destination: Destination) => void;
  onQuickPlan: (destination: Destination, e: React.MouseEvent) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  isFavorite,
  isPlanned,
  isCompared,
  onToggleFavorite,
  onToggleCompare,
  onOpenDetails,
  onQuickPlan,
}) => {
  return (
    <article 
      id={`dest-card-${destination.id}`}
      onClick={() => onOpenDetails(destination)}
      onKeyDown={(event) => { if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); onOpenDetails(destination); } }}
      tabIndex={0}
      role="button"
      aria-label={`Explore ${destination.name} details`}
      className="group relative flex flex-col bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 hover:border-stone-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image Area */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-stone-950">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {/* Category Pill */}
          <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-[11px] font-bold text-amber-300 uppercase tracking-wider shadow-sm">
            {destination.category}
          </span>

          {/* Top Actions: Compare & Favorite (needs pointer-events-auto) */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* Compare Toggle Button */}
            <button
              id={`card-compare-btn-${destination.id}`}
              type="button"
              onClick={(e) => onToggleCompare(destination.id, e)}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isCompared
                  ? 'bg-amber-500 text-stone-950 shadow-md scale-105'
                  : 'bg-stone-900/70 hover:bg-stone-900 text-stone-300 hover:text-white border border-stone-700/60'
              }`}
              title={isCompared ? 'Remove from compare' : 'Compare destination'}
              aria-label={isCompared ? `Remove ${destination.name} from comparison` : `Compare ${destination.name}`}
              aria-pressed={isCompared}
            >
              <Layers className="w-4 h-4" />
            </button>

            {/* Favorite Button */}
            <button
              id={`card-fav-btn-${destination.id}`}
              type="button"
              onClick={(e) => onToggleFavorite(destination.id, e)}
              className={`p-2 rounded-full backdrop-blur-md transition-all active:scale-90 ${
                isFavorite
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105'
                  : 'bg-stone-900/70 hover:bg-stone-900 text-stone-300 hover:text-rose-400 border border-stone-700/60'
              }`}
              title={isFavorite ? 'Saved to favorites' : 'Save to favorites'}
              aria-label={isFavorite ? `Remove ${destination.name} from favorites` : `Save ${destination.name} to favorites`}
              aria-pressed={isFavorite}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom In-Image Info: Rating & Duration */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700/80 font-semibold">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{destination.rating}</span>
            <span className="text-stone-400 text-[10px]">({destination.reviewsCount})</span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700/80 text-[11px] font-medium text-stone-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{destination.duration}</span>
          </div>
        </div>

        {/* Planned Badge if already in weekend plan */}
        {isPlanned && (
          <div className="absolute top-12 left-3.5 bg-emerald-500/90 text-stone-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>In Weekend Plan</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 text-stone-200 justify-between">
        <div>
          {/* Destination Name & Location */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold font-serif text-stone-50 group-hover:text-amber-400 transition-colors">
                {destination.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-stone-400 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">{destination.location}</span>
              </div>
            </div>

            {/* Approximate Budget Pill */}
            <div className="text-right shrink-0">
              <div className="text-base font-extrabold text-amber-400">
                {destination.budgetText}
              </div>
              <div className="text-[10px] text-stone-400">approx / person</div>
            </div>
          </div>

          {/* Distance Info */}
          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-stone-400">
            <Car className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="truncate">{destination.distanceInfo}</span>
          </div>

          {/* Short Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed font-normal">
            {destination.shortDescription}
          </p>

          {/* Highlights Preview Chips */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {destination.highlights.slice(0, 2).map((highlight, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-md bg-stone-800 text-[11px] text-stone-300 font-medium"
              >
                • {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-5 pt-3.5 border-t border-stone-800 flex items-center justify-between gap-2">
          {/* Quick Plan Button */}
          <button
            id={`card-quick-plan-${destination.id}`}
            type="button"
            onClick={(e) => onQuickPlan(destination, e)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isPlanned
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
            }`}
          >
            {isPlanned ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Planned</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Plan Escape</span>
              </>
            )}
          </button>

          {/* Explore Details CTA */}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
            <span>Explore Details</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};
