import React from 'react';
import { CheckCircle2, AlertCircle, Sparkles, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => {
        let icon = <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />;
        let borderClass = 'border-emerald-200 bg-white';

        if (toast.type === 'amber') {
          icon = <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />;
          borderClass = 'border-amber-200 bg-amber-50/95';
        } else if (toast.type === 'info') {
          icon = <AlertCircle className="w-4 h-4 text-indigo-600 shrink-0" />;
          borderClass = 'border-indigo-200 bg-white';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-xl shadow-lg border ${borderClass} text-slate-800 text-xs font-medium animate-slide-up transition-all`}
          >
            <div className="flex items-center gap-2.5">
              {icon}
              <span className="leading-tight">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
