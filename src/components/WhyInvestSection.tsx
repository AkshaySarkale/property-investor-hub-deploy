import { motion } from "framer-motion";
import { 
  Wallet, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  FileCheck, 
  RefreshCcw 
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Fixed Monthly Income",
    description: "Receive guaranteed rental income directly to your bank account every month, providing stable cash flow.",
  },
  {
    icon: ShieldCheck,
    title: "Low-Risk Investment",
    description: "Pre-leased properties come with existing tenants and legal agreements, minimizing investment risks.",
  },
  {
    icon: Clock,
    title: "Long-Term Lease Security",
    description: "Most properties have 5-15 year lease agreements with reputed corporates and banks.",
  },
  {
    icon: TrendingUp,
    title: "Attractive ROI",
    description: "Earn 7-9% annual returns, significantly higher than traditional savings and fixed deposits.",
  },
  {
    icon: FileCheck,
    title: "Tax Benefits",
    description: "Enjoy tax deductions on property depreciation, loan interest, and maintenance expenses.",
  },
  {
    icon: RefreshCcw,
    title: "Ready Returns from Day One",
    description: "Start earning immediately after purchase - no waiting period for tenant search or setup.",
  },
];

const WhyInvestSection = () => {
  return (
    <section id="why-invest" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-gold/5 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-gold/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
              Smart Investment
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Why Invest in<br />
              <span className="gold-gradient">Pre-Leased Property?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pre-leased commercial properties offer a unique combination of stability, 
              high returns, and low risk. Here's why smart investors choose this asset class.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent" />
              
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-serif text-gold mb-4">7-9%</div>
                <div className="text-xl text-foreground mb-2">Annual Returns</div>
                <p className="text-muted-foreground">
                  Compare this to FD rates of 5-6% and realize the power of smart real estate investment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover-lift cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-charcoal-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Your Investment Journey
            <TrendingUp className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
