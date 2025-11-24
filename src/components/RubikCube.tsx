import { motion } from 'motion/react';

export default function RubikCube() {
  // Grille 3x3 pour chaque face du Rubik's Cube
  const createGrid = (baseColor: string) => {
    return (
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{ 
              backgroundColor: baseColor,
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center w-full h-full" style={{ perspective: '1200px' }}>
      <motion.div
        className="relative w-[400px] h-[400px]"
        style={{ 
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Front Face - Rouge/Beige foncé */}
        <div 
          className="absolute inset-0 bg-[#c9b89f]"
          style={{ 
            transform: 'translateZ(200px)',
            backfaceVisibility: 'hidden',
            border: '2px solid rgba(0,0,0,0.2)'
          }}
        >
          {createGrid('#c9b89f')}
        </div>

        {/* Back Face - Orange/Beige clair */}
        <div 
          className="absolute inset-0 bg-[#e8dcc8]"
          style={{ 
            transform: 'translateZ(-200px) rotateY(180deg)',
            backfaceVisibility: 'hidden',
            border: '2px solid rgba(0,0,0,0.2)'
          }}
        >
          {createGrid('#e8dcc8')}
        </div>

        {/* Right Face - Bleu/Gris bleuté */}
        <div 
          className="absolute inset-0 bg-[#a8b5b8]"
          style={{ 
            transform: 'rotateY(90deg) translateZ(200px)',
            backfaceVisibility: 'hidden',
            border: '2px solid rgba(0,0,0,0.2)'
          }}
        >
          {createGrid('#a8b5b8')}
        </div>

        {/* Left Face - Vert/Gris verdâtre */}
        <div 
          className="absolute inset-0 bg-[#b5b8a8]"
          style={{ 
            transform: 'rotateY(-90deg) translateZ(200px)',
            backfaceVisibility: 'hidden',
            border: '2px solid rgba(0,0,0,0.2)'
          }}
        >
          {createGrid('#b5b8a8')}
        </div>

        {/* Top Face - Jaune/Beige doré */}
        <div 
          className="absolute inset-0 bg-[#d4c5b0]"
          style={{ 
            transform: 'rotateX(90deg) translateZ(200px)',
            backfaceVisibility: 'hidden',
            border: '2px solid rgba(0,0,0,0.2)'
          }}
        >
          {createGrid('#d4c5b0')}
        </div>

        {/* Bottom Face - Blanc/Gris très clair */}
        <div 
          className="absolute inset-0 bg-[#f5f3f0]"
          style={{ 
            transform: 'rotateX(-90deg) translateZ(200px)',
            backfaceVisibility: 'hidden',
            border: '2px solid rgba(0,0,0,0.2)'
          }}
        >
          {createGrid('#f5f3f0')}
        </div>

        {/* Bords noirs pour accentuer l'effet Rubik's Cube */}
        {/* Edges verticaux */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`v-${i}`}
            className="absolute w-1 h-full bg-neutral-900"
            style={{
              transform: `rotateY(${i * 90}deg) translateZ(200px)`,
              left: i % 2 === 0 ? 0 : 'auto',
              right: i % 2 === 1 ? 0 : 'auto',
            }}
          />
        ))}
      </motion.div>

      {/* Instructions */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
        <p className="text-sm text-neutral-700">Animation en boucle - Enregistrez l'écran pour exporter</p>
      </div>
    </div>
  );
}
