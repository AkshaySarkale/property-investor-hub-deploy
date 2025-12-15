import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  CheckCircle,
  Tag,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

// Mock blog data
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}> = {
  "what-is-pre-leased-property": {
    title: "What is Pre-Leased Property? Complete Guide for Investors",
    excerpt: "Understand the fundamentals of pre-leased property investment, how it works, and why it's becoming the preferred choice for smart investors seeking stable returns.",
    category: "Investment Basics",
    author: "Rajiv Mehta",
    authorRole: "Senior Investment Advisor",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    content: [
      "Pre-leased property, also known as pre-rented property, is a commercial real estate asset that comes with an existing tenant and an active lease agreement. This means that from the day of purchase, you start earning rental income without the hassle of finding tenants.",
      "## Why Invest in Pre-Leased Properties?",
      "The primary advantage of pre-leased properties is the elimination of vacancy risk. Traditional commercial properties may sit empty for months while you search for suitable tenants. With pre-leased properties, rental income begins immediately upon purchase.",
      "### Key Benefits:",
      "**1. Assured Rental Income**: The property comes with a signed lease agreement, typically ranging from 5 to 15 years, guaranteeing steady monthly income.",
      "**2. Lower Risk**: Having a reputed tenant like a bank or IT company significantly reduces investment risk. These tenants have strong credit ratings and rarely default on payments.",
      "**3. Annual Escalation**: Most lease agreements include an annual rental escalation clause (typically 5%), ensuring your income grows over time.",
      "**4. Tax Benefits**: Commercial property investors can claim depreciation benefits and deduct expenses like property tax, maintenance, and loan interest.",
      "## Types of Pre-Leased Properties",
      "**Bank-Leased Properties**: These are considered the safest as banks are highly reliable tenants with excellent credit ratings. HDFC, ICICI, and Axis Bank are common tenants.",
      "**IT/Corporate Office Spaces**: Properties leased to IT giants like Infosys, TCS, or Wipro offer good returns and long-term stability.",
      "**Retail Spaces**: Shopping centers and standalone retail properties leased to brands like Reliance Retail, Big Bazaar, or D-Mart.",
      "## How to Evaluate a Pre-Leased Property",
      "Before investing, consider these crucial factors:",
      "- **Tenant Quality**: Research the tenant's financial health and track record.",
      "- **Lease Terms**: Check the remaining lease period, lock-in clause, and escalation terms.",
      "- **Location**: Properties in prime commercial areas command better rentals and appreciation.",
      "- **ROI Analysis**: Calculate the gross and net yield to ensure attractive returns.",
      "## Conclusion",
      "Pre-leased commercial properties offer a compelling investment opportunity for those seeking stable, passive income. With the right due diligence and property selection, investors can achieve returns of 7-9% annually, significantly outperforming traditional investment options like fixed deposits.",
    ],
  },
  "roi-calculation-guide": {
    title: "How to Calculate ROI on Commercial Property Investment",
    excerpt: "Learn the accurate methods to calculate return on investment for commercial properties, including rental yield, capital appreciation, and total returns.",
    category: "Financial Planning",
    author: "Priya Sharma",
    authorRole: "Financial Analyst",
    date: "December 8, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    content: [
      "Understanding how to calculate Return on Investment (ROI) is crucial for any commercial property investor. This guide will walk you through the key metrics and formulas used to evaluate investment performance.",
      "## Basic ROI Formula",
      "The simplest ROI calculation is: **ROI = (Annual Rental Income / Property Cost) × 100**",
      "For example, if a property costs ₹4 Crore and generates annual rent of ₹32 Lakhs: ROI = (32,00,000 / 4,00,00,000) × 100 = **8%**",
      "## Gross Rental Yield vs Net Rental Yield",
      "**Gross Rental Yield** doesn't account for expenses: Annual Rent ÷ Property Price × 100",
      "**Net Rental Yield** is more accurate as it deducts expenses: (Annual Rent - Annual Expenses) ÷ Property Price × 100",
      "### Common Expenses to Consider:",
      "- Property Tax",
      "- Maintenance and repairs",
      "- Insurance",
      "- Property management fees",
      "- Vacancy allowance",
      "## Total Return Calculation",
      "For a complete picture, consider both rental income and capital appreciation:",
      "**Total Return = Rental Yield + Capital Appreciation**",
      "If your property appreciates 5% annually and yields 8% rent, total return = 13%",
      "## Pro Tips for Better ROI",
      "1. Negotiate lower purchase prices for better yields",
      "2. Choose properties with escalation clauses",
      "3. Consider locations with high appreciation potential",
      "4. Factor in all costs including registration and brokerage",
    ],
  },
};

const relatedPosts = [
  {
    id: "roi-calculation-guide",
    title: "How to Calculate ROI on Commercial Property Investment",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
    readTime: "6 min",
  },
  {
    id: "best-cities-commercial-investment",
    title: "Top 5 Cities in India for Commercial Property Investment",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&q=80",
    readTime: "10 min",
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const post = blogPosts[id || "what-is-pre-leased-property"] || blogPosts["what-is-pre-leased-property"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast({ title: "Link copied to clipboard!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = (content: string[]) => {
    return content.map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="font-serif text-2xl md:text-3xl text-foreground mt-10 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-3">
            {paragraph.replace("### ", "")}
          </h3>
        );
      }
      if (paragraph.startsWith("- ")) {
        return (
          <li key={index} className="text-muted-foreground ml-6 mb-2 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
            {paragraph.replace("- ", "")}
          </li>
        );
      }
      if (paragraph.startsWith("**") && paragraph.includes(":")) {
        const [title, ...rest] = paragraph.split(":");
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-medium">{title.replace(/\*\*/g, "")}:</span>
            {rest.join(":")}
          </p>
        );
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-gold z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-16">
        <article className="container mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm mb-6">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-gold" />
                </div>
                <div className="text-left">
                  <div className="text-foreground font-medium">{post.author}</div>
                  <div className="text-xs">{post.authorRole}</div>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="aspect-[21/9] rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share this article:
                </span>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors"
                  >
                    {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="font-serif text-2xl text-foreground mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group glass-card overflow-hidden flex gap-4 p-4 hover-lift"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-foreground group-hover:text-gold transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h4>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 glass-card p-8 text-center">
              <h3 className="font-serif text-2xl text-foreground mb-3">
                Ready to Invest in Pre-Leased Properties?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get personalized property recommendations based on your investment goals.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-charcoal-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
