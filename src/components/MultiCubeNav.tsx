import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, User, Mail } from 'lucide-react';

const SECTIONS = [
  { id: 'projets', label: 'PROJETS', color: '#0077b6', icon: Briefcase },
  { id: 'about', label: 'À PROPOS', color: '#0096c7', icon: User },
  { id: 'contact', label: 'CONTACT', color: '#90e0ef', icon: Mail },
];

type StyleVariant = 'pixel' | 'minimal' | 'glass';
type LayoutVariant = 'grid' | 'circle' | 'line';

const SingleCube = ({ section, styleVariant }: { section: typeof SECTIONS[0], styleVariant: StyleVariant }) => {
  const isPixel = styleVariant === 'pixel';
  const isGlass = styleVariant === 'glass';

  // Cube faces logic - standard cube
  const faces = [
    { rotateY: 0, translateZ: 32 },
    { rotateY: 180, translateZ: 32 },
    { rotateY: 90, translateZ: 32 },
    { rotateY: -90, translateZ: 32 },
    { rotateX: 90, translateZ: 32 },
    { rotateX: -90, translateZ: 32 },
  ];

  const Icon = section.icon;

  return (
    <motion.div
      className="relative w-16 h-16 cursor-pointer group"
      whileHover={{ scale: 1.1, rotateX: 15, rotateY: 15 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {/* Inner Icon (Floating in center) */}
        <div 
            className="absolute inset-0 flex items-center justify-center" 
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Render icon twice to create a 3D-ish cross effect so it's visible from all angles */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateY(0deg) translateZ(0px)' }}>
                <Icon 
                  size={28} 
                  className={isPixel ? 'text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]' : 'text-white drop-shadow-md'} 
                  strokeWidth={2.5}
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateY(90deg) translateZ(0px)' }}>
                <Icon 
                  size={28} 
                  className={isPixel ? 'text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]' : 'text-white drop-shadow-md'} 
                  strokeWidth={2.5}
                />
            </div>
        </div>

        {/* Cube Faces */}
        {faces.map((face, i) => (
          <div
            key={i}
            className={`absolute inset-0 border ${
              isPixel ? 'border-white/40' : isGlass ? 'border-white/30' : 'border-white/20'
            }`}
            style={{
              // Make background semi-transparent in ALL modes to see the icon inside
              backgroundColor: isGlass 
                ? `${section.color}40` // Very transparent for glass
                : `${section.color}80`, // Semi-transparent for pixel/minimal
              transform: `rotateY(${face.rotateY || 0}deg) rotateX(${face.rotateX || 0}deg) translateZ(${face.translateZ}px)`,
              backfaceVisibility: 'visible', // Always visible to see through
              boxShadow: isPixel 
                ? 'inset 0 0 0 2px rgba(255,255,255,0.1)' 
                : isGlass 
                  ? 'backdrop-blur-[1px]' 
                  : 'none',
            }}
          />
        ))}
      </motion.div>
      
      {/* Label underneath */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
        <span className={`text-xs font-bold tracking-widest ${isPixel ? 'font-mono' : 'font-sans'} text-neutral-600 group-hover:text-blue-600 transition-colors`}>
          {section.label}
        </span>
      </div>
    </motion.div>
  );
};

export default function MultiCubeNav() {
  const [currentLayout, setCurrentLayout] = useState<LayoutVariant>('grid');
  const [currentStyle, setCurrentStyle] = useState<StyleVariant>('pixel');

  const getLayoutClasses = () => {
    switch (currentLayout) {
      case 'grid':
        return 'grid grid-cols-3 gap-20';
      case 'line':
        return 'flex flex-row gap-24';
      case 'circle':
        return 'relative h-[300px] w-[300px]'; 
      default:
        return 'grid grid-cols-3 gap-20';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[600px] gap-16">
      
      {/* Controls */}
      <div className="flex flex-col gap-4 items-center z-10 bg-white/50 p-4 rounded-xl backdrop-blur-sm border border-white/50 shadow-sm">
        <div className="flex gap-4">
          <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">Disposition</span>
          <button onClick={() => setCurrentLayout('grid')} className={`text-[10px] font-bold tracking-wider ${currentLayout === 'grid' ? 'text-blue-600' : 'text-neutral-400 hover:text-neutral-600'}`}>GRILLE</button>
          <button onClick={() => setCurrentLayout('circle')} className={`text-[10px] font-bold tracking-wider ${currentLayout === 'circle' ? 'text-blue-600' : 'text-neutral-400 hover:text-neutral-600'}`}>CERCLE</button>
          <button onClick={() => setCurrentLayout('line')} className={`text-[10px] font-bold tracking-wider ${currentLayout === 'line' ? 'text-blue-600' : 'text-neutral-400 hover:text-neutral-600'}`}>LIGNE</button>
        </div>
        <div className="w-full h-px bg-neutral-200/50" />
        <div className="flex gap-4">
          <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">Style</span>
          <button onClick={() => setCurrentStyle('pixel')} className={`text-[10px] font-bold tracking-wider ${currentStyle === 'pixel' ? 'text-blue-600' : 'text-neutral-400 hover:text-neutral-600'}`}>PIXEL</button>
          <button onClick={() => setCurrentStyle('minimal')} className={`text-[10px] font-bold tracking-wider ${currentStyle === 'minimal' ? 'text-blue-600' : 'text-neutral-400 hover:text-neutral-600'}`}>MINIMAL</button>
          <button onClick={() => setCurrentStyle('glass')} className={`text-[10px] font-bold tracking-wider ${currentStyle === 'glass' ? 'text-blue-600' : 'text-neutral-400 hover:text-neutral-600'}`}>GLASS</button>
        </div>
      </div>

      {/* Container */}
      <div className={`perspective-[1000px] transition-all duration-500 ${currentLayout === 'circle' ? 'flex items-center justify-center' : ''}`}>
        <div className={getLayoutClasses()}>
          {SECTIONS.map((section, index) => {
            // Circle Layout Logic
            if (currentLayout === 'circle') {
              const angle = (index / SECTIONS.length) * 360;
              const radius = 100; 
              return (
                <div
                  key={section.id}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`, 
                    marginTop: -32, 
                    marginLeft: -32, 
                  }}
                >
                  <SingleCube section={section} styleVariant={currentStyle} />
                </div>
              );
            }

            return (
              <div key={section.id}>
                <SingleCube section={section} styleVariant={currentStyle} />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
