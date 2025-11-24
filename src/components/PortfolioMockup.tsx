import { motion } from 'motion/react';
import { useState } from 'react';

export default function PortfolioMockup() {
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="flex items-center justify-center" style={{ perspective: '1200px' }}>
      <motion.div
        className="relative w-[500px] h-[500px] cursor-grab active:cursor-grabbing"
        style={{ 
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0}
        onDragStart={() => setIsDragging(true)}
        onDrag={(_, info) => {
          setRotation(prev => ({
            x: prev.x - info.delta.y * 0.3,
            y: prev.y + info.delta.x * 0.3,
          }));
        }}
        onDragEnd={() => setIsDragging(false)}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        {/* Front Face - Dashboard Content */}
        <div 
          className="absolute inset-0 bg-[#e8e4df] p-6 overflow-hidden"
          style={{ 
            transform: 'translateZ(250px)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="grid grid-cols-12 gap-3 h-full">
            {/* Left Column - Charts */}
            <div className="col-span-8 space-y-3">
              {/* Top Row - Bar Chart Card */}
              <div className="bg-white rounded-xl p-4 h-[45%]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-neutral-800 text-sm mb-0.5">Projets mensuels</h3>
                    <p className="text-neutral-500 text-xs">Jan - Aug 24</p>
                  </div>
                  <div className="px-2 py-0.5 bg-[#d4c5b0] text-neutral-800 rounded-full text-xs">
                    Vue d'ensemble
                  </div>
                </div>
                
                {/* Bar Chart */}
                <div className="flex items-end justify-between gap-1.5 h-[calc(100%-60px)]">
                  {[45, 65, 38, 72, 55, 68, 82, 90].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1">
                      <div 
                        className="w-full bg-neutral-800 rounded-t-md transition-all"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-[10px] text-neutral-400">
                        {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row - Two Cards */}
              <div className="grid grid-cols-2 gap-3 h-[52%]">
                {/* Donut Chart Card */}
                <div className="bg-white rounded-xl p-4 relative overflow-hidden">
                  <h4 className="text-neutral-800 mb-2 text-xs">Répartition par type</h4>
                  
                  {/* Donut Chart */}
                  <div className="flex items-center justify-center h-[calc(100%-45px)]">
                    <div className="relative w-24 h-24">
                      {/* Donut segments */}
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#262626" strokeWidth="12" strokeDasharray="122 220" strokeDashoffset="0" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#d4c5b0" strokeWidth="12" strokeDasharray="66 220" strokeDashoffset="-122" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#a3a3a3" strokeWidth="12" strokeDasharray="33 220" strokeDashoffset="-188" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg text-neutral-800">32</div>
                          <div className="text-[10px] text-neutral-500">Total</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-2 left-3 right-3 flex gap-2 text-[9px]">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-neutral-800 rounded-sm"></div>
                      <span className="text-neutral-600">Web 55%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#d4c5b0] rounded-sm"></div>
                      <span className="text-neutral-600">Mobile 30%</span>
                    </div>
                  </div>
                </div>

                {/* Radar Chart Card */}
                <div className="bg-white rounded-xl p-4">
                  <h4 className="text-neutral-800 mb-2 text-xs">Compétences</h4>
                  
                  {/* Radar/Spider Chart */}
                  <div className="flex items-center justify-center h-[calc(100%-30px)]">
                    <div className="relative w-32 h-32">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <g opacity="0.2">
                          <polygon points="100,30 160,70 160,130 100,170 40,130 40,70" fill="none" stroke="#a3a3a3" strokeWidth="1" />
                          <polygon points="100,55 140,85 140,115 100,145 60,115 60,85" fill="none" stroke="#a3a3a3" strokeWidth="1" />
                          <line x1="100" y1="100" x2="100" y2="30" stroke="#a3a3a3" strokeWidth="1" />
                          <line x1="100" y1="100" x2="160" y2="70" stroke="#a3a3a3" strokeWidth="1" />
                          <line x1="100" y1="100" x2="160" y2="130" stroke="#a3a3a3" strokeWidth="1" />
                          <line x1="100" y1="100" x2="100" y2="170" stroke="#a3a3a3" strokeWidth="1" />
                          <line x1="100" y1="100" x2="40" y2="130" stroke="#a3a3a3" strokeWidth="1" />
                          <line x1="100" y1="100" x2="40" y2="70" stroke="#a3a3a3" strokeWidth="1" />
                        </g>
                        <polygon points="100,45 150,75 145,120 100,155 55,120 50,75" fill="#d4c5b0" fillOpacity="0.3" stroke="#d4c5b0" strokeWidth="2" />
                        <circle cx="100" cy="45" r="2" fill="#262626" />
                        <circle cx="150" cy="75" r="2" fill="#262626" />
                        <circle cx="145" cy="120" r="2" fill="#262626" />
                        <circle cx="100" cy="155" r="2" fill="#262626" />
                        <circle cx="55" cy="120" r="2" fill="#262626" />
                        <circle cx="50" cy="75" r="2" fill="#262626" />
                      </svg>
                      
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] text-neutral-600">UX</div>
                      <div className="absolute top-6 right-1 text-[9px] text-neutral-600">UI</div>
                      <div className="absolute bottom-6 right-1 text-[9px] text-neutral-600">Code</div>
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-neutral-600">Research</div>
                      <div className="absolute bottom-6 left-1 text-[9px] text-neutral-600">Design</div>
                      <div className="absolute top-6 left-1 text-[9px] text-neutral-600">Strategy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Info Cards */}
            <div className="col-span-4 space-y-3">
              {/* Score Card */}
              <div className="bg-gradient-to-br from-[#d4c5b0] to-[#c9b89f] rounded-xl p-4 text-neutral-800">
                <div className="flex items-center gap-1.5 mb-2">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10.5 6L16 6.5L12 10.5L13 16L8 13L3 16L4 10.5L0 6.5L5.5 6L8 1Z" fill="currentColor"/>
                  </svg>
                  <span className="text-xs">Score de qualité</span>
                </div>
                <div className="text-3xl mb-1">87/100</div>
                <p className="text-xs opacity-80">Moyenne: 72/100</p>
              </div>

              {/* Status List Card */}
              <div className="bg-white rounded-xl p-4 flex-1">
                <h4 className="text-neutral-800 mb-3 text-xs">Statut des projets</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-600">En cours</span>
                    <span className="px-1.5 py-0.5 bg-[#d4c5b0] text-neutral-800 rounded-full text-[10px]">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-600">Terminés</span>
                    <span className="px-1.5 py-0.5 bg-neutral-800 text-white rounded-full text-[10px]">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-600">En attente</span>
                    <span className="px-1.5 py-0.5 bg-neutral-200 text-neutral-700 rounded-full text-[10px]">3</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-neutral-200">
                  <div className="text-xs text-neutral-500 mb-1.5">Taux de satisfaction</div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex-1 bg-neutral-200 rounded-full h-1.5">
                      <div className="bg-neutral-800 h-1.5 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="text-xs text-neutral-800">94%</span>
                  </div>
                </div>
              </div>

              {/* Mini Cards */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xl text-neutral-800 mb-0.5">12</div>
                  <div className="text-[10px] text-neutral-500">Clients</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xl text-neutral-800 mb-0.5">5+</div>
                  <div className="text-[10px] text-neutral-500">Années</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face - Form Components */}
        <div 
          className="absolute inset-0 bg-[#e8e4df] p-6 overflow-hidden"
          style={{ 
            transform: 'translateZ(-250px) rotateY(180deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col gap-4">
            <div className="text-center mb-2">
              <h3 className="text-neutral-800 text-sm">Composants de formulaire</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 space-y-4 flex-1 overflow-auto">
              {/* Input Fields */}
              <div className="space-y-2">
                <label className="text-xs text-neutral-600">Nom complet</label>
                <input 
                  type="text" 
                  placeholder="Jean Dupont" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d4c5b0] bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neutral-600">Email</label>
                <input 
                  type="email" 
                  placeholder="jean@exemple.com" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d4c5b0] bg-white"
                />
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <label className="text-xs text-neutral-600">Message</label>
                <textarea 
                  placeholder="Votre message ici..." 
                  rows={3}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d4c5b0] resize-none bg-white"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="text-xs text-neutral-600">Préférences</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-neutral-300 text-neutral-800 focus:ring-[#d4c5b0]" />
                    <span className="text-sm text-neutral-700">Newsletter hebdomadaire</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-neutral-300 text-neutral-800 focus:ring-[#d4c5b0]" defaultChecked />
                    <span className="text-sm text-neutral-700">Notifications importantes</span>
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm hover:bg-neutral-700 transition-colors">
                  Envoyer
                </button>
                <button className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg text-sm hover:bg-neutral-50 transition-colors">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Face - Cards & Content */}
        <div 
          className="absolute inset-0 bg-[#e8e4df] p-6 overflow-hidden"
          style={{ 
            transform: 'rotateY(90deg) translateZ(250px)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col gap-3">
            <div className="text-center mb-1">
              <h3 className="text-neutral-800 text-sm">Cards & Contenu</h3>
            </div>
            
            <div className="flex-1 space-y-3 overflow-auto">
              {/* Product Card */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-[#d4c5b0] to-[#c9b89f]"></div>
                <div className="p-4">
                  <h4 className="text-neutral-800 mb-1 text-sm">Projet Design System</h4>
                  <p className="text-xs text-neutral-600 mb-3">Une bibliothèque de composants réutilisables pour votre équipe.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">En cours</span>
                    <button className="px-3 py-1 bg-neutral-800 text-white rounded-lg text-xs">
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>

              {/* User Profile Card */}
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4c5b0] to-[#c9b89f]"></div>
                  <div className="flex-1">
                    <h4 className="text-neutral-800 text-sm">Marie Laurent</h4>
                    <p className="text-xs text-neutral-500">UX Designer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-neutral-800 text-white rounded-lg text-xs">
                    Suivre
                  </button>
                  <button className="flex-1 px-3 py-1.5 border border-neutral-300 text-neutral-700 rounded-lg text-xs">
                    Message
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-xl p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg text-neutral-800">24</div>
                    <div className="text-[10px] text-neutral-500">Projets</div>
                  </div>
                  <div>
                    <div className="text-lg text-neutral-800">1.2k</div>
                    <div className="text-[10px] text-neutral-500">Vues</div>
                  </div>
                  <div>
                    <div className="text-lg text-neutral-800">98%</div>
                    <div className="text-[10px] text-neutral-500">Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Face - Navigation */}
        <div 
          className="absolute inset-0 bg-[#e8e4df] p-6 overflow-hidden"
          style={{ 
            transform: 'rotateY(-90deg) translateZ(250px)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col gap-3">
            <div className="text-center mb-1">
              <h3 className="text-neutral-800 text-sm">Navigation & Menus</h3>
            </div>
            
            <div className="bg-white rounded-xl p-4 flex-1">
              {/* Main Menu */}
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 bg-neutral-800 text-white rounded-lg text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Profil
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Projets
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                  Paramètres
                </a>
              </nav>

              {/* Divider */}
              <div className="my-4 border-t border-neutral-200"></div>

              {/* Tabs */}
              <div className="space-y-3">
                <h4 className="text-xs text-neutral-500">Onglets</h4>
                <div className="flex gap-1 bg-neutral-100 rounded-lg p-1">
                  <button className="flex-1 px-3 py-1.5 bg-white text-neutral-800 rounded-md text-xs">Vue</button>
                  <button className="flex-1 px-3 py-1.5 text-neutral-600 text-xs">Éditer</button>
                  <button className="flex-1 px-3 py-1.5 text-neutral-600 text-xs">Code</button>
                </div>
              </div>

              {/* Breadcrumbs */}
              <div className="mt-4 space-y-2">
                <h4 className="text-xs text-neutral-500">Fil d'Ariane</h4>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-neutral-400">Accueil</span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-neutral-400">Projets</span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-neutral-800">Design System</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 space-y-2">
                <h4 className="text-xs text-neutral-500">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#d4c5b0] text-neutral-800 rounded-full text-xs">UI/UX</span>
                  <span className="px-2 py-1 bg-neutral-200 text-neutral-700 rounded-full text-xs">Design</span>
                  <span className="px-2 py-1 bg-neutral-200 text-neutral-700 rounded-full text-xs">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Face - Typography */}
        <div 
          className="absolute inset-0 bg-[#e8e4df] p-6 overflow-hidden"
          style={{ 
            transform: 'rotateX(90deg) translateZ(250px)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col gap-3">
            <div className="text-center mb-1">
              <h3 className="text-neutral-800 text-sm">Typographie</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 flex-1 overflow-auto space-y-4">
              <div>
                <p className="text-xs text-neutral-500 mb-1">Heading 1</p>
                <h1 className="text-neutral-800">Design Excellence</h1>
              </div>

              <div>
                <p className="text-xs text-neutral-500 mb-1">Heading 2</p>
                <h2 className="text-neutral-800">Portfolio Projects</h2>
              </div>

              <div>
                <p className="text-xs text-neutral-500 mb-1">Heading 3</p>
                <h3 className="text-neutral-800">Case Study Analysis</h3>
              </div>

              <div>
                <p className="text-xs text-neutral-500 mb-1">Body Text</p>
                <p className="text-neutral-700">
                  Le design minimaliste met l'accent sur la simplicité et la fonctionnalité. 
                  Chaque élément a une raison d'être.
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 mb-1">Small Text</p>
                <p className="text-xs text-neutral-600">
                  Texte secondaire pour les détails et annotations
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 mb-2">Styles</p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium text-neutral-800">Gras</span> pour l'emphase</p>
                  <p className="text-sm"><span className="italic text-neutral-700">Italique</span> pour les citations</p>
                  <p className="text-sm"><span className="underline text-neutral-700">Souligné</span> pour les liens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Face - Interactive Components */}
        <div 
          className="absolute inset-0 bg-[#e8e4df] p-6 overflow-hidden"
          style={{ 
            transform: 'rotateX(-90deg) translateZ(250px)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col gap-3">
            <div className="text-center mb-1">
              <h3 className="text-neutral-800 text-sm">Composants interactifs</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 flex-1 overflow-auto space-y-5">
              {/* Sliders */}
              <div className="space-y-2">
                <label className="text-xs text-neutral-600">Volume</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  defaultValue="60"
                  className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-neutral-800"
                />
              </div>

              {/* Toggle Switches */}
              <div className="space-y-3">
                <label className="text-xs text-neutral-600">Options</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Mode sombre</span>
                  <div className="relative inline-block w-11 h-6">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-300 rounded-full peer peer-checked:bg-neutral-800 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Notifications</span>
                  <div className="relative inline-block w-11 h-6">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-neutral-300 rounded-full peer peer-checked:bg-neutral-800 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </div>
                </div>
              </div>

              {/* Radio Buttons */}
              <div className="space-y-2">
                <label className="text-xs text-neutral-600">Sélection</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="option" className="w-4 h-4 text-neutral-800 focus:ring-[#d4c5b0]" defaultChecked />
                    <span className="text-sm text-neutral-700">Option 1</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="option" className="w-4 h-4 text-neutral-800 focus:ring-[#d4c5b0]" />
                    <span className="text-sm text-neutral-700">Option 2</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="option" className="w-4 h-4 text-neutral-800 focus:ring-[#d4c5b0]" />
                    <span className="text-sm text-neutral-700">Option 3</span>
                  </label>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-neutral-600">Progression</label>
                  <span className="text-xs text-neutral-500">75%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-neutral-800 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Instructions */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <p className="text-xs text-neutral-600">Glissez pour faire tourner le cube</p>
      </div>
    </div>
  );
}
