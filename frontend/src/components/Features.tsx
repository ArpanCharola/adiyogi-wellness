const Features = () => {
  const features = [
    {
      icon: "/assets/images/message-square.svg",
      title: "Instant AI Chat Support",
      description: "Get immediate, compassionate responses from our emotion-aware AI. Available 24/7 to support your wellness journey.",
      gradient: "from-cosmic-blue to-secondary",
    },
    {
      icon: "/assets/images/check-square.svg",
      title: "Self-Discovery Assessments",
      description: "Take free wellness assessments that provide instant feedback and personalized insights into your emotional state.",
      gradient: "from-cosmic-purple to-primary",
    },
    {
      icon: "/assets/images/lotus.svg",
      title: "Guided Meditation & Exercises",
      description: "Access interactive meditation sessions and wellness exercises designed to help you find inner peace and balance.",
      gradient: "from-accent to-deep-purple",
    },
    {
      icon: "/assets/images/mountain.svg",
      title: "Motivation Stories & Resources",
      description: "Draw inspiration from recovery stories, worksheets, and resources that empower your personal growth journey.",
      gradient: "from-secondary to-cosmic-blue",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What You Get With{" "}
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Adiyogi Wellness
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for emotional wellness and self-care, powered by cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-8 h-8 brightness-0 invert"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
