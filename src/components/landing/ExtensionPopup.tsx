"use client";
import React, { useRef, useEffect, useState } from "react";
import { X, CompassIcon, ArrowRight, ThumbsUp, Gift, Award, Clock, Leaf, Droplet, Wind, Sun, Check, Info, AlertCircle, ChevronRight, RefreshCw, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExtensionPopupProps {
  onClose: () => void;
  /** 
   * Controls when the popup appears during scrolling
   * Lower values make it appear earlier (default: 0.2 = 20% of page scroll)
   */
  scrollThreshold?: number;
  /**
   * Sponsor information for brand tie-in
   */
  sponsor?: {
    name: string;
    logo?: string;
    tagline?: string;
    primaryColor?: string;
    secondaryColor?: string;
  };
}

// Define the adventure steps
type AdventureStep = 'intro' | 'quiz1' | 'fact1' | 'quiz2' | 'fact2' | 'quiz3' | 'completion';

// Define quiz question type
interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const ExtensionPopup = ({ 
  onClose, 
  scrollThreshold = 0.2,
  sponsor = {
    name: "EcoLife",
    tagline: "Sustainable living, made simple",
    primaryColor: "blue",
    secondaryColor: "indigo"
  }
}: ExtensionPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'adventure' | 'rewards'>('adventure');
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  // Adventure state
  const [currentStep, setCurrentStep] = useState<AdventureStep>('intro');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [factsLearned, setFactsLearned] = useState<string[]>([]);

  // Quiz questions
  const quizQuestions: Record<string, QuizQuestion> = {
    quiz1: {
      question: "Which of these actions has the biggest impact on reducing your carbon footprint?",
      options: [
        "Using reusable shopping bags",
        "Reducing meat consumption",
        "Turning off lights when not in use",
        "Using public transportation"
      ],
      correctIndex: 1,
      explanation: "While all options help, reducing meat consumption has the largest impact. Livestock production accounts for 14.5% of global greenhouse gas emissions."
    },
    quiz2: {
      question: "How much plastic waste enters our oceans annually?",
      options: [
        "1-2 million tons",
        "5-7 million tons",
        "8-10 million tons",
        "15+ million tons"
      ],
      correctIndex: 2,
      explanation: "Approximately 8-10 million tons of plastic waste enters our oceans each year, threatening marine ecosystems and wildlife."
    },
    quiz3: {
      question: "What percentage of the world's energy currently comes from renewable sources?",
      options: [
        "Less than 10%",
        "Around 15-20%",
        "About 25-30%",
        "More than 40%"
      ],
      correctIndex: 1,
      explanation: "Renewable energy sources account for approximately 17-18% of global energy consumption, though this percentage is growing each year."
    }
  };

  // Educational facts with brand tie-in
  const educationalFacts: Record<string, {title: string, content: string, icon: React.ReactNode, brandTieIn: string}> = {
    fact1: {
      title: "The Power of Small Changes",
      content: "If everyone in the US replaced just one beef meal with a plant-based alternative each week, it would be equivalent to taking 500,000 cars off the road annually in terms of greenhouse gas reduction.",
      icon: <Leaf className="h-6 w-6 text-blue-500" />,
      brandTieIn: `${sponsor.name}'s plant-based meal kits make this switch delicious and easy.`
    },
    fact2: {
      title: "Water Conservation Impact",
      content: "A single reusable water bottle can prevent an average of 156 plastic bottles from being used annually per person. That adds up to over 50,000 bottles in a lifetime!",
      icon: <Droplet className="h-6 w-6 text-blue-500" />,
      brandTieIn: `${sponsor.name}'s stainless steel bottles are designed to last a lifetime, preventing thousands of plastic bottles from entering landfills.`
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleScroll = () => {
      if (hasShown) return;
      
      // Calculate how far the user has scrolled as a percentage of the page height
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Show popup when user has scrolled past the threshold
      if (scrollPercentage >= scrollThreshold) {
        setHasShown(true);
        // Additional logic could be added here if needed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onClose, hasShown, scrollThreshold]);

  const handleAcceptChallenge = () => {
    setCurrentStep('quiz1');
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    let currentQuiz: 'quiz1' | 'quiz2' | 'quiz3' = 'quiz1';
    if (currentStep === 'quiz1') currentQuiz = 'quiz1';
    if (currentStep === 'quiz2') currentQuiz = 'quiz2';
    if (currentStep === 'quiz3') currentQuiz = 'quiz3';
    
    const isAnswerCorrect = selectedOption === quizQuestions[currentQuiz].correctIndex;
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      setScore(prev => prev + 1);
      setFactsLearned(prev => [...prev, quizQuestions[currentQuiz].explanation]);
    }
  };

  const handleNextStep = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    
    // Progress to next step based on current step
    if (currentStep === 'intro') setCurrentStep('quiz1');
    else if (currentStep === 'quiz1') setCurrentStep('fact1');
    else if (currentStep === 'fact1') setCurrentStep('quiz2');
    else if (currentStep === 'quiz2') setCurrentStep('fact2');
    else if (currentStep === 'fact2') setCurrentStep('quiz3');
    else if (currentStep === 'quiz3') {
      setCurrentStep('completion');
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  };

  const handleRestartAdventure = () => {
    setCurrentStep('intro');
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setFactsLearned([]);
  };

  // Render the current step of the adventure
  const renderAdventureContent = () => {
    switch (currentStep) {
      case 'intro':
        return (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold mb-2 dark:text-white">
                  Your Sustainability Adventure Awaits!
                </h4>
                <div className="flex items-center text-xs text-blue-700 dark:text-blue-300 font-medium">
                  <span>Powered by</span>
                  <span className="ml-1 font-bold">{sponsor.name}</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                We've transformed this ad into an interactive journey to learn about sustainability and make a real impact with {sponsor.name}.
              </p>
            </div>

            {/* Adventure card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-lg mb-4 border border-blue-100 dark:border-slate-600 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white p-2 rounded-md">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-medium text-blue-900 dark:text-blue-200">
                    {sponsor.name} Sustainability Challenge
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Test your knowledge, learn fascinating facts, and discover how {sponsor.name} products can help you make a positive environmental impact!
                  </p>
                  <div className="mt-3 flex items-center text-xs text-blue-700 dark:text-blue-300">
                    <span className="font-medium">{sponsor.tagline}</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onClose}
                className="text-slate-600 dark:text-slate-300"
              >
                Maybe Later
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:opacity-90 transition-opacity"
                onClick={handleAcceptChallenge}
              >
                Start Adventure
              </Button>
            </div>
          </>
        );
        
      case 'quiz1':
      case 'quiz2':
      case 'quiz3':
        const currentQuiz = quizQuestions[currentStep];
        return (
          <>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold dark:text-white">
                  Sustainability Quiz
                </h4>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                  {currentStep === 'quiz1' ? '1/3' : currentStep === 'quiz2' ? '2/3' : '3/3'}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {currentQuiz.question}
              </p>
            </div>

            <div className="space-y-2 mb-4">
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg border transition-colors",
                    selectedOption === index 
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-400" 
                      : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700",
                    isCorrect !== null && index === currentQuiz.correctIndex
                      ? "border-green-500 bg-green-50 dark:bg-green-900/30 dark:border-green-400"
                      : "",
                    isCorrect === false && selectedOption === index
                      ? "border-red-500 bg-red-50 dark:bg-red-900/30 dark:border-red-400"
                      : ""
                  )}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "w-5 h-5 rounded-full mr-3 flex items-center justify-center border",
                      selectedOption === index 
                        ? "border-blue-500 bg-blue-500 text-white dark:border-blue-400 dark:bg-blue-400" 
                        : "border-slate-300 dark:border-slate-600"
                    )}>
                      {selectedOption === index && <Check className="h-3 w-3" />}
                    </div>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {isCorrect !== null && (
              <div className={cn(
                "p-3 rounded-lg mb-4 text-sm",
                isCorrect 
                  ? "bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/50 text-green-800 dark:text-green-200" 
                  : "bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 text-red-800 dark:text-red-200"
              )}>
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <ThumbsUp className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium">{isCorrect ? "Correct!" : "Not quite right"}</p>
                    <p className="mt-1">{currentQuiz.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              {isCorrect === null ? (
                <>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setCurrentStep('intro')}
                    className="text-slate-600 dark:text-slate-300"
                  >
                    Back
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:opacity-90 transition-opacity"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Check Answer
                  </Button>
                </>
              ) : (
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:opacity-90 transition-opacity"
                  onClick={handleNextStep}
                >
                  Continue <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          </>
        );
        
      case 'fact1':
      case 'fact2':
        const currentFact = educationalFacts[currentStep];
        return (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold mb-2 dark:text-white flex items-center">
                  <Info className="h-5 w-5 mr-2 text-blue-500" />
                  Did You Know?
                </h4>
                <div className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  {sponsor.name}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-lg mb-4 border border-blue-100 dark:border-blue-800/50">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-full mb-4 shadow-sm">
                  {currentFact.icon}
                </div>
                <h5 className="font-medium text-blue-900 dark:text-blue-200 text-lg mb-3">
                  {currentFact.title}
                </h5>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {currentFact.content}
                </p>
                <div className="w-full mt-2 pt-3 border-t border-blue-100 dark:border-blue-800/30">
                  <p className="text-sm text-blue-700 dark:text-blue-300 italic">
                    {currentFact.brandTieIn}
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:opacity-90 transition-opacity"
              onClick={handleNextStep}
            >
              Continue <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </>
        );
        
      case 'completion':
        return (
          <>
            <div className="mb-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2 dark:text-white">
                Adventure Complete!
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                You scored {score}/3 and learned valuable sustainability facts with {sponsor.name}.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 mb-4">
              <h5 className="font-medium text-slate-900 dark:text-slate-200 mb-3 flex items-center">
                <Leaf className="h-4 w-4 mr-2 text-blue-500" />
                Your Impact with {sponsor.name}
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                By completing this adventure, you've taken the first step toward a more sustainable lifestyle. Here's what you can do next with {sponsor.name}:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Try {sponsor.name}'s plant-based meal kit this week</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Use {sponsor.name}'s reusable water bottle for 7 days</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Share your favorite {sponsor.name} product with a friend</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRestartAdventure}
                className="text-slate-600 dark:text-slate-300"
              >
                <RefreshCw className="h-4 w-4 mr-1" /> Restart
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:opacity-90 transition-opacity"
                onClick={() => setActiveTab('rewards')}
              >
                View Rewards
              </Button>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 animate-fall-slow">
            <div className="h-3 w-3 bg-blue-500 rotate-45"></div>
          </div>
          <div className="absolute top-0 left-1/3 animate-fall-medium">
            <div className="h-4 w-4 bg-indigo-500 rounded-full"></div>
          </div>
          <div className="absolute top-0 left-1/2 animate-fall-fast">
            <div className="h-2 w-6 bg-green-500 rounded-full"></div>
          </div>
          <div className="absolute top-0 left-2/3 animate-fall-slow">
            <div className="h-5 w-5 bg-yellow-500 rotate-12"></div>
          </div>
          <div className="absolute top-0 left-3/4 animate-fall-medium">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
      )}
      
      {/* Centered popup */}
      <div 
        ref={popupRef}
        className="bg-white dark:bg-slate-900 rounded-lg shadow-xl w-full max-w-md mx-4 z-10 overflow-hidden transform transition-all animate-in fade-in slide-in-from-top-4 duration-300"
      >
        {/* Extension header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-1.5 rounded-md mr-3">
                <CompassIcon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg">Adventurize</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Extension tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button
            className={cn(
              "flex-1 py-2 text-sm font-medium transition-colors",
              activeTab === 'adventure'
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
            )}
            onClick={() => setActiveTab('adventure')}
          >
            Adventure
          </button>
          <button
            className={cn(
              "flex-1 py-2 text-sm font-medium transition-colors",
              activeTab === 'rewards'
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
            )}
            onClick={() => setActiveTab('rewards')}
          >
            Rewards
          </button>
        </div>

        {/* Extension content */}
        <div className="p-5">
          {activeTab === 'adventure' ? (
            renderAdventureContent()
          ) : (
            <>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">
                    {sponsor.name} Rewards
                  </h4>
                  <div className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                    Exclusive Offers
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Complete adventures to earn these exciting rewards from {sponsor.name}.
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-md mr-3">
                    <Gift className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-slate-200">15% Off {sponsor.name} Products</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Complete 1 challenge</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md mr-3">
                    <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-slate-200">{sponsor.name} Sustainability Badge</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Complete 3 challenges</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-md mr-3">
                    <ShoppingBag className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-slate-200">Free {sponsor.name} Starter Kit</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Complete 5 challenges</p>
                  </div>
                </div>
              </div>

              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:opacity-90 transition-opacity"
                onClick={() => setActiveTab('adventure')}
              >
                Back to Adventure
              </Button>
            </>
          )}
        </div>

        {/* Extension footer */}
        <div className="bg-slate-50 dark:bg-slate-800 p-3 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
          <p>This is a demo of how Adventurize transforms ads into interactive adventures with {sponsor.name}.</p>
        </div>
      </div>
    </div>
  );
};

export default ExtensionPopup; 