import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showSkip, setShowSkip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsAnimating(false);
    setShowSkip(false);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-dark overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-radial opacity-50" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          </div>

          {/* Door Frame */}
          <div className="relative w-[600px] h-[700px] max-w-[90vw] max-h-[80vh]">
            {/* Door frame border */}
            <div className="absolute inset-0 border-4 border-gold/30 rounded-t-3xl">
              {/* Top decorative arch */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-8 border-t-4 border-l-4 border-r-4 border-gold/30 rounded-t-full" />
            </div>

            {/* Left Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -105 }}
              transition={{ 
                duration: 1.8, 
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
              className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-charcoal to-charcoal-dark border-r border-gold/20 rounded-tl-3xl overflow-hidden"
            >
              {/* Door panel design */}
              <div className="absolute inset-4 border border-gold/20 rounded-lg">
                <div className="absolute inset-4 border border-gold/10 rounded-md" />
              </div>
              {/* Door handle */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-3 h-16 bg-gradient-gold rounded-full" />
              {/* Decorative gold lines */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/30" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/30" />
            </motion.div>

            {/* Right Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 105 }}
              transition={{ 
                duration: 1.8, 
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
              className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-charcoal to-charcoal-dark border-l border-gold/20 rounded-tr-3xl overflow-hidden"
            >
              {/* Door panel design */}
              <div className="absolute inset-4 border border-gold/20 rounded-lg">
                <div className="absolute inset-4 border border-gold/10 rounded-md" />
              </div>
              {/* Door handle */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-16 bg-gradient-gold rounded-full" />
              {/* Decorative gold lines */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/30" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/30" />
            </motion.div>

            {/* Center content (visible through doors) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center z-[-1]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center px-8"
              >
                <div className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Welcome to
                </div>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
                  Safal Reality
                </h1>
                <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-4" />
                <p className="text-muted-foreground text-sm tracking-wide">
                  Pre-Leased Property Experts
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Skip Button */}
          {showSkip && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 text-muted-foreground hover:text-foreground text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-2"
            >
              Skip Intro
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
