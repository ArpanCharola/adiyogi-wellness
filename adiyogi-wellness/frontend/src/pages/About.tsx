import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Heart, Sparkles, Users, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const statsData = [
  { value: "1000+", label: "Active Users", icon: Users },
  { value: "50+", label: "Yoga Sessions", icon: Heart },
  { value: "30+", label: "Meditation Guides", icon: Sparkles },
  { value: "24/7", label: "Support", icon: Globe }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden selection:bg-orange-200 selection:text-orange-900">
      <Navbar />

      {/* Global Background Elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-400/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/10 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-rose-400/5 blur-[80px]" />
        {/* Noise Texture Overlay for 'Film' Grain Effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="flex justify-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/10 backdrop-blur-sm text-orange-600 dark:text-orange-300 text-sm font-semibold tracking-wide uppercase">
                About Adiyogi Wellness
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              Transforming Lives <br />
              <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                Through Wellness
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A holistic platform dedicated to bringing the ancient wisdom of yoga and meditation into the modern digital world.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <a 
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section with Glassmorphism */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {statsData.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 rounded-3xl bg-white/5 dark:bg-black/5 border border-border/50 hover:border-orange-500/30 transition-colors duration-500 backdrop-blur-sm text-center"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 md:py-32 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-foreground mb-8">
                "We believe in the transformative power of ancient yogic practices combined with modern technology."
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're committed to helping individuals discover their path to physical vitality, mental clarity, and spiritual growth through carefully curated yoga sessions, guided meditations, and wellness resources.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-slate-900 relative">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-white">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                  Meet Our Team
                </h2>
                <p className="text-xl text-slate-300">
                  Creators, designers, and problem solvers building the future of wellness.
                </p>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  {/* Image Container - Clean, no overlays */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-slate-800 aspect-[4/5] mb-6 shadow-md group-hover:shadow-xl group-hover:shadow-orange-500/10 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      // Removed grayscale, kept smooth scale on hover
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Text Content - Adjusted colors for dark background */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 font-medium">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[3rem] bg-foreground text-background p-12 md:p-24 text-center"
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
                  Ready to Begin Your Wellness Journey?
                </h2>
                <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto">
                  Join thousands of users who have transformed their lives through our platform.
                </p>
                <div className="flex justify-center pt-4">
                  <a 
                    href="/"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-full font-semibold transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;