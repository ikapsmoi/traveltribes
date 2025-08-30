import { MapPin, Clock, Users } from "lucide-react";

export default function FeaturedDestinationsSection() {
  const destinations = [
    {
      id: 1,
      name: "Bali Adventure",
      location: "Indonesia",
      image:
        "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1600",
      duration: "7 Days",
      groupSize: "8-12",
      price: "From $1,240",
      description:
        "Explore ancient temples, pristine beaches, and vibrant culture with local guides.",
      host: "Sarah Chen",
    },
    {
      id: 2,
      name: "Greek Island Hopping",
      location: "Greece",
      image:
        "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1600",
      duration: "10 Days",
      groupSize: "6-10",
      price: "From $1,580",
      description:
        "Sail through the Cyclades and discover hidden gems with fellow adventurers.",
      host: "Marcus Rodriguez",
    },
    {
      id: 3,
      name: "South African Safari",
      location: "South Africa",
      image:
        "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600",
      duration: "12 Days",
      groupSize: "4-8",
      price: "From $2,340",
      description:
        "Wildlife encounters and cultural experiences in the heart of Africa.",
      host: "Emma Thompson",
    },
    {
      id: 4,
      name: "Costa Rica Eco Tour",
      location: "Costa Rica",
      image:
        "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=1600",
      duration: "8 Days",
      groupSize: "6-12",
      price: "From $980",
      description:
        "Rainforests, wildlife, and adventure activities in pure vida paradise.",
      host: "Diego Martinez",
    },
    {
      id: 5,
      name: "Japan Cultural Journey",
      location: "Japan",
      image:
        "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-161251.jpeg?auto=compress&cs=tinysrgb&w=1600",
      duration: "14 Days",
      groupSize: "8-14",
      price: "From $2,680",
      description:
        "From Tokyo's neon lights to Kyoto's ancient temples, experience Japan's contrasts.",
      host: "Yuki Tanaka",
    },
    {
      id: 6,
      name: "Moroccan Adventure",
      location: "Morocco",
      image:
        "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=1600",
      duration: "9 Days",
      groupSize: "6-10",
      price: "From $1,120",
      description:
        "Explore vibrant souks, Sahara desert, and Atlas Mountains with local experts.",
      host: "Fatima Al-Zahra",
    },
  ];

  return (
    <div className="bg-brand-light py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-ui-border rounded-full bg-brand-white mb-6">
            <span className="font-body font-normal text-sm text-text-secondary">
              /Featured Destinations
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
            Your next adventure
            <br />
            awaits
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Discover handpicked group trips led by experienced hosts. Each
            journey is carefully crafted to deliver authentic experiences and
            lasting memories.
          </p>

          {/* View All Button */}
          <button className="bg-brand-navy hover:bg-brand-navy/90 text-brand-white font-body font-semibold px-8 py-4 rounded-button transition-all duration-300">
            View All Trips
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-brand-white border border-ui-border rounded-xl overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ filter: "brightness(0.85)" }}
                />

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-brand-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                    <span className="font-body font-semibold text-sm text-text-primary">
                      {destination.price}
                    </span>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-brand-midnight/50 backdrop-blur-sm px-3 py-2 rounded-full flex items-center">
                    <MapPin className="w-4 h-4 text-brand-white mr-1" />
                    <span className="font-body text-sm text-brand-white">
                      {destination.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title and Host */}
                <div className="mb-4">
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-1">
                    {destination.name}
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    Hosted by {destination.host}
                  </p>
                </div>

                {/* Description */}
                <p className="font-body text-text-secondary mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Trip Details */}
                <div className="flex items-center justify-between mb-6 text-sm text-text-secondary">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="font-body">{destination.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="font-body">
                      {destination.groupSize} people
                    </span>
                  </div>
                </div>

                {/* View Trip Button */}
                <button className="w-full bg-brand-aqua hover:bg-brand-aqua/90 text-brand-white font-body font-semibold py-3 rounded-button transition-all duration-300">
                  View Trip
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <p className="font-body text-text-secondary mb-6">
            Can't find what you're looking for?
          </p>
          <button className="bg-brand-aqua hover:bg-brand-aqua/90 text-brand-white font-body font-semibold px-8 py-4 rounded-button transition-all duration-300">
            Request a Custom Trip
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
