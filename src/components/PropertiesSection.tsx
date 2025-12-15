import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Building, Calendar, Download, ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Premium Bank Leased Property",
    location: "Andheri West, Mumbai",
    tenant: "HDFC Bank",
    tenantType: "Bank",
    area: "3,500 sq.ft",
    leaseRemaining: "8 Years",
    monthlyRent: "₹2,80,000",
    roi: "8.2%",
    price: "₹4.10 Cr",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    name: "Corporate Office Space",
    location: "Whitefield, Bangalore",
    tenant: "Infosys Ltd",
    tenantType: "IT",
    area: "5,200 sq.ft",
    leaseRemaining: "6 Years",
    monthlyRent: "₹3,90,000",
    roi: "7.8%",
    price: "₹6.00 Cr",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 3,
    name: "Retail Showroom",
    location: "MG Road, Pune",
    tenant: "Reliance Retail",
    tenantType: "Retail",
    area: "4,000 sq.ft",
    leaseRemaining: "9 Years",
    monthlyRent: "₹3,20,000",
    roi: "8.5%",
    price: "₹4.50 Cr",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
  },
  {
    id: 4,
    name: "Commercial Complex Unit",
    location: "Gurgaon, Delhi NCR",
    tenant: "Axis Bank",
    tenantType: "Bank",
    area: "2,800 sq.ft",
    leaseRemaining: "7 Years",
    monthlyRent: "₹2,24,000",
    roi: "7.9%",
    price: "₹3.40 Cr",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 5,
    name: "IT Park Office Space",
    location: "HITEC City, Hyderabad",
    tenant: "TCS",
    tenantType: "IT",
    area: "6,500 sq.ft",
    leaseRemaining: "5 Years",
    monthlyRent: "₹4,55,000",
    roi: "8.0%",
    price: "₹6.80 Cr",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
  },
  {
    id: 6,
    name: "Standalone Bank Branch",
    location: "Koramangala, Bangalore",
    tenant: "ICICI Bank",
    tenantType: "Bank",
    area: "3,200 sq.ft",
    leaseRemaining: "10 Years",
    monthlyRent: "₹2,88,000",
    roi: "8.8%",
    price: "₹3.90 Cr",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80",
  },
];

const filters = ["All", "Bank", "IT", "Retail"];

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null);

  const filteredProperties = properties.filter(
    (property) => activeFilter === "All" || property.tenantType === activeFilter
  );

  return (
    <section id="properties" className="py-24 bg-charcoal-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
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
            Investment Opportunities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Premium Pre-Leased Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked commercial properties with verified tenants and assured rental income
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-gold text-charcoal-dark"
                  : "glass-button text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
              className="glass-card overflow-hidden group hover-lift"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/20 to-transparent" />
                
                {/* ROI Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredProperty === property.id ? 1 : 0,
                    scale: hoveredProperty === property.id ? 1 : 0.8
                  }}
                  className="absolute top-4 right-4 px-4 py-2 bg-gold rounded-lg"
                >
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-charcoal-dark" />
                    <span className="font-bold text-charcoal-dark">{property.roi} ROI</span>
                  </div>
                </motion.div>

                {/* Tenant Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm rounded-lg border border-white/10">
                    <span className="text-sm text-gold">{property.tenant}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2">{property.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4 text-gold" />
                  {property.location}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-gold/70" />
                    <span className="text-sm text-muted-foreground">{property.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold/70" />
                    <span className="text-sm text-muted-foreground">{property.leaseRemaining}</span>
                  </div>
                </div>

                {/* Price and Rent */}
                <div className="flex justify-between items-end pt-4 border-t border-border/50">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Monthly Rent</div>
                    <div className="text-gold font-semibold">{property.monthlyRent}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">Price</div>
                    <div className="text-xl font-serif text-foreground">{property.price}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <Link 
                    to={`/property/${property.id}`}
                    className="flex-1 py-3 bg-gradient-gold text-charcoal-dark font-medium rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="p-3 glass-button rounded-lg hover:border-gold/30 transition-colors">
                    <Download className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 glass-button text-foreground font-medium rounded-lg inline-flex items-center gap-2 hover:border-gold/30 transition-all">
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;
