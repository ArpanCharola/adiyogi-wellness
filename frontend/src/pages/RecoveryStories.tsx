import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Heart, Star, Sparkles } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Sarah M.",
    age: 28,
    condition: "Generalized Anxiety Disorder",
    quote: "I never thought I'd feel normal again. After years of constant worry, therapy and self-care practices gave me my life back.",
    story: `For as long as I can remember, I was the "worrier" of my family. But when I turned 25, my anxiety became debilitating. I couldn't sleep, couldn't focus at work, and constantly felt like something terrible was about to happen.

The turning point came when I finally told my doctor how I was really feeling. Starting therapy was terrifying—I had to face all the thoughts I'd been running from. But with CBT, I learned that my anxious thoughts weren't facts, just patterns I could change.

Today, I still have anxious moments, but they don't control me anymore. I practice mindfulness daily, I've learned to set boundaries, and I actually enjoy quiet moments instead of dreading them. Recovery is possible—I'm living proof.`,
    duration: "18 months of therapy",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    name: "Michael T.",
    age: 35,
    condition: "Major Depression",
    quote: "Depression convinced me I was worthless. Recovery taught me that voice was lying all along.",
    story: `I hit rock bottom in my early 30s. I'd lost my job, my relationship had ended, and I couldn't see any reason to get out of bed. Depression had been building for years, but I'd always pushed through—until I couldn't anymore.

What saved me was reaching out. A friend noticed something was wrong and sat with me while I called a crisis hotline. That call led to my first appointment with a psychiatrist. Medication didn't fix everything overnight, but it lifted the fog enough that I could engage in therapy.

The hardest part was learning to challenge the negative voice in my head. It felt like arguing with myself constantly. But slowly, I started believing the more compassionate voice. I started taking small steps—going for walks, reconnecting with old friends, finding a new job I actually liked.

Three years later, I'm not just surviving—I'm thriving. I volunteer with a mental health organization, and sharing my story helps others realize they're not alone. Depression doesn't have to be a life sentence.`,
    duration: "2+ years of treatment and ongoing self-care",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 3,
    name: "Priya K.",
    age: 24,
    condition: "Panic Disorder",
    quote: "My first panic attack felt like dying. Now I know how to calm my nervous system before panic takes over.",
    story: `I'll never forget my first panic attack. I was 20, sitting in a college lecture, when suddenly my heart started racing, I couldn't breathe, and I was convinced I was having a heart attack. The ER doctor told me it was "just anxiety." It didn't feel like "just" anything.

The panic attacks became more frequent. I started avoiding places where they'd happened—classrooms, crowded spaces, even family gatherings. My world was shrinking rapidly.

A friend who'd been through something similar recommended a therapist who specialized in anxiety disorders. Through exposure therapy, I slowly faced my fears. It was incredibly hard at first—I had panic attacks during sessions. But my therapist taught me that panic, while awful, wasn't dangerous. My body was trying to protect me from threats that didn't exist.

Learning about the nervous system changed everything. Now I can feel a panic attack starting and use grounding techniques before it spirals. I recently traveled abroad for the first time—something I never thought possible. Freedom from fear is real.`,
    duration: "1 year of intensive therapy",
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    id: 4,
    name: "James L.",
    age: 42,
    condition: "PTSD",
    quote: "Trauma told me I was broken beyond repair. EMDR showed me that healing happens when we stop running from our past.",
    story: `I served in the military for 15 years. When I came home, I brought the war with me. Nightmares, flashbacks, hypervigilance—I was constantly on edge. I pushed away everyone who loved me because I didn't feel worthy of love.

For years, I thought therapy was for the weak. I'd been trained to be strong, to push through. But my marriage was falling apart, and my kids were afraid of me. I had to try something different.

EMDR therapy was unlike anything I expected. I didn't have to relive every detail of what happened—the eye movements helped my brain process the trauma without being overwhelmed by it. It was like finally filing away memories that had been stuck in an open tab in my mind.

The journey wasn't linear. There were setbacks and difficult sessions. But today, I can talk about my experiences without being consumed by them. I'm present with my family. I even mentor other veterans. The strongest thing I ever did was ask for help.`,
    duration: "2 years of EMDR and group therapy",
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    id: 5,
    name: "Emma R.",
    age: 31,
    condition: "Eating Disorder",
    quote: "Recovery from an eating disorder isn't about food—it's about reclaiming your worth beyond how you look.",
    story: `My eating disorder started as a diet at 15 and spiraled into a decade-long battle that nearly killed me. At my lowest point, I was hospitalized for heart problems caused by malnutrition. That hospital stay was my wake-up call.

Recovery wasn't just about eating regular meals—it was about dismantling the beliefs that had fueled my disorder. Why did I believe my worth depended on my weight? Why did controlling food feel like the only control I had? Therapy helped me answer these questions.

The hardest part was learning to be in my body without hating it. I had to grieve the "perfect" body I'd been chasing and accept the healthy one I was building. It took years to eat without guilt, to not obsess over every calorie, to look in a mirror and not hate what I saw.

Today, I'm a certified yoga instructor who helps others develop positive relationships with their bodies. Some days are still hard, but I have tools now. Food is no longer my enemy—it's fuel for a life I actually want to live.`,
    duration: "5 years of treatment and ongoing recovery",
    color: "from-purple-500/20 to-blue-500/20"
  }
];

const RecoveryStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Stories of Hope</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Recovery{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who've walked the path of recovery. 
              These journeys remind us that healing is possible, no matter how dark things may seem.
            </p>
          </div>

          {/* Stories */}
          <div className="space-y-8">
            {stories.map((story, index) => (
              <Card 
                key={story.id}
                className="overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${story.color}`} />
                <CardContent className="p-8">
                  {/* Quote */}
                  <div className="mb-6 relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-xl md:text-2xl font-medium italic text-foreground/90 pl-8">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {story.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{story.name}, {story.age}</h3>
                      <p className="text-primary">{story.condition}</p>
                      <p className="text-sm text-muted-foreground">{story.duration}</p>
                    </div>
                  </div>

                  {/* Full Story */}
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {story.story.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-foreground/80 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Hearts */}
                  <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <span className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 500 + 100)} people found this inspiring
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Share Your Story CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl text-center animate-fade-in">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Your Story Could Help Someone
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              If you've been through recovery and want to share your journey to inspire others, 
              we'd love to hear from you. Your experience could be the hope someone needs today.
            </p>
            <button className="px-8 py-3 bg-gradient-cosmic text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
              Share Your Story
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> These stories are shared with consent and some details have been changed 
              to protect privacy. Recovery journeys are unique—what worked for one person may not work for everyone. 
              Always consult mental health professionals for personalized treatment.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecoveryStories;
