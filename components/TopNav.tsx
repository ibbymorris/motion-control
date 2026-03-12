import { Diamond, Video, ChevronDown, X } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="h-14 lg:h-16 border-b border-higgs-border flex items-center justify-between px-4 bg-[#0F1113]">
      <div className="flex items-center gap-2 lg:gap-6">
        <div className="hidden lg:flex w-8 h-8 bg-white rounded-lg items-center justify-center text-black">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
        </div>
        
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center gap-2 text-white">
          <Video size={20} />
          <span className="font-medium">Video Edit</span>
          <ChevronDown size={16} className="text-higgs-text-secondary" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-higgs-text-secondary">
          <a href="#" className="hover:text-white transition-colors">Explore</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Image <span className="text-[10px] bg-higgs-lime/10 text-higgs-lime px-1.5 py-0.5 rounded">New</span></a>
          <a href="#" className="text-white">Video</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Audio <span className="text-[10px] bg-higgs-lime/10 text-higgs-lime px-1.5 py-0.5 rounded">New</span></a>
          <a href="#" className="hover:text-white transition-colors">Edit</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Character <span className="text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded">Soul ID</span></a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Moodboard <span className="text-[10px] bg-higgs-lime/10 text-higgs-lime px-1.5 py-0.5 rounded">New</span></a>
          <a href="#" className="hover:text-white transition-colors">Contests</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Cinema Studio <span className="text-[10px] bg-higgs-lime/10 text-higgs-lime px-1.5 py-0.5 rounded">2.0</span></a>
          <a href="#" className="hover:text-white transition-colors">AI Influencer</a>
          <a href="#" className="hover:text-white transition-colors">Apps</a>
          <a href="#" className="hover:text-white transition-colors">Assist</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
        </nav>
      </div>
      
      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium">
          <Diamond size={14} />
          <span>Pricing</span>
          <span className="text-[10px] bg-[#e6483d] text-white px-1.5 py-0.5 rounded-full ml-1">25% OFF</span>
        </button>
        <button className="px-4 py-1.5 rounded-full border border-higgs-border hover:bg-white/5 transition-colors text-sm font-medium">
          Login
        </button>
        <button className="px-4 py-1.5 rounded-full bg-higgs-lime text-black hover:opacity-90 transition-opacity text-sm font-medium">
          Sign up
        </button>
      </div>

      {/* Mobile Actions */}
      <div className="flex lg:hidden items-center">
        <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-higgs-text-secondary">
          <X size={16} />
        </button>
      </div>
    </header>
  );
}
