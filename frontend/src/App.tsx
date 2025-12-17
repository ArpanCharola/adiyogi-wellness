import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import AnxietyTest from "./pages/AnxietyTest";
import Issues from "./pages/Issues";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Worksheets from "./pages/Worksheets";
import Treatments from "./pages/Treatments";
import RecoveryStories from "./pages/RecoveryStories";
import Contact from "./pages/Contact";
import GuidedAudio from "./pages/GuidedAudio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/anxiety-test" element={<AnxietyTest />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/worksheets" element={<Worksheets />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/recovery-stories" element={<RecoveryStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guided-audio" element={<GuidedAudio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
