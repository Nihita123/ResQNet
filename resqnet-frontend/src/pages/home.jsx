import React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Heart,
  Users,
  Zap,
  Shield,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

// Custom Link component for consistency
const Link = ({ to, children, className, ...props }) => (
  <RouterLink to={to} className={className} {...props}>
    {children}
  </RouterLink>
);

// Reusable Components
const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div
      className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6`}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-white mb-2">{value}</div>
    <div className="text-purple-100">{label}</div>
  </div>
);

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  gradient,
  border,
  iconColor,
}) => (
  <div className={`${gradient} p-6 rounded-xl ${border}`}>
    <Icon className={`w-10 h-10 ${iconColor} mb-4`} />
    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const TestimonialCard = ({ name, role, text, gradient, letter }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
    <p className="text-gray-600 mb-6 italic">"{text}"</p>
    <div className="flex items-center">
      <div
        className={`${gradient} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}
      >
        {letter}
      </div>
      <div className="ml-4">
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-gray-500 text-sm">{role}</div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const handleVolunteerClick = () => navigate("/volunteer");
  const handleOrganizationClick = () => navigate("/organization");
  const handleVictimClick = () => navigate("/victim");
  const handleRequestAidClick = () => navigate("/request-aid");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-heading">
          Connecting you to <span className="gradient-text">help</span>
          <br />
          in times of <span className="gradient-text">crisis.</span>
        </h1>
        <p className="hero-subtext">
          A platform to connect disaster victims with volunteers and
          organizations for timely aid.
        </p>
        <div className="cta-group">
          <button
            className="cta-button volunteer"
            onClick={handleVolunteerClick}
          >
            Volunteer
          </button>
          <button className="cta-button victim" onClick={handleVictimClick}>
            Victim
          </button>
          <button
            className="cta-button organization"
            onClick={handleOrganizationClick}
          >
            Organization
          </button>
        </div>
        <div className="cta-group secondary">
          <button
            className="cta-button request"
            onClick={handleRequestAidClick}
          >
            Request Aid
          </button>
          <button className="cta-button locate">Locate Disaster</button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How ResQNet Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our platform streamlines disaster response by connecting those in
            need with those who can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Heart}
            color="bg-gradient-to-r from-red-500 to-orange-500"
            title="Request Help"
            description="Quickly submit help requests during emergencies."
          />
          <FeatureCard
            icon={Users}
            color="bg-gradient-to-r from-blue-500 to-purple-500"
            title="Connect"
            description="We match victims with volunteers and organizations."
          />
          <FeatureCard
            icon={Zap}
            color="bg-gradient-to-r from-green-500 to-teal-500"
            title="Rapid Response"
            description="Real-time notifications ensure help arrives quickly."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Making a Real Impact
          </h2>
          <p className="text-purple-100 text-lg">
            Together, we're building a stronger, more resilient community.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <StatCard value="15K+" label="People Helped" />
          <StatCard value="2.5K+" label="Active Volunteers" />
          <StatCard value="180+" label="Partner Organizations" />
          <StatCard value="24/7" label="Emergency Support" />
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive disaster response services available when you need
            them most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Shield}
            gradient="bg-gradient-to-br from-red-50 to-orange-50"
            border="border border-red-100"
            iconColor="text-red-500"
            title="Emergency Shelter"
            description="Safe temporary housing and accommodation during disasters"
          />
          <ServiceCard
            icon={MapPin}
            gradient="bg-gradient-to-br from-blue-50 to-indigo-50"
            border="border border-blue-100"
            iconColor="text-blue-500"
            title="Location Services"
            description="GPS-based help requests and volunteer coordination"
          />
          <ServiceCard
            icon={Heart}
            gradient="bg-gradient-to-br from-green-50 to-teal-50"
            border="border border-green-100"
            iconColor="text-green-500"
            title="Medical Aid"
            description="Connect with medical volunteers and healthcare resources"
          />
          <ServiceCard
            icon={Users}
            gradient="bg-gradient-to-br from-purple-50 to-pink-50"
            border="border border-purple-100"
            iconColor="text-purple-500"
            title="Family Reunion"
            description="Help reconnect families separated during emergencies"
          />
          <ServiceCard
            icon={Clock}
            gradient="bg-gradient-to-br from-yellow-50 to-orange-50"
            border="border border-yellow-100"
            iconColor="text-yellow-500"
            title="24/7 Support"
            description="Round-the-clock emergency response and coordination"
          />
          <ServiceCard
            icon={Zap}
            gradient="bg-gradient-to-br from-indigo-50 to-blue-50"
            border="border border-indigo-100"
            iconColor="text-indigo-500"
            title="Resource Distribution"
            description="Efficient distribution of food, water, and supplies"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stories of Hope
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from our community members
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah M."
            role="Flood Survivor"
            letter="S"
            gradient="bg-gradient-to-r from-purple-400 to-pink-400"
            text="During the floods, ResQNet helped us find shelter within hours. The volunteers were amazing and coordination was seamless."
          />
          <TestimonialCard
            name="Michael R."
            role="Volunteer"
            letter="M"
            gradient="bg-gradient-to-r from-blue-400 to-teal-400"
            text="As a volunteer, this platform makes it so easy to help people in need. The real-time updates and location services are fantastic."
          />
          <TestimonialCard
            name="Anna K."
            role="NGO Director"
            letter="A"
            gradient="bg-gradient-to-r from-green-400 to-blue-400"
            text="Our organization can now coordinate relief efforts more effectively. ResQNet has transformed how we respond to disasters."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
