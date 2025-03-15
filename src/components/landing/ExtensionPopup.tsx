"use client";
import React, { useRef, useEffect, useState } from "react";
import { X, CompassIcon, ArrowRight, ThumbsUp, Gift, Award, Clock, Leaf, Droplet, Wind, Sun, Check, Info, AlertCircle, ChevronRight, RefreshCw, ShoppingBag, Sparkles, Zap, Globe, Brain, Target, Lightbulb, MousePointer, Heart, Rocket, Map, Compass, Star, Stars, PartyPopper, Smile, Wand2 } from "lucide-react";
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

// Add some global styles to ensure proper rendering
const globalStyles = `
  .quiz-option {
    display: block !important;
    width: 100% !important;
    margin-bottom: 8px !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  
  .quiz-option-content {
    display: flex !important;
    align-items: center !important;
  }
  
  .quiz-option-circle {
    flex-shrink: 0 !important;
  }

  /* Refined animations */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
  }

  @keyframes sparkle {
    0%, 100% { opacity: 0.4; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1); }
  }

  .float {
    animation: float 6s ease-in-out infinite;
  }

  .pulse {
    animation: pulse 3s ease-in-out infinite;
  }

  .sparkle {
    animation: sparkle 2s ease-in-out infinite;
  }

  /* Refined confetti animations */
  @keyframes fall-slow {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
  }

  @keyframes fall-medium {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  @keyframes fall-fast {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(1080deg); opacity: 0; }
  }

  .animate-fall-slow {
    animation: fall-slow 8s linear infinite;
  }

  .animate-fall-medium {
    animation: fall-medium 6s linear infinite;
  }

  .animate-fall-fast {
    animation: fall-fast 4s linear infinite;
  }
`;

