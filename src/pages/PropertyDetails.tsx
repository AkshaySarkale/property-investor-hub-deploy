import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  Building, 
  Calendar, 
  TrendingUp, 
  Download,
  Phone,
  ChevronLeft,
  ChevronRight,
  Calculator,
  FileText,
  Shield,
  Clock,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookSiteVisitModal from "@/components/BookSiteVisitModal";

// Mock property data - in production, fetch from API/database
const properties = [
  {
    id: "1",
    name: "Premium Bank Leased Property",
    location: "Andheri West, Mumbai",
    fullAddress: "Plot 45, Commercial Complex, Andheri West, Mumbai - 400058",
    tenant: "HDFC Bank",
    tenantType: "Bank",
    area: "3,500 sq.ft",
    builtUpArea: "4,200 sq.ft",
    leaseRemaining: "8 Years",
    leaseStart: "2020",
    leaseEnd: "2032",
    monthlyRent: 280000,
    annualEscalation: "5%",
    roi: 8.2,
    price: 41000000,
    securityDeposit: "12 months rent",
    lockInPeriod: "5 Years",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&q=80",
    ],
    description: "Premium ground floor commercial space leased to HDFC Bank in one of Mumbai's most sought-after commercial districts. This property offers excellent visibility, high footfall, and stable long-term returns backed by India's leading private sector bank.",
    highlights: [
      "Prime corner location with excellent visibility",
      "Triple A tenant with strong credit rating",
      "Long lease tenure with 5% annual escalation",
      "Well-maintained property with modern amenities",
      "High rental yield compared to market average",
      "Easy exit with strong investor demand",
    ],
    amenities: [
      "24/7 Security",
      "Power Backup",
      "Parking Space",
      "Fire Safety",
      "CCTV Surveillance",
      "Elevator Access",
    ],
  },
  {
    id: "2",
    name: "Corporate Office Space",
    location: "Whitefield, Bangalore",
    fullAddress: "Tower B, Tech Park, Whitefield Main Road, Bangalore - 560066",
    tenant: "Infosys Ltd",
    tenantType: "IT",
    area: "5,200 sq.ft",
    builtUpArea: "6,100 sq.ft",
    leaseRemaining: "6 Years",
    leaseStart: "2021",
    leaseEnd: "2030",
    monthlyRent: 390000,
    annualEscalation: "5%",
    roi: 7.8,
    price: 60000000,
    securityDeposit: "10 months rent",
    lockInPeriod: "3 Years",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&q=80",
    ],
    description: "Modern office space in Bangalore's premier IT corridor, leased to Infosys - one of India's largest IT companies. The property is located in a Grade A tech park with world-class amenities and excellent connectivity.",
    highlights: [
      "Located in Grade A tech park",
      "Marquee IT tenant with global presence",
      "Excellent metro and road connectivity",
      "Modern infrastructure and amenities",
      "Strong appreciation potential",
      "Consistent rental track record",
    ],
    amenities: [
      "24/7 Security",
      "Power Backup",
      "Cafeteria",
      "Gym & Recreation",
      "Conference Rooms",
      "High-speed Internet",
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // ROI Calculator state
  const [investmentAmount, setInvestmentAmount] = useState(41000000);
  const [expectedROI, setExpectedROI] = useState(8.2);
  const [holdingPeriod, setHoldingPeriod] = useState(5);

  const property = properties.find(p => p.id === id) || properties[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  // ROI Calculations
  const annualRent = property.monthlyRent * 12;
  const totalRentalIncome = annualRent * holdingPeriod;
  const estimatedAppreciation = investmentAmount * 0.05 * holdingPeriod; // 5% annual appreciation
  const totalReturns = totalRentalIncome + estimatedAppreciation;
  const totalValue = investmentAmount + totalReturns;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/#properties" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Properties
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <div className="aspect-[16/10] relative">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 to-transparent" />
                  
                  {/* Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-button rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-button rounded-full"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>

                  {/* ROI Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gold rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-charcoal-dark" />
                      <span className="font-bold text-charcoal-dark">{property.roi}% ROI</span>
                    </div>
                  </div>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "w-8 bg-gold" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mt-4">
                  {property.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Property Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm inline-block mb-3">
                      {property.tenant}
                    </div>
                    <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                      {property.name}
                    </h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-gold" />
                      {property.fullAddress}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Price</div>
                    <div className="text-3xl font-serif text-gold">{formatCurrency(property.price)}</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {property.description}
                </p>

                {/* Key Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Building, label: "Carpet Area", value: property.area },
                    { icon: Calendar, label: "Lease Left", value: property.leaseRemaining },
                    { icon: TrendingUp, label: "Annual ROI", value: `${property.roi}%` },
                    { icon: Clock, label: "Lock-in", value: property.lockInPeriod },
                  ].map((item) => (
                    <div key={item.label} className="p-4 bg-secondary rounded-xl">
                      <item.icon className="w-5 h-5 text-gold mb-2" />
                      <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                      <div className="font-semibold text-foreground">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <h3 className="font-serif text-xl text-foreground mb-4">Property Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {property.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <h3 className="font-serif text-xl text-foreground mb-4">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Lease Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8"
              >
                <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gold" />
                  Lease Agreement Timeline
                </h3>
                
                <div className="relative">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-gold"
                      style={{ 
                        width: `${((12 - parseInt(property.leaseRemaining)) / 12) * 100}%` 
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-3 text-sm">
                    <div>
                      <div className="text-foreground font-medium">Lease Start</div>
                      <div className="text-muted-foreground">{property.leaseStart}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gold font-medium">Current</div>
                      <div className="text-muted-foreground">2024</div>
                    </div>
                    <div className="text-right">
                      <div className="text-foreground font-medium">Lease End</div>
                      <div className="text-muted-foreground">{property.leaseEnd}</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-secondary rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">Monthly Rent</div>
                    <div className="text-xl font-semibold text-foreground">
                      {formatCurrency(property.monthlyRent)}
                    </div>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">Annual Escalation</div>
                    <div className="text-xl font-semibold text-gold">{property.annualEscalation}</div>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">Security Deposit</div>
                    <div className="text-xl font-semibold text-foreground">{property.securityDeposit}</div>
                  </div>
                </div>
              </motion.div>

              {/* ROI Calculator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-8"
              >
                <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-gold" />
                  ROI Calculator
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Investment Amount</span>
                        <span className="text-gold font-medium">{formatCurrency(investmentAmount)}</span>
                      </label>
                      <input
                        type="range"
                        min={10000000}
                        max={100000000}
                        step={1000000}
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full"
                      />
                    </div>

                    <div>
                      <label className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Expected ROI</span>
                        <span className="text-gold font-medium">{expectedROI}%</span>
                      </label>
                      <input
                        type="range"
                        min={5}
                        max={12}
                        step={0.1}
                        value={expectedROI}
                        onChange={(e) => setExpectedROI(Number(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full"
                      />
                    </div>

                    <div>
                      <label className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Holding Period</span>
                        <span className="text-gold font-medium">{holdingPeriod} Years</span>
                      </label>
                      <input
                        type="range"
                        min={1}
                        max={15}
                        step={1}
                        value={holdingPeriod}
                        onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full"
                      />
                    </div>
                  </div>

                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="text-sm text-muted-foreground mb-4">Projected Returns</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rental Income ({holdingPeriod} yrs)</span>
                        <span className="text-foreground font-medium">{formatCurrency(totalRentalIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Est. Appreciation</span>
                        <span className="text-foreground font-medium">{formatCurrency(estimatedAppreciation)}</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Returns</span>
                        <span className="text-gold font-bold text-lg">{formatCurrency(totalReturns)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Final Value</span>
                        <span className="text-foreground font-bold text-xl">{formatCurrency(totalValue)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-8"
              >
                <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  Location
                </h3>
                <div className="aspect-[16/9] bg-secondary rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold/50 mx-auto mb-3" />
                    <p className="text-muted-foreground">{property.fullAddress}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Quick Info Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card p-6"
                >
                  <div className="text-center mb-6">
                    <div className="text-sm text-muted-foreground mb-1">Property Price</div>
                    <div className="text-4xl font-serif text-gold mb-2">{formatCurrency(property.price)}</div>
                    <div className="text-sm text-muted-foreground">
                      Monthly Rent: <span className="text-foreground">{formatCurrency(property.monthlyRent)}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="w-full py-4 bg-gradient-gold text-charcoal-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Book Site Visit
                    </button>
                    <button className="w-full py-4 glass-button text-foreground font-medium rounded-lg flex items-center justify-center gap-2 hover:border-gold/30">
                      <Download className="w-5 h-5" />
                      Download Brochure
                    </button>
                    <a
                      href="tel:+919876543210"
                      className="w-full py-4 glass-button text-foreground font-medium rounded-lg flex items-center justify-center gap-2 hover:border-gold/30"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 inline mr-1" />
                    100% Verified Property
                  </div>
                </motion.div>

                {/* Investment Highlights */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-card p-6"
                >
                  <h4 className="font-serif text-lg text-foreground mb-4">Investment Summary</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Annual Rental", value: formatCurrency(annualRent) },
                      { label: "ROI", value: `${property.roi}%` },
                      { label: "Escalation", value: property.annualEscalation },
                      { label: "Tenant", value: property.tenant },
                      { label: "Lease Left", value: property.leaseRemaining },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Book Site Visit Modal */}
      <BookSiteVisitModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        propertyName={property.name}
      />
    </div>
  );
};

export default PropertyDetails;
