import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Sparkles, Heart } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickResponses = [
  "I'm feeling anxious today",
  "Help me relax",
  "I need motivation",
  "Guide me through breathing",
];

const botResponses: { [key: string]: string } = {
  default: "I'm here to listen and support you. How are you feeling right now? Remember, it's okay to not be okay sometimes. 💙",
  anxious: "I understand that anxiety can feel overwhelming. Let's try a simple breathing exercise: breathe in for 4 counts, hold for 4, and exhale for 4. Would you like me to guide you through some relaxation techniques?",
  relax: "Let's take a moment to relax together. Find a comfortable position, close your eyes if you'd like, and take three deep breaths. Focus on the sensation of your breath. You're doing great. 🌿",
  motivation: "You are stronger than you think! Every step forward, no matter how small, is progress. Remember: 'The only impossible journey is the one you never begin.' What's one small goal you can work towards today?",
  breathing: "Let's do a 4-7-8 breathing exercise:\n\n1. Inhale quietly through your nose for 4 seconds\n2. Hold your breath for 7 seconds\n3. Exhale completely through your mouth for 8 seconds\n\nRepeat this 3-4 times. This technique helps activate your parasympathetic nervous system and promotes calm.",
  sad: "I'm sorry you're feeling sad. It's important to acknowledge these feelings. Would you like to talk about what's troubling you? Sometimes expressing our thoughts can help lighten the burden. I'm here for you. 💜",
  stressed: "Stress is our body's way of responding to challenges. Let's break this down: What's the main thing causing you stress right now? Often, identifying the source helps us find ways to manage it better.",
  hello: "Hello! Welcome to Adiyogi Wellness. I'm your AI companion, here to support your mental wellbeing journey. How can I help you today? 🌟",
  help: "I can help you with:\n• Breathing exercises and relaxation techniques\n• Emotional support and active listening\n• Stress management tips\n• Motivation and positive affirmations\n• Guided mindfulness exercises\n\nJust tell me how you're feeling or what you need!",
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your wellness companion. I'm here to listen, support, and help you navigate your emotional journey. How are you feeling today? 🌟",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety") || lowerMessage.includes("worried")) {
      return botResponses.anxious;
    }
    if (lowerMessage.includes("relax") || lowerMessage.includes("calm")) {
      return botResponses.relax;
    }
    if (lowerMessage.includes("motivation") || lowerMessage.includes("inspire") || lowerMessage.includes("motivate")) {
      return botResponses.motivation;
    }
    if (lowerMessage.includes("breathing") || lowerMessage.includes("breath")) {
      return botResponses.breathing;
    }
    if (lowerMessage.includes("sad") || lowerMessage.includes("depressed") || lowerMessage.includes("down")) {
      return botResponses.sad;
    }
    if (lowerMessage.includes("stress") || lowerMessage.includes("overwhelmed")) {
      return botResponses.stressed;
    }
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return botResponses.hello;
    }
    if (lowerMessage.includes("help") || lowerMessage.includes("what can you do")) {
      return botResponses.help;
    }
    
    return botResponses.default;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(text),
      sender: "bot",
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 flex flex-col">
        <div className="container mx-auto px-4 py-4 flex-1 flex flex-col max-w-4xl">
          {/* Header */}
          <div className="text-center mb-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI Wellness Companion</span>
            </div>
            <h1 className="text-2xl font-bold">
              Chat with <span className="bg-gradient-cosmic bg-clip-text text-transparent">Adiyogi</span>
            </h1>
          </div>

          {/* Chat Container */}
          <Card className="flex-1 flex flex-col overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-fade-in ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {message.sender === "bot" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted rounded-bl-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            <div className="p-3 border-t border-border">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {quickResponses.map((response) => (
                  <button
                    key={response}
                    onClick={() => sendMessage(response)}
                    className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-sm whitespace-nowrap transition-colors hover:scale-105"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" disabled={!input.trim()} className="bg-gradient-cosmic hover:opacity-90">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </Card>

          {/* Support Note */}
          <div className="text-center mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            <span>This AI provides emotional support but is not a substitute for professional help.</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
