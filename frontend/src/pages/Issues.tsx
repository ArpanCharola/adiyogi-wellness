import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, CloudRain, AlertTriangle, Utensils, Pill, Moon, Heart, Brain, AlertCircle, Frown } from "lucide-react";

const issues = [
  {
    id: 1,
    title: "Anger Management",
    icon: Flame,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    description: "Uncontrolled anger can damage relationships, health, and overall well-being.",
    content: `Anger is a natural emotion, but when it becomes frequent or intense, it can lead to serious problems. Chronic anger affects your cardiovascular system, weakens your immune response, and can lead to depression and anxiety.

Common signs include frequent irritability, explosive outbursts, physical tension, and difficulty letting go of grudges. Understanding your triggers is the first step toward managing anger effectively.

Techniques like deep breathing, progressive muscle relaxation, and cognitive restructuring can help. Regular exercise, adequate sleep, and mindfulness practices also play crucial roles in anger management.`,
    tips: ["Practice deep breathing when triggered", "Identify your anger triggers", "Use 'I' statements instead of accusations", "Take timeouts when needed"]
  },
  {
    id: 2,
    title: "Sadness & Grief",
    icon: CloudRain,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Persistent sadness can indicate deeper emotional issues that need attention.",
    content: `Sadness is a universal human experience, but prolonged or intense sadness may signal something more serious. Grief, whether from loss of a loved one, relationship, job, or life change, requires proper processing.

The stages of grief—denial, anger, bargaining, depression, and acceptance—aren't linear. Everyone experiences them differently. Suppressing grief can lead to complicated grief disorder or depression.

Healthy grieving involves acknowledging your feelings, seeking support from others, maintaining routines, and being patient with yourself. Professional help may be needed if grief significantly impairs daily functioning for extended periods.`,
    tips: ["Allow yourself to feel without judgment", "Maintain connections with supportive people", "Keep a grief journal", "Create meaningful rituals to honor your loss"]
  },
  {
    id: 3,
    title: "Anxiety Disorders",
    icon: AlertTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "Excessive worry and fear that interferes with daily activities and relationships.",
    content: `Anxiety disorders are among the most common mental health conditions, affecting millions worldwide. They include generalized anxiety disorder, panic disorder, social anxiety, and specific phobias.

Physical symptoms include racing heart, sweating, trembling, and shortness of breath. Cognitive symptoms involve excessive worry, difficulty concentrating, and catastrophic thinking.

Treatment approaches include cognitive-behavioral therapy (CBT), exposure therapy, medication, and lifestyle changes. Mindfulness meditation, regular exercise, and limiting caffeine and alcohol can significantly reduce symptoms.`,
    tips: ["Practice grounding techniques (5-4-3-2-1)", "Limit caffeine and alcohol intake", "Establish a regular sleep schedule", "Challenge anxious thoughts with evidence"]
  },
  {
    id: 4,
    title: "Emotional Eating",
    icon: Utensils,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Using food to cope with emotions rather than physical hunger.",
    content: `Emotional eating is using food to make yourself feel better—eating to fill emotional needs rather than your stomach. This can lead to weight gain, guilt, and a cycle of unhealthy eating patterns.

Triggers include stress, boredom, loneliness, childhood habits, and social influences. Recognizing the difference between emotional and physical hunger is crucial.

Breaking the cycle involves identifying triggers, finding alternative coping strategies, practicing mindful eating, and addressing underlying emotional issues. Building a healthy relationship with food takes time and often benefits from professional guidance.`,
    tips: ["Keep a food-mood diary", "Practice mindful eating", "Find non-food ways to cope with stress", "Don't keep comfort foods easily accessible"]
  },
  {
    id: 5,
    title: "Addiction & Substance Use",
    icon: Pill,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Dependency on substances or behaviors that provide temporary relief but long-term harm.",
    content: `Addiction is a chronic brain disorder characterized by compulsive engagement despite harmful consequences. It can involve substances (alcohol, drugs, nicotine) or behaviors (gambling, internet, shopping).

The addiction cycle involves craving, ritual, using, guilt, and back to craving. Breaking this cycle requires addressing both physical dependency and psychological factors.

Recovery is possible with proper support. Treatment options include detoxification, rehabilitation programs, therapy (CBT, motivational interviewing), support groups (AA, NA), and medication-assisted treatment when appropriate.`,
    tips: ["Reach out to addiction helplines", "Build a strong support network", "Identify and avoid triggers", "Replace addictive behaviors with healthy activities"]
  },
  {
    id: 6,
    title: "Sleep Disorders",
    icon: Moon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    description: "Difficulty falling asleep, staying asleep, or getting quality rest.",
    content: `Sleep is fundamental to mental and physical health. Chronic sleep problems affect mood, cognitive function, immune system, and increase risk of various health conditions.

Common sleep disorders include insomnia, sleep apnea, restless leg syndrome, and circadian rhythm disorders. Stress, anxiety, poor sleep habits, and medical conditions can all contribute.

Sleep hygiene is crucial: maintaining consistent sleep schedules, creating a restful environment, limiting screen time before bed, and avoiding caffeine and alcohol late in the day. Cognitive-behavioral therapy for insomnia (CBT-I) is highly effective.`,
    tips: ["Stick to a consistent sleep schedule", "Create a dark, cool, quiet bedroom", "Avoid screens 1 hour before bed", "Limit caffeine after 2 PM"]
  },
  {
    id: 7,
    title: "Hopelessness",
    icon: Heart,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    description: "Feeling that nothing will improve and life has no meaning or purpose.",
    content: `Hopelessness is a sense that the future holds nothing positive and that one's situation cannot improve. It's a core symptom of depression and a significant risk factor for suicide.

This feeling often stems from repeated failures, trauma, chronic illness, or loss. It distorts thinking, making it hard to see solutions or possibilities that exist.

Recovery involves challenging hopeless thoughts, setting small achievable goals, connecting with supportive people, and often professional treatment. Remembering that hopelessness is a symptom, not reality, is crucial.`,
    tips: ["Challenge hopeless thoughts with facts", "Set small, achievable daily goals", "Connect with supportive people", "Seek professional help if feelings persist"]
  },
  {
    id: 8,
    title: "Trauma & PTSD",
    icon: Brain,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description: "Lasting impact of traumatic experiences affecting daily life and well-being.",
    content: `Trauma occurs when we experience or witness events that threaten our safety or overwhelm our ability to cope. PTSD develops when trauma symptoms persist and significantly impair functioning.

Symptoms include flashbacks, nightmares, avoidance of reminders, hypervigilance, negative changes in thoughts and mood, and emotional numbing. Trauma can affect anyone regardless of strength or resilience.

Evidence-based treatments include EMDR (Eye Movement Desensitization and Reprocessing), trauma-focused CBT, prolonged exposure therapy, and sometimes medication. Building safety, stabilization, and self-regulation skills is foundational to trauma recovery.`,
    tips: ["Ground yourself during flashbacks", "Build a safety plan with trusted people", "Practice self-compassion", "Work with a trauma-specialized therapist"]
  },
  {
    id: 9,
    title: "Fear & Phobias",
    icon: AlertCircle,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    description: "Intense, irrational fears that cause avoidance and limit life experiences.",
    content: `Fear is protective, but phobias are excessive fear responses that are out of proportion to actual danger. They can involve specific objects (spiders, heights), situations (flying, enclosed spaces), or social interactions.

Phobias cause significant distress and lead to avoidance behaviors that can severely limit quality of life. The avoidance actually strengthens the phobia over time.

Exposure therapy is the gold standard treatment—gradually facing feared situations in a controlled way. This rewires the brain's fear response. Cognitive techniques help address irrational beliefs that fuel the phobia.`,
    tips: ["Practice gradual exposure to fears", "Use relaxation techniques during exposure", "Challenge catastrophic predictions", "Celebrate small victories over fear"]
  },
  {
    id: 10,
    title: "Depression",
    icon: Frown,
    color: "text-slate-500",
    bgColor: "bg-slate-500/10",
    description: "Persistent feelings of sadness, emptiness, and loss of interest in life.",
    content: `Depression is more than sadness—it's a persistent condition affecting how you feel, think, and handle daily activities. It's one of the most common mental health disorders but highly treatable.

Symptoms include persistent sad or empty mood, loss of interest in activities, changes in appetite and sleep, fatigue, difficulty concentrating, and thoughts of death or suicide.

Treatment typically involves therapy (CBT, interpersonal therapy), medication (antidepressants), lifestyle changes (exercise, sleep hygiene, social connection), and sometimes other approaches like light therapy or TMS.`,
    tips: ["Maintain daily routines even when difficult", "Get regular physical activity", "Stay connected with supportive people", "Seek professional treatment early"]
  },
];

const Issues = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mental Health{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Issues
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding common mental health challenges is the first step toward healing. 
              Explore these topics to learn more about symptoms, causes, and paths to recovery.
            </p>
          </div>

          {/* Issues Grid */}
          <div className="grid gap-8">
            {issues.map((issue, index) => (
              <Card 
                key={issue.id} 
                className="overflow-hidden transition-all duration-500 hover:shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className={`${issue.bgColor} transition-all duration-300`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-background/80 ${issue.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <issue.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{issue.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{issue.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {issue.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-foreground/80 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">Self-Help Tips:</h4>
                    <ul className="space-y-2">
                      {issue.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-16 p-6 bg-muted/30 rounded-xl text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. 
              If you're experiencing mental health issues, please consult a qualified healthcare provider.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Issues;
