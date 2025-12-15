import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", investment: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />
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
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Start Your Investment Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation with our investment experts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Request a Callback
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Investment Budget
                  </label>
                  <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="1-3cr">₹1 - 3 Crore</option>
                    <option value="3-5cr">₹3 - 5 Crore</option>
                    <option value="5-10cr">₹5 - 10 Crore</option>
                    <option value="10cr+">₹10 Crore+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your investment goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-gold text-charcoal-dark font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-charcoal-dark/30 border-t-charcoal-dark rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Office Address</div>
                    <div className="text-muted-foreground">
                      123, Commercial Tower, BKC,<br />
                      Mumbai - 400051, Maharashtra
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Phone</div>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-gold transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Email</div>
                    <a href="mailto:info@safalreality.com" className="text-muted-foreground hover:text-gold transition-colors">
                      info@safalreality.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Working Hours</div>
                    <div className="text-muted-foreground">
                      Mon - Sat: 10:00 AM - 7:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass-card p-8">
              <h4 className="font-serif text-xl text-foreground mb-4">Why Choose Us?</h4>
              <div className="space-y-3">
                {[
                  "15+ years of industry experience",
                  "500+ satisfied investors",
                  "₹500 Cr+ properties sold",
                  "Transparent & hassle-free process",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in pre-leased properties."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg animate-pulse-gold hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  );
};

export default ContactSection;
