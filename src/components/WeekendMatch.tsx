import React, { useMemo, useState } from 'react';
import { Sparkles, ArrowRight, Check, SlidersHorizontal } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { DurationFilter, VibeCategory } from '../types';
import { calculateWeekendMatch } from '../utils/filters';

interface WeekendMatchProps {
  onOpenDetails: (destination: (typeof DESTINATIONS)[number]) => void;
}

const BUDGET_OPTIONS = [5000, 8000, 12000] as const;
const VIBES: VibeCategory[] = ['All', 'Mountains', 'Beach', 'Nature', 'Culture', 'Adventure', 'Relax'];

export const WeekendMatch: React.FC<WeekendMatchProps> = ({ onOpenDetails }) => {
  const [vibe, setVibe] = useState<VibeCategory>('All');
  const [budget, setBudget] = useState<number>(8000);
  const [duration, setDuration] = useState<DurationFilter>(2);
  const [isOpen, setIsOpen] = useState(false);

  const bestMatch = useMemo(() => {
    return DESTINATIONS
      .map((destination) => ({
        destination,
        score: calculateWeekendMatch(destination, vibe, budget, duration),
      }))
      .sort((a, b) => b.score - a.score || b.destination.rating - a.destination.rating)[0];
  }, [vibe, budget, duration]);

  return (
    <section id="weekend-match" className="py-12 bg-stone-950 border-y border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-800 bg-stone-900/70 p-5 sm:p-7 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300">
                <Sparkles className="w-3.5 h-3.5" /> Weekend Match
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold font-serif text-stone-50">Find the escape that fits your weekend.</h2>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">Pick a vibe, budget and duration. ESCAPE ranks the closest match from the curated destinations.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="weekend-match-controls"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-100 border border-stone-700 hover:border-amber-500/40 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              {isOpen ? 'Hide preferences' : 'Match my weekend'}
            </button>
          </div>

          {isOpen && (
            <div id="weekend-match-controls" className="mt-7 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
              <label className="block">
                <span className="block text-xs font-semibold text-stone-300 mb-2">My vibe</span>
                <select value={vibe} onChange={(e) => setVibe(e.target.value as VibeCategory)} className="w-full rounded-xl bg-stone-950 border border-stone-700 px-3 py-2.5 text-sm text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50">
                  {VIBES.map((option) => <option key={option} value={option}>{option === 'All' ? 'Open to anything' : option}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-xs font-semibold text-stone-300 mb-2">Budget ceiling</span>
                <select value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full rounded-xl bg-stone-950 border border-stone-700 px-3 py-2.5 text-sm text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50">
                  {BUDGET_OPTIONS.map((option) => <option key={option} value={option}>Up to ₹{option.toLocaleString('en-IN')}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-xs font-semibold text-stone-300 mb-2">Trip length</span>
                <select value={duration} onChange={(e) => setDuration(e.target.value === 'all' ? 'all' : Number(e.target.value) as DurationFilter)} className="w-full rounded-xl bg-stone-950 border border-stone-700 px-3 py-2.5 text-sm text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50">
                  <option value="all">Any length</option>
                  <option value={1}>1 day</option>
                  <option value={2}>2 days</option>
                  <option value={3}>3 days</option>
                </select>
              </label>
              <div className="rounded-2xl bg-stone-950 border border-stone-800 px-4 py-3 min-w-56">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Best match</p>
                    <p className="mt-1 text-base font-bold text-stone-100">{bestMatch.destination.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold text-amber-400">{bestMatch.score}%</p>
                    <p className="text-[10px] text-stone-500">match</p>
                  </div>
                </div>
                <button type="button" onClick={() => onOpenDetails(bestMatch.destination)} className="mt-3 w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-stone-950 hover:bg-amber-400 transition-colors">
                  Explore {bestMatch.destination.name} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {!isOpen && (
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500">
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Preference-based ranking</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> No account required</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> 100% frontend</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
