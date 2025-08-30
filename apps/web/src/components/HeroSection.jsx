import { useState } from "react";
import { Menu, X, Search, Plane } from "lucide-react";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.createusercontent.com/7a44af51-e66b-4373-a8f2-f0f42589f891/')",
        }}
      />

      {/* Gradient Overlay - Visit Reno Tahoe Style */}
      <div className="absolute inset-0 bg-gradient-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 bg-primary-black/20 backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-text-onDark font-heading font-bold text-2xl">
              TravelTribe
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            <div className="bg-primary-white rounded-full px-6 py-3">
              <span className="text-text-primary font-body font-medium text-sm">
                Home
              </span>
            </div>
            <a
              href="/trips"
              className="bg-primary-black/20 backdrop-blur-sm border border-primary-white/20 rounded-full px-6 py-3 hover:bg-primary-white/10 transition-all duration-normal cursor-pointer"
            >
              <span className="text-text-onDark font-body text-sm">
                Find Trips
              </span>
            </a>
            <a
              href="/host"
              className="bg-primary-black/20 backdrop-blur-sm border border-primary-white/20 rounded-full px-6 py-3 hover:bg-primary-white/10 transition-all duration-normal cursor-pointer"
            >
              <span className="text-text-onDark font-body text-sm">Host</span>
            </a>
            <a
              href="/about"
              className="bg-primary-black/20 backdrop-blur-sm border border-primary-white/20 rounded-full px-6 py-3 hover:bg-primary-white/10 transition-all duration-normal cursor-pointer"
            >
              <span className="text-text-onDark font-body text-sm">About</span>
            </a>
            <a
              href="/blog"
              className="bg-primary-black/20 backdrop-blur-sm border border-primary-white/20 rounded-full px-6 py-3 hover:bg-primary-white/10 transition-all duration-normal cursor-pointer"
            >
              <span className="text-text-onDark font-body text-sm">Blog</span>
            </a>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/account/signin"
              className="text-text-onDark font-body text-sm hover:text-text-onDark/80 transition-colors duration-normal"
            >
              Login
            </a>
            <a
              href="/account/signup"
              className="bg-accent-yellow hover:bg-accent-gold text-primary-black px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-normal hover:shadow-lg hover:-translate-y-1"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-text-onDark"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-primary-black/50 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary-white rounded-full px-4 py-2 text-center">
                <span className="text-text-primary font-body font-medium text-sm">
                  Home
                </span>
              </div>
              <a
                href="/trips"
                className="text-text-onDark/80 hover:text-text-onDark font-body text-sm text-center"
              >
                Find Trips
              </a>
              <a
                href="/host"
                className="text-text-onDark/80 hover:text-text-onDark font-body text-sm text-center"
              >
                Host
              </a>
              <a
                href="/about"
                className="text-text-onDark/80 hover:text-text-onDark font-body text-sm text-center"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-text-onDark/80 hover:text-text-onDark font-body text-sm text-center"
              >
                Blog
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-primary-white/20">
                <a
                  href="/account/signin"
                  className="text-text-onDark font-body text-sm text-center"
                >
                  Login
                </a>
                <a
                  href="/account/signup"
                  className="bg-accent-yellow text-primary-black px-4 py-2 rounded-full font-body font-semibold text-sm text-center hover:bg-accent-gold transition-all duration-normal"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content - Visit Reno Tahoe Style */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
        <div className="max-w-4xl w-full text-center">
          {/* Brand Name and Headline - Bold Black Typography Style */}
          <h1 className="font-display font-black text-text-onOverlay text-6xl md:text-8xl lg:text-hero leading-tight mb-12 tracking-tight">
            TRAVELTRIBE
            <br />
            <span className="text-accent-yellow block overflow-hidden h-[1.2em]">
              <span className="block animate-scroll-text text-[40px]">
                Host the adventure, or join the squad — either way, your trip
                just got an upgrade
              </span>
            </span>
          </h1>

          {/* Dual CTA Buttons - Visit Reno Tahoe Button Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/host"
              className="group bg-accent-yellow hover:bg-accent-gold text-primary-black font-body font-bold px-8 py-4 rounded-full flex items-center space-x-3 transition-all duration-normal shadow-lg hover:shadow-xl hover:-translate-y-1 min-w-[200px] justify-center"
            >
              <span>Host a Trip</span>
              <span className="text-lg font-light tracking-tight">{">>>"}</span>
            </a>
            <a
              href="/trips"
              className="group bg-primary-white/10 backdrop-blur-sm border-2 border-primary-white/30 hover:bg-primary-white hover:text-primary-black text-text-onDark font-body font-semibold px-8 py-4 rounded-full flex items-center space-x-3 transition-all duration-normal min-w-[200px] justify-center"
            >
              <span>Find a Trip</span>
              <span className="text-lg font-light tracking-tight">{">>>"}</span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-12 pr-4 py-4 bg-primary-white/90 backdrop-blur-sm rounded-full text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-accent-yellow font-body shadow-card"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    window.location.href = `/trips?search=${encodeURIComponent(e.target.value)}`;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for scrolling text only */}
      <style jsx global>{`
        @keyframes scroll-text {
          0% { transform: translateY(100%); }
          20% { transform: translateY(0%); }
          100% { transform: translateY(0%); }
        }
        
        .animate-scroll-text {
          animation: scroll-text 7.2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
