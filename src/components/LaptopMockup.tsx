import { Search, User, Bell, Heart, Menu, ArrowRight, Settings, Mail, Calendar } from 'lucide-react';

export default function LaptopMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Laptop Frame */}
      <div className="relative">
        {/* Screen */}
        <div className="bg-neutral-800 rounded-t-2xl p-3 shadow-2xl">
          {/* Screen Content */}
          <div className="bg-[#e8e4df] rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
            <div className="h-full overflow-y-auto">
              {/* Browser Chrome */}
              <div className="bg-white border-b border-neutral-200 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 ml-3 bg-neutral-100 rounded-md px-3 py-1 text-xs text-neutral-500">
                  portfolio-designer.com
                </div>
              </div>

              {/* Website Content */}
              <div className="p-6 space-y-6">
                {/* Header */}
                <header className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-neutral-800">Portfolio</div>
                    <nav className="hidden md:flex gap-6 text-sm">
                      <a href="#" className="text-neutral-800 hover:text-neutral-600">Projets</a>
                      <a href="#" className="text-neutral-800 hover:text-neutral-600">Contact</a>
                    </nav>
                    <button className="px-4 py-1.5 bg-neutral-800 text-white rounded-full text-sm">
                      Connexion
                    </button>
                  </div>
                </header>

                {/* Hero Section */}
                <div className="bg-gradient-to-br from-[#d4c5b0] to-[#e8dcc8] rounded-2xl p-8">
                  <h1 className="text-neutral-800 mb-3">Designer UX/UI</h1>
                  <p className="text-neutral-700 mb-6 max-w-md">
                    Créer des expériences numériques centrées sur l'utilisateur
                  </p>
                  <div className="flex gap-3">
                    <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                      Voir les projets
                    </button>
                    <button className="px-5 py-2 border-2 border-neutral-800 text-neutral-800 rounded-full text-sm hover:bg-neutral-800 hover:text-white transition-colors">
                      Me contacter
                    </button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input 
                    type="search" 
                    placeholder="Rechercher des projets..."
                    className="w-full pl-11 pr-4 py-2.5 bg-white border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
                  />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Project Card 1 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#d4c5b0] to-[#c9b89f]"></div>
                    <div className="p-3">
                      <h4 className="text-neutral-800 mb-1 text-sm">App Mobile</h4>
                      <p className="text-neutral-600 text-xs mb-2">Interface utilisateur</p>
                      <div className="flex gap-1">
                        <span className="px-2 py-0.5 bg-[#f5f3f0] text-neutral-700 rounded-full text-xs">UX</span>
                        <span className="px-2 py-0.5 bg-[#f5f3f0] text-neutral-700 rounded-full text-xs">UI</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Card 2 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#e8dcc8] to-[#d4c5b0]"></div>
                    <div className="p-3">
                      <h4 className="text-neutral-800 mb-1 text-sm">Web Design</h4>
                      <p className="text-neutral-600 text-xs mb-2">Site e-commerce</p>
                      <div className="flex gap-1">
                        <span className="px-2 py-0.5 bg-[#f5f3f0] text-neutral-700 rounded-full text-xs">Web</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Card 3 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <div className="aspect-[4/3] bg-gradient-to-br from-neutral-300 to-neutral-400"></div>
                    <div className="p-3">
                      <h4 className="text-neutral-800 mb-1 text-sm">Dashboard</h4>
                      <p className="text-neutral-600 text-xs mb-2">Analytics platform</p>
                      <div className="flex gap-1">
                        <span className="px-2 py-0.5 bg-[#f5f3f0] text-neutral-700 rounded-full text-xs">SaaS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-neutral-800 mb-4">Contact</h3>
                  <div className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                      <input 
                        type="email" 
                        placeholder="votre@email.com"
                        className="w-full pl-10 pr-4 py-2 bg-[#f5f3f0] border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
                      />
                    </div>
                    <textarea 
                      placeholder="Votre message..."
                      rows={3}
                      className="w-full px-4 py-2 bg-[#f5f3f0] border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 resize-none"
                    />
                    <button className="w-full px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2">
                      Envoyer
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#e8dcc8] to-[#d4c5b0] rounded-xl p-5">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-3">
                      <Settings size={16} className="text-neutral-800" />
                    </div>
                    <h4 className="text-neutral-800 mb-1 text-sm">Processus UX</h4>
                    <p className="text-neutral-700 text-xs">Méthodologie centrée utilisateur</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#d4c5b0] to-[#c9b89f] rounded-xl p-5">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-3">
                      <Calendar size={16} className="text-neutral-800" />
                    </div>
                    <h4 className="text-neutral-800 mb-1 text-sm">Planning</h4>
                    <p className="text-neutral-700 text-xs">Organisation de projet</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2.5 bg-neutral-800 text-white rounded-full text-sm">
                    Voir tous les projets
                  </button>
                  <button className="px-4 py-2.5 bg-[#d4c5b0] text-neutral-800 rounded-full text-sm">
                    En savoir plus
                  </button>
                </div>

                {/* Icon Actions */}
                <div className="flex gap-2 justify-center">
                  <button className="w-9 h-9 bg-white hover:bg-neutral-100 rounded-full flex items-center justify-center shadow-sm">
                    <Heart size={16} className="text-neutral-800" />
                  </button>
                  <button className="w-9 h-9 bg-white hover:bg-neutral-100 rounded-full flex items-center justify-center shadow-sm">
                    <Bell size={16} className="text-neutral-800" />
                  </button>
                  <button className="w-9 h-9 bg-white hover:bg-neutral-100 rounded-full flex items-center justify-center shadow-sm">
                    <User size={16} className="text-neutral-800" />
                  </button>
                  <button className="w-9 h-9 bg-white hover:bg-neutral-100 rounded-full flex items-center justify-center shadow-sm">
                    <Menu size={16} className="text-neutral-800" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="bg-neutral-300 rounded-b-2xl h-4 relative">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-neutral-400 rounded-b-2xl"></div>
        </div>

        {/* Laptop Bottom */}
        <div className="flex justify-center">
          <div className="w-48 h-2 bg-neutral-400 rounded-b-lg"></div>
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-neutral-900/10 blur-xl rounded-full"></div>
    </div>
  );
}
