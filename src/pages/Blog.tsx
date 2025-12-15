import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: "what-is-pre-leased-property",
    title: "What is Pre-Leased Property? Complete Guide for Investors",
    excerpt: "Understand the fundamentals of pre-leased property investment, how it works, and why it's becoming the preferred choice for smart investors seeking stable returns.",
    category: "Investment Basics",
    author: "Rajiv Mehta",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    featured: true,
  },
  {
    id: "roi-calculation-guide",
    title: "How to Calculate ROI on Commercial Property Investment",
    excerpt: "Learn the accurate methods to calculate return on investment for commercial properties, including rental yield, capital appreciation, and total returns.",
    category: "Financial Planning",
    author: "Priya Sharma",
    date: "December 8, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    featured: false,
  },
  {
    id: "best-cities-commercial-investment",
    title: "Top 5 Cities in India for Commercial Property Investment in 2024",
    excerpt: "Discover the best locations for commercial real estate investment in India, including emerging hotspots and established business districts.",
    category: "Market Analysis",
    author: "Amit Verma",
    date: "December 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=80",
    featured: true,
  },
  {
    id: "bank-leased-vs-retail-properties",
    title: "Bank Leased vs Retail Properties: Which is Better Investment?",
    excerpt: "A detailed comparison of bank-leased and retail commercial properties to help you make an informed investment decision based on your goals.",
    category: "Investment Comparison",
    author: "Sunita Reddy",
    date: "December 1, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    featured: false,
  },
  {
    id: "tax-benefits-commercial-property",
    title: "Tax Benefits of Investing in Commercial Real Estate",
    excerpt: "Explore the various tax deductions and benefits available to commercial property investors in India, including depreciation and interest deductions.",
    category: "Tax Planning",
    author: "Rajiv Mehta",
    date: "November 28, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    featured: false,
  },
  {
    id: "due-diligence-checklist",
    title: "Essential Due Diligence Checklist for Pre-Leased Properties",
    excerpt: "A comprehensive checklist covering legal, financial, and physical aspects to verify before investing in any pre-leased commercial property.",
    category: "Legal & Compliance",
    author: "Priya Sharma",
    date: "November 25, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    featured: true,
  },
];

const categories = [
  "All Posts",
  "Investment Basics",
  "Financial Planning",
  "Market Analysis",
  "Tax Planning",
  "Legal & Compliance",
];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Investment Insights & Guides
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Expert articles, market analysis, and investment guides to help you make informed decisions in commercial real estate
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-gold text-charcoal-dark"
                    : "glass-button text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-serif text-2xl text-foreground mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="glass-card overflow-hidden hover-lift h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-serif text-2xl text-foreground mb-8">All Articles</h2>
            <div className="grid gap-6">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group"
                >
                  <motion.article
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="glass-card p-6 flex flex-col md:flex-row gap-6 hover-lift"
                  >
                    <div className="md:w-64 h-40 md:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="text-gold text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 glass-card p-8 md:p-12 text-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Get Investment Insights in Your Inbox
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Subscribe to our newsletter for weekly market updates, new property listings, and expert investment tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-gold text-charcoal-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
