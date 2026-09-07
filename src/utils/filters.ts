import type { Destination, VibeCategory, BudgetFilter, DurationFilter, SortOption } from '../types';

export interface DestinationFilterOptions {
  searchQuery: string;
  selectedCategory: VibeCategory;
  budgetFilter: BudgetFilter;
  durationFilter: DurationFilter;
  onlySaved: boolean;
  favorites: string[];
  sortBy: SortOption;
}

export function filterAndSortDestinations(
  destinations: Destination[],
  options: DestinationFilterOptions,
): Destination[] {
  const query = options.searchQuery.trim().toLowerCase();
  const filtered = destinations.filter((destination) => {
    if (query) {
      const isBudgetShortcut = query.includes('under 5k') || query.includes('5000');
      if (isBudgetShortcut) {
        if (destination.budgetApprox > 5000) return false;
      } else {
        const searchable = [
          destination.name,
          destination.location,
          destination.state,
          destination.category,
          destination.shortDescription,
          ...destination.highlights,
        ].join(' ').toLowerCase();
        if (!searchable.includes(query)) return false;
      }
    }

    if (options.selectedCategory !== 'All' && destination.category !== options.selectedCategory) return false;

    if (options.budgetFilter === 'under-5k' && destination.budgetApprox > 5000) return false;
    if (options.budgetFilter === '5k-10k' && (destination.budgetApprox <= 5000 || destination.budgetApprox > 10000)) return false;
    if (options.budgetFilter === 'above-10k' && destination.budgetApprox <= 10000) return false;

    if (options.durationFilter !== 'all' && destination.durationDays !== options.durationFilter) return false;
    if (options.onlySaved && !options.favorites.includes(destination.id)) return false;

    return true;
  });

  return [...filtered].sort((a, b) => {
    switch (options.sortBy) {
      case 'budget-asc': return a.budgetApprox - b.budgetApprox;
      case 'budget-desc': return b.budgetApprox - a.budgetApprox;
      case 'rating': return b.rating - a.rating;
      default:
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return b.rating - a.rating;
    }
  });
}

export function calculateWeekendMatch(
  destination: Destination,
  category: VibeCategory,
  maxBudget: number,
  duration: DurationFilter,
): number {
  let score = 0;
  score += category === 'All' || destination.category === category ? 50 : 0;
  score += destination.budgetApprox <= maxBudget ? 30 : Math.max(0, 30 - Math.round(((destination.budgetApprox - maxBudget) / maxBudget) * 30));
  score += duration === 'all' || destination.durationDays === duration ? 20 : 0;
  return Math.min(100, Math.max(0, score));
}