const ExtensionPopup = ({ 
  onClose, 
  scrollThreshold = 0.2,
  sponsor = {
    name: "Adventurize",
    tagline: "Transform ads into adventures",
    primaryColor: "blue",
    secondaryColor: "indigo"
  }
}: ExtensionPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
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
      question: "What does Adventurize do for you as a user?",
      options: [
        "Blocks all advertisements",
        "Turns boring ads into fun interactive experiences",
        "Pays you to watch advertisements",
        "Speeds up your internet connection"
      ],
      correctIndex: 1,
      explanation: "Adventurize transforms traditional ads into fun, interactive adventures that you can actually enjoy while browsing. No more boring interruptions!"
    },
    quiz2: {
      question: "What can you earn by completing Adventurize experiences?",
      options: [
        "Just entertainment value",
        "Money and gift cards",
        "Knowledge and occasional rewards",
        "Cryptocurrency tokens"
      ],
      correctIndex: 2,
      explanation: "While having fun with Adventurize, you learn interesting facts and information. Many adventures also offer rewards like discount codes or special offers when you complete them."
    },
    quiz3: {
      question: "How does Adventurize respect your browsing experience?",
      options: [
        "It removes all ads completely",
        "It makes ads smaller on the page",
        "It lets you choose when to engage with content",
        "It blocks tracking cookies"
      ],
      correctIndex: 2,
      explanation: "Adventurize puts you in control - you decide when to start an adventure, and you can always close it if you're not interested. Your browsing experience remains yours to control."
    }
  };

  // Educational facts with Adventurize information
  const educationalFacts: Record<string, {title: string, content: string, icon: React.ReactNode, brandTieIn: string}> = {
    fact1: {
      title: "Fun Instead of Frustration",
      content: "The average person sees between 4,000-10,000 ads every day. Adventurize transforms these interruptions into moments of fun, learning, and rewards that you'll actually look forward to.",
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      brandTieIn: "Adventurize makes your browsing more enjoyable by turning ad moments into adventure moments."
    },
    fact2: {
      title: "Learn While You Browse",
      content: "In a typical month of browsing, Adventurize users learn over 20 new interesting facts about topics they care about, making time spent with ads actually valuable instead of wasted.",
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
      brandTieIn: "Adventurize helps you discover new information while you're already browsing."
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
            <div className="mb-5 text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-900/40 dark:to-blue-900/40 rounded-full blur-lg opacity-60"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="float">
                    <Rocket className="h-14 w-14 text-indigo-500 dark:text-indigo-400" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 text-transparent bg-clip-text">
                Ready for an Adventure?
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xs mx-auto">
                Adventurize transforms boring ads into fun interactive experiences you'll actually enjoy.
              </p>
            </div>

            {/* Clickable Adventure card */}
            <button 
              onClick={handleAcceptChallenge}
              className="w-full text-left bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-4 rounded-lg mb-4 border border-indigo-100 dark:border-indigo-800/50 hover:shadow-md transition-all hover:border-indigo-300 dark:hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <div className="flex items-start gap-3">
                <div className="bg-indigo-500 text-white p-2.5 rounded-lg shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-indigo-800 dark:text-indigo-300">
                    Try Your First Adventure
                  </h5>
                  <p className="text-sm text-indigo-700 dark:text-indigo-400 mt-1">
                    Take a quick adventure to see how Adventurize makes browsing more fun and rewarding.
                  </p>
                  <div className="mt-3 flex items-center text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    <span>Start your adventure</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </div>
                </div>
              </div>
            </button>
            
            {/* Fun facts teaser - more subtle */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                <Info className="h-4 w-4 mr-2 text-indigo-500" />
                <span>You'll discover interesting facts and earn rewards along the way.</span>
              </div>
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
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="bg-indigo-500 text-white p-1.5 rounded-lg mr-2">
                    <Brain className="h-4 w-4" />
                  </div>
                  <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">
                    Adventure Quiz
                  </h4>
                </div>
                <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-full font-medium">
                  {currentStep === 'quiz1' ? 'Question 1/3' : currentStep === 'quiz2' ? 'Question 2/3' : 'Question 3/3'}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  {currentQuiz.question}
                </p>
              </div>
            </div>

            {/* Quiz options with enhanced styling */}
            <div className="space-y-2.5 mb-4">
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={cn(
                    "quiz-option w-full text-left p-3.5 rounded-lg border transition-all hover:shadow-sm",
                    selectedOption === index 
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-400" 
                      : "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700",
                    isCorrect !== null && index === currentQuiz.correctIndex
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-400"
                      : "",
                    isCorrect === false && selectedOption === index
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-400"
                      : ""
                  )}
                  style={{ display: 'block', width: '100%', visibility: 'visible' }}
                >
                  <div className="quiz-option-content flex items-center">
                    <div className={cn(
                      "quiz-option-circle w-5 h-5 rounded-full mr-3 flex items-center justify-center border",
                      selectedOption === index 
                        ? "border-indigo-500 bg-indigo-500 text-white dark:border-indigo-400 dark:bg-indigo-400" 
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
                "p-3.5 rounded-lg mb-4 text-sm border",
                isCorrect 
                  ? "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/30 text-green-800 dark:text-green-200" 
                  : "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30 text-red-800 dark:text-red-200"
              )}>
                <div className="flex items-start gap-2.5">
                  {isCorrect ? (
                    <div className="bg-green-100 dark:bg-green-800/20 p-1.5 rounded-lg mt-0.5">
                      <ThumbsUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                  ) : (
                    <div className="bg-red-100 dark:bg-red-800/20 p-1.5 rounded-lg mt-0.5">
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{isCorrect ? "Correct!" : "Not quite right"}</p>
                    <p className="mt-1.5">{currentQuiz.explanation}</p>
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
                    className="text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  >
                    Back
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    {selectedOption === null ? "Select an answer" : "Check Answer"}
                  </Button>
                </>
              ) : (
                <Button 
                  size="sm" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
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
            <div className="mb-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-indigo-500 text-white p-1.5 rounded-lg mr-2">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">
                  Did You Know?
                </h4>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Interesting fact about Adventurize
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg mb-4 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg mb-4 shadow-sm float">
                  {currentFact.icon}
                </div>
                <h5 className="font-semibold text-lg mb-3 text-indigo-800 dark:text-indigo-300">
                  {currentFact.title}
                </h5>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {currentFact.content}
                </p>
                <div className="w-full mt-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg mr-2">
                      <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">
                      {currentFact.brandTieIn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              size="sm" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
              onClick={handleNextStep}
            >
              Continue <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </>
        );
        
      case 'completion':
        return (
          <>
            <div className="mb-5 text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-900/40 dark:to-blue-900/40 rounded-full blur-lg opacity-60"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="float">
                    <Award className="h-14 w-14 text-indigo-500 dark:text-indigo-400" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-indigo-800 dark:text-indigo-300">
                Adventure Complete!
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xs mx-auto">
                You scored <span className="font-semibold">{score}/3</span> and experienced what Adventurize can do for you.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg mb-4 border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center">
                <Heart className="h-4 w-4 mr-2 text-indigo-500" />
                What You Get With Adventurize
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                You've just experienced a mini-adventure. Here's what Adventurize brings to your browsing:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Fun:</strong> Turn boring ad moments into enjoyable mini-games and quizzes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Rewards:</strong> Earn discounts, special offers, and digital collectibles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Learning:</strong> Discover interesting facts about topics you care about</span>
                </li>
              </ul>
            </div>

            {/* Adventurize-specific CTA card */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-4 border border-indigo-100 dark:border-indigo-800/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-indigo-500 text-white p-2 rounded-lg">
                  <Rocket className="h-4 w-4" />
                </div>
                <h5 className="font-semibold text-indigo-800 dark:text-indigo-300">
                  Ready for More Adventures?
                </h5>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Install the free Adventurize extension to transform your browsing experience and make ads worth your time.
              </p>
              <Button 
                size="sm" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
              >
                <Sparkles className="h-4 w-4 mr-2" /> Get Adventurize Free
              </Button>
            </div>

            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRestartAdventure}
                className="text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              >
                <RefreshCw className="h-4 w-4 mr-1" /> Try Again
              </Button>
              <Button 
                size="sm" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Add global styles */}
      <style jsx global>{globalStyles}</style>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {/* More refined confetti particles */}
          <div className="absolute top-0 animate-fall-slow" style={{left: '20%'}}>
            <div className="h-3 w-3 bg-indigo-500 rotate-45"></div>
          </div>
          <div className="absolute top-0 animate-fall-medium" style={{left: '30%'}}>
            <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
          </div>
          <div className="absolute top-0 animate-fall-fast" style={{left: '40%'}}>
            <div className="h-2 w-5 bg-teal-500 rounded-full"></div>
          </div>
          <div className="absolute top-0 animate-fall-slow" style={{left: '50%'}}>
            <div className="h-4 w-4 bg-indigo-400 rotate-12 rounded-md"></div>
          </div>
          <div className="absolute top-0 animate-fall-medium" style={{left: '60%'}}>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
          </div>
          <div className="absolute top-0 animate-fall-fast" style={{left: '70%'}}>
            <div className="h-2 w-2 bg-indigo-500 rotate-45"></div>
          </div>
          <div className="absolute top-0 animate-fall-slow" style={{left: '80%'}}>
            <div className="h-4 w-2 bg-blue-500"></div>
          </div>
          
          {/* Star shapes */}
          <div className="absolute top-0 animate-fall-medium" style={{left: '35%'}}>
            <div className="text-yellow-400 text-xl">★</div>
          </div>
          <div className="absolute top-0 animate-fall-slow" style={{left: '65%'}}>
            <div className="text-indigo-400 text-xl">★</div>
          </div>
          
          {/* Emoji confetti - just one or two */}
          <div className="absolute top-0 animate-fall-medium" style={{left: '45%'}}>
            <div className="text-lg">✨</div>
          </div>
        </div>
      )}
      
      {/* Centered popup */}
      <div 
        ref={popupRef}
        className="bg-white dark:bg-slate-900 rounded-lg shadow-xl w-full max-w-md mx-4 z-[9999] overflow-hidden transform transition-all animate-in fade-in slide-in-from-top-4 duration-300 border border-indigo-200 dark:border-indigo-800"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Extension header */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-4 text-white sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-lg mr-3">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Adventurize</h3>
                <p className="text-xs text-white/90">Transform ads into adventures</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-1.5 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Centered sponsor badge - modified to be about Adventurize
        <div className="flex justify-center border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-[60px] z-10">
          <div className="py-2 flex items-center">
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Interactive Demo</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-indigo-300 dark:bg-indigo-600"></div>
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{sponsor.tagline}</span>
          </div>
        </div> */}

        {/* Extension content */}
        <div className="p-5 bg-white dark:bg-slate-900">
          {renderAdventureContent()}
        </div>

        {/* Extension footer */}
        <div className="bg-slate-50 dark:bg-slate-800 p-3 text-center text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 sticky bottom-0 z-10">
          <p className="flex items-center justify-center"><Sparkles className="h-3 w-3 mr-1 text-indigo-500" /> See how Adventurize transforms ads into interactive adventures</p>
        </div>
      </div>
    </div>
  );
};

export default ExtensionPopup; 