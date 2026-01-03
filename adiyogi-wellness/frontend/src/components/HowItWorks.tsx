const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Free Assessment",
      description: "Take our emotion-aware wellness assessment and receive instant, personalized feedback about your emotional state and needs.",
      gradient: "from-cosmic-blue to-secondary",
    },
    {
      number: "02",
      title: "Explore Resources",
      description: "Access worksheets, guided audio meditations, blog posts, and interactive tools curated for your wellness journey.",
      gradient: "from-cosmic-purple to-primary",
    },
    {
      number: "03",
      title: "AI-Guided Progress",
      description: "Continue your journey with ongoing AI support that adapts to your progress. No appointments, no pressure—just consistent growth.",
      gradient: "from-accent to-deep-purple",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It{" "}
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your path to emotional wellness in three simple steps. 
            All powered by AI—no counselors or appointments needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border">
                {/* Step Number */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 mx-auto shadow-glow`}>
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium">
              💫 All support provided by AI—no counselors or medical professionals involved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
