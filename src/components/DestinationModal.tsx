import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  MapPin, 
  Clock, 
  Wallet, 
  Calendar, 
  Sparkles, 
  Check, 
  Share2, 
  Compass, 
  CheckCircle2, 
  Sun, 
  Luggage, 
  Coins, 
  Layers, 
  Info,
  Car
} from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  isPlanned: boolean;
  onToggleFavorite: (id: string) => void;
  onTogglePlan: (destination: Destination) => void;
  onShowToast: (message: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isOpen,
  onClose,
  isFavorite,
  isPlanned,
  onToggleFavorite,
  onTogglePlan,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'overview' | 'budget' | 'packing'>('itinerary');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [packedItems, setPackedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !destination) return null;

  const togglePackItem = (item: string) => {
    setPackedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast(`Link to ${destination.name} copied to clipboard!`);
    } else {
      onShowToast(`Sharing ${destination.name}`);
    }
  };

  const allPhotos = [destination.image, ...destination.gallery];

  return (
    <div 
      id="destination-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="modal-content-panel"
        className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl text-stone-100 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Close, Share, and Favorite buttons */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            id="modal-share-btn"
            onClick={handleShare}
            className="p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 backdrop-blur-md border border-stone-700/80 transition-all hover:scale-105"
            title="Share Escape"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            id="modal-fav-btn"
            onClick={() => onToggleFavorite(destination.id)}
            className={`p-2.5 rounded-full backdrop-blur-md border transition-all hover:scale-105 ${
              isFavorite
                ? 'bg-rose-500 text-white border-rose-400'
                : 'bg-stone-900/80 hover:bg-stone-800 text-stone-200 border-stone-700/80'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            aria-label="Save to favorites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
          </button>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 backdrop-blur-md border border-stone-700/80 transition-all hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Top Hero Banner with Active Image */}
          <div className="relative h-64 sm:h-80 w-full bg-stone-950">
            <img loading="lazy" decoding="async" 
              src={allPhotos[selectedPhotoIndex] || destination.image} 
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />

            {/* Bottom Photo Title & Badges */}
            <div className="absolute bottom-4 left-4 sm:left-8 right-4">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider">
                  {destination.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-300 text-xs font-medium border border-stone-700">
                  {destination.bestSeason}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
                {destination.name}
              </h2>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{destination.location}</span>
                <span className="text-stone-500">•</span>
                <Car className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{destination.distanceInfo}</span>
              </div>
            </div>

            {/* Gallery Thumbnail Strip */}
            {allPhotos.length > 1 && (
              <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-1.5 z-10">
                {allPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedPhotoIndex === idx ? 'border-amber-400 scale-105 shadow-md' : 'border-stone-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img loading="lazy" decoding="async" src={photo} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 divide-x divide-stone-800 bg-stone-950/70 border-b border-stone-800 py-3.5 px-4 sm:px-8 text-center">
            <div>
              <div className="text-[11px] text-stone-400 uppercase tracking-wider font-medium flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> Duration
              </div>
              <div className="text-sm font-bold text-stone-100 mt-0.5">{destination.duration}</div>
            </div>

            <div>
              <div className="text-[11px] text-stone-400 uppercase tracking-wider font-medium flex items-center justify-center gap-1">
                <Wallet className="w-3.5 h-3.5 text-amber-400" /> Approx Budget
              </div>
              <div className="text-sm font-bold text-amber-400 mt-0.5">{destination.budgetText}</div>
            </div>

            <div>
              <div className="text-[11px] text-stone-400 uppercase tracking-wider font-medium flex items-center justify-center gap-1">
                <Compass className="w-3.5 h-3.5 text-amber-400" /> Best For
              </div>
              <div className="text-sm font-bold text-stone-100 mt-0.5 truncate px-2">{destination.bestFor}</div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-stone-800 px-4 sm:px-8 bg-stone-900 sticky top-0 z-10">
            <button
              id="modal-tab-itinerary"
              onClick={() => setActiveTab('itinerary')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'itinerary'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>48-Hour Itinerary</span>
            </button>

            <button
              id="modal-tab-overview"
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>Overview &amp; Tips</span>
            </button>

            <button
              id="modal-tab-budget"
              onClick={() => setActiveTab('budget')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'budget'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Coins className="w-4 h-4" />
              <span>Cost Breakdown</span>
            </button>

            <button
              id="modal-tab-packing"
              onClick={() => setActiveTab('packing')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'packing'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Luggage className="w-4 h-4" />
              <span>Packing List</span>
            </button>
          </div>

          {/* Tab 1: 48-Hour Curated Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="p-4 sm:p-8 space-y-8">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-xs text-amber-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-amber-300">Curated Weekend Micro-Itinerary</div>
                  <div>
                    Tested schedule designed to eliminate dead hours and traffic bottlenecks. Start Friday evening or Saturday early morning.
                  </div>
                </div>
              </div>

              {destination.curatedItinerary.map((day) => (
                <div key={day.dayNumber} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-black text-sm flex items-center justify-center">
                      D{day.dayNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-100 font-serif">
                      Day {day.dayNumber} — {day.title}
                    </h3>
                  </div>

                  {/* Slots timeline */}
                  <div className="space-y-3 pl-4 border-l-2 border-stone-800 ml-4">
                    {day.slots.map((slot, index) => (
                      <div key={index} className="relative pl-6 pb-2 group">
                        {/* Timeline dot */}
                        <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-stone-700 border-2 border-stone-900 group-hover:bg-amber-400 transition-colors" />
                        
                        <div className="bg-stone-950/70 border border-stone-800/80 rounded-xl p-3.5 hover:border-stone-700 transition-colors">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-bold text-amber-400 font-mono flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {slot.time}
                            </span>
                          </div>

                          <div className="text-sm font-semibold text-stone-100">
                            {slot.activity}
                          </div>

                          {slot.tip && (
                            <div className="mt-2 text-xs text-stone-400 bg-stone-900/90 rounded-lg px-2.5 py-1.5 border border-stone-800 flex items-start gap-1.5">
                              <span className="font-bold text-amber-300 shrink-0">Insider tip:</span>
                              <span>{slot.tip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Overview & Highlights */}
          {activeTab === 'overview' && (
            <div className="p-4 sm:p-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono">
                  Why Visit This Weekend
                </h3>
                <p className="mt-2 text-base text-stone-200 leading-relaxed font-normal">
                  {destination.whyVisit}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono">
                  About {destination.name}
                </h3>
                <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                  {destination.detailedDescription}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-300 font-mono mb-3">
                  Weekend Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-200 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Cost Breakdown */}
          {activeTab === 'budget' && (
            <div className="p-4 sm:p-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono">
                  Estimated 48-Hour Budget (per person)
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Based on realistic weekend rates for boutique stays, local dining, and activities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-sm text-stone-300">Boutique Stay / Haveli (1-2 Nights)</span>
                  <span className="text-sm font-bold text-stone-100">₹{destination.budgetBreakdown.stay.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-sm text-stone-300">Local Cafes &amp; Signature Dining</span>
                  <span className="text-sm font-bold text-stone-100">₹{destination.budgetBreakdown.food.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-sm text-stone-300">Local Transport / Scooter / Fuel share</span>
                  <span className="text-sm font-bold text-stone-100">₹{destination.budgetBreakdown.transport.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-sm text-stone-300">Activities, Entry Fees &amp; Boat Rides</span>
                  <span className="text-sm font-bold text-stone-100">₹{destination.budgetBreakdown.activities.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-base font-bold text-stone-100">Total Estimated Escape Cost</span>
                  <span className="text-xl font-extrabold text-amber-400">
                    ₹{destination.budgetApprox.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="text-xs text-stone-400 bg-stone-800/40 p-4 rounded-xl border border-stone-800">
                💡 <span className="font-semibold text-stone-200">Weekend Budget Tip:</span> Traveling with 2 or more people allows sharing cab and stay costs, reducing individual expense by up to 25%.
              </div>
            </div>
          )}

          {/* Tab 4: Packing List */}
          {activeTab === 'packing' && (
            <div className="p-4 sm:p-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono">
                  Essential 48-Hour Weekend Packing Checklist
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Keep it light. Everything fits in a single carry-on duffel or backpack.
                </p>
              </div>

              <div className="space-y-2.5">
                {destination.packingTips.map((tip, index) => {
                  const isChecked = !!packedItems[tip];
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => togglePackItem(tip)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                          : 'bg-stone-950/70 border-stone-800 hover:border-stone-700 text-stone-200'
                      }`}
                    >
                      <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through opacity-70' : ''}`}>
                        {tip}
                      </span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-stone-950' : 'border-stone-700 bg-stone-900'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="p-4 sm:p-6 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div>
              <div className="text-[10px] text-stone-400 uppercase tracking-wider">Estimated Total</div>
              <div className="text-lg font-extrabold text-amber-400">{destination.budgetText}</div>
            </div>
            <div className="text-xs text-stone-400 pl-3 border-l border-stone-800 hidden sm:block">
              {destination.duration}
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              id="modal-plan-escape-btn"
              onClick={() => onTogglePlan(destination)}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                isPlanned
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-stone-950 shadow-emerald-500/20'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-amber-500/20'
              }`}
            >
              {isPlanned ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Escape Planned ✓ (Click to Remove)</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Plan This Escape</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
