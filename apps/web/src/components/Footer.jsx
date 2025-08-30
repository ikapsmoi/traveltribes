import { useState } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
    // You could add a success message here
  };

  return (
    <footer className="bg-brand-midnight text-brand-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Ready for your next
            <br />
            <span className="text-brand-aqua">adventure?</span>
          </h2>
          <p className="text-brand-slate text-lg mb-8 max-w-2xl mx-auto font-body">
            Stay updated on new destinations, exclusive deals, and inspiring
            travel stories from our community.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleNewsletterSubmit}
            className="max-w-md mx-auto mb-8"
          >
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-slate" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-brand-charcoal border border-brand-slate rounded-button text-brand-white placeholder-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-aqua font-body"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-brand-aqua hover:bg-brand-aqua/90 px-6 py-4 rounded-button flex items-center justify-center transition-colors duration-300 flex-shrink-0"
              >
                <ArrowRight className="w-5 h-5 text-brand-white" />
              </button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-aqua hover:bg-brand-aqua/90 text-brand-white font-body font-semibold px-8 py-4 rounded-button transition-colors duration-300">
              Start Hosting Today
            </button>
            <button className="bg-brand-charcoal hover:bg-brand-charcoal/80 text-brand-white border border-brand-slate font-body font-semibold px-8 py-4 rounded-button transition-colors duration-300">
              Explore Destinations
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-slate mb-12"></div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-xl text-brand-white mb-6">
              Company
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Our Story
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Press
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Blog
              </a>
            </div>
          </div>

          {/* For Travelers */}
          <div>
            <h3 className="font-display font-semibold text-xl text-brand-white mb-6">
              For Travelers
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Browse Trips
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                How It Works
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Travel Insurance
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Safety Guidelines
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Reviews
              </a>
            </div>
          </div>

          {/* For Hosts */}
          <div>
            <h3 className="font-display font-semibold text-xl text-brand-white mb-6">
              For Hosts
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Become a Host
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Host Resources
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Host Community
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Earnings Calculator
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Host Success Stories
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-xl text-brand-white mb-6">
              Support
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                FAQs
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Booking Policies
              </a>
              <a
                href="#"
                className="block text-brand-slate hover:text-brand-white transition-colors duration-300 font-body"
              >
                Community Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-slate">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="text-brand-white font-display font-bold text-xl">
                TravelTribe
              </div>
              <span className="text-brand-slate text-sm font-body">
                © 2025 TravelTribe. All rights reserved.
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-brand-charcoal hover:bg-brand-aqua rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:text-brand-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-charcoal hover:bg-brand-aqua rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Youtube className="w-5 h-5 group-hover:text-brand-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-charcoal hover:bg-brand-aqua rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:text-brand-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-charcoal hover:bg-brand-aqua rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:text-brand-white" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-brand-slate hover:text-brand-white transition-colors duration-300 text-sm font-body"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-brand-slate hover:text-brand-white transition-colors duration-300 text-sm font-body"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-brand-slate hover:text-brand-white transition-colors duration-300 text-sm font-body"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
