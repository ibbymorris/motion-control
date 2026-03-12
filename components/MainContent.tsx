'use client';

import { useState } from 'react';
import { History, Library, Play } from 'lucide-react';

const PRESET_VIDEOS = [
  "https://cdn.higgsfield.ai/kling_motion_control_preset/7c764ec1-9343-48dd-a300-8fb7b2be09a5.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/55f89edc-767d-49ca-aad3-6ce882b6ee72.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/c6295691-22c7-47ae-9a52-0922358ca984.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/e05ab9a7-bd13-4098-9768-100d89dc53ce.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/45722083-63ea-41fb-9c41-956abf7a5f9d.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/f3f1068f-60f7-49d9-8256-4ed09c4d20a6.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/38a58318-780d-41c8-98e8-190106e54eb0.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/b7d972dc-fa4b-4024-8158-e3ad85bfb5df.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/d9d7ea02-fdcc-475a-a53e-d3353a8b866e.mp4",
  "https://cdn.higgsfield.ai/kling_motion_control_preset/c1571011-b5f8-4cd0-98d1-149be80bd21a.mp4"
];

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<'history' | 'library'>('library');

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0F1113] relative">
      {/* Tab Toggle */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-higgs-surface border border-higgs-border rounded-xl p-1 flex gap-1">
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'history' ? 'bg-higgs-button-secondary text-white' : 'text-higgs-text-secondary hover:text-white'}`}
          >
            <History size={16} /> History
          </button>
          <button 
            onClick={() => setActiveTab('library')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'library' ? 'bg-higgs-button-secondary text-white' : 'text-higgs-text-secondary hover:text-white'}`}
          >
            <Library size={16} /> Motion library
          </button>
        </div>
      </div>

      {activeTab === 'history' ? (
        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center pt-24">
           {/* History Empty State / Content */}
           <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="w-20 h-20 bg-higgs-surface border border-higgs-border rounded-full flex items-center justify-center mb-6 shadow-lg">
                <History className="w-8 h-8 text-higgs-text-secondary" />
              </div>
              <h1 className="text-3xl font-bold text-center uppercase tracking-tight mb-4 font-space-grotesk">
                Your History is Empty
              </h1>
              <p className="text-higgs-text-secondary text-center max-w-md mb-12 text-sm">
                You haven&apos;t generated any videos yet. Start by uploading a character and a motion video, or explore our motion library for inspiration.
              </p>
              
              <div className="grid grid-cols-3 gap-8 w-full">
                <div className="flex flex-col items-center text-center bg-higgs-surface border border-higgs-border rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl hover:border-white/10 duration-300">
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                    <img src="https://higgsfield.ai/cdn-cgi/image/fit=scale-down,format=webp,onerror=redirect,width=1920,quality=85/asset/empty/video-edit/step-1.webp" alt="Step 1" className="w-full h-full object-cover" />
                  </div>
                  <span className="bg-white/5 text-white text-xs px-3 py-1 rounded-md mb-4">Step 1</span>
                  <h3 className="text-lg font-bold uppercase mb-2 font-space-grotesk">Input Anything</h3>
                  <p className="text-sm text-higgs-text-secondary">Upload reference images, a video clip, or start with a text idea.</p>
                </div>
                
                <div className="flex flex-col items-center text-center bg-higgs-surface border border-higgs-border rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl hover:border-white/10 duration-300">
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                    <img src="https://higgsfield.ai/cdn-cgi/image/fit=scale-down,format=webp,onerror=redirect,width=1920,quality=85/asset/empty/video-edit/step-2.webp" alt="Step 2" className="w-full h-full object-cover" />
                  </div>
                  <span className="bg-white/5 text-white text-xs px-3 py-1 rounded-md mb-4">Step 2</span>
                  <h3 className="text-lg font-bold uppercase mb-2 font-space-grotesk">Write the Prompt</h3>
                  <p className="text-sm text-higgs-text-secondary">Use natural language to direct the scene and describe desired scenario.</p>
                </div>
                
                <div className="flex flex-col items-center text-center bg-higgs-surface border border-higgs-border rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl hover:border-white/10 duration-300">
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                    <img src="https://higgsfield.ai/cdn-cgi/image/fit=scale-down,format=webp,onerror=redirect,width=1920,quality=85/asset/empty/video-edit/step-3.webp" alt="Step 3" className="w-full h-full object-cover" />
                  </div>
                  <span className="bg-white/5 text-white text-xs px-3 py-1 rounded-md mb-4">Step 3</span>
                  <h3 className="text-lg font-bold uppercase mb-2 font-space-grotesk">Generate</h3>
                  <p className="text-sm text-higgs-text-secondary">Receive high-fidelity video in seconds. Iterate and edit seamlessly.</p>
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('library')}
                className="mt-12 bg-higgs-lime text-black font-semibold px-8 py-3 rounded-xl hover:bg-[#d4ff33] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
              >
                <Library size={18} />
                Browse Motion Library
              </button>
           </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-8 pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Hero Banner for Library */}
            <div className="bg-higgs-surface border border-higgs-border rounded-2xl p-8 mb-8 relative overflow-hidden flex items-center justify-between">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-8 -top-24 w-[400px] h-[400px] rounded-full bg-higgs-lime/5 blur-3xl" />
              </div>
              <div className="relative z-10 max-w-md">
                <h2 className="text-3xl font-bold uppercase font-space-grotesk mb-4 leading-tight">
                  Recreate any <span className="text-higgs-lime">Motion</span><br/>with Your Image
                </h2>
                <p className="text-white/80">Copy motion from any video and place your character into the same movement</p>
              </div>
              <div className="relative z-10 w-[400px] aspect-video rounded-xl overflow-hidden border border-white/10">
                <img src="https://higgsfield.ai/cdn-cgi/image/fit=scale-down,format=webp,onerror=redirect,width=1920,quality=85/https://static.higgsfield.ai/v3-kmc-how-it-works-hero-section.webp" alt="Demo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Video Grid */}
            <div className="bg-higgs-surface border border-higgs-border rounded-2xl p-6">
              <p className="text-white font-medium mb-6">Start by copying motion from library</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {PRESET_VIDEOS.map((src, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden aspect-[9/16] group cursor-pointer border border-transparent hover:border-higgs-lime/50 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all duration-300">
                    <video 
                      src={src} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      autoPlay loop muted playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-higgs-lime text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <Play size={14} fill="currentColor" className="ml-0.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
