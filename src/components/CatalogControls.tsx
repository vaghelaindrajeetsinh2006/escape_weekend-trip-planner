import React from 'react';
import { ArrowUpDown, Heart, Layers } from 'lucide-react';
import type { BudgetFilter, DurationFilter, SortOption } from '../types';

interface CatalogControlsProps {
  budgetFilter: BudgetFilter;
  durationFilter: DurationFilter;
  sortBy: SortOption;
  onlySaved: boolean;
  savedCount: number;
  compareCount: number;
  onBudgetChange: (value: BudgetFilter) => void;
  onDurationChange: (value: DurationFilter) => void;
  onSortChange: (value: SortOption) => void;
  onSavedToggle: () => void;
  onOpenCompare: () => void;
}

export const CatalogControls: React.FC<CatalogControlsProps> = ({
  budgetFilter,
  durationFilter,
  sortBy,
  onlySaved,
  savedCount,
  compareCount,
  onBudgetChange,
  onDurationChange,
  onSortChange,
  onSavedToggle,
  onOpenCompare,
}) => (
  <div className="mb-8 p-4 rounded-2xl bg-stone-900 border border-stone-800 shadow-md flex flex-wrap items-center justify-between gap-4">
    <div className="flex flex-wrap items-center gap-3">
      <label className="flex items-center gap-1.5">
        <span className="text-xs text-stone-400 font-medium">Budget:</span>
        <select
          value={budgetFilter}
          onChange={(event) => onBudgetChange(event.target.value as BudgetFilter)}
          aria-label="Filter by Budget"
          className="bg-stone-950 border border-stone-700 text-stone-200 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
        >
          <option value="all">All Budgets</option>
          <option value="under-5k">Under ₹5,000</option>
          <option value="5k-10k">₹5,000 – ₹10,000</option>
          <option value="above-10k">₹10,000+</option>
        </select>
      </label>

      <label className="flex items-center gap-1.5">
        <span className="text-xs text-stone-400 font-medium">Duration:</span>
        <select
          value={durationFilter}
          onChange={(event) => onDurationChange(event.target.value === 'all' ? 'all' : Number(event.target.value) as DurationFilter)}
          aria-label="Filter by Duration"
          className="bg-stone-950 border border-stone-700 text-stone-200 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
        >
          <option value="all">Any Duration</option>
          <option value={1}>1 Day Excursion</option>
          <option value={2}>2 Days (Weekend)</option>
          <option value={3}>3 Days (Long Weekend)</option>
        </select>
      </label>

      <button
        type="button"
        id="filter-only-saved-btn"
        aria-pressed={onlySaved}
        onClick={onSavedToggle}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${onlySaved ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' : 'bg-stone-950 border-stone-700 text-stone-300 hover:text-white'}`}
      >
        <Heart className={`w-3.5 h-3.5 ${onlySaved ? 'fill-rose-400 text-rose-400' : ''}`} />
        <span>Saved only ({savedCount})</span>
      </button>
    </div>

    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
      {compareCount > 0 && (
        <button
          type="button"
          id="catalog-compare-drawer-btn"
          onClick={onOpenCompare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold shadow-md shadow-amber-500/20"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Compare ({compareCount})</span>
        </button>
      )}

      <label className="flex items-center gap-1.5">
        <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
        <span className="text-xs text-stone-400 font-medium">Sort:</span>
        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          aria-label="Sort destinations"
          className="bg-stone-950 border border-stone-700 text-stone-200 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
        >
          <option value="recommended">Recommended</option>
          <option value="budget-asc">Budget: Low to High</option>
          <option value="budget-desc">Budget: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </label>
    </div>
  </div>
);
