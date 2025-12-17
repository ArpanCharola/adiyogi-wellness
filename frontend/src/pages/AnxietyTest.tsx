import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Brain } from "lucide-react";
import AnxietyResults from "@/components/AnxietyResults";

const questions = [
  "Feeling nervous, anxious, or on edge?",
  "Not being able to stop or control worrying?",
  "Worrying too much about different things?",
  "Trouble relaxing or feeling restless?",
  "Becoming easily annoyed or irritable?",
  "Feeling afraid as if something awful might happen?",
  "Difficulty falling or staying asleep due to worry?",
  "Racing heart, shortness of breath, or chest tightness?",
  "Finding it hard to concentrate or your mind going blank?",
  "Avoiding situations or places because they make you feel overwhelmed?",
];

const options = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

const AnxietyTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return answers.reduce((sum, val) => sum + (val >= 0 ? val : 0), 0);
  };

  const getAnxietyLevel = () => {
    const score = calculateScore();
    const maxScore = questions.length * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) return { level: "Minimal", color: "text-green-500", description: "Your anxiety levels appear to be within a healthy range." };
    if (percentage <= 50) return { level: "Mild", color: "text-yellow-500", description: "You may be experiencing mild anxiety. Consider stress management techniques." };
    if (percentage <= 75) return { level: "Moderate", color: "text-orange-500", description: "Your anxiety levels are moderate. You may benefit from additional support." };
    return { level: "Severe", color: "text-red-500", description: "Your anxiety levels are high. Consider speaking with a mental health professional." };
  };

  if (showResults) {
    return (
      <AnxietyResults 
        score={calculateScore()} 
        maxScore={questions.length * 3}
        anxietyLevel={getAnxietyLevel()}
        answers={answers}
        questions={questions}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">GAD-7 Based Assessment</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Anxiety{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>
            <p className="text-muted-foreground">
              Over the last 2 weeks, how often have you been bothered by the following?
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-xl text-center">
                {questions[currentQuestion]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 hover:scale-[1.02] ${
                    answers[currentQuestion] === option.value
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <span className={`font-medium ${answers[currentQuestion] === option.value ? "text-primary" : ""}`}>
                    {option.label}
                  </span>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={answers[currentQuestion] === -1}
              className="gap-2 bg-gradient-cosmic hover:opacity-90"
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnxietyTest;
