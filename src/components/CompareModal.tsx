import React from 'react';
import { X, Check, Star, Car, Clock, Wallet, Compass, ArrowRight } from 'lucide-react';
import { Destination } from '../types';

interface CompareModalProps {
  destinations: Destination[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
  onOpenDetails: (destination: Destination) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  destinations,
  isOpen,
  onClose,
  onRemove,
  onClearAll,
  onOpenDetails,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="compare-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl text-stone-100 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-100 flex items-center gap-2">
              <span>Compare Weekend Escapes</span>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950">
                {destinations.length} Selected
              </span>
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">
              Side-by-side comparison to help you make a fast decision for this weekend.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {destinations.length > 0 && (
              <button
                id="compare-clear-all-btn"
                onClick={onClearAll}
                className="text-xs text-stone-400 hover:text-rose-400 px-3 py-1.5 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors"
              >
                Clear all
              </button>
            )}
            <button
              id="compare-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-x-auto p-4 sm:p-6 flex-1 custom-scrollbar">
          {destinations.length === 0 ? (
            <div className="text-center py-16">
              <Compass className="w-12 h-12 text-stone-600 mx-auto mb-3" />
              <p className="text-base font-medium text-stone-300">No destinations selected for comparison</p>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Click the compare icon on any destination card to add up to 3 getaways here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-w-[600px] md:min-w-0">
              {destinations.map((dest) => (
                <div 
                  key={dest.id}
                  className="bg-stone-950/80 border border-stone-800 rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Image & Remove */}
                    <div className="relative h-44 w-full">
                      <img loading="lazy" decoding="async" src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                      
                      <button
                        onClick={() => onRemove(dest.id)}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-stone-900/80 text-stone-300 hover:text-rose-400 backdrop-blur-md"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-stone-900/80 px-2 py-0.5 rounded-full">
                          {dest.category}
                        </span>
                        <h3 className="text-lg font-bold font-serif text-white mt-1">
                          {dest.name}
                        </h3>
                        <p className="text-xs text-stone-400">{dest.location}</p>
                      </div>
                    </div>

                    {/* Comparison Criteria */}
                    <div className="p-4 space-y-3.5 text-xs">
                      {/* Budget */}
                      <div className="pb-2.5 border-b border-stone-800">
                        <div className="text-[11px] text-stone-400 flex items-center gap-1 font-medium">
                          <Wallet className="w-3.5 h-3.5 text-amber-400" /> Approx Budget
                        </div>
                        <div className="text-sm font-bold text-amber-400 mt-0.5">
                          {dest.budgetText}
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="pb-2.5 border-b border-stone-800">
                        <div className="text-[11px] text-stone-400 flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-amber-400" /> Duration
                        </div>
                        <div className="text-xs font-semibold text-stone-200 mt-0.5">
                          {dest.duration}
                        </div>
                      </div>

                      {/* Distance */}
                      <div className="pb-2.5 border-b border-stone-800">
                        <div className="text-[11px] text-stone-400 flex items-center gap-1 font-medium">
                          <Car className="w-3.5 h-3.5 text-amber-400" /> Distance from Hub
                        </div>
                        <div className="text-xs text-stone-300 mt-0.5">
                          {dest.distanceInfo}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="pb-2.5 border-b border-stone-800">
                        <div className="text-[11px] text-stone-400 flex items-center gap-1 font-medium">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Rating
                        </div>
                        <div className="text-xs font-semibold text-stone-200 mt-0.5">
                          {dest.rating} / 5.0 ({dest.reviewsCount} reviews)
                        </div>
                      </div>

                      {/* Best For */}
                      <div className="pb-2.5 border-b border-stone-800">
                        <div className="text-[11px] text-stone-400 flex items-center gap-1 font-medium">
                          <Compass className="w-3.5 h-3.5 text-amber-400" /> Best For
                        </div>
                        <div className="text-xs text-stone-300 mt-0.5">
                          {dest.bestFor}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <div className="text-[11px] text-stone-400 font-medium mb-1.5">
                          Key Highlights
                        </div>
                        <ul className="space-y-1 text-[11px] text-stone-300">
                          {dest.highlights.slice(0, 3).map((h, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-amber-400 font-bold">•</span>
                              <span className="line-clamp-1">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="p-3 bg-stone-900 border-t border-stone-800">
                    <button
                      onClick={() => {
                        onOpenDetails(dest);
                        onClose();
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5"
                    >
                      <span>Explore {dest.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
