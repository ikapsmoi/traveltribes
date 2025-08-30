import { UserPlus, Search, Users, Plane } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      icon: <UserPlus className="w-8 h-8" />,
      title: "Sign Up",
      description:
        "Create your profile and tell us about your travel preferences and interests.",
    },
    {
      id: 2,
      icon: <Search className="w-8 h-8" />,
      title: "Plan / Discover",
      description:
        "Browse curated trips or start planning your own group adventure.",
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Book & Connect",
      description:
        "Secure your spot and connect with fellow travelers before you go.",
    },
    {
      id: 4,
      icon: <Plane className="w-8 h-8" />,
      title: "Travel & Experience",
      description:
        "Embark on your adventure and create memories that will last a lifetime.",
    },
  ];

  return (
    <div className="bg-brand-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-ui-border rounded-full bg-brand-light mb-6">
            <span className="font-body font-normal text-sm text-text-secondary">
              /How It Works
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
            Your journey starts
            <br />
            in four simple steps
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Whether you're hosting or joining, we've made group travel simple
            and accessible for everyone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="bg-brand-light border border-ui-border rounded-xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-aqua rounded-full flex items-center justify-center">
                  <span className="font-body font-bold text-sm text-brand-white">
                    {step.id}
                  </span>
                </div>

                {/* Icon */}
                <div className="bg-brand-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6 text-brand-aqua">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl text-text-primary mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow - Only show between steps, not after the last one */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                  <div className="w-8 h-0.5 bg-ui-border"></div>
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-ui-border border-y-2 border-y-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-text-secondary mb-6">
            Ready to get started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-aqua hover:bg-brand-aqua/90 text-brand-white font-body font-semibold px-8 py-4 rounded-button transition-all duration-300">
              Start Hosting
            </button>
            <button className="bg-brand-navy hover:bg-brand-navy/90 text-brand-white font-body font-semibold px-8 py-4 rounded-button transition-all duration-300">
              Browse Trips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
