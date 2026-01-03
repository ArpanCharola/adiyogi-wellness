// src/data/treatmentsData.ts

export type TreatmentCategory =
  | "Art Therapy"
  | "CBT"
  | "DBT"
  | "Education"
  | "Mindfulness"
  | "Lifestyle";

export interface TreatmentPost {
  slug: string;
  title: string;
  category: TreatmentCategory;
  shortDescription: string;
  readingTime: string;
  publishedAt: string;
  heroImage: string; // /assets/...
  tags: string[];
  highlight?: string;
  content: string; // full article (you can later split into sections)
}

export const treatmentsPosts: TreatmentPost[] = [
  {
    slug: "psychoeducation-knowledge-as-power",
    title:
      "Knowledge as Power: Why Understanding Your Brain Is the First Step to Healing",
    category: "Education",
    shortDescription:
      "Psychoeducation helps you understand the 'why' behind your anxiety, mood swings, and stress so you stop blaming yourself and start seeing patterns.",
    readingTime: "7 min read",
    publishedAt: "Feb 2025",
    heroImage: "/assets/treatments/psychoeducation.jpeg",
    tags: ["Psychoeducation", "Anxiety", "Self-awareness"],
    highlight:
      "When you learn how your brain and nervous system work, you realize you are not broken—you're human.",
    content:
      "Have you ever felt 'broken' because you couldn't just snap out of a bad mood or stop a panic attack? Most of the shame we feel about our mental health comes from not understanding what's happening inside us. Psychoeducation is the part of therapy where you learn the why behind your what: why your heart races when you're stressed, why your memory shuts down when you're overwhelmed.\n\nWhen a therapist explains the mechanics of your condition, it does something powerful: it externalizes the problem. You are not the anxiety; you are a person experiencing an overactive alarm system in the brain. Learning ideas like the 'window of tolerance' helps you see why you sometimes flip from fine to furious or from active to completely numb—and that insight is the first step to changing it.",
  },
  {
    slug: "dbt-skills-for-emotional-storms",
    title:
      "DBT Skills: How to Survive Emotional Storms Without Losing Yourself",
    category: "DBT",
    shortDescription:
      "Dialectical Behavior Therapy (DBT) gives you practical tools—like TIPP, Wise Mind, and GIVE—to ride out big emotions without hurting yourself or your relationships.",
    readingTime: "8 min read",
    publishedAt: "Jan 2025",
    heroImage: "/assets/treatments/dbt-skills.jpeg",
    tags: ["DBT", "Emotion Regulation", "Relationships"],
    highlight:
      "DBT is less about 'fixing' you and more about giving you a toolkit for surviving emotional storms.",
    content:
      "DBT was originally created for people who feel emotions very intensely and can get overwhelmed quickly. Instead of only talking about feelings, DBT focuses on concrete skills you can practice, especially when you're close to losing control. One of the core tools is TIPP: Temperature, Intense exercise, Paced breathing, and Paired muscle relaxation. These strategies calm your body first so your mind can follow.\n\nDBT also introduces the idea of Wise Mind—the overlap between Reasonable Mind (cool but detached) and Emotion Mind (passionate but chaotic). Before you send that angry text or quit your job, DBT invites you to pause and ask, 'Am I in my Wise Mind right now?'. For relationships, skills like GIVE (Gentle, Interested, Validate, Easy manner) help you protect important connections even during conflict.",
  },
  {
    slug: "art-therapy-language-of-the-soul",
    title: "Art Therapy: When Feelings Speak Better in Colors Than in Words",
    category: "Art Therapy",
    shortDescription:
      "Art therapy gives your emotions a canvas when words feel too small. You don't need to be an artist to use it for healing.",
    readingTime: "6 min read",
    publishedAt: "Dec 2024",
    heroImage: "/assets/treatments/art-therapy.jpg",
    tags: ["Art Therapy", "Self-expression", "Trauma"],
    highlight:
      "Sometimes your hands can say what your mouth can't. That's where art therapy begins.",
    content:
      "For many people, talking about pain is the hardest part of healing. Art therapy offers another doorway. Through drawing, painting, collage, or even simple doodles, you can express experiences that feel confusing, shameful, or too big for words. The goal is not to create something beautiful, but to create something honest.\n\nIn a safe space, a therapist might invite you to draw your anxiety as a creature, paint your safe place, or build a timeline of important events using symbols instead of sentences. Over time, your artwork becomes a gentle mirror: you start to notice themes, colors, and shapes that match how you feel inside. That awareness can open up deeper conversations and a stronger sense of self-compassion.",
  },
  {
    slug: "cbt-restructuring-your-thoughts",
    title: "CBT: How to Restructure the Thoughts That Keep You Stuck",
    category: "CBT",
    shortDescription:
      "Cognitive Behavioral Therapy (CBT) teaches you to identify and challenge negative thought patterns that fuel depression, anxiety, and self-sabotage.",
    readingTime: "9 min read",
    publishedAt: "Mar 2025",
    heroImage: "/assets/treatments/cbt-thoughts.jpeg",
    tags: ["CBT", "Cognitive Restructuring", "Anxiety", "Depression"],
    highlight:
      "Your thoughts are not facts—they're hypotheses. CBT teaches you to test them.",
    content:
      "CBT operates on a simple but profound idea: our thoughts, feelings, and behaviors are interconnected. A negative thought ('I'm going to fail') can trigger an emotion (anxiety), which leads to a behavior (avoidance). CBT interrupts this cycle by teaching you to catch automatic negative thoughts and examine them like a scientist.\n\nYou learn to ask: 'What's the evidence for this thought? Is there another way to see this situation? What would I tell a friend in this position?' Through exercises like thought records and behavioral experiments, you gradually replace distorted thinking with more balanced, realistic perspectives. This isn't about 'positive thinking'—it's about accurate thinking that gives you more choices and less suffering.",
  },
  {
    slug: "mindfulness-grounding-in-the-present",
    title: "Mindfulness: The Art of Being Here Now (Without Judgment)",
    category: "Mindfulness",
    shortDescription:
      "Mindfulness teaches you to anchor yourself in the present moment, reducing rumination about the past and worry about the future.",
    readingTime: "6 min read",
    publishedAt: "Jan 2025",
    heroImage: "/assets/treatments/mindfulness-present.jpeg",
    tags: ["Mindfulness", "Meditation", "Stress Reduction", "Grounding"],
    highlight:
      "Mindfulness is not about emptying your mind, but about changing your relationship to your thoughts.",
    content:
      "In a world that rewards multitasking and constant productivity, mindfulness offers a radical alternative: single-tasking with your attention. By practicing mindful breathing, body scans, or even mindful eating, you train your brain to notice when it has wandered and gently return to the present. This breaks the cycle of automatic pilot where we react to life instead of responding to it.\n\nResearch shows regular mindfulness practice can literally rewire the brain—strengthening areas responsible for emotional regulation while calming the amygdala (the fear center). You learn to observe thoughts and feelings as passing events, not permanent truths. This creates a 'pause button' between stimulus and reaction, giving you the freedom to choose how you want to act, rather than being hijacked by habit or emotion.",
  },
  {
    slug: "lifestyle-sleep-mental-health-connection",
    title: "Sleep Hygiene: Why Your Brain Needs Rest to Heal",
    category: "Lifestyle",
    shortDescription:
      "Quality sleep isn't a luxury—it's essential for emotional processing, memory consolidation, and regulating mood. Poor sleep can undermine even the best therapy.",
    readingTime: "7 min read",
    publishedAt: "Feb 2025",
    heroImage: "/assets/treatments/sleep-hygiene.jpg",
    tags: ["Sleep Hygiene", "Lifestyle", "Brain Health", "Recovery"],
    highlight:
      "During sleep, your brain processes the emotional events of the day—it's like overnight therapy.",
    content:
      "When you're sleep-deprived, your brain's emotional centers become hypersensitive while your prefrontal cortex (responsible for rational thinking) goes offline. This makes you more reactive, less resilient, and prone to negative thinking. Sleep hygiene isn't just about getting more hours—it's about improving sleep quality through consistent routines and environment optimization.\n\nPractical strategies include establishing a digital curfew (screens off 60 minutes before bed), keeping your bedroom cool and dark, and avoiding caffeine after noon. Perhaps most importantly, developing a 'wind-down' ritual signals to your nervous system that it's safe to relax. When sleep improves, many people notice their therapy work accelerates—they have more cognitive resources to apply the skills they're learning.",
  },
  {
    slug: "cbt-behavioral-activation",
    title: "Behavioral Activation: Using Action to Change Your Mood",
    category: "CBT",
    shortDescription:
      "When you're depressed, motivation follows action—not the other way around. Behavioral activation helps you break the cycle of avoidance and inactivity.",
    readingTime: "8 min read",
    publishedAt: "Apr 2025",
    heroImage: "/assets/treatments/behavioral-activation.jpg",
    tags: ["CBT", "Behavioral Activation", "Depression", "Motivation"],
    highlight:
      "Don't wait to feel motivated—act motivated, and the feeling will often follow.",
    content:
      "Depression often creates a vicious cycle: low mood leads to reduced activity, which leads to less pleasure and accomplishment, which worsens mood. Behavioral activation systematically breaks this cycle by helping you schedule and engage in meaningful activities, even—especially—when you don't feel like it. You start small, with achievable tasks that align with your values.\n\nThe key insight is that behavior can change emotion. By gradually increasing engagement with life—whether it's calling a friend, going for a walk, or preparing a healthy meal—you create opportunities for positive reinforcement. Over time, these 'small wins' rebuild a sense of mastery and pleasure. It's not about forcing productivity, but about reconnecting with what matters to you, one step at a time.",
  },
  {
    slug: "mindfulness-self-compassion-practice",
    title: "Mindful Self-Compassion: Turning Kindness Inward",
    category: "Mindfulness",
    shortDescription:
      "Self-compassion teaches you to respond to your own suffering with the same kindness you'd offer a friend—reducing shame and building emotional resilience.",
    readingTime: "7 min read",
    publishedAt: "Mar 2025",
    heroImage: "/assets/treatments/self-compassion.jpg",
    tags: ["Mindfulness", "Self-Compassion", "Shame", "Resilience"],
    highlight:
      "Self-compassion is not self-pity—it's recognizing that suffering is part of the human experience.",
    content:
      "Many people struggling with mental health issues are incredibly compassionate toward others but harshly critical toward themselves. Mindful self-compassion combines mindfulness (awareness of suffering) with self-kindness (responding with care) and common humanity (remembering you're not alone). Practices include self-compassion breaks, loving-kindness meditation, and writing yourself a compassionate letter.\n\nResearch shows self-compassion is strongly linked to psychological wellbeing. When you learn to comfort yourself during difficult moments rather than berating yourself, you create an internal safe haven. This doesn't mean letting yourself off the hook for mistakes, but addressing them from a place of constructive care rather than destructive criticism. It's a skill that, with practice, can transform your relationship with yourself.",
  },
  {
    slug: "dbt-distress-tolerance-crisis",
    title: "DBT Distress Tolerance: Getting Through Crisis Moments Without Making Things Worse",
    category: "DBT",
    shortDescription:
      "When you can't change a painful situation immediately, distress tolerance skills help you survive the moment without resorting to harmful coping mechanisms.",
    readingTime: "8 min read",
    publishedAt: "Apr 2025",
    heroImage: "/assets/treatments/distress-tolerance.jpeg",
    tags: ["DBT", "Distress Tolerance", "Crisis Management", "Coping Skills"],
    highlight:
      "Distress tolerance isn't about liking pain—it's about accepting reality when you can't change it in this moment.",
    content:
      "There are moments in life when pain is inevitable—a loss, a setback, intense emotional pain. Distress tolerance skills (part of DBT) help you navigate these moments without making the situation worse through impulsive decisions. Skills like ACCEPTS (Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations) provide concrete ways to distract and self-soothe temporarily.\n\nThe radical acceptance component teaches that fighting reality often increases suffering. This doesn't mean approving of painful situations, but acknowledging what is true right now so you can respond effectively. IMPROVE the Moment (Imagery, Meaning, Prayer, Relaxation, One thing at a time, Vacation, Encouragement) offers additional tools. Together, these skills build your capacity to withstand emotional storms until you're in a position to make thoughtful changes.",
  },
  {
    slug: "lifestyle-movement-mood-connection",
    title: "Movement as Medicine: How Physical Activity Rewires Your Brain for Better Mental Health",
    category: "Lifestyle",
    shortDescription:
      "Regular movement isn't just good for your body—it increases neurotransmitters, reduces inflammation, and can be as effective as medication for mild to moderate depression.",
    readingTime: "8 min read",
    publishedAt: "Mar 2025",
    heroImage: "/assets/treatments/movement-mood.jpg",
    tags: ["Exercise", "Lifestyle", "Neurochemistry", "Depression", "Anxiety"],
    highlight:
      "Movement gives your brain something to focus on besides worry, and gives your body a way to process stress hormones.",
    content:
      "The mental health benefits of exercise go far beyond 'runner's high.' Physical activity increases BDNF (brain-derived neurotrophic factor), which helps brain cells grow and connect. It also regulates stress hormones, reduces systemic inflammation (linked to depression), and improves sleep quality. The key is finding movement you can sustain—whether it's walking, dancing, yoga, or weight training.\n\nFor those struggling with motivation, the '5-minute rule' can help: commit to just 5 minutes of movement. Often, once you start, you'll continue. Combining movement with nature (green exercise) or social connection adds additional mental health benefits. Importantly, exercise shouldn't be approached as punishment, but as self-care—a way to care for your nervous system and build resilience against future stressors.",
  },
];