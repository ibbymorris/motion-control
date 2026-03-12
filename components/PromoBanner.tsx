import { X } from 'lucide-react';

export default function PromoBanner() {
  return (
    <div className="bg-higgs-lime text-black px-4 py-2 flex items-center justify-center relative text-sm font-medium">
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span><strong>Nano Banana 2 UNLIMITED on Creator.</strong> Soul 2.0 & Kling 3.0 Free generations. <strong>Special 25% OFF</strong></span>
      </div>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70">
        <X size={16} />
      </button>
    </div>
  );
}
