import React, { useEffect, useRef } from "react";

const About = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="about-page bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-white text-gray-800 py-32 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-6xl font-bold mb-6 text-gray-800">
            About <span className="text-blue-500">ResQNet</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Bridging the gap between disaster-affected communities and the
            organizations that can help them rebuild and recover
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🌉",
                title: "Bridge the Gap",
                description:
                  "We connect communities in crisis with the right aid organizations, ensuring help reaches those who need it most, when they need it most.",
              },
              {
                icon: "⚡",
                title: "Rapid Response",
                description:
                  "Our real-time platform enables instant communication and coordination, reducing response times and saving lives during critical moments.",
              },
              {
                icon: "🤝",
                title: "Empower Communities",
                description:
                  "We believe in empowering affected communities to report their needs directly, ensuring their voices are heard and their specific needs are met.",
              },
            ].map((card, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="mission-card bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `opacity 0.6s ease ${
                    index * 0.1
                  }s, transform 0.6s ease ${index * 0.1}s`,
                }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-blue-50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <blockquote className="text-2xl font-light text-gray-700 leading-relaxed">
            "We are like a bridge for disaster relief, that connects affected
            communities with the right aid and support, ensuring resources reach
            those in need at the right time."
          </blockquote>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            How ResQNet Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Report & Request",
                description:
                  "Disaster victims and community members report their immediate needs through our platform, providing location and urgency details.",
              },
              {
                number: "2",
                title: "Real-time Mapping",
                description:
                  "All requests are mapped in real-time, allowing aid organizations to visualize affected areas and prioritize their response efforts.",
              },
              {
                number: "3",
                title: "Coordinate Response",
                description:
                  "NGOs and volunteer organizations coordinate their efforts through our platform, avoiding duplication and ensuring comprehensive coverage.",
              },
              {
                number: "4",
                title: "Track & Deliver",
                description:
                  "We track the progress of aid delivery, ensuring accountability and providing updates to both victims and donors about relief efforts.",
              },
            ].map((step, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="text-center"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `opacity 0.6s ease ${
                    index * 0.1
                  }s, transform 0.6s ease ${index * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                emoji: "💪",
                title: "Resilience",
                description: "Building stronger, more prepared communities",
              },
              {
                emoji: "🤝",
                title: "Collaboration",
                description: "Bringing together diverse stakeholders",
              },
              {
                emoji: "⚡",
                title: "Efficiency",
                description: "Streamlining disaster response efforts",
              },
              {
                emoji: "🌍",
                title: "Impact",
                description: "Creating measurable positive change",
              },
              {
                emoji: "💖",
                title: "Compassion",
                description: "Putting human needs at the center",
              },
              {
                emoji: "🔍",
                title: "Transparency",
                description: "Ensuring accountability in aid distribution",
              },
            ].map((value, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="bg-white p-6 rounded-2xl text-center hover:shadow-md transition-shadow"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `opacity 0.6s ease ${
                    index * 0.1
                  }s, transform 0.6s ease ${index * 0.1}s`,
                }}
              >
                <span className="text-3xl mb-4 block">{value.emoji}</span>
                <h4 className="font-semibold mb-2 text-gray-800 text-sm">
                  {value.title}
                </h4>
                <p className="text-xs text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ResQNet Matters Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why ResQNet Matters
          </h2>
          <div className="text-center space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              In times of disaster, coordination is everything. Traditional
              disaster response often suffers from communication gaps, resource
              duplication, and delayed assistance. ResQNet addresses these
              critical issues by creating a unified platform where all
              stakeholders can communicate, coordinate, and collaborate
              effectively.
            </p>
            <p>
              Our crowdsourced approach ensures that help reaches the right
              people at the right time. By empowering communities to report
              their own needs and enabling real-time tracking of aid
              distribution, we're making humanitarian assistance more
              responsive, efficient, and accountable.
            </p>
            <p>
              Every disaster is unique, but the need for coordinated response
              remains constant. ResQNet provides the technological
              infrastructure to make that coordination possible, turning chaos
              into organized, effective relief efforts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Join the ResQNet Community
          </h2>
          <p className="text-xl mb-8 text-gray-600 leading-relaxed">
            Whether you're an individual wanting to help, an organization
            providing aid, or a community in need, ResQNet connects us all in
            the mission to build more resilient communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
