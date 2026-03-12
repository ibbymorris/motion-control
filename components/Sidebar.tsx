'use client';

import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Info, Video, Image as ImageIcon, Plus, Sparkles, Check, Search, ChevronRight, X } from 'lucide-react';

const MODELS = [
  { id: 'omni', name: 'Kling 3.0 Omni Edit', desc: 'Edit videos with text prompts', exclusive: true },
  { id: 'kling01', name: 'Kling 01 Video Edit', desc: 'Generate with elements and references' },
  { id: 'klingmc', name: 'Kling Motion Control', desc: 'Control motion with video references' },
  { id: 'kling3mc', name: 'Kling 3.0 Motion Control', desc: 'Transfer motion from video to image' },
  { id: 'grok', name: 'Grok Imagine Edit', desc: 'Edit videos with text prompts' }
];

const QUALITIES = [
  { id: '720p', name: '720p', desc: 'Balanced quality • 1.5 credits/sec' },
  { id: '1080p', name: '1080p', desc: 'Higher quality • 2.5 credits/sec' }
];

export default function Sidebar() {
  const [modelOpen, setModelOpen] = useState(false);
  const [qualityOpen, setQualityOpen] = useState(false);
  const [sceneMode, setSceneMode] = useState<'video' | 'image'>('video');
  const [advancedOpen, setAdvancedOpen] = useState(true);
  
  const [selectedModel, setSelectedModel] = useState('Kling 3.0 Motion Control');
  const [selectedQuality, setSelectedQuality] = useState('720p');
  const [searchQuery, setSearchQuery] = useState('');

  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [characterFile, setCharacterFile] = useState<string | null>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const characterRef = useRef<HTMLInputElement>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCharacterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCharacterFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const filteredModels = MODELS.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <aside className="w-full lg:w-[320px] flex flex-col border-r border-higgs-border bg-higgs-page h-full relative z-20">
      <div className="hidden lg:flex items-center gap-6 px-6 pt-6 pb-2 border-b border-higgs-border">
        <button className="text-sm font-medium text-higgs-text-secondary hover:text-white transition-colors pb-2">Create Video</button>
        <button className="text-sm font-medium text-higgs-text-secondary hover:text-white transition-colors pb-2">Edit Video</button>
        <button className="text-sm font-medium text-white border-b-2 border-white pb-2">Motion Control</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide pb-24">
        <div className="w-full space-y-4">
          {/* Hero Card */}
          <div className="relative rounded-xl overflow-hidden aspect-[2.3/1] group cursor-pointer">
            <video 
              src="https://static.higgsfield.ai/v2-fnf-web-kmc-preset.mp4" 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            <div className="absolute top-3 right-3 group/tooltip">
              <button className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1.5 text-xs text-white hover:bg-black/60 transition-colors">
                <Info size={14} />
                How it works
              </button>
              <div className="absolute top-full right-0 mt-2 hidden group-hover/tooltip:block w-48 p-2.5 bg-higgs-surface border border-higgs-border rounded-lg text-xs text-white shadow-xl z-50">
                Learn how to control motion using video references to animate your static characters.
              </div>
            </div>

            <div className="absolute bottom-3 left-3">
              <h3 className="text-higgs-lime font-bold text-sm tracking-wider uppercase">Motion Control</h3>
              <p className="text-xs text-white/80">Control motion with video references</p>
            </div>
          </div>

          {/* Upload Boxes */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative h-56 sm:h-64 lg:h-auto lg:aspect-[4/5] rounded-xl overflow-hidden border border-dashed border-higgs-border bg-higgs-surface hover:border-higgs-lime/50 transition-colors group cursor-pointer">
              {videoFile ? (
                <>
                  <video src={videoFile} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button onClick={(e) => { e.stopPropagation(); setVideoFile(null); }} className="w-7 h-7 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                </>
              ) : (
                <button onClick={() => videoRef.current?.click()} className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-higgs-text-secondary">
                    <Video className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div className="text-center">
                    <p className="text-base lg:text-xs font-medium text-white">Add motion to copy</p>
                    <p className="text-xs lg:text-[10px] text-higgs-text-secondary mt-1 hidden lg:block">Video duration:<br/>3–30 seconds</p>
                  </div>
                </button>
              )}
              <input type="file" accept="video/*" className="hidden" ref={videoRef} onChange={handleVideoChange} />
            </div>

            <div className="relative h-56 sm:h-64 lg:h-auto lg:aspect-[4/5] rounded-xl overflow-hidden border border-dashed border-higgs-border bg-higgs-surface hover:border-higgs-lime/50 transition-colors group cursor-pointer">
              {characterFile ? (
                <>
                  <img src={characterFile} alt="Character" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button onClick={(e) => { e.stopPropagation(); setCharacterFile(null); }} className="w-7 h-7 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                </>
              ) : (
                <button onClick={() => characterRef.current?.click()} className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-higgs-text-secondary">
                    <Plus className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                  <div className="text-center">
                    <p className="text-base lg:text-xs font-medium text-white">Add your character</p>
                    <p className="text-xs lg:text-[10px] text-higgs-text-secondary mt-1 hidden lg:block">Image with visible<br/>face and body</p>
                  </div>
                </button>
              )}
              <input type="file" accept="image/*" className="hidden" ref={characterRef} onChange={handleCharacterChange} />
            </div>
          </div>

          {/* Model Selector */}
          <div className="relative">
            <button 
              onClick={() => { setModelOpen(!modelOpen); setQualityOpen(false); }}
              className={`w-full bg-higgs-surface-subtle border ${modelOpen ? 'border-higgs-lime/50' : 'border-higgs-border'} rounded-xl p-3 flex items-center justify-between hover:border-higgs-lime/50 transition-colors`}
            >
              <div className="flex flex-col items-start">
                <span className="text-xs text-higgs-text-secondary">Model</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm font-medium text-white">{selectedModel}</span>
                  <Sparkles size={14} className="text-higgs-lime" />
                </div>
              </div>
              <ChevronRight size={16} className={`text-higgs-text-secondary transition-transform ${modelOpen ? 'rotate-90' : ''}`} />
            </button>
            
            {modelOpen && (
              <div className="absolute bottom-full lg:bottom-auto lg:top-0 left-0 lg:left-[calc(100%+8px)] w-full lg:w-[320px] mb-2 lg:mb-0 bg-higgs-surface border border-higgs-border rounded-xl p-2 z-50 shadow-2xl">
                <div className="p-2 relative">
                  <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-higgs-text-secondary" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-higgs-border rounded-lg pl-8 pr-3 py-1.5 outline-none text-sm text-white placeholder:text-higgs-text-secondary focus:border-higgs-lime/50 transition-colors" 
                  />
                </div>
                <div className="text-xs text-higgs-text-secondary px-2 py-1.5 flex items-center gap-2">
                  <Video size={12} /> All models
                </div>
                <div className="max-h-64 overflow-y-auto scrollbar-hide space-y-1 mt-1">
                  {filteredModels.map(m => (
                    <button 
                      key={m.id}
                      onClick={() => { setSelectedModel(m.name); setModelOpen(false); }}
                      className={`w-full text-left px-2 py-2 rounded-lg flex items-center gap-3 transition-colors ${selectedModel === m.name ? 'bg-white/5 border border-higgs-lime/20' : 'hover:bg-white/5 border border-transparent'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${selectedModel === m.name ? 'bg-higgs-lime/10 text-higgs-lime' : 'bg-white/5 text-white'}`}>
                        <Sparkles size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white flex items-center gap-2 truncate">
                          <span className="truncate">{m.name}</span>
                          {m.exclusive && <span className="text-[10px] bg-[#2e3031] text-higgs-lime px-1.5 py-0.5 rounded shrink-0">Exclusive</span>}
                        </p>
                        <p className="text-xs text-higgs-text-secondary truncate">{m.desc}</p>
                      </div>
                      {selectedModel === m.name && (
                        <div className="text-higgs-lime shrink-0">
                          <Check size={16} />
                        </div>
                      )}
                    </button>
                  ))}
                  {filteredModels.length === 0 && (
                    <div className="px-2 py-4 text-center text-sm text-higgs-text-secondary">
                      No models found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quality Selector */}
          <div className="relative">
            <button 
              onClick={() => { setQualityOpen(!qualityOpen); setModelOpen(false); }}
              className={`w-full bg-higgs-surface-subtle border ${qualityOpen ? 'border-higgs-lime/50' : 'border-higgs-border'} rounded-xl p-3 flex items-center justify-between hover:border-higgs-lime/50 transition-colors`}
            >
              <div className="flex flex-col items-start">
                <span className="text-xs text-higgs-text-secondary">Quality</span>
                <span className="text-sm font-medium text-white mt-0.5">{selectedQuality}</span>
              </div>
              <ChevronRight size={16} className={`text-higgs-text-secondary transition-transform ${qualityOpen ? 'rotate-90' : ''}`} />
            </button>
            
            {qualityOpen && (
              <div className="absolute bottom-full lg:bottom-auto lg:top-0 left-0 lg:left-[calc(100%+8px)] w-full lg:w-[240px] mb-2 lg:mb-0 bg-higgs-surface border border-higgs-border rounded-xl p-1 z-50 shadow-2xl">
                {QUALITIES.map(q => (
                  <button 
                    key={q.id}
                    onClick={() => { setSelectedQuality(q.name); setQualityOpen(false); }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors ${selectedQuality === q.name ? 'bg-white/5' : 'hover:bg-white/5'}`}
                  >
                    <div>
                      <p className="text-sm text-white">{q.name}</p>
                      <p className="text-xs text-higgs-text-secondary mt-0.5">{q.desc}</p>
                    </div>
                    {selectedQuality === q.name && <Check size={16} className="text-white" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Scene Control Mode */}
          <div className="bg-higgs-surface-subtle border border-higgs-border rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white">Scene control mode</span>
                <div className="relative group/tooltip hidden lg:block">
                  <Info size={14} className="text-higgs-text-secondary cursor-help hover:text-white transition-colors" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-48 p-2.5 bg-higgs-surface border border-higgs-border rounded-lg text-xs text-white shadow-xl z-50 text-center">
                    Determine if the background is sourced from the image or the video.
                  </div>
                </div>
              </div>
              <button className="w-10 h-6 rounded-full bg-[#00c314] relative transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </button>
            </div>
            <div className="hidden lg:flex bg-higgs-page border border-higgs-border rounded-lg p-1">
              <button 
                onClick={() => setSceneMode('video')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${sceneMode === 'video' ? 'bg-higgs-surface text-white shadow-sm' : 'text-higgs-text-secondary hover:text-white'}`}
              >
                <Video size={16} /> Video
              </button>
              <button 
                onClick={() => setSceneMode('image')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${sceneMode === 'image' ? 'bg-higgs-surface text-white shadow-sm' : 'text-higgs-text-secondary hover:text-white'}`}
              >
                <ImageIcon size={16} /> Image
              </button>
            </div>
            <p className="text-xs text-higgs-text-secondary leading-relaxed hidden lg:block">
              Choose where the background should come from: the character image or the motion video
            </p>
          </div>

          {/* Advanced Settings */}
          <div className="hidden lg:block">
            <button 
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-white hover:text-higgs-lime transition-colors"
            >
              Advanced settings
              <ChevronDown size={16} className={`transition-transform ${advancedOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {advancedOpen && (
              <div className="space-y-4 mt-3">
                <div className="bg-higgs-surface-subtle border border-higgs-border rounded-xl p-4 transition-colors focus-within:border-higgs-lime/50">
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-xs font-medium text-higgs-text-secondary">Prompt</label>
                    <div className="relative group/tooltip">
                      <Info size={12} className="text-higgs-text-secondary cursor-help hover:text-white transition-colors" />
                      <div className="absolute bottom-full left-0 mb-2 hidden group-hover/tooltip:block w-56 p-2.5 bg-higgs-surface border border-higgs-border rounded-lg text-xs text-white shadow-xl z-50">
                        Add specific details to guide the AI in generating the background and scene.
                      </div>
                    </div>
                  </div>
                  <textarea 
                    className="w-full bg-transparent border-none outline-none text-sm text-white resize-none h-20 placeholder:text-higgs-text-secondary/70"
                    placeholder='Describe background and scene details - e.g., "A corgi runs in" or "Snowy park setting". Motion is controlled by your reference video'
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-medium text-higgs-text-secondary">Orientation</label>
                    <div className="relative group/tooltip">
                      <Info size={12} className="text-higgs-text-secondary cursor-help hover:text-white transition-colors" />
                      <div className="absolute bottom-full left-0 mb-2 hidden group-hover/tooltip:block w-56 p-2.5 bg-higgs-surface border border-higgs-border rounded-lg text-xs text-white shadow-xl z-50">
                        Select the orientation that best matches your desired output format.
                      </div>
                    </div>
                  </div>
                  <div className="bg-higgs-surface-subtle border border-higgs-border rounded-lg p-1 flex">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium bg-higgs-surface text-white shadow-sm">
                      <Video size={16} /> Video
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium text-higgs-text-secondary hover:text-white transition-colors">
                      <ImageIcon size={16} /> Image
                    </button>
                  </div>
                  <p className="text-xs text-higgs-text-secondary leading-relaxed pt-1">
                    When Character Orientation matches the video, complex motions perform better; when it matches the image, camera movements are better supported.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-higgs-border bg-higgs-page z-30">
        <button className="w-full bg-higgs-lime text-black font-bold text-lg py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[inset_0px_-3px_rgba(0,0,0,0.2)]">
          Generate <Sparkles size={20} /> 7
        </button>
      </div>
    </aside>
  );
}
