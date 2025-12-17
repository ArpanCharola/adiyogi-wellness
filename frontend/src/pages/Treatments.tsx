import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, Pill, Users, Leaf, Zap, Heart, Music } from "lucide-react";

const treatments = [
  {
    id: 1,
    title: "Cognitive Behavioral Therapy (CBT)",
    icon: Brain,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "A structured approach to identify and change negative thought patterns.",
    content: `CBT is one of the most widely researched and effective treatments for anxiety, depression, and many other mental health conditions. It works on the principle that our thoughts, feelings, and behaviors are interconnected.

The therapy focuses on identifying cognitive distortions—automatic negative thoughts that don't reflect reality. Common distortions include catastrophizing, black-and-white thinking, and overgeneralization.

Through CBT, you learn to challenge these thoughts with evidence, develop more balanced perspectives, and adopt healthier behavioral responses. Sessions typically involve homework assignments to practice new skills between sessions.`,
    effectiveness: "Highly effective for depression, anxiety, OCD, PTSD, and eating disorders."
  },
  {
    id: 2,
    title: "Talk Therapy (Psychotherapy)",
    icon: MessageSquare,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Open dialogue with a trained therapist to explore thoughts and feelings.",
    content: `Traditional talk therapy, or psychodynamic therapy, explores how unconscious thoughts and past experiences influence current behavior. It helps uncover root causes of emotional difficulties.

This approach emphasizes the therapeutic relationship as a vehicle for change. Through regular sessions, you develop insight into patterns that may have been previously hidden.

Talk therapy is particularly effective for those dealing with recurring relationship issues, low self-esteem, or long-standing emotional difficulties that don't have clear triggers.`,
    effectiveness: "Effective for personality disorders, depression, and relationship issues."
  },
  {
    id: 3,
    title: "Medication Management",
    icon: Pill,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Psychiatric medications to manage symptoms and support recovery.",
    content: `Psychiatric medications can be an important part of treatment for many mental health conditions. Common categories include antidepressants, anti-anxiety medications, mood stabilizers, and antipsychotics.

These medications work by affecting neurotransmitter levels in the brain. They don't cure mental illness but can significantly reduce symptoms, making it easier to engage in therapy and daily life.

Medication decisions should always be made with a qualified psychiatrist who can monitor effects, adjust dosages, and manage any side effects. Many people benefit from combining medication with therapy.`,
    effectiveness: "Often essential for severe depression, bipolar disorder, schizophrenia, and severe anxiety."
  },
  {
    id: 4,
    title: "Group Therapy",
    icon: Users,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Therapeutic sessions with others facing similar challenges.",
    content: `Group therapy involves one or more therapists working with several people at the same time. It provides unique benefits that individual therapy cannot—peer support, diverse perspectives, and the realization that you're not alone.

Groups may focus on specific issues (grief, addiction, social anxiety) or be more general process groups. The group dynamic itself becomes a tool for growth and self-awareness.

Many find that helping others in the group enhances their own recovery. Group therapy is often more affordable than individual sessions while providing powerful therapeutic experiences.`,
    effectiveness: "Particularly helpful for addiction recovery, social anxiety, and grief."
  },
  {
    id: 5,
    title: "Mindfulness-Based Therapy",
    icon: Leaf,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description: "Integrating meditation and awareness practices into treatment.",
    content: `Mindfulness-Based Cognitive Therapy (MBCT) and Mindfulness-Based Stress Reduction (MBSR) combine traditional cognitive approaches with mindfulness meditation practices.

These approaches teach you to observe thoughts and feelings without judgment, reducing their power over you. Regular practice changes how the brain processes emotional experiences.

Mindfulness techniques include body scans, sitting meditation, mindful movement, and bringing awareness to daily activities. These practices build emotional regulation skills that persist long after treatment ends.`,
    effectiveness: "Highly effective for preventing depression relapse and managing chronic pain and stress."
  },
  {
    id: 6,
    title: "EMDR Therapy",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "Eye movement desensitization for processing traumatic memories.",
    content: `EMDR (Eye Movement Desensitization and Reprocessing) is a specialized therapy for trauma and PTSD. It uses bilateral stimulation—typically eye movements—while processing traumatic memories.

The therapy helps the brain reprocess stuck traumatic memories, reducing their emotional charge. Unlike traditional talk therapy, EMDR doesn't require detailed discussion of the traumatic event.

EMDR follows an 8-phase protocol that includes history-taking, preparation, assessment, desensitization, installation of positive beliefs, body scan, closure, and reevaluation. Many people experience significant relief in relatively few sessions.`,
    effectiveness: "Proven effective for PTSD, trauma, and anxiety disorders."
  },
  {
    id: 7,
    title: "Dialectical Behavior Therapy (DBT)",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    description: "Skills training for emotional regulation and interpersonal effectiveness.",
    content: `DBT was originally developed for borderline personality disorder but is now used for many conditions involving emotional dysregulation. It balances acceptance and change strategies.

The therapy teaches four skill modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Skills are practiced in individual therapy, group sessions, and through homework.

DBT's emphasis on validation while pushing for change makes it particularly effective for those who've felt invalidated by other approaches. The skills learned are practical and applicable to daily life.`,
    effectiveness: "Highly effective for borderline personality disorder, self-harm, and emotional dysregulation."
  },
  {
    id: 8,
    title: "Art & Music Therapy",
    icon: Music,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    description: "Creative expression as a pathway to emotional healing.",
    content: `Expressive therapies use creative processes to improve mental health. Art therapy might involve drawing, painting, or sculpture; music therapy uses listening, singing, or playing instruments.

These approaches are particularly helpful for those who struggle to express emotions verbally. The creative process itself can be healing, allowing unconscious material to surface safely.

No artistic skill is required—the focus is on the process and what it reveals, not the product. Many find creative therapies complement traditional talk therapy effectively.`,
    effectiveness: "Helpful for trauma, depression, anxiety, and developmental disorders."
  },
];

const Treatments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Treatment{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Methods
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore evidence-based treatments used by mental health professionals. 
              Understanding your options is the first step toward finding the right support.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid gap-8">
            {treatments.map((treatment, index) => (
              <Card 
                key={treatment.id}
                className="overflow-hidden transition-all duration-500 hover:shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className={`${treatment.bgColor} transition-all duration-300`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-background/80 ${treatment.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <treatment.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{treatment.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{treatment.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {treatment.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-foreground/80 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-primary mb-1">Effectiveness:</h4>
                    <p className="text-sm text-muted-foreground">{treatment.effectiveness}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Finding Help Section */}
          <div className="mt-16 p-8 bg-muted/30 rounded-2xl text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Finding the Right Treatment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              The best treatment depends on your specific situation, preferences, and what you're dealing with. 
              A mental health professional can help you determine which approaches might work best for you. 
              Many people benefit from a combination of treatments.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Remember:</strong> Seeking help is a sign of strength, not weakness.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Treatments;
