import { Search, User, Bell, Heart, ShoppingCart, Menu, X, ArrowRight, Download, Settings } from 'lucide-react';

export default function UIComponents() {
  return (
    <div className="space-y-12">
      {/* Typography */}
      <section>
        <div className="mb-4 text-neutral-500">Typographie</div>
        <div className="bg-white p-8 rounded-2xl space-y-4">
          <h1 className="text-neutral-800">Titre Principal - H1</h1>
          <h2 className="text-neutral-800">Titre Secondaire - H2</h2>
          <h3 className="text-neutral-800">Titre Tertiaire - H3</h3>
          <h4 className="text-neutral-800">Titre Quaternaire - H4</h4>
          <p className="text-neutral-600">Paragraphe régulier avec du texte de corps. Idéal pour les descriptions et le contenu principal.</p>
          <p className="text-neutral-500">Texte secondaire - Sous-titres et informations complémentaires</p>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <div className="mb-4 text-neutral-500">Boutons</div>
        <div className="bg-white p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="px-6 py-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
              Primary
            </button>
            <button className="px-6 py-3 bg-[#d4c5b0] text-neutral-800 rounded-full hover:bg-[#c9b89f] transition-colors">
              Secondary
            </button>
            <button className="px-6 py-3 border-2 border-neutral-800 text-neutral-800 rounded-full hover:bg-neutral-800 hover:text-white transition-colors">
              Outline
            </button>
            <button className="px-6 py-3 text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors">
              Ghost
            </button>
          </div>
          
          <div className="mt-6 space-y-3">
            <button className="w-full px-6 py-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2">
              <Download size={18} />
              Télécharger
            </button>
            <button className="w-full px-6 py-3 bg-[#d4c5b0] text-neutral-800 rounded-full hover:bg-[#c9b89f] transition-colors flex items-center justify-center gap-2">
              En savoir plus
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Input Fields */}
      <section>
        <div className="mb-4 text-neutral-500">Champs de saisie</div>
        <div className="bg-white p-8 rounded-2xl space-y-4">
          <div>
            <label className="block mb-2 text-neutral-700">Nom complet</label>
            <input 
              type="text" 
              placeholder="Entrez votre nom"
              className="w-full px-4 py-3 bg-[#f5f3f0] border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-neutral-700">Email</label>
            <input 
              type="email" 
              placeholder="votre@email.com"
              className="w-full px-4 py-3 bg-[#f5f3f0] border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-neutral-700">Message</label>
            <textarea 
              placeholder="Écrivez votre message..."
              rows={4}
              className="w-full px-4 py-3 bg-[#f5f3f0] border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all resize-none"
            />
          </div>
        </div>
      </section>

      {/* Search Bars */}
      <section>
        <div className="mb-4 text-neutral-500">Barres de recherche</div>
        <div className="bg-white p-8 rounded-2xl space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input 
              type="search" 
              placeholder="Rechercher..."
              className="w-full pl-12 pr-4 py-3 bg-[#f5f3f0] border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
            />
          </div>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input 
              type="search" 
              placeholder="Rechercher des projets..."
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-neutral-300 rounded-full focus:outline-none focus:border-neutral-800 transition-all"
            />
          </div>
          
          <div className="relative">
            <input 
              type="search" 
              placeholder="Que recherchez-vous ?"
              className="w-full pl-4 pr-28 py-4 bg-[#f5f3f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition-colors">
              Chercher
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <div className="mb-4 text-neutral-500">Cards</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card */}
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#d4c5b0] to-[#e8dcc8]"></div>
            <div className="p-6">
              <h3 className="mb-2 text-neutral-800">Projet Mobile App</h3>
              <p className="text-neutral-600 mb-4">Design d'interface pour une application mobile de productivité</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#f5f3f0] text-neutral-700 rounded-full text-sm">UX Design</span>
                <span className="px-3 py-1 bg-[#f5f3f0] text-neutral-700 rounded-full text-sm">Mobile</span>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-gradient-to-br from-neutral-300 to-neutral-400 rounded-full mx-auto mb-4"></div>
            <h3 className="mb-1 text-neutral-800">Marie Dubois</h3>
            <p className="text-neutral-600 mb-4">UX/UI Designer</p>
            <button className="w-full px-6 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
              Contacter
            </button>
          </div>

          {/* Feature Card */}
          <div className="bg-gradient-to-br from-[#e8dcc8] to-[#d4c5b0] rounded-2xl p-8 text-neutral-800">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
              <Settings size={24} className="text-neutral-800" />
            </div>
            <h3 className="mb-2">Processus UX</h3>
            <p className="text-neutral-700">Méthodologie centrée utilisateur pour des solutions digitales optimales</p>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <div className="text-neutral-500 mb-1">Projets complétés</div>
                <div className="text-3xl text-neutral-800">48</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-1">Clients satisfaits</div>
                <div className="text-3xl text-neutral-800">32</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-1">Années d'expérience</div>
                <div className="text-3xl text-neutral-800">5+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section>
        <div className="mb-4 text-neutral-500">Navigation</div>
        <div className="space-y-4">
          {/* Desktop Nav */}
          <div className="bg-white rounded-2xl p-4">
            <nav className="flex items-center justify-between">
              <div className="text-neutral-800">Logo</div>
              <div className="hidden md:flex gap-8">
                <a href="#" className="text-neutral-800 hover:text-neutral-600 transition-colors">Projets</a>
                <a href="#" className="text-neutral-800 hover:text-neutral-600 transition-colors">À propos</a>
                <a href="#" className="text-neutral-800 hover:text-neutral-600 transition-colors">Contact</a>
              </div>
              <button className="px-6 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
                Connexion
              </button>
            </nav>
          </div>

          {/* Mobile Nav */}
          <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-neutral-800">Logo</div>
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                <Menu className="text-neutral-800" size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Icons & Actions */}
      <section>
        <div className="mb-4 text-neutral-500">Icônes et actions</div>
        <div className="bg-white p-8 rounded-2xl">
          <div className="flex gap-3 flex-wrap">
            <button className="w-12 h-12 bg-[#f5f3f0] hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors">
              <Heart size={20} className="text-neutral-800" />
            </button>
            <button className="w-12 h-12 bg-[#f5f3f0] hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors">
              <ShoppingCart size={20} className="text-neutral-800" />
            </button>
            <button className="w-12 h-12 bg-[#f5f3f0] hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors">
              <Bell size={20} className="text-neutral-800" />
            </button>
            <button className="w-12 h-12 bg-[#f5f3f0] hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors">
              <User size={20} className="text-neutral-800" />
            </button>
            <button className="w-12 h-12 bg-[#f5f3f0] hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors">
              <Settings size={20} className="text-neutral-800" />
            </button>
          </div>
        </div>
      </section>

      {/* Toggle & Checkbox */}
      <section>
        <div className="mb-4 text-neutral-500">Contrôles</div>
        <div className="bg-white p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-7 bg-neutral-800 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full"></div>
            </div>
            <span className="text-neutral-700">Notifications activées</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-7 bg-neutral-300 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full"></div>
            </div>
            <span className="text-neutral-500">Mode sombre</span>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-neutral-800 rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-neutral-700">J'accepte les conditions</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 border-2 border-neutral-300 rounded-md"></div>
              <span className="text-neutral-500">Recevoir la newsletter</span>
            </label>
          </div>
        </div>
      </section>

      {/* Tags & Badges */}
      <section>
        <div className="mb-4 text-neutral-500">Tags et badges</div>
        <div className="bg-white p-8 rounded-2xl">
          <div className="flex gap-2 flex-wrap">
            <span className="px-4 py-2 bg-[#f5f3f0] text-neutral-700 rounded-full">Design</span>
            <span className="px-4 py-2 bg-[#f5f3f0] text-neutral-700 rounded-full">UX Research</span>
            <span className="px-4 py-2 bg-[#f5f3f0] text-neutral-700 rounded-full">Prototypage</span>
            <span className="px-4 py-2 bg-neutral-800 text-white rounded-full">Featured</span>
            <span className="px-4 py-2 bg-[#d4c5b0] text-neutral-800 rounded-full">Nouveau</span>
            <span className="px-4 py-2 border-2 border-neutral-300 text-neutral-700 rounded-full">Mobile</span>
          </div>
        </div>
      </section>
    </div>
  );
}
