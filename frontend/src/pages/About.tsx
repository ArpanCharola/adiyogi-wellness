import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    name: "Arpan Charola",
    role: "Project Lead & Full Stack Developer",
    image: "/assets/images/name1.jpg",
    bio: "Passionate about using technology to improve mental health accessibility. Leading the vision and development of Adiyogi Wellness.",
    skills: ["React", "Node.js", "AI/ML", "System Design"],
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:arpan@example.com"
    }
  },
  {
    name: "Krish Vyas",
    role: "ML Engineer & Data Scientist",
    image: "/assets/images/name2.jpg",
    bio: "Specializing in emotion detection and natural language processing to create empathetic AI interactions.",
    skills: ["Python", "TensorFlow", "NLP", "Data Analysis"],
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:krish@example.com"
    }
  },
  {
    name: "Keval Parmar",
    role: "Frontend Developer & UX Designer",
    image: "/assets/images/name3.jpg",
    bio: "Creating intuitive and accessible interfaces that make mental wellness tools approachable for everyone.",
    skills: ["React", "Tailwind", "Figma", "Animation"],
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:keval@example.com"
    }
  },
  {
    name: "Krunal Sonrat",
    role: "Backend Developer & DevOps",
    image: "/assets/images/name4.jpg",
    bio: "Building robust and scalable infrastructure to ensure our wellness platform is always available when needed.",
    skills: ["Python", "PostgreSQL", "Docker", "AWS"],
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:krunal@example.com"
    }
  },
];

const About = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a passionate group of developers and mental health advocates 
              working to make emotional wellness accessible through AI technology.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveCard(member.name)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer h-full">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=8b5cf6&color=fff&size=400`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-4 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap justify-center gap-1 mb-3">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span 
                          key={skill} 
                          className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popup Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 transition-all duration-300 ${
                    activeCard === member.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="bg-popover border border-border rounded-xl shadow-xl p-4 w-72">
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-4 pt-2 border-t border-border">
                      <a
                        href={member.links.github}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={member.links.linkedin}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.links.email}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        title="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="mt-20 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="bg-gradient-cosmic bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We believe everyone deserves access to mental health support. Our AI-powered platform 
              provides instant, judgment-free wellness guidance—no appointments, no pressure. 
              We're building technology that understands your emotions and helps you navigate life's challenges.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Accessible", desc: "24/7 support without the barriers of traditional therapy" },
                { title: "Personalized", desc: "AI that adapts to your unique emotional patterns" },
                { title: "Private", desc: "Your data is secure and your journey is confidential" }
              ].map((item, i) => (
                <div 
                  key={item.title}
                  className="p-6 bg-muted/30 rounded-xl transition-all duration-300 hover:bg-muted/50 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
