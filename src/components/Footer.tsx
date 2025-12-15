import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "Why Invest", href: "#why-invest" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const propertyTypes = [
    "Bank Leased Properties",
    "IT Park Offices",
    "Retail Showrooms",
    "Corporate Offices",
    "Commercial Complexes",
  ];

  const cities = [
    "Mumbai",
    "Bangalore",
    "Pune",
    "Delhi NCR",
    "Hyderabad",
    "Chennai",
  ];

  return (
    <footer className="bg-charcoal pt-20 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-serif font-bold text-charcoal-dark text-xl">S</span>
              </div>
              <div>
                <span className="font-serif text-xl text-foreground">Safal</span>
                <span className="font-serif text-xl text-gold ml-1">Reality</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              India's trusted partner for pre-leased commercial property investments. 
              We help investors build wealth through carefully curated properties with assured returns.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Property Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg text-foreground mb-6">Property Types</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <a
                    href="#properties"
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123, Commercial Tower, BKC,<br />
                  Mumbai - 400051
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@safalreality.com" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  info@safalreality.com
                </a>
              </li>
            </ul>

            {/* Cities */}
            <div className="mt-6">
              <h5 className="text-sm text-foreground mb-3">We Operate In</h5>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 Safal Reality. All rights reserved. | 
            <a href="#" className="hover:text-gold transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-gold transition-colors ml-1">Terms of Service</a>
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
