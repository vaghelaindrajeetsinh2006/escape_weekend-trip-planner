import React, { useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { DESTINATIONS, VIBE_CATEGORIES } from './data/destinations';
import type { Destination, VibeCategory, BudgetFilter, DurationFilter, SortOption } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VibeSelector } from './components/VibeSelector';
import { DestinationCard } from './components/DestinationCard';
import { FeaturedPick } from './components/FeaturedPick';
import { DestinationModal } from './components/DestinationModal';
import { CompareModal } from './components/CompareModal';
import { SavedTripsDrawer } from './components/SavedTripsDrawer';
import { WhyEscape } from './components/WhyEscape';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { WeekendMatch } from './components/WeekendMatch';
import { useTripLists } from './hooks/useTripLists';
import { filterAndSortDestinations } from './utils/filters';
import { CatalogControls } from './components/CatalogControls';
import { EmptyResults } from './components/EmptyResults';

export default function App() {
  // State variables
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<VibeCategory>('All');
  const [budgetFilter, setBudgetFilter] = useState<BudgetFilter>('all');
  const [durationFilter, setDurationFilter] = useState<DurationFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [onlySaved, setOnlySaved] = useState<boolean>(false);

  // Persistence
  const [comparedIds, setComparedIds] = useState<string[]>([]);

  // UI Modals & Drawers
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const { favorites, plannedTrips, toggleFavorite, togglePlan, removeFavorite, removePlanned } = useTripLists(showToast);

  // Toggle compare destination (max 3)
  const handleToggleCompare = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const dest = DESTINATIONS.find(d => d.id === id);
    if (!dest) return;

    if (comparedIds.includes(id)) {
      setComparedIds(prev => prev.filter(item => item !== id));
      showToast(`Removed ${dest.name} from comparison`);
    } else {
      if (comparedIds.length >= 3) {
        showToast('You can compare up to 3 destinations at a time.');
        setIsCompareOpen(true);
        return;
      }
      setComparedIds(prev => [...prev, id]);
      showToast(`Added ${dest.name} to compare (${comparedIds.length + 1} of 3)`);
    }
  };

  // Open destination details modal
  const handleOpenDetails = (destination: Destination) => {
    setActiveDestination(destination);
    setIsModalOpen(true);
  };

  // Random surprise destination picker
  const handleSurpriseMe = () => {
    const randomIdx = Math.floor(Math.random() * DESTINATIONS.length);
    const chosen = DESTINATIONS[randomIdx];
    setActiveDestination(chosen);
    setIsModalOpen(true);
    showToast(`🎲 Weekend Roulette chose: ${chosen.name}!`);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setBudgetFilter('all');
    setDurationFilter('all');
    setSortBy('recommended');
    setOnlySaved(false);
    showToast('Filters reset to default view.');
  };

  // Count destinations per category
  const destinationsCountByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    DESTINATIONS.forEach(d => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Centralized filtering and sorting keeps UI orchestration focused on rendering.
  const filteredDestinations = useMemo(() => filterAndSortDestinations(DESTINATIONS, {
    searchQuery,
    selectedCategory,
    budgetFilter,
    durationFilter,
    onlySaved,
    favorites,
    sortBy,
  }), [searchQuery, selectedCategory, budgetFilter, durationFilter, onlySaved, favorites, sortBy]);

  // Featured destination for editorial highlight
  const featuredDestination = useMemo(() => {
    return DESTINATIONS.find(d => d.id === 'udaipur') || DESTINATIONS[0];
  }, []);

  // Compared destination objects
  const comparedDestinations = useMemo(() => {
    return DESTINATIONS.filter(d => comparedIds.includes(d.id));
  }, [comparedIds]);

  // Favorite destination objects
  const favoriteDestinations = useMemo(() => {
    return DESTINATIONS.filter(d => favorites.includes(d.id));
  }, [favorites]);

  // Planned destination objects
  const plannedDestinations = useMemo(() => {
    return DESTINATIONS.filter(d => plannedTrips.includes(d.id));
  }, [plannedTrips]);

  // Scroll helpers
  const scrollToSearch = () => {
    const el = document.getElementById('destinations-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVibes = () => {
    const el = document.getElementById('vibe-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDestinations = () => {
    const el = document.getElementById('destinations-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || budgetFilter !== 'all' || durationFilter !== 'all' || onlySaved;

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. Global Navigation Bar */}
      <Navbar
        savedCount={favorites.length}
        plannedCount={plannedTrips.length}
        compareCount={comparedIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onScrollToSearch={scrollToSearch}
        onScrollToVibes={scrollToVibes}
        onScrollToDestinations={scrollToDestinations}
      />

      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectCategory={(vibe) => setSelectedCategory(vibe)}
          onSurpriseMe={handleSurpriseMe}
          onScrollToCatalog={scrollToDestinations}
        />

        {/* 3. Travel Vibe Category Section */}
        <VibeSelector
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            scrollToDestinations();
          }}
          destinationsCountByCategory={destinationsCountByCategory}
        />

        {/* 4. Preference-based Weekend Match */}
        <WeekendMatch onOpenDetails={handleOpenDetails} />

        {/* 5. Featured Destination Editorial Section */}
        <FeaturedPick
          destination={featuredDestination}
          isFavorite={favorites.includes(featuredDestination.id)}
          onToggleFavorite={toggleFavorite}
          onOpenDetails={handleOpenDetails}
        />

        {/* 6. Destination Discovery & Filtering Section */}
        <section 
          id="destinations-catalog" 
          className="py-16 bg-stone-950 text-stone-100 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-stone-800 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
                  Handpicked Weekend Escapes
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-50 mt-1">
                  Popular weekend escapes
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 mt-1.5">
                  Showing {filteredDestinations.length} vetted getaway{filteredDestinations.length === 1 ? '' : 's'} with curated micro-itineraries
                </p>
              </div>

              {/* Reset Filters action if active */}
              {hasActiveFilters && (
                <button
                  id="catalog-reset-filters-btn"
                  onClick={handleResetFilters}
                  className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            <CatalogControls
              budgetFilter={budgetFilter}
              durationFilter={durationFilter}
              sortBy={sortBy}
              onlySaved={onlySaved}
              savedCount={favorites.length}
              compareCount={comparedIds.length}
              onBudgetChange={setBudgetFilter}
              onDurationChange={setDurationFilter}
              onSortChange={setSortBy}
              onSavedToggle={() => setOnlySaved((value) => !value)}
              onOpenCompare={() => setIsCompareOpen(true)}
            />

            {/* Destination Cards Grid */}
            {filteredDestinations.length === 0 ? (
              <EmptyResults onReset={handleResetFilters} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    isFavorite={favorites.includes(destination.id)}
                    isPlanned={plannedTrips.includes(destination.id)}
                    isCompared={comparedIds.includes(destination.id)}
                    onToggleFavorite={toggleFavorite}
                    onToggleCompare={handleToggleCompare}
                    onOpenDetails={handleOpenDetails}
                    onQuickPlan={togglePlan}
                  />
                ))}
              </div>
            )}

          </div>
        </section>

        {/* 7. Why ESCAPE Section */}
        <WhyEscape />

        {/* 8. Final Call to Action */}
        <FinalCTA
          onFindEscape={scrollToDestinations}
          onSurpriseMe={handleSurpriseMe}
        />

      </main>

      {/* 9. Modern Minimal Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onScrollToSearch={scrollToSearch}
        onScrollToDestinations={scrollToDestinations}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* 10. Destination Details Modal */}
      <DestinationModal
        destination={activeDestination}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isFavorite={activeDestination ? favorites.includes(activeDestination.id) : false}
        isPlanned={activeDestination ? plannedTrips.includes(activeDestination.id) : false}
        onToggleFavorite={toggleFavorite}
        onTogglePlan={togglePlan}
        onShowToast={showToast}
      />

      {/* 11. Compare Modal */}
      <CompareModal
        destinations={comparedDestinations}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRemove={(id) => setComparedIds(prev => prev.filter(i => i !== id))}
        onClearAll={() => setComparedIds([])}
        onOpenDetails={handleOpenDetails}
      />

      {/* 12. Saved & Planned Trips Drawer */}
      <SavedTripsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        favorites={favoriteDestinations}
        planned={plannedDestinations}
        onRemoveFavorite={removeFavorite}
        onRemovePlanned={removePlanned}
        onOpenDetails={handleOpenDetails}
        onShowToast={showToast}
      />

      {/* 13. Toast Feedback Alert */}
      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />

    </div>
  );
}
