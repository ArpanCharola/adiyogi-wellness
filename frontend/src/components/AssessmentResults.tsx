import { Button } from "@/components/ui/button";
import { Download, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface AssessmentResultsProps {
  answers: Record<string, string>;
  selectedIssues: string[];
}

const categories = [
  { name: "Anger", questions: ["q1", "q14"] },
  { name: "Depression", questions: ["q2", "q7", "q10"] },
  { name: "Anxiety", questions: ["q3", "q9", "q12"] },
  { name: "Eating", questions: ["q4", "q11"] },
  { name: "Substance", questions: ["q5"] },
  { name: "Sleep", questions: ["q6"] },
  { name: "Trauma", questions: ["q8"] },
  { name: "Tension", questions: ["q13", "q15"] }
];

const AssessmentResults = ({ answers, selectedIssues }: AssessmentResultsProps) => {
  const navigate = useNavigate();
  const resultsRef = useRef<HTMLDivElement>(null);

  // Calculate category scores
  const calculateCategoryScore = (questionIds: string[]) => {
    const total = questionIds.reduce((sum, qId) => {
      return sum + (parseInt(answers[qId] || "0"));
    }, 0);
    return Math.round((total / (questionIds.length * 4)) * 100);
  };

  const chartData = categories.map(cat => ({
    category: cat.name,
    score: calculateCategoryScore(cat.questions),
    fullMark: 100
  }));

  const totalScore = Math.round(
    chartData.reduce((sum, item) => sum + item.score, 0) / chartData.length
  );

  const getSeverityLevel = (score: number) => {
    if (score < 25) return { label: "Low", color: "text-green-600" };
    if (score < 50) return { label: "Mild", color: "text-yellow-600" };
    if (score < 75) return { label: "Moderate", color: "text-orange-600" };
    return { label: "High", color: "text-red-600" };
  };

  const severity = getSeverityLevel(totalScore);

  const downloadPDF = async () => {
    if (!resultsRef.current) return;

    try {
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      
      const timestamp = new Date().toISOString().split('T')[0];
      pdf.save(`wellness-assessment-${timestamp}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div ref={resultsRef} className="bg-card rounded-lg shadow-card p-8 mb-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Your Wellness Assessment Results
            </h1>
            <p className="text-muted-foreground text-lg">
              Based on your responses, here's your personalized wellness overview
            </p>
          </div>

          {/* Overall Score */}
          <div className="bg-gradient-cosmic p-6 rounded-lg text-center mb-8">
            <p className="text-white/90 text-sm font-medium mb-2">Overall Wellness Score</p>
            <div className="text-5xl font-bold text-white mb-2">{totalScore}%</div>
            <p className={`text-lg font-semibold ${severity.color}`}>
              Severity Level: {severity.label}
            </p>
          </div>

          {/* Selected Issues */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Areas of Concern</h3>
            <div className="flex flex-wrap gap-2">
              {selectedIssues.map(issue => (
                <span
                  key={issue}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {issue}
                </span>
              ))}
            </div>
          </div>

          {/* Radar Chart */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Detailed Category Analysis
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={chartData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Radar
                  name="Wellness Score"
                  dataKey="score"
                  stroke="hsl(var(--cosmic-purple))"
                  fill="hsl(var(--cosmic-purple))"
                  fillOpacity={0.6}
                />
                <Legend />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Breakdown */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Category Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {chartData.map(item => {
                const catSeverity = getSeverityLevel(item.score);
                return (
                  <div key={item.category} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">{item.category}</span>
                      <span className={`font-bold ${catSeverity.color}`}>
                        {item.score}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-cosmic h-2 rounded-full transition-all"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className={`text-sm ${catSeverity.color} mt-1 block`}>
                      {catSeverity.label} severity
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Recommendations</h3>
            <ul className="space-y-3 text-muted-foreground">
              {totalScore > 60 && (
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Consider speaking with a mental health professional for personalized guidance</span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Practice daily meditation and mindfulness exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Maintain regular sleep schedule and healthy eating habits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Engage in physical activities and social connections</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              <strong>Disclaimer:</strong> This assessment is for informational purposes only and does not
              constitute medical advice. Please consult with healthcare professionals for proper diagnosis
              and treatment.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={downloadPDF}
            size="lg"
            className="bg-gradient-cosmic flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF Report
          </Button>
          <Button
            onClick={() => navigate("/")}
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;
