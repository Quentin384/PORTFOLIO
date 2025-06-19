import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';


// Fonction utilitaire pour concaténer des classes conditionnelles
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * SunMoonIcon
 * 
 * Icône animée représentant le soleil et la lune.
 * Méthodes exposées via ref :
 *  - startAnimation : lance l'animation
 *  - stopAnimation  : réinitialise à l'état normal
 * 
 * Props :
 *  - size     : taille en pixels de l'icône (défaut 28)
 *  - className: classes CSS supplémentaires
 *  - onMouseEnter, onMouseLeave : callbacks de survol si contrôlé
 */
const SunMoonIcon = forwardRef(({
  size = 28,
  className = '',
  onMouseEnter,
  onMouseLeave,
  ...props
}, ref) => {
  // Contrôleurs d'animation pour le soleil et la lune
  const sunControls = useAnimation();
  const moonControls = useAnimation();
  const isControlledRef = useRef(false);

  // Exposition des méthodes start/stop via la ref
  useImperativeHandle(ref, () => {
    isControlledRef.current = true;
    return {
      startAnimation: () => {
        sunControls.start('animate');
        moonControls.start('animate');
      },
      stopAnimation: () => {
        sunControls.start('normal');
        moonControls.start('normal');
      }
    };
  });

  // Animation au survol si non contrôlé par ref
  const handleMouseEnter = useCallback((e) => {
    if (!isControlledRef.current) {
      sunControls.start('animate');
      moonControls.start('animate');
    } else if (onMouseEnter) {
      onMouseEnter(e);
    }
  }, [sunControls, moonControls, onMouseEnter]);

  const handleMouseLeave = useCallback((e) => {
    if (!isControlledRef.current) {
      sunControls.start('normal');
      moonControls.start('normal');
    } else if (onMouseLeave) {
      onMouseLeave(e);
    }
  }, [sunControls, moonControls, onMouseLeave]);

  // Variantes d'animation
const sunVariants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, -5, 5, -2, 2, 0],
    transition: { duration: 0.8, ease: 'easeInOut' }
  }
};

const moonVariants = {
  normal: { opacity: 1 },
  animate: (i) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.05, duration: 0.15 }
  })
};

return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Partie soleil/lune */}
        <motion.g variants={sunVariants} animate={sunControls} initial="normal">
          <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
        </motion.g>

        {/* Rayons et anneaux animés */}
        {[
          'M12 2v2', 'M12 20v2',
          'm4.9 4.9 1.4 1.4', 'm17.7 17.7 1.4 1.4',
          'M2 12h2', 'M20 12h2',
          'm6.3 17.7-1.4 1.4', 'm19.1 4.9-1.4 1.4'
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            variants={moonVariants}
            custom={index + 1}
            animate={moonControls}
            initial="normal"
          />
        ))}
      </svg>
    </div>
  );
});

SunMoonIcon.displayName = 'SunMoonIcon';



export default SunMoonIcon;
