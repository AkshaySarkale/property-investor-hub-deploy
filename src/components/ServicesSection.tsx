import { motion } from "framer-motion";
import { 
  Building2, 
  Calculator, 
  FileText, 
  Users, 
  ArrowUpRight,
  ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Pre-Leased Property Investment",
    description: "Access curated portfolio of premium pre-leased commercial properties across India's major cities.",
    features: ["Verified Tenants", "Legal Documentation", "Due Diligence"],
  },
  {
    icon: Calculator,
    title: "ROI Analysis & Advisory",
    description: "Get comprehensive financial analysis and personalized investment recommendations based on your goals.",
    features: ["Financial Modeling", "Risk Assessment", "Portfolio Strategy"],
  },
  {
    icon: FileText,
    title: "Legal & Documentation",
    description: "End-to-end legal support including title verification, agreement drafting, and registration assistance.",
    features: ["Title Search", "Agreement Drafting", "Registration Support"],
  },
  {
    icon: Users,
    title: "Property Resale Assistance",
    description: "When you're ready to exit, we help you find qualified buyers and maximize your returns.",
    features: ["Buyer Network", "Valuation Services", "Exit Planning"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-charcoal-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your commercial real estate investment journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover-lift relative overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-4">
                    <ArrowUpRight className="w-5 h-5 text-gold" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-3 h-3 text-gold" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8 md:p-12 text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Schedule a free consultation with our investment experts and discover the best properties for your portfolio.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-charcoal-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Book Free Consultation
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
