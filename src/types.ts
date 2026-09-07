export type VibeCategory = 
  | 'All'
  | 'Mountains'
  | 'Beach'
  | 'Nature'
  | 'Culture'
  | 'Adventure'
  | 'Relax';

export interface ItinerarySlot {
  time: string;
  activity: string;
  location?: string;
  tip?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  slots: ItinerarySlot[];
}

export interface BudgetBreakdown {
  stay: number;
  food: number;
  transport: number;
  activities: number;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  location: string;
  state: string;
  category: VibeCategory;
  image: string;
  gallery: string[];
  duration: string;
  durationDays: number;
  budgetApprox: number;
  budgetText: string;
  budgetBreakdown: BudgetBreakdown;
  shortDescription: string;
  detailedDescription: string;
  whyVisit: string;
  rating: number;
  reviewsCount: number;
  distanceInfo: string;
  bestSeason: string;
  highlights: string[];
  bestFor: string;
  isFeatured?: boolean;
  curatedItinerary: ItineraryDay[];
  packingTips: string[];
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: VibeCategory;
  budgetRange: 'all' | 'under-5k' | '5k-10k' | 'above-10k';
  durationFilter: 'all' | 1 | 2 | 3;
  sortBy: 'recommended' | 'budget-asc' | 'budget-desc' | 'rating';
  onlySaved: boolean;
}

export interface PlannedTrip {
  destinationId: string;
  plannedDate?: string;
  notes?: string;
  savedAt: string;
}


export type BudgetFilter = 'all' | 'under-5k' | '5k-10k' | 'above-10k';
export type DurationFilter = 'all' | 1 | 2 | 3;
export type SortOption = 'recommended' | 'budget-asc' | 'budget-desc' | 'rating';
