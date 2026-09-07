import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Heart, 
  Layers, 
  Menu, 
  X, 
  MapPin, 
  Sparkles, 
  CalendarCheck, 
  Wifi, 
  WifiOff 
} from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  plannedCount: number;
  compareCount: number;
  onOpenSaved: () => void;
  onOpenCompare: () => void;
  onScrollToSearch: () => void;
  onScrollToVibes: () => void;
  onScrollToDestinations: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  plannedCount,
  compareCount,
  onOpenSaved,
  onOpenCompare,
  onScrollToSearch,
  onScrollToVibes,
  onScrollToDestinations,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-900/90 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-lg shadow-black/10 py-3' 
          : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            id="nav-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-black tracking-tighter shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-widest uppercase font-serif text-white flex items-center gap-1.5">
                ESCAPE
              </span>
              <span className="block text-[10px] tracking-wider uppercase text-stone-400 font-medium">
                Weekend Planner
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button 
              id="nav-link-explore"
              onClick={onScrollToSearch}
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 py-1"
            >
              Explore
            </button>
            <button 
              id="nav-link-vibes"
              onClick={onScrollToVibes}
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 py-1"
            >
              Weekend Vibes
            </button>
            <button 
              id="nav-link-destinations"
              onClick={onScrollToDestinations}
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 py-1"
            >
              Destinations
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Compare Button */}
            {compareCount > 0 && (
              <button
                id="nav-compare-btn"
                onClick={onOpenCompare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-800/90 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-all hover:scale-105"
                title="Compare destinations"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Compare</span>
                <span className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 font-bold text-[10px] flex items-center justify-center">
                  {compareCount}
                </span>
              </button>
            )}

            {/* Saved & Planned Escapes Drawer Trigger */}
            <button
              id="nav-saved-btn"
              onClick={onOpenSaved}
              className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700/80 transition-all hover:border-stone-500"
            >
              <Heart className={`w-3.5 h-3.5 ${savedCount > 0 ? 'text-rose-400 fill-rose-400' : 'text-stone-400'}`} />
              <span>Saved Trips</span>
              {(savedCount > 0 || plannedCount > 0) && (
                <span className="px-1.5 py-0.2 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              id="nav-cta-find-escape"
              onClick={onScrollToSearch}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-500/25 transition-all hover:shadow-lg hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Find My Escape</span>
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="nav-mobile-saved-trigger"
              onClick={onOpenSaved}
              className="p-2 rounded-lg bg-stone-800/80 text-stone-200 relative"
              aria-label="View Saved Trips"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? 'text-rose-400 fill-rose-400' : 'text-stone-300'}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800/80 text-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="md:hidden bg-stone-900 border-b border-stone-800 px-5 pt-3 pb-6 text-stone-200 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-3.5 pt-2">
            <button
              id="mobile-link-explore"
              onClick={() => {
                onScrollToSearch();
                setMobileMenuOpen(false);
              }}
              className="text-left font-medium text-stone-200 hover:text-amber-400 py-2 border-b border-stone-800 flex items-center justify-between"
            >
              <span>Explore Weekend Escapes</span>
              <Compass className="w-4 h-4 text-stone-500" />
            </button>

            <button
              id="mobile-link-vibes"
              onClick={() => {
                onScrollToVibes();
                setMobileMenuOpen(false);
              }}
              className="text-left font-medium text-stone-200 hover:text-amber-400 py-2 border-b border-stone-800 flex items-center justify-between"
            >
              <span>Weekend Vibes</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </button>

            <button
              id="mobile-link-destinations"
              onClick={() => {
                onScrollToDestinations();
                setMobileMenuOpen(false);
              }}
              className="text-left font-medium text-stone-200 hover:text-amber-400 py-2 border-b border-stone-800 flex items-center justify-between"
            >
              <span>All Destinations</span>
              <MapPin className="w-4 h-4 text-stone-500" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                id="mobile-link-saved"
                onClick={() => {
                  onOpenSaved();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-800 text-xs font-semibold text-stone-200"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Saved ({savedCount})</span>
              </button>

              <button
                id="mobile-link-compare"
                onClick={() => {
                  onOpenCompare();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-800 text-xs font-semibold text-stone-200"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Compare ({compareCount})</span>
              </button>
            </div>

            <button
              id="mobile-cta-btn"
              onClick={() => {
                onScrollToSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm text-center shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Find My Escape</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-2">
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  <span>Online · Offline caching active</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-400" />
                  <span>Offline Mode · Cached trips available</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
