import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Play, Clock, Sparkles } from "lucide-react";

const audioSessions = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    duration: "5 min",
    category: "Breathing",
    description: "A quick breathing exercise to calm your nervous system",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Body Scan Meditation",
    duration: "15 min",
    category: "Meditation",
    description: "Progressive relaxation through body awareness",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Sleep Preparation",
    duration: "20 min",
    category: "Sleep",
    description: "Gentle guidance to prepare your mind and body for restful sleep",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 4,
    title: "Morning Mindfulness",
    duration: "10 min",
    category: "Mindfulness",
    description: "Start your day with clarity and intention",
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: 5,
    title: "Anxiety Relief Session",
    duration: "12 min",
    category: "Anxiety",
    description: "Techniques to reduce anxiety and find calm",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 6,
    title: "Gratitude Meditation",
    duration: "8 min",
    category: "Gratitude",
    description: "Cultivate appreciation and positive emotions",
    color: "from-pink-500 to-rose-500"
  }
];

const GuidedAudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Headphones className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Guided{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Audio Sessions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immersive audio experiences to guide you through meditation, 
              breathing exercises, and relaxation techniques.
            </p>
          </div>

          {/* Audio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audioSessions.map((session, index) => (
              <Card 
                key={session.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-32 bg-gradient-to-r ${session.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full">
                    <span className="text-xs text-white font-medium">{session.category}</span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {session.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {session.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{session.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center p-8 bg-muted/30 rounded-2xl animate-fade-in">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Audio Sessions Coming Soon</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're working with mental health professionals to create high-quality guided audio sessions. 
              These will be available soon to help you on your wellness journey.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuidedAudio;
