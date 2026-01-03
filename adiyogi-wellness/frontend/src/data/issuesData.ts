// src/data/issuesData.ts
export type IssueCategory = "Anxiety" | "Depression" | "Anger" | "Stress" | "Trauma" | "Sleep";

export interface IssuePost {
  slug: string;
  title: string;
  category: IssueCategory;
  shortDescription: string;
  readingTime: string;
  publishedAt: string;
  heroImage: string;
  tags: string[];
  highlight?: string;
  content: string;
}

export const issuesPosts: IssuePost[] = [
  {
    slug: "anxiety-understanding-the-alarm-system",
    title: "Anxiety: Understanding Your Brain's Overactive Alarm System",
    category: "Anxiety",
    shortDescription:
      "Anxiety isn't weakness—it's your brain's alarm system stuck on high alert. Learn what triggers it and how to reset the sensitivity.",
    readingTime: "6 min read",
    publishedAt: "Dec 2024",
    heroImage: "/assets/issues/anxiety.jpg",
    tags: ["Anxiety", "Brain Science", "Nervous System"],
    highlight:
      "Your anxiety is not a character flaw. It's biology doing its job—too well.",
    content:
      "Anxiety feels personal, but it's actually your brain's ancient survival system misfiring in modern life. The amygdala (your alarm center) scans for threats 24/7, and when it overreacts to emails, social media, or uncertainty, your body floods with stress hormones you don't need.\n\nThe good news? You can retrain it. Understanding the 'window of tolerance'—where you're alert but not overwhelmed—helps you spot when anxiety is building before it takes over. Simple awareness practices, breathing techniques, and gradual exposure shrink that overactive alarm back to normal size.",
  },
  {
    slug: "depression-the-energy-conservation-mode",
    title: "Depression: When Your Brain Goes Into Energy Conservation Mode",
    category: "Depression",
    shortDescription:
      "Depression isn't laziness. It's your brain trying to protect you by shutting down non-essential functions. Here's what's happening biologically.",
    readingTime: "7 min read",
    publishedAt: "Jan 2025",
    heroImage: "/assets/issues/depression.jpg",
    tags: ["Depression", "Brain Chemistry", "Energy"],
    highlight:
      "Depression feels like failure, but it's your brain's emergency power-saving mode.",
    content:
      "When life overwhelms your system, depression kicks in like a phone going into low-power mode. Dopamine (motivation chemical) and serotonin (mood stabilizer) drop, your prefrontal cortex (decision-making) goes offline, and your body conserves energy by making everything feel heavy and meaningless.\n\nThis isn't 'laziness'—it's survival. The brain thinks, 'Danger ahead, better not move.' Recovery involves gentle re-activation: small wins rebuild dopamine pathways, sunlight and movement boost serotonin, and therapy helps rewrite the 'danger' stories your brain believes.",
  },
  {
    slug: "anger-the-fight-response",
    title: "Anger: Your Brain's Fight Response in a World Without Saber-Tooth Tigers",
    category: "Anger",
    shortDescription:
      "Anger kept our ancestors alive. Now it backfires on traffic, bosses, and relationships. Here's why it happens and how to redirect it.",
    readingTime: "5 min read",
    publishedAt: "Dec 2024",
    heroImage: "/assets/issues/anger.jpg",
    tags: ["Anger", "Stress Response", "Relationships"],
    highlight:
      "Anger is 10,000-year-old software running on modern hardware.",
    content:
      "Your anger system evolved to face predators, not passive-aggressive emails. When the amygdala detects 'threat,' it floods you with adrenaline for fight-or-flight. Problem: modern threats (rejection, failure, injustice) trigger the same response without a physical outlet.\n\nUnprocessed anger builds pressure. The solution isn't suppression—it's channeling: physical exercise burns the adrenaline, naming the anger reduces amygdala hijacking, and skills like DBT's 'opposite action' help you respond instead of react.",
  },
  {
    slug: "mastering-your-emotions-anger",
    title: "The Power to Pause: 5 Steps to Master Your Anger and Take Control",
    category: "Anger",
    shortDescription:
      "Learn to recognize your anger cycle and insert a strategic pause between trigger and reaction, preventing damage to relationships and your wellbeing.",
    readingTime: "7 min read",
    publishedAt: "Mar 2025",
    heroImage: "/assets/issues/anger-pause.jpeg",
    tags: ["Anger Management", "Emotional Regulation", "Relationships", "Mindfulness"],
    highlight:
      "The key isn't to eliminate anger—that's impossible—but to learn how to master it.",
    content:
      "Anger follows a predictable cycle: trigger → escalation → crisis → regret. The secret lies in inserting a strategic pause before the crisis point. Your body gives early warnings—tight chest, clenched jaw, rapid breathing—if you learn to listen. The 6-second rule (waiting for the emotional wave to peak) combined with deep belly breathing can prevent destructive outbursts.\n\nChanging your environment (a strategic 'time-out') and challenging catastrophic thinking ('This is ruining everything!') breaks the escalation pattern. Creating a consistent cool-down ritual trains your nervous system that safety follows frustration. Each conscious pause strengthens your emotional regulation muscle.",
  },
  {
    slug: "mindset-resilience-strength",
    title: "Mindset and Resilience: The True Measure of Strength",
    category: "Depression",
    shortDescription:
      "Resilience isn't about avoiding storms but learning to build better ships. Discover how to shift from 'why me?' to 'what now?'",
    readingTime: "8 min read",
    publishedAt: "Feb 2025",
    heroImage: "/assets/issues/resilience.jpg",
    tags: ["Resilience", "Growth Mindset", "Coping Skills", "Optimism"],
    highlight:
      "Resilience isn't a genetic trait; it's a muscle you can develop.",
    content:
      "The difference between people who collapse under pressure and those who bounce back often comes down to mindset. A fixed mindset sees setbacks as permanent failures ('I am a failure'), while a growth mindset views them as temporary learning opportunities ('I failed this time'). This shift from victimhood to agency builds psychological resilience.\n\nThree pillars support lasting resilience: realistic optimism (focusing on controllables), strong social connections (resilience is a team sport), and consistent self-care. When you stop asking 'Why is this happening?' and start asking 'What is this teaching me?', you move from reacting to responding with courage.",
  },
  {
    slug: "anxiety-when-mind-wont-slow",
    title: "When Your Mind Won't Slow Down: A Gentle Guide to Living with Anxiety",
    category: "Anxiety",
    shortDescription:
      "Anxiety whispers through constant worry and restless nights. Learn gentle, compassionate strategies to calm your nervous system without fighting yourself.",
    readingTime: "6 min read",
    publishedAt: "Jan 2025",
    heroImage: "/assets/issues/anxiety-mind.jpg",
    tags: ["Anxiety", "Grounding Techniques", "Self-Compassion", "Mindfulness"],
    highlight:
      "Anxiety may convince you that danger is near—even when you are perfectly safe.",
    content:
      "Anxiety is a full-body experience that manifests mentally (racing thoughts), physically (tight chest, shallow breathing), and emotionally (lingering fear). The key to managing it isn't elimination but relationship change. Simple practices like the 5-4-3-2-1 grounding technique bring your mind back to the present moment, while extended exhales (4-count inhale, 6-count exhale) signal safety to your nervous system.\n\nSetting a daily 'worry window' contains anxious thoughts, and practicing radical self-kindness ('I am doing my best with a difficult feeling') reduces the secondary shame that amplifies anxiety. Healing doesn't mean the feeling never returns; it means knowing how to handle it when it does.",
  },
  {
    slug: "building-inner-safety-calm",
    title: "Finding Calm in Chaos: How to Create Emotional Safety Within Yourself",
    category: "Anxiety",
    shortDescription:
      "True peace comes not from controlling outcomes but from building inner safety—the ability to reassure yourself even when life feels uncertain.",
    readingTime: "7 min read",
    publishedAt: "Feb 2025",
    heroImage: "/assets/issues/inner-safety.jpeg",
    tags: ["Emotional Safety", "Self-Regulation", "Anxiety Management", "Rituals"],
    highlight:
      "Calm is less of a destination and more of a way of being.",
    content:
      "Anxiety grows from a desperate need to control the future. The antidote is shifting from control to trust. This involves changing internal dialogue from 'I must fix this right now' to 'I can take this one step at a time.' Creating consistent safety rituals—whether morning stretching or evening tea—tells your brain you're secure.\n\nProtecting rest time and treating yourself with the same kindness you'd offer a friend ('It's okay to feel this way') builds emotional resilience. When anxiety returns (as it will), remember: 'This feeling is a visitor, not a permanent resident.' You are allowed to move slowly, to rest, and to feel safe again.",
  },
  {
    slug: "depression-understanding-the-weight",
    title: "When the Colors Fade: Understanding the Quiet Reality of Depression",
    category: "Depression",
    shortDescription:
      "Depression isn't just sadness—it's a heavy fog that changes how you see the world, your future, and yourself. Learn what's happening beneath the surface.",
    readingTime: "7 min read",
    publishedAt: "Mar 2025",
    heroImage: "/assets/issues/depression-fog.jpg",
    tags: ["Depression", "Emotional Numbness", "Self-Compassion", "Mental Health"],
    highlight:
      "Living with depression can feel like walking through water while wearing a suit of heavy armor.",
    content:
      "Depression manifests as emotional numbness (losing interest in what once brought joy), physical exhaustion (fatigue that sleep doesn't fix), and a mental filter that magnifies the bad while filtering out the good. This isn't a character flaw—it's your brain's protective shutdown mechanism when overwhelmed.\n\nSmall acts of resistance matter more than grand gestures: lowering the bar (just move one thing), externalizing the critical voice (that's the depression talking, not you), and seeking tiny connections (a five-minute conversation). The 'you' who loves and dreams is still there—just obscured by the fog right now. Treat yourself with the kindness you'd give a sick friend.",
  },
  {
    slug: "depression-path-to-healing",
    title: "The Slow Thaw: How to Navigate the Journey Back to Yourself",
    category: "Depression",
    shortDescription:
      "Healing from depression isn't a quick fix but a gradual process of rebuilding connection—to yourself, to routine, and to hope.",
    readingTime: "8 min read",
    publishedAt: "Apr 2025",
    heroImage: "/assets/issues/healing-path.jpg",
    tags: ["Recovery", "Therapy", "Routine", "Self-Compassion", "Support Systems"],
    highlight:
      "Healing from depression is more like the changing of seasons—a slow thaw where light returns one minute at a time.",
    content:
      "The pressure to 'snap out of it' is as unhelpful as telling someone with a broken leg to 'just run it off.' Real healing begins with acceptance: you are allowed to be 'under construction.' Building a support landscape with three pillars makes recovery sustainable: professional guidance (therapy as a mirror), predictable routine (bare minimum daily structure), and radical self-compassion (no punishment for 'unproductive' days).\n\nCelebrate invisible wins: showering when you didn't want to, asking for help, choosing a nutritious meal. Each is a vote for the version of yourself waiting to bloom. Recovery isn't about never feeling depressed again, but about building tools for when the fog returns.",
  },
  {
    slug: "stress-unseen-load-body",
    title: "The Unseen Load: Understanding How Stress Lives in the Human Body",
    category: "Stress",
    shortDescription:
      "Stress doesn't just stay in your mind—it migrates to your shoulders, your breathing, and your patience. Learn to recognize and release its physical hold.",
    readingTime: "6 min read",
    publishedAt: "Mar 2025",
    heroImage: "/assets/issues/stress-body.jpeg",
    tags: ["Stress Management", "Mind-Body Connection", "Nervous System", "Self-Care"],
    highlight:
      "Stress is a survival mechanism—a biological alarm system designed to keep us alert. The problem is our alarm is constantly ringing.",
    content:
      "Your body tells the story of your stress long before your mind realizes you're overwhelmed: shoulders creeping toward ears, shallow breathing, clenched jaw, shortened patience. This is your nervous system stuck in 'fight-or-flight.' Simply removing the stressor isn't enough—you must 'close the stress cycle' by helping your body process the trapped energy.\n\nPhysical movement (even a brisk walk), the physiological sigh (deep inhale, vocalized exhale), and creative expression (doodling, journaling) signal safety to your nervous system. You're not a machine meant to be 'on' 24/7. Stress is a signal you're pushing against human limits.",
  },
  {
    slug: "stress-slowing-down-fast-world",
    title: "The Quiet Rebellion: How to Cultivate Calm in a Culture of Busy",
    category: "Stress",
    shortDescription:
      "Real stress management isn't about fitting more in—it's about having the courage to take things out. It's a rebellion against tying worth to productivity.",
    readingTime: "7 min read",
    publishedAt: "Apr 2025",
    heroImage: "/assets/issues/slow-down.jpg",
    tags: ["Work-Life Balance", "Mindfulness", "Digital Detox", "Self-Respect", "Prioritization"],
    highlight:
      "Managing stress is a form of self-respect—a way of saying your peace of mind matters more than external pressures.",
    content:
      "Distinguish between purposeful stress (the pull of meaningful challenge) and pressure stress (the weight of others' expectations). Reduce stress by auditing your 'yeses.' Create 'pockets of peace' throughout your day: ten minutes of morning silence instead of phone scrolling, a 'done list' to celebrate completions, and digital boundaries (screen curfews) for restorative sleep.\n\nThis isn't about falling behind but giving yourself the energy to move forward with clarity and joy. When you choose to slow down, you reclaim your right to a life not defined by constant productivity. Your worth isn't tied to your output.",
  },
];