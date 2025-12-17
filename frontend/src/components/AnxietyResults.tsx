import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Home, RotateCcw, AlertTriangle, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface AnxietyResultsProps {
  score: number;
  maxScore: number;
  anxietyLevel: {
    level: string;
    color: string;
    description: string;
  };
  answers: number[];
  questions: string[];
}

const AnxietyResults = ({ score, maxScore, anxietyLevel, answers, questions }: AnxietyResultsProps) => {
  const navigate = useNavigate();
  const reportRef = useRef<HTMLDivElement>(null);
  const percentage = (score / maxScore) * 100;

  const chartData = [
    { category: "Nervousness", value: answers[0] || 0, fullMark: 3 },
    { category: "Worry Control", value: answers[1] || 0, fullMark: 3 },
    { category: "Excessive Worry", value: answers[2] || 0, fullMark: 3 },
    { category: "Restlessness", value: answers[3] || 0, fullMark: 3 },
    { category: "Irritability", value: answers[4] || 0, fullMark: 3 },
    { category: "Fear", value: answers[5] || 0, fullMark: 3 },
    { category: "Sleep Issues", value: answers[6] || 0, fullMark: 3 },
    { category: "Physical Symptoms", value: answers[7] || 0, fullMark: 3 },
    { category: "Concentration", value: answers[8] || 0, fullMark: 3 },
    { category: "Avoidance", value: answers[9] || 0, fullMark: 3 },
  ];

  const getLevelIcon = () => {
    switch (anxietyLevel.level) {
      case "Minimal": return <CheckCircle className="w-12 h-12 text-green-500" />;
      case "Mild": return <AlertCircle className="w-12 h-12 text-yellow-500" />;
      case "Moderate": return <AlertTriangle className="w-12 h-12 text-orange-500" />;
      case "Severe": return <XCircle className="w-12 h-12 text-red-500" />;
      default: return null;
    }
  };

  const getRecommendations = () => {
    if (percentage <= 25) {
      return [
        "Continue practicing healthy stress management",
        "Maintain regular physical exercise",
        "Keep up with good sleep habits",
        "Stay connected with supportive relationships"
      ];
    } else if (percentage <= 50) {
      return [
        "Try daily relaxation techniques like deep breathing",
        "Consider mindfulness or meditation apps",
        "Limit caffeine and alcohol intake",
        "Establish a consistent sleep schedule"
      ];
    } else if (percentage <= 75) {
      return [
        "Consider speaking with a counselor or therapist",
        "Practice grounding techniques during anxiety",
        "Journaling can help process anxious thoughts",
        "Regular exercise can significantly reduce anxiety"
      ];
    } else {
      return [
        "We strongly recommend consulting a mental health professional",
        "Reach out to a trusted friend or family member",
        "Consider crisis hotlines if feeling overwhelmed",
        "Remember: seeking help is a sign of strength"
      ];
    }
  };

  const downloadPDF = async () => {
    if (!reportRef.current) return;

    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      
      const timestamp = new Date().toISOString().split("T")[0];
      pdf.save(`anxiety-assessment-${timestamp}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div ref={reportRef} className="bg-background p-8">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Your Anxiety{" "}
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Assessment Results
                </span>
              </h1>
              <p className="text-muted-foreground">
                Based on GAD-7 scoring methodology
              </p>
            </div>

            {/* Score Card */}
            <Card className="mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    {getLevelIcon()}
                    <div>
                      <h2 className={`text-3xl font-bold ${anxietyLevel.color}`}>
                        {anxietyLevel.level} Anxiety
                      </h2>
                      <p className="text-muted-foreground">
                        Score: {score} / {maxScore} ({Math.round(percentage)}%)
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-lg max-w-sm">{anxietyLevel.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Radar Chart */}
            <Card className="mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle>Symptom Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis 
                        dataKey="category" 
                        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                      />
                      <PolarRadiusAxis 
                        angle={30} 
                        domain={[0, 3]} 
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                      />
                      <Radar
                        name="Score"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.5}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {getRecommendations().map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary text-lg">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
                
                {percentage > 60 && (
                  <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <p className="text-sm font-medium text-destructive">
                      ⚠️ Consider speaking with a mental health professional for additional support and guidance.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <div className="text-center text-sm text-muted-foreground p-4 bg-muted/30 rounded-lg">
              <p>
                <strong>Disclaimer:</strong> This assessment is for informational purposes only and is not a clinical diagnosis. 
                Please consult a qualified mental health professional for proper evaluation and treatment.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button onClick={() => navigate("/")} variant="outline" className="gap-2">
              <Home className="w-4 h-4" />
              Return Home
            </Button>
            <Button onClick={() => window.location.reload()} variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Retake Test
            </Button>
            <Button onClick={downloadPDF} className="gap-2 bg-gradient-cosmic hover:opacity-90">
              <Download className="w-4 h-4" />
              Download PDF Report
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnxietyResults;
