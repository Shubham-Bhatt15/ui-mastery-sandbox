import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  // Close modal on pressing the 'Escape' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay with blur */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="py-4">
          {children}
        </div>

        {/* Footer / Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all active:scale-95"
          >
            Confirm Action
          </button>
        </div>

      </div>
    </div>
  );
}