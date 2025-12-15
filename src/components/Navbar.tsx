import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "Why Invest", href: "#why-invest" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-charcoal-dark/90 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +91 98765 43210
            </a>
            <a href="mailto:info@safalreality.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@safalreality.com
            </a>
          </div>
          <div className="text-muted-foreground">
            <span className="text-gold">Trusted</span> by 500+ Investors
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "top-0 md:top-0 bg-charcoal-dark/95 backdrop-blur-xl border-b border-border/50 py-4" 
            : "top-0 md:top-10 bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="font-serif font-bold text-charcoal-dark text-xl">S</span>
            </div>
            <div>
              <span className="font-serif text-xl text-foreground">Safal</span>
              <span className="font-serif text-xl text-gold ml-1">Reality</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-gold text-charcoal-dark font-medium text-sm rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Get ROI Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-charcoal-dark/98 backdrop-blur-xl pt-24 lg:hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-foreground hover:text-gold transition-colors py-2 border-b border-border/30"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-6 py-3 bg-gradient-gold text-charcoal-dark font-medium text-center rounded-lg"
                >
                  Get ROI Consultation
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
