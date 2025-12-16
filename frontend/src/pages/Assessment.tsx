import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AssessmentResults from "@/components/AssessmentResults";

interface Question {
  id: string;
  text: string;
}

const mentalHealthIssues = [
  "Anger Management",
  "Depression",
  "Anxiety",
  "Overeating/Binge Eating",
  "Substance Use",
  "Sleep Disorders",
  "Suicidal Thoughts",
  "Trauma/PTSD",
  "Fear/Phobias",
  "Loss of Interest"
];

const questions: Question[] = [
  { id: "q1", text: "Over the past two weeks, how often have you felt unusually angry or irritable?" },
  { id: "q2", text: "How often have you felt deep sadness or grief that's hard to control?" },
  { id: "q3", text: "How often have you worried excessively or felt anxious about small things?" },
  { id: "q4", text: "Have you felt urges to overeat or eat when not hungry?" },
  { id: "q5", text: "How often have you used substances (alcohol, tobacco, drugs) to cope with stress?" },
  { id: "q6", text: "How often have you faced trouble sleeping (insomnia, waking early, restless sleep)?" },
  { id: "q7", text: "Over the past month, did you feel life is meaningless or hopeless?" },
  { id: "q8", text: "How often have you felt stuck reliving traumatic or painful memories?" },
  { id: "q9", text: "How frequently do you feel afraid or fearful, even when you're safe?" },
  { id: "q10", text: "Have you lost interest in things you once enjoyed?" },
  { id: "q11", text: "Do you feel you are eating significantly more or less than usual?" },
  { id: "q12", text: "How often do you avoid social situations because of anxiety or sadness?" },
  { id: "q13", text: "Have you felt guilt or shame that's hard to shake off recently?" },
  { id: "q14", text: "Do you have trouble controlling anger or outbursts?" },
  { id: "q15", text: "How often have you felt physically tense, restless, or on edge?" }
];

const options = [
  { value: "0", label: "Never" },
  { value: "1", label: "Rarely" },
  { value: "2", label: "Sometimes" },
  { value: "3", label: "Often" },
  { value: "4", label: "Almost always" }
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = questions.length + 1; // +1 for issues selection
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleIssueToggle = (issue: string) => {
    setSelectedIssues(prev =>
      prev.includes(issue) ? prev.filter(i => i !== issue) : [...prev, issue]
    );
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const canProceed = () => {
    if (currentStep === 0) return selectedIssues.length > 0;
    return answers[questions[currentStep - 1].id] !== undefined;
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate("/");
    }
  };

  if (showResults) {
    return <AssessmentResults answers={answers} selectedIssues={selectedIssues} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <div className="bg-card rounded-lg shadow-card p-8 mb-8">
          {currentStep === 0 ? (
            // First Step: Mental Health Issues Selection
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  What are you experiencing?
                </h2>
                <p className="text-muted-foreground">
                  Select all that apply:
                </p>
              </div>

              <div className="space-y-4">
                {mentalHealthIssues.map((issue) => (
                  <div
                    key={issue}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedIssues.includes(issue)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => handleIssueToggle(issue)}
                  >
                    <Checkbox
                      id={issue}
                      checked={selectedIssues.includes(issue)}
                      onCheckedChange={() => handleIssueToggle(issue)}
                    />
                    <Label
                      htmlFor={issue}
                      className="text-base font-medium cursor-pointer flex-1"
                    >
                      {issue}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Subsequent Steps: Questions
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {questions[currentStep - 1].text}
                </h2>
              </div>

              <RadioGroup
                value={answers[questions[currentStep - 1].id]}
                onValueChange={(value) =>
                  handleAnswerChange(questions[currentStep - 1].id, value)
                }
                className="space-y-4"
              >
                {options.map((option) => (
                  <div
                    key={option.value}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      answers[questions[currentStep - 1].id] === option.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() =>
                      handleAnswerChange(questions[currentStep - 1].id, option.value)
                    }
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="text-base font-medium cursor-pointer flex-1"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {currentStep === 0 ? "Back to Home" : "Previous"}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center gap-2 bg-gradient-cosmic"
          >
            {currentStep === totalSteps - 1 ? "View Results" : "Next"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
