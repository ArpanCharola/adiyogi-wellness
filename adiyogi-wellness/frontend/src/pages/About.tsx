import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "Arpan Charola",
    role: "AI/ML Engineer",
    image: "/assets/team/arpan.jpeg",
  },
  {
    name: "Krish Vyas",
    role: "Frontend Developer",
    image: "/assets/team/krish.jpeg",
  },
  {
    name: "Keval Parmar",
    role: "Backend Developer",
    image: "/assets/team/keval.jpeg",
  },
  {
    name: "Sonrat Krunal",
    role: "Documentation Expert",
    image: "/assets/team/krunal.jpeg",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto mb-20 space-y-6">
            <div className="text-sm font-medium text-primary mb-4 flex items-center gap-2">
              <span className="text-primary/80">We're hiring!</span>
              <a href="#" className="inline-flex items-center gap-1 text-primary hover:underline">
                Join the team <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-foreground">
              Meet our team of creators, designers, and problem solvers
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to bringing holistic wellness through technology.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col space-y-4 group cursor-pointer">
                {/* Image Container */}
                <div className="overflow-hidden bg-muted aspect-[4/5] relative mb-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Optional colored overlay effect on hover if desired
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" /> 
                  */}
                </div>
                
                {/* Text Content */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold leading-none tracking-tight text-foreground">
                      {member.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                  <p className="text-base text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;