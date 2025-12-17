import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, PenLine, Brain, Heart, Target, Sparkles } from "lucide-react";

const Worksheets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wellness{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Worksheets
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educational resources and guided exercises to help you understand mental health 
              better and develop healthy coping strategies.
            </p>
          </div>

          {/* Coming Soon Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: BookOpen,
                title: "Understanding Anxiety",
                description: "Learn about the science behind anxiety and how to manage it effectively.",
                color: "text-blue-500",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: PenLine,
                title: "Mood Journaling",
                description: "Daily journaling prompts to track and understand your emotional patterns.",
                color: "text-purple-500",
                bgColor: "bg-purple-500/10"
              },
              {
                icon: Brain,
                title: "Cognitive Exercises",
                description: "Worksheets to challenge negative thought patterns and build resilience.",
                color: "text-green-500",
                bgColor: "bg-green-500/10"
              },
              {
                icon: Heart,
                title: "Self-Compassion Guide",
                description: "Exercises to develop kindness towards yourself during difficult times.",
                color: "text-red-500",
                bgColor: "bg-red-500/10"
              },
              {
                icon: Target,
                title: "Goal Setting",
                description: "Structured worksheets for setting and achieving wellness goals.",
                color: "text-orange-500",
                bgColor: "bg-orange-500/10"
              },
              {
                icon: Sparkles,
                title: "Mindfulness Activities",
                description: "Guided mindfulness exercises and meditation worksheets.",
                color: "text-teal-500",
                bgColor: "bg-teal-500/10"
              }
            ].map((item, index) => (
              <Card 
                key={item.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm text-primary font-medium">
                    Coming Soon
                    <span className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-muted/30 rounded-2xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">
              Want to Be Notified When Worksheets Launch?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're working hard to create valuable resources for your mental health journey. 
              Sign up to be the first to know when new worksheets are available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-gradient-cosmic text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Worksheets;
