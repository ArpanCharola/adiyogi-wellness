// src/pages/Chat.tsx
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Message, ChatResponse } from "@/lib/api";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const makeSessionId = () =>
  "sess-" + Math.random().toString(36).slice(2, 10);

const Chat = () => {
  const [sessionId] = useState(makeSessionId);
  const [name, setName] = useState("");
  const [mainConcern, setMainConcern] = useState("");
  const [currentEmotion, setCurrentEmotion] = useState("");
  const [intakeDone, setIntakeDone] = useState(false);

  const [input, setInput] = useState("");
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);

  // Load history once intake is done (usually empty for new session)
  useEffect(() => {
    if (!intakeDone) return;

    (async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/session/${sessionId}/messages/`
        );
        if (!res.ok) return; // 404 means no history yet
        const data = (await res.json()) as ChatResponse;
        setAllMessages(data.messages);
      } catch (err) {
        console.error("getSessionMessages failed:", err);
      }
    })();
  }, [intakeDone, sessionId]);

  const handleStartSession = () => {
    if (!mainConcern.trim()) return;
    setIntakeDone(true);
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    setIsSending(true);
    try {
      const res = await fetch(`${API_BASE_URL}/message/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          issue: mainConcern.trim() || "general",
          user_message: trimmed,
        }),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => null);
        console.error("createMessage failed:", res.status, errorBody);
        return;
      }

      const data = (await res.json()) as ChatResponse;
      setAllMessages((prev) => [...prev, ...data.messages]);
      setInput("");
    } catch (err) {
      console.error("createMessage error:", err);
    } finally {
      setIsSending(false);
    }
  };

  const handleSend = () => {
    void sendMessage();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-12 max-w-3xl">
        <header className="mb-6 space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Emotion-Aware Therapy Chat
          </h1>
          <p className="text-muted-foreground text-sm">
            Share anything on your mind—stress, relationships, burnout, fear, or
            self-doubt. This space is private and AI-guided, not a substitute
            for emergency care.
          </p>
        </header>

        {!intakeDone ? (
          <Card className="p-6 space-y-4 bg-card shadow-card border border-border">
            <h2 className="text-lg font-semibold">Before we begin</h2>
            <p className="text-sm text-muted-foreground">
              A few quick questions help tailor the conversation to you.
            </p>

            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">
                What should I call you?
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Optional: Your first name or a nickname"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">
                What is the main concern you&apos;d like support with today?
              </label>
              <Input
                value={mainConcern}
                onChange={(e) => setMainConcern(e.target.value)}
                placeholder="e.g. anxiety and overthinking, breakup, work stress..."
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">
                How are you feeling right now, in a few words?
              </label>
              <Input
                value={currentEmotion}
                onChange={(e) => setCurrentEmotion(e.target.value)}
                placeholder="e.g. overwhelmed, numb, restless, hopeful..."
              />
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                className="bg-gradient-cosmic"
                onClick={handleStartSession}
                disabled={!mainConcern.trim()}
              >
                Start session
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="flex flex-col h-[60vh] bg-card shadow-card border border-border">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {allMessages.length === 0 && (
                <p className="text-sm text-muted-foreground text-center mt-8">
                  You mentioned{" "}
                  <span className="font-semibold">{mainConcern}</span>
                  {currentEmotion
                    ? ` and feeling ${currentEmotion}. When you're ready, type a message below to begin.`
                    : ". When you're ready, type a message below to begin."}
                </p>
              )}

              {allMessages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{m.text}</p>
                    {m.emotion && (
                      <p className="mt-1 text-[11px] opacity-70">
                        {/* Emotion: {m.emotion} */}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex items-end gap-3">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type what you're feeling or thinking... (Enter to send, Shift+Enter for new line)"
                  className="min-h-[60px] max-h-[120px] resize-none"
                />
                <Button
                  onClick={handleSend}
                  disabled={isSending || !input.trim()}
                  className="bg-gradient-cosmic whitespace-nowrap"
                >
                  {isSending ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Chat;
