import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, PanInfo } from 'motion/react';

const FACES = [
  { id: 'front', label: 'PROJETS', color: '#0077b6', rotateY: 0, rotateX: 0, translateZ: 150 },
  { id: 'back', label: 'À PROPOS', color: '#0096c7', rotateY: 180, rotateX: 0, translateZ: 150 },
  { id: 'right', label: 'SERVICES', color: '#023e8a', rotateY: 90, rotateX: 0, translateZ: 150 },
  { id: 'left', label: 'BLOG', color: '#48cae4', rotateY: -90, rotateX: 0, translateZ: 150 },
  { id: 'top', label: 'CONTACT', color: '#90e0ef', rotateY: 0, rotateX: 90, translateZ: 150 },
  { id: 'bottom', label: 'SOCIAL', color: '#03045e', rotateY: 0, rotateX: -90, translateZ: 150 },
];

const PixelBlock = ({ color }: { color: string }) => (
  <div 
    className="w-full h-full border-2 border-black/10"
    style={{ 
      backgroundColor: color,
      boxShadow: 'inset -2px -2px 0px rgba(0,0,0,0.1), inset 2px 2px 0px rgba(255,255,255,0.2)'
    }}
  />
);

export default function PixelRubikMenu() {
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 150, damping: 20 });

  const handleDrag = (_: any, info: PanInfo) => {
    x.set(x.get() + info.delta.x * 0.5);
    y.set(y.get() - info.delta.y * 0.5);
  };

  // Styles for pixel art text
  const pixelFontStyle = {
    fontFamily: "'Courier New', Courier, monospace", // Fallback for pixel look
    letterSpacing: '0.1em',
    textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
    imageRendering: 'pixelated' as const,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-full w-full min-h-[600px]">
      <div className="relative flex items-center justify-center" style={{ perspective: '1000px' }}>
        <motion.div
          className="relative w-[300px] h-[300px]"
          style={{ 
            transformStyle: 'preserve-3d',
            rotateX,
            rotateY,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onPan={handleDrag}
        >
          {FACES.map((face) => (
            <div
              key={face.id}
              className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-1"
              style={{
                transform: `rotateY(${face.rotateY}deg) rotateX(${face.rotateX}deg) translateZ(${face.translateZ}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Pixel Art Border/Background is transparent now to see through edges */}
              
              {/* Render 9 blocks for the grid */}
              {Array.from({ length: 9 }).map((_, i) => {
                 // Center block (index 4) contains the label
                 if (i === 4) {
                   return (
                     <div key={i} className="relative col-span-1 row-span-1" style={{ backfaceVisibility: 'hidden' }}>
                       <PixelBlock color={face.color} />
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                         {/* We might want the label to span across blocks? 
                             Actually, a real Rubik's cube moves. But this is a menu.
                             Let's put the label on top of the whole face using absolute positioning, 
                             but "under" the grid lines visually? Or just on top.
                         */}
                       </div>
                     </div>
                   );
                 }
                 return (
                   <div key={i} className="col-span-1 row-span-1" style={{ backfaceVisibility: 'hidden' }}>
                     <PixelBlock color={face.color} />
                   </div>
                 );
              })}

              {/* Label overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={pixelFontStyle}
              >
                <span className="bg-white/80 px-2 py-1 border-2 border-black text-black font-bold text-lg tracking-widest backdrop-blur-sm">
                  {face.label}
                </span>
              </div>
              
              {/* Clickable Interaction */}
              <button
                className="absolute inset-0 w-full h-full bg-transparent cursor-pointer outline-none focus:ring-4 ring-blue-500/50 opacity-0 hover:opacity-100 transition-opacity"
                onClick={() => !isDragging && console.log(`Navigate to ${face.label}`)}
                aria-label={`Go to ${face.label}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center space-y-2">
      </div>
    </div>
  );
}
