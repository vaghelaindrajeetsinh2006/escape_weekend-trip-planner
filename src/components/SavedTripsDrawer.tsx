import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  CalendarCheck, 
  Trash2, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Wallet, 
  Sparkles, 
  Check, 
  Download, 
  Printer, 
  Wifi 
} from 'lucide-react';
import { Destination } from '../types';

interface SavedTripsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Destination[];
  planned: Destination[];
  onRemoveFavorite: (id: string) => void;
  onRemovePlanned: (id: string) => void;
  onOpenDetails: (destination: Destination) => void;
  onShowToast: (message: string) => void;
}

export const SavedTripsDrawer: React.FC<SavedTripsDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  planned,
  onRemoveFavorite,
  onRemovePlanned,
  onOpenDetails,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'planned' | 'favorites'>('planned');

  if (!isOpen) return null;

  const totalPlannedBudget = planned.reduce((acc, d) => acc + d.budgetApprox, 0);

  const handlePrint = () => {
    window.print();
    onShowToast('Printing your weekend escape summary...');
  };

  return (
    <div 
      id="saved-trips-drawer-overlay"
      className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="saved-trips-drawer-panel"
        className="fixed inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-stone-900 border-l border-stone-800 text-stone-100 flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-5 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-stone-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>My Weekend Escapes</span>
              </h2>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-0.5">
                <Wifi className="w-3 h-3" />
                <span>Stored offline on this device</span>
              </div>
            </div>

            <button
              id="drawer-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white"
              aria-label="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Tabs */}
          <div className="flex border-b border-stone-800 bg-stone-900 px-4">
            <button
              id="drawer-tab-planned"
              onClick={() => setActiveTab('planned')}
              className={`flex-1 py-3 text-xs font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'planned'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Planned Trips ({planned.length})</span>
            </button>

            <button
              id="drawer-tab-favorites"
              onClick={() => setActiveTab('favorites')}
              className={`flex-1 py-3 text-xs font-bold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'favorites'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Favorites ({favorites.length})</span>
            </button>
          </div>

          {/* Planned Trip Summary Box (if planned trips exist) */}
          {activeTab === 'planned' && planned.length > 0 && (
            <div className="bg-stone-950/80 p-4 border-b border-stone-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-stone-400 uppercase tracking-wider">Total Est. Weekend Budget</div>
                <div className="text-xl font-extrabold text-amber-400">
                  ₹{totalPlannedBudget.toLocaleString()}
                </div>
              </div>

              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center gap-1.5 border border-stone-700"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Plan</span>
              </button>
            </div>
          )}

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {activeTab === 'planned' ? (
              planned.length === 0 ? (
                <div className="text-center py-16">
                  <CalendarCheck className="w-12 h-12 text-stone-700 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-stone-300">No weekend trips planned yet</p>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Open any destination and click &ldquo;Plan This Escape&rdquo; to lock in your weekend getaway.
                  </p>
                </div>
              ) : (
                planned.map((dest) => (
                  <div 
                    key={dest.id}
                    className="bg-stone-950/80 border border-stone-800 rounded-2xl overflow-hidden p-3 flex gap-3 group relative"
                  >
                    <img loading="lazy" decoding="async" 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="text-sm font-bold text-stone-100 truncate font-serif">
                          {dest.name}
                        </h4>
                        <button
                          onClick={() => onRemovePlanned(dest.id)}
                          className="text-stone-500 hover:text-rose-400 p-1"
                          title="Remove from planned"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{dest.location}</span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-900">
                        <span className="text-xs font-bold text-amber-400">{dest.budgetText}</span>
                        <button
                          onClick={() => {
                            onOpenDetails(dest);
                            onClose();
                          }}
                          className="text-xs text-stone-300 hover:text-white flex items-center gap-1 font-medium"
                        >
                          <span>Itinerary</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )
            ) : (
              favorites.length === 0 ? (
                <div className="text-center py-16">
                  <Heart className="w-12 h-12 text-stone-700 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-stone-300">No favorite escapes saved</p>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Click the heart on any card to save your favorite weekend spots for quick reference.
                  </p>
                </div>
              ) : (
                favorites.map((dest) => (
                  <div 
                    key={dest.id}
                    className="bg-stone-950/80 border border-stone-800 rounded-2xl overflow-hidden p-3 flex gap-3 group relative"
                  >
                    <img loading="lazy" decoding="async" 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="text-sm font-bold text-stone-100 truncate font-serif">
                          {dest.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFavorite(dest.id)}
                          className="text-stone-500 hover:text-rose-400 p-1"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{dest.location}</span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-900">
                        <span className="text-xs font-bold text-amber-400">{dest.budgetText}</span>
                        <button
                          onClick={() => {
                            onOpenDetails(dest);
                            onClose();
                          }}
                          className="text-xs text-stone-300 hover:text-white flex items-center gap-1 font-medium"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 bg-stone-950 border-t border-stone-800 text-center">
            <p className="text-[11px] text-stone-400">
              ESCAPE keeps your trip state active offline so you can consult your plan on the road.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
