import { Search, Home, User, Heart, ShoppingBag, Bell, ArrowLeft, MoreVertical } from 'lucide-react';

export default function MobileMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Phone Frame */}
      <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="bg-neutral-900 h-6 rounded-t-[2.5rem] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl"></div>
        </div>

        {/* Screen */}
        <div className="bg-[#e8e4df] rounded-[2rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
          <div className="h-full overflow-y-auto">
            {/* Status Bar */}
            <div className="bg-white px-6 py-3 flex items-center justify-between">
              <span className="text-xs text-neutral-800">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-neutral-800 rounded-sm relative">
                  <div className="absolute inset-0.5 bg-neutral-800 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <ArrowLeft size={20} className="text-neutral-800" />
                </button>
                <h2 className="text-neutral-800">Portfolio</h2>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MoreVertical size={20} className="text-neutral-800" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input 
                  type="search" 
                  placeholder="Rechercher..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-neutral-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
                />
              </div>

              {/* Hero Card */}
              <div className="bg-gradient-to-br from-[#d4c5b0] to-[#e8dcc8] rounded-2xl p-6">
                <h3 className="text-neutral-800 mb-2">Designer UX/UI</h3>
                <p className="text-neutral-700 text-sm mb-4">
                  Expériences centrées utilisateur
                </p>
                <button className="w-full px-4 py-2.5 bg-neutral-800 text-white rounded-full text-sm">
                  Voir les projets
                </button>
              </div>

              {/* Project Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[16/9] bg-gradient-to-br from-[#d4c5b0] to-[#c9b89f]"></div>
                <div className="p-4">
                  <h4 className="text-neutral-800 mb-1">Application Mobile</h4>
                  <p className="text-neutral-600 text-sm mb-3">Design d'interface pour une app de productivité</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#f5f3f0] text-neutral-700 rounded-full text-xs">UX Design</span>
                    <span className="px-3 py-1 bg-[#f5f3f0] text-neutral-700 rounded-full text-xs">Mobile</span>
                  </div>
                  <button className="w-full px-4 py-2 border-2 border-neutral-800 text-neutral-800 rounded-full text-sm">
                    Voir le projet
                  </button>
                </div>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-[#e8dcc8] to-[#d4c5b0] rounded-2xl p-4 aspect-square flex flex-col justify-between">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Heart size={16} className="text-neutral-800" />
                  </div>
                  <div>
                    <div className="text-2xl text-neutral-800 mb-1">48</div>
                    <div className="text-neutral-700 text-xs">Projets</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 aspect-square flex flex-col justify-between shadow-sm">
                  <div className="w-8 h-8 bg-[#f5f3f0] rounded-lg flex items-center justify-center">
                    <User size={16} className="text-neutral-800" />
                  </div>
                  <div>
                    <div className="text-2xl text-neutral-800 mb-1">32</div>
                    <div className="text-neutral-600 text-xs">Clients</div>
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <label className="block mb-2 text-neutral-700 text-sm">Email</label>
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-[#f5f3f0] border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
                />
              </div>

              {/* Button Group */}
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-neutral-800 text-white rounded-full text-sm">
                  Bouton Principal
                </button>
                <button className="w-full px-4 py-3 bg-[#d4c5b0] text-neutral-800 rounded-full text-sm">
                  Bouton Secondaire
                </button>
                <button className="w-full px-4 py-3 border-2 border-neutral-800 text-neutral-800 rounded-full text-sm">
                  Bouton Outline
                </button>
              </div>

              {/* Toggle */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-neutral-700 text-sm">Notifications</span>
                  <div className="w-12 h-7 bg-neutral-800 rounded-full relative">
                    <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 text-sm">Mode sombre</span>
                  <div className="w-12 h-7 bg-neutral-300 rounded-full relative">
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1.5 bg-white text-neutral-700 rounded-full text-xs shadow-sm">Design</span>
                <span className="px-3 py-1.5 bg-white text-neutral-700 rounded-full text-xs shadow-sm">UX</span>
                <span className="px-3 py-1.5 bg-neutral-800 text-white rounded-full text-xs">Featured</span>
                <span className="px-3 py-1.5 bg-[#d4c5b0] text-neutral-800 rounded-full text-xs">Nouveau</span>
              </div>

              {/* Bottom Spacing */}
              <div className="h-20"></div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-6 py-4 rounded-b-[2rem]">
              <div className="flex items-center justify-around">
                <button className="flex flex-col items-center gap-1">
                  <Home size={20} className="text-neutral-800" />
                  <span className="text-xs text-neutral-800">Accueil</span>
                </button>
                <button className="flex flex-col items-center gap-1">
                  <Search size={20} className="text-neutral-400" />
                  <span className="text-xs text-neutral-400">Recherche</span>
                </button>
                <button className="flex flex-col items-center gap-1">
                  <ShoppingBag size={20} className="text-neutral-400" />
                  <span className="text-xs text-neutral-400">Projets</span>
                </button>
                <button className="flex flex-col items-center gap-1">
                  <User size={20} className="text-neutral-400" />
                  <span className="text-xs text-neutral-400">Profil</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-neutral-900/20 blur-xl rounded-full"></div>
    </div>
  );
}
