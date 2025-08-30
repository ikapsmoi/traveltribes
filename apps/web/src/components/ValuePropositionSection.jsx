import { Users, Calendar, Shield, MapPin } from "lucide-react";

export default function ValuePropositionSection() {
  return (
    <div className="bg-brand-light py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-ui-border rounded-full bg-brand-white mb-6">
            <span className="font-body font-normal text-sm text-text-secondary">
              /For Everyone
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
            Two ways to experience
            <br />
            group travel
          </h2>
        </div>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Panel A: For Hosts */}
          <div className="bg-brand-white border border-ui-border rounded-xl p-8 md:p-12 hover:shadow-card transition-shadow duration-300">
            {/* Badge */}
            <div className="inline-flex items-center bg-brand-aqua/10 text-brand-aqua px-4 py-2 rounded-full font-body font-medium text-sm mb-6">
              <Users className="w-4 h-4 mr-2" />
              For Hosts
            </div>

            {/* Headline */}
            <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
              Monetize your community
            </h3>

            {/* Description */}
            <p className="font-body text-lg text-text-secondary mb-8 leading-relaxed">
              Turn your passion for travel into profit. Lead group adventures,
              earn revenue, and strengthen your community bonds through shared
              experiences.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-aqua rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Earn by leading group trips
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-aqua rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Professional planning tools
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-aqua rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Vetted local operators
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-aqua rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Monetize your community
                </span>
              </div>
            </div>

            {/* CTA */}
            <button className="group bg-brand-aqua hover:bg-brand-aqua/90 text-brand-white font-body font-semibold px-8 py-4 rounded-button flex items-center space-x-3 transition-all duration-300 w-full sm:w-auto justify-center">
              <span>Become a Host</span>
              <span className="text-lg font-light tracking-tight">{">>>"}</span>
            </button>
          </div>

          {/* Panel B: For Travelers */}
          <div className="bg-brand-white border border-ui-border rounded-xl p-8 md:p-12 hover:shadow-card transition-shadow duration-300">
            {/* Badge */}
            <div className="inline-flex items-center bg-brand-navy/10 text-brand-navy px-4 py-2 rounded-full font-body font-medium text-sm mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              For Travelers
            </div>

            {/* Headline */}
            <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
              Join curated adventures
            </h3>

            {/* Description */}
            <p className="font-body text-lg text-text-secondary mb-8 leading-relaxed">
              Skip the planning stress. Join expertly crafted group trips with
              like-minded travelers and create lifelong friendships along the
              way.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-navy rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Join safe, curated trips
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-navy rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Local guides included
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-navy rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Build meaningful friendships
                </span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-navy rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="font-body text-text-primary">
                  Hassle-free planning
                </span>
              </div>
            </div>

            {/* CTA */}
            <button className="group bg-brand-navy hover:bg-brand-navy/90 text-brand-white font-body font-semibold px-8 py-4 rounded-button flex items-center space-x-3 transition-all duration-300 w-full sm:w-auto justify-center">
              <span>Find Trips</span>
              <span className="text-lg font-light tracking-tight">{">>>"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
