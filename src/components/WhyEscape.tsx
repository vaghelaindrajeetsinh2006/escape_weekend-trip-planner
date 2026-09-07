import React from 'react';
import { Clock, Zap, CheckCircle2, Sparkles, Compass } from 'lucide-react';

export const WhyEscape: React.FC = () => {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: 'Curated for 48 Hours',
      description: 'Zero generic 10-day packages. Every route, stay, and stop is calibrated strictly for Friday 5 PM departure to Sunday 9 PM return.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: 'Quick, Confident Decisions',
      description: 'Eliminate 15 open tabs and WhatsApp debate paralysis. Browse by vibe, budget, and driving distance to lock in your trip in under 3 minutes.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-amber-400" />,
      title: 'Tested Micro-Itineraries',
      description: 'Realistic hour-by-hour schedules that avoid peak highway jams and highlight authentic hidden eateries rather than tourist traps.',
    },
  ];

  return (
    <section 
      id="why-escape-section"
      className="py-16 bg-stone-900 border-t border-b border-stone-800 text-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
            Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-100 mt-1">
            Why ESCAPE?
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            The modern work week is demanding. Your weekend trip planning shouldn&apos;t be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-stone-950/60 border border-stone-800/90 rounded-2xl p-6 sm:p-8 hover:border-stone-700 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold font-serif text-stone-100">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
