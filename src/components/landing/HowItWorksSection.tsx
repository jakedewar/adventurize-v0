"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Bell, Sparkles, MousePointer, ChevronRight, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";

interface HowItWorksSectionProps {
  title?: string;
  description?: string;
  steps?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const HowItWorksSection = ({
  title = "How Adventurize Works",
  description = "Our Chrome Extension MVP delivers quick, personalized micro-adventures through a simple popup UI that users voluntarily engage with.",
  steps = [
    {
      icon: <Bell className="h-10 w-10 text-amber-500" />,
      title: "Subtle Badge Notification",
      description:
        "A discreet badge notification on the Chrome extension icon indicates when a new adventure is available for you.",
    },
    {
      icon: <MousePointer className="h-10 w-10 text-emerald-500" />,
      title: "Interactive Micro-Adventure",
      description:
        "Click to open a visually appealing popup with a short, personalized interactive narrative that takes about 60 seconds to complete.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-blue-500" />,
      title: "Personalized Experience",
      description:
        "Each adventure is tailored to your interests and location, ending with a subtle brand recommendation that feels natural and relevant.",
    },
  ],
}: HowItWorksSectionProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Time in seconds for each step
  const stepDuration = 8; // 8 seconds per step
  const progressUpdateInterval = 50; // Update progress every 50ms
  const progressIncrement = (progressUpdateInterval / (stepDuration * 1000)) * 100;

  // Function to handle manual step change
  const handleStepChange = (step: number) => {
    setActiveStep(step);
    setProgress(0);
    
    // Reset auto-play timers when manually changing steps
    if (isAutoPlaying) {
      resetAutoPlayTimer();
    }
  };

  // Function to toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  // Function to reset the auto-play timer
  const resetAutoPlayTimer = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    
    setProgress(0);
    
    // Set up new intervals
    if (isAutoPlaying) {
      // Progress interval for the progress bar
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + progressIncrement;
        });
      }, progressUpdateInterval);
      
      // Auto-play interval to advance to the next step
      autoPlayIntervalRef.current = setInterval(() => {
        setActiveStep(prev => {
          const nextStep = (prev + 1) % steps.length;
          return nextStep;
        });
        setProgress(0);
      }, stepDuration * 1000);
    }
  };

  // Set up auto-play on component mount and when isAutoPlaying changes
  useEffect(() => {
    resetAutoPlayTimer();
    
    // Clean up intervals on unmount
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-24 pb-28 bg-gradient-to-b from-slate-100 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium">
            Chrome Extension MVP
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Interactive Steps Display */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12 relative">
          {/* Step Navigation */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">How It Works</h3>
                <button 
                  onClick={toggleAutoPlay}
                  className={isAutoPlaying ? "p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" : "p-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white dark:hover:bg-slate-600 transition-colors"} 
                  aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
                >
                  {isAutoPlaying ? (
                    <Pause className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  ) : (
                    <Play className="h-4 w-4 text-white dark:text-slate-300" />
                  )}
                </button>
              </div>
              
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepChange(index)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center",
                      activeStep === index 
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm" 
                        : "hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-all",
                      activeStep === index 
                        ? "bg-blue-600 text-white" 
                        : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    )}>
                      {index + 1}
                    </div>
                    <span className="font-medium">{step.title}</span>
                    {activeStep === index && (
                      <ChevronRight className="ml-auto h-5 w-5 text-blue-500" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Progress bar for auto-play */}
              {isAutoPlaying && (
                <div className="mt-4 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-50 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Step Details */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
              {/* Visual representation */}
              <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={activeStep}
                    className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      {steps[activeStep].icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{steps[activeStep].title}</h4>
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/30 blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white/20 blur-xl"></div>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-8">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {steps[activeStep].description}
                  </p>
                  
                  {/* Step-specific additional content */}
                  {activeStep === 0 && (
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/30">
                      <p className="text-amber-800 dark:text-amber-300 text-sm">
                        Our notifications are designed to be non-intrusive, appearing only when relevant to your interests and browsing habits.
                      </p>
                    </div>
                  )}
                  
                  {activeStep === 1 && (
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="aspect-video bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Step 1</span>
                      </div>
                      <div className="aspect-video bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Step 2</span>
                      </div>
                      <div className="aspect-video bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Step 3</span>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 flex items-center">
                      <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
                      <p className="text-blue-800 dark:text-blue-300 text-sm">
                        Our AI-powered system learns from your preferences to deliver increasingly relevant adventures over time.
                      </p>
                    </div>
                  )}
                </motion.div>
                
                {/* Navigation buttons */}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className={cn(
                      "px-4 py-2 rounded-lg transition-all",
                      activeStep === 0
                        ? "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                    )}
                  >
                    Previous
                  </button>
                  
                  <button
                    onClick={() => handleStepChange(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className={cn(
                      "px-4 py-2 rounded-lg transition-all",
                      activeStep === steps.length - 1
                        ? "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    )}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#email-signup"
            className={cn(
              "inline-flex items-center justify-center px-8 py-4 rounded-full",
              "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
              "text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",
              "transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            )}
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
      
      {/* Connecting element to create seamless transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-slate-900 dark:to-transparent"></div>
      
      {/* Wave pattern for seamless transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[30px] text-white dark:text-slate-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ filter: 'blur(0.5px)' }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current opacity-70"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorksSection;
