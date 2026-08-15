import React from 'react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

/** Panel lateral — consolida el patrón ya usado en BuyersModule. */
export default function Drawer({ open, onClose, children, maxWidth = 'max-w-lg' }: DrawerProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-end z-50" onClick={onClose}>
      <div
        className={`w-full ${maxWidth} h-full bg-white dark:bg-slate-950 overflow-y-auto p-6 space-y-4 shadow-2xl`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
