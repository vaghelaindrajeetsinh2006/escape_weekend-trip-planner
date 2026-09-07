import React, { useEffect } from 'react';
import { Sparkles, CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onDismiss }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [message, onDismiss]);

  if (!message) return null;

  return (
    <div 
      id="app-toast-alert"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-900/95 border border-amber-500/40 text-stone-100 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300 max-w-sm"
    >
      <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
        <Sparkles className="w-4 h-4" />
      </div>
      <p className="text-xs font-semibold text-stone-100 leading-snug flex-1">
        {message}
      </p>
      <button
        onClick={onDismiss}
        className="text-stone-400 hover:text-white p-1"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
