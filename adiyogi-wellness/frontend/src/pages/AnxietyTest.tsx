import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

interface Question {
  id: string;
  text: string;
}

const anxietyQuestions: Question[] = [
  { id: 'q1', text: 'Feeling nervous, anxious, or on edge' },
  { id: 'q2', text: 'Not being able to stop or control worrying' },
  { id: 'q3', text: 'Worrying too much about different things' },
  { id: 'q4', text: 'Feeling afraid as if something awful might happen' },
  { id: 'q5', text: 'Having thoughts that you are unsafe or that something bad is going to happen' },
  { id: 'q6', text: 'Trouble relaxing' },
  { id: 'q7', text: 'Being so restless that it is hard to sit still' },
  { id: 'q8', text: 'Experiencing physical tension (e.g., muscle tightness, trembling, stomach upset)' },
  { id: 'q9', text: 'Becoming easily annoyed or irritable' },
  { id: 'q10', text: 'How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?' },
  { id: 'q11', text: 'Avoiding situations, people, or activities because they make you feel anxious' },
  { id: 'q12', text: 'Overall, in the past 4 weeks, how would you rate your level of distress?' },
];

const optionsGAD7 = [
  { value: '0', label: 'Not at all (0)' },
  { value: '1', label: 'Several days (1)' },
  { value: '2', label: 'More than half the days (2)' },
  { value: '3', label: 'Nearly every day (3)' },
];

const optionsExtended = [
  { value: '0', label: 'Not at all (0)' },
  { value: '1', label: 'Very rarely (1)' },
  { value: '2', label: 'Sometimes (2)' },
  { value: '3', label: 'Often (3)' },
  { value: '4', label: 'Almost always (4)' },
];

const optionsImpact = [
  { value: '0', label: 'Not difficult at all (0)' },
  { value: '1', label: 'Somewhat difficult (1)' },
  { value: '2', label: 'Very difficult (2)' },
  { value: '3', label: 'Extremely difficult (3)' },
];

const optionsDistress = [
  { value: '0', label: 'None (0)' },
  { value: '1', label: 'Mild (1)' },
  { value: '2', label: 'Moderate (2)' },
  { value: '3', label: 'Severe (3)' },
  { value: '4', label: 'Very Severe (4)' },
];

const AnxietyTest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = anxietyQuestions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const getOptionsForQuestion = (questionId: string) => {
    if (['q5', 'q8', 'q11'].includes(questionId)) return optionsExtended;
    if (questionId === 'q10') return optionsImpact;
    if (questionId === 'q12') return optionsDistress;
    return optionsGAD7;
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const canProceed = answers[anxietyQuestions[currentStep].id] !== undefined;

  const handleNext = () => {
    if (currentStep === totalSteps - 1) {
      setShowResults(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/home');
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const generateReport = () => {
    const gad7Items = ['q1', 'q2', 'q3', 'q4', 'q6', 'q7', 'q9'];
    const gad7Score = gad7Items.reduce((acc, id) => {
      const score = answers[id] ? parseInt(answers[id]!) : 0;
      return acc + score;
    }, 0);

    const cognitiveAnxiety = [parseInt(answers.q2 || '0'), parseInt(answers.q3 || '0')].reduce((a, b) => a + b, 0);
    const physicalTension = [parseInt(answers.q6 || '0'), parseInt(answers.q7 || '0'), parseInt(answers.q8 || '0'), parseInt(answers.q9 || '0')].reduce((a, b) => a + b, 0);
    const perceivedThreat = [parseInt(answers.q1 || '0'), parseInt(answers.q4 || '0'), parseInt(answers.q5 || '0')].reduce((a, b) => a + b, 0);

    let severityLevel = 'Minimal (0-4)';
    if (gad7Score >= 5 && gad7Score <= 9) severityLevel = 'Mild (5-9)';
    else if (gad7Score >= 10 && gad7Score <= 14) severityLevel = 'Moderate (10-14)';
    else if (gad7Score >= 15) severityLevel = 'Severe (15+)';

    return { gad7Score, severityLevel, cognitiveAnxiety, physicalTension, perceivedThreat };
  };

  const report = showResults ? generateReport() : null;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-card rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-bold mb-6">Your Anxiety Report</h2>
            <div className="space-y-4 mb-8">
              <p><strong>GAD-7 Score:</strong> {report?.gad7Score} - {report?.severityLevel}</p>
              <p><strong>Cognitive Anxiety (Worry Loop):</strong> {report?.cognitiveAnxiety}</p>
              <p><strong>Physical Tension (Body\'s Alarm):</strong> {report?.physicalTension}</p>
              <p><strong>Perceived Threat (Feeling Unsafe):</strong> {report?.perceivedThreat}</p>
            </div>
            <p className="text-muted-foreground mb-8">
              This is not a medical diagnosis. If your score is 8+, consider professional help. Explore our resources for anxiety management.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => navigate('/home')} variant="outline">
                Back to Home
              </Button>
              <Button onClick={() => { setShowResults(false); setCurrentStep(0); setAnswers({}); }}>
                Retake Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
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

        <div className="bg-card rounded-lg shadow-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {anxietyQuestions[currentStep].text}
          </h2>
          <RadioGroup
            value={answers[anxietyQuestions[currentStep].id] || ''}
            onValueChange={(value) => handleAnswerChange(anxietyQuestions[currentStep].id, value)}
            className="space-y-4"
          >
            {getOptionsForQuestion(anxietyQuestions[currentStep].id).map((option) => (
              <div
                key={option.value}
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  answers[anxietyQuestions[currentStep].id] === option.value
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="text-base font-medium cursor-pointer flex-1">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {currentStep === 0 ? 'Back to Home' : 'Previous'}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2 bg-gradient-cosmic"
          >
            {currentStep === totalSteps - 1 ? 'View Results' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnxietyTest;
