"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Star,
  Heart,
  Clock,
  Users,
  CreditCard,
  MessageCircle,
  Settings,
  LogOut,
  Plus,
  Filter,
  Search,
} from "lucide-react";
import useUser from "@/utils/useUser";
import useAuth from "@/utils/useAuth";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings");
  const [bookings, setBookings] = useState([]);
  const [savedTrips, setSavedTrips] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});

  const { data: user } = useUser();
  const { signOut } = useAuth();

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch user profile
      const profileResponse = await fetch("/api/users/profile");
      if (profileResponse.ok) {
        const profileData = await profileResponse.json();
        setUserProfile(profileData.profile);
      }

      // Fetch bookings
      const bookingsResponse = await fetch("/api/bookings");
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData.bookings);
      }

      // Fetch saved trips
      const savedResponse = await fetch("/api/trips?saved=true");
      if (savedResponse.ok) {
        const savedData = await savedResponse.json();
        setSavedTrips(savedData.trips || []);
      }

      // Calculate stats
      const completedBookings = bookings.filter(
        (b) => b.booking_status === "completed",
      ).length;
      const upcomingBookings = bookings.filter(
        (b) =>
          b.booking_status === "confirmed" &&
          new Date(b.start_date) > new Date(),
      ).length;
      const totalSpent = bookings
        .filter((b) => b.payment_status === "fully_paid")
        .reduce((sum, b) => sum + parseFloat(b.amount_paid), 0);

      setStats({
        completed_trips: completedBookings,
        upcoming_trips: upcomingBookings,
        total_spent: totalSpent,
        saved_trips: savedTrips.length,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4 font-heading">
            Please sign in
          </h1>
          <a
            href="/account/signin"
            className="text-accent-yellow hover:text-accent-gold font-body"
          >
            Sign in to access your dashboard
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Header */}
      <div className="bg-primary-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="font-bold text-2xl text-text-primary font-heading"
              >
                TravelTribe
              </a>
              <span className="text-text-light">|</span>
              <h1 className="text-xl font-semibold text-text-primary font-heading">
                Dashboard
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="/trips"
                className="text-text-secondary hover:text-text-primary font-medium font-body"
              >
                Browse Trips
              </a>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-text-secondary hover:text-text-primary"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium font-body">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-primary-white rounded-xl shadow-sm border p-6 mb-6">
              {/* User Profile */}
              <div className="text-center mb-6">
                <img
                  src={
                    user.image ||
                    userProfile?.profile_image_url ||
                    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  }
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <h3 className="font-semibold text-text-primary font-heading">
                  {user.name}
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  {userProfile?.user_type === "host" ? "Trip Host" : "Traveler"}
                </p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  { id: "bookings", label: "My Bookings", icon: Calendar },
                  { id: "saved", label: "Saved Trips", icon: Heart },
                  { id: "reviews", label: "My Reviews", icon: Star },
                  { id: "profile", label: "Profile Settings", icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-nature-paleBlue text-accent-yellow border border-accent-yellow"
                        : "text-text-secondary hover:bg-ui-border"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-body">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Stats */}
            <div className="bg-primary-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-text-primary mb-4 font-heading">
                Your Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary font-body">
                    Completed Trips
                  </span>
                  <span className="font-semibold text-text-primary font-body">
                    {stats.completed_trips || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary font-body">
                    Upcoming Trips
                  </span>
                  <span className="font-semibold text-text-primary font-body">
                    {stats.upcoming_trips || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary font-body">
                    Total Spent
                  </span>
                  <span className="font-semibold text-text-primary font-body">
                    {formatPrice(stats.total_spent || 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary font-body">
                    Saved Trips
                  </span>
                  <span className="font-semibold text-text-primary font-body">
                    {stats.saved_trips || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Bookings Tab */}
            {activeTab === "bookings" && (
              <div className="bg-primary-white rounded-xl shadow-sm border">
                <div className="p-6 border-b border-ui-border">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-text-primary font-heading">
                      My Bookings
                    </h2>
                    <a
                      href="/trips"
                      className="bg-accent-yellow hover:bg-accent-gold text-primary-black px-4 py-2 rounded-lg font-medium transition-colors font-body"
                    >
                      <Plus className="w-4 h-4 inline mr-2" />
                      Book New Trip
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  {loading ? (
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="h-32 bg-ui-border rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  ) : bookings.length === 0 ? (
                    <div className="text-center py-12">
                      <Calendar className="w-12 h-12 text-text-light mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                        No bookings yet
                      </h3>
                      <p className="text-text-secondary mb-6 font-body">
                        Start exploring amazing trips and book your first
                        adventure!
                      </p>
                      <a
                        href="/trips"
                        className="bg-accent-yellow hover:bg-accent-gold text-primary-black px-6 py-2 rounded-lg font-medium transition-colors font-body"
                      >
                        Browse Trips
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="border border-ui-border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={
                                booking.hero_image_url ||
                                "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
                              }
                              alt={booking.trip_title}
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold text-text-primary mb-1 font-heading">
                                    {booking.trip_title}
                                  </h3>
                                  <div className="flex items-center text-text-secondary text-sm mb-2">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span className="font-body">
                                      {booking.destination}, {booking.country}
                                    </span>
                                  </div>
                                </div>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.booking_status)}`}
                                >
                                  {booking.booking_status}
                                </span>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="text-text-secondary font-body">
                                    Dates:
                                  </span>
                                  <div className="font-medium text-text-primary font-body">
                                    {formatDate(booking.start_date)} -{" "}
                                    {formatDate(booking.end_date)}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-text-secondary font-body">
                                    Total:
                                  </span>
                                  <div className="font-medium text-text-primary font-body">
                                    {formatPrice(booking.total_amount)}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-text-secondary font-body">
                                    Paid:
                                  </span>
                                  <div className="font-medium text-text-primary font-body">
                                    {formatPrice(booking.amount_paid)}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-text-secondary font-body">
                                    Host:
                                  </span>
                                  <div className="font-medium text-text-primary font-body">
                                    {booking.host_name}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-4 mt-4">
                                <a
                                  href={`/trips/${booking.trip_id}`}
                                  className="text-accent-yellow hover:text-accent-gold text-sm font-medium font-body"
                                >
                                  View Trip Details
                                </a>
                                {booking.booking_status === "completed" && (
                                  <button className="text-brand-navy hover:text-brand-aqua text-sm font-medium font-body">
                                    <Star className="w-4 h-4 inline mr-1" />
                                    Leave Review
                                  </button>
                                )}
                                <button className="text-text-light hover:text-text-secondary text-sm font-medium font-body">
                                  <MessageCircle className="w-4 h-4 inline mr-1" />
                                  Contact Host
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Saved Trips Tab */}
            {activeTab === "saved" && (
              <div className="bg-primary-white rounded-xl shadow-sm border">
                <div className="p-6 border-b border-ui-border">
                  <h2 className="text-xl font-semibold text-text-primary font-heading">
                    Saved Trips
                  </h2>
                </div>

                <div className="p-6">
                  {savedTrips.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart className="w-12 h-12 text-text-light mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                        No saved trips yet
                      </h3>
                      <p className="text-text-secondary mb-6 font-body">
                        Save trips you're interested in to easily find them
                        later.
                      </p>
                      <a
                        href="/trips"
                        className="bg-accent-yellow hover:bg-accent-gold text-primary-black px-6 py-2 rounded-lg font-medium transition-colors font-body"
                      >
                        Browse Trips
                      </a>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {savedTrips.map((trip) => (
                        <div
                          key={trip.id}
                          className="border border-ui-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <img
                            src={
                              trip.hero_image_url ||
                              "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
                            }
                            alt={trip.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-text-primary mb-2 font-heading">
                              {trip.title}
                            </h3>
                            <div className="flex items-center text-text-secondary text-sm mb-2">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span className="font-body">
                                {trip.destination}, {trip.country}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-text-primary font-heading">
                                {formatPrice(trip.price_per_person)}
                              </span>
                              <a
                                href={`/trips/${trip.id}`}
                                className="bg-accent-yellow hover:bg-accent-gold text-primary-black px-4 py-2 rounded-lg text-sm font-medium transition-colors font-body"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-primary-white rounded-xl shadow-sm border">
                <div className="p-6 border-b border-ui-border">
                  <h2 className="text-xl font-semibold text-text-primary font-heading">
                    Profile Settings
                  </h2>
                </div>

                <div className="p-6">
                  <div className="max-w-2xl">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2 font-body">
                          Profile Picture
                        </label>
                        <div className="flex items-center space-x-4">
                          <img
                            src={
                              user.image ||
                              userProfile?.profile_image_url ||
                              "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                            }
                            alt={user.name}
                            className="w-16 h-16 rounded-full"
                          />
                          <button className="bg-ui-border hover:bg-text-light text-text-primary px-4 py-2 rounded-lg font-medium transition-colors font-body">
                            Change Photo
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2 font-body">
                            Full Name
                          </label>
                          <input
                            type="text"
                            defaultValue={user.name}
                            className="w-full border border-ui-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-yellow focus:border-transparent font-body"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2 font-body">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue={user.email}
                            className="w-full border border-ui-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-yellow focus:border-transparent font-body"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2 font-body">
                            Phone
                          </label>
                          <input
                            type="tel"
                            defaultValue={userProfile?.phone || ""}
                            className="w-full border border-ui-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-yellow focus:border-transparent font-body"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2 font-body">
                            Location
                          </label>
                          <input
                            type="text"
                            defaultValue={userProfile?.location || ""}
                            placeholder="City, Country"
                            className="w-full border border-ui-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-yellow focus:border-transparent font-body"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2 font-body">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          defaultValue={userProfile?.bio || ""}
                          placeholder="Tell us about yourself..."
                          className="w-full border border-ui-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-yellow focus:border-transparent font-body"
                        />
                      </div>

                      <div className="flex space-x-4">
                        <button className="bg-accent-yellow hover:bg-accent-gold text-primary-black px-6 py-2 rounded-lg font-medium transition-colors font-body">
                          Save Changes
                        </button>
                        <button className="bg-ui-border hover:bg-text-light text-text-primary px-6 py-2 rounded-lg font-medium transition-colors font-body">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
