import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Business Owner",
    location: "Mumbai",
    content: "Investing in pre-leased property through Safal Reality was the best financial decision I made. The 8.5% ROI and hassle-free income is exactly what I was looking for as a passive investor.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    role: "Medical Professional",
    location: "Bangalore",
    content: "As a doctor with limited time for investment research, Safal Reality's expert guidance helped me build a strong real estate portfolio. The monthly rental income is consistent and reliable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "IT Professional",
    location: "Delhi NCR",
    content: "The transparency and professionalism at Safal Reality is unmatched. They helped me invest in two bank-leased properties that now generate ₹5 lakhs monthly. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    role: "Entrepreneur",
    location: "Hyderabad",
    content: "From property selection to documentation, the team handled everything seamlessly. The ROI calculator tool helped me understand exactly what to expect. Very satisfied with my investment.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
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
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            What Our Investors Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join 500+ satisfied investors who trust Safal Reality for their commercial property investments
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">
            {/* Quote icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/20" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8 font-serif">
                  "{current.content}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 mb-4"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{current.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {current.role} • {current.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-button rounded-full hover:border-gold/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-button rounded-full hover:border-gold/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-gold" : "bg-gold/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <p className="text-center text-muted-foreground text-sm mb-8">
            Trusted by Leading Brands as Tenants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {["HDFC Bank", "ICICI Bank", "Axis Bank", "Infosys", "TCS", "Reliance"].map((brand) => (
              <div
                key={brand}
                className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
