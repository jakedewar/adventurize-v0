"use client";

import React, { useState } from "react";
import { ArrowRight, Play, ChevronDown, X, Bell, Sparkles, MousePointer } from "lucide-react";
import { Button } from "../ui/button";
import EmailCollectionForm from "./EmailCollectionForm";
import { motion } from "framer-motion";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  watchDemoText?: string;
  userContext?: 'consumer' | 'brand';
}

const HeroSection = ({
  headline = "Nobody likes an Ad. Everybody likes an Adventure.",
  subheadline = "Transform your browsing experience with personalized micro-adventures that make the web fun again. Adventurize delivers quick, interactive adventures tailored just for you.",
  ctaText = "Join Waitlist",
  watchDemoText = "See an Adventure",
  userContext = 'consumer',
}: HeroSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Dynamic content based on user context
  const getContextualContent = () => {
    if (userContext === 'consumer') {
      return {
        traditional: {
          emoji: "😴",
          title: "Boring. Intrusive. Ignored.",
          problems: [
            "Interrupts what you're trying to do",
            "Rarely relevant to what you care about",
            "Wastes your time and attention",
            "Often feels manipulative or annoying",
            "Forces you to search for the 'X' button"
          ]
        },
        adventure: {
          title: "Jake's Taco Quest",
          description: "A 60-second adventure to find Boston's best tacos",
          benefits: [
            "You choose when to engage",
            "Personalized to your actual interests",
            "Fun and interactive experiences",
            "Discover things you actually care about",
            "Quick and respectful of your time"
          ]
        }
      };
    } else {
      return {
        traditional: {
          emoji: "💸",
          title: "Expensive. Ignored. Ineffective.",
          problems: [
            "High cost per acquisition (CAC)",
            "Low engagement and click-through rates",
            "Increasing ad blocker usage (40%+ of users)",
            "Difficult to measure true ROI",
            "Ad fatigue leads to diminishing returns"
          ]
        },
        adventure: {
          title: "Interactive Brand Experiences",
          description: "Create memorable micro-adventures that convert",
          benefits: [
            "3-5x higher engagement rates",
            "Detailed analytics on user interaction",
            "Builds genuine brand affinity",
            "Lower customer acquisition costs",
            "First-party data collection opportunities"
          ]
        }
      };
    }
  };
  
  const content = getContextualContent();

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-950 text-white overflow-hidden pt-20">
      {/* Visual contrast elements - boring ad vs adventure */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-400 flex items-center justify-center">
          <div className="text-9xl font-bold text-gray-600 opacity-20 rotate-[-10deg]">
            ADS
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900 flex items-center justify-center">
          <div className="text-9xl font-bold text-blue-600 opacity-20 rotate-[10deg]">
            ADVENTURE
          </div>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow text */}
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-700/30 text-blue-300 text-sm font-medium">
            {userContext === 'consumer' ? 'For Web Users' : 'For Brands & Marketers'}
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          {/* Email collection form with gradient border */}
          <div className="mb-10 w-full max-w-lg mx-auto flex justify-center">
            <div className="gradient-border-container">
              <div className="gradient-border-content">
                <EmailCollectionForm
                  buttonText="Join Waitlist"
                  placeholderText="Enter your email address"
                  className="bg-transparent shadow-none border-0"
                />
              </div>
            </div>
          </div>

          {/* Waitlist subtext */}
          <div className="text-center mb-8 text-sm text-slate-300">
            <p className="mb-2">
              <span className="inline-flex items-center text-blue-300">
                <Sparkles className="mr-1 h-3 w-3" /> Early access coming soon!
              </span>
            </p>
            {userContext === 'consumer' ? (
              <p className="flex items-center justify-center gap-2">
                <span className="flex items-center">
                  <MousePointer className="mr-1 h-3 w-3 text-slate-400" /> 
                  <span>100+ adventures ready to explore</span>
                </span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center">
                  <Bell className="mr-1 h-3 w-3 text-slate-400" /> 
                  <span>Be the first to know</span>
                </span>
              </p>
            ) : (
              <p className="flex items-center justify-center gap-2">
                <span className="flex items-center">
                  <Sparkles className="mr-1 h-3 w-3 text-slate-400" /> 
                  <span>3-5x higher engagement rates</span>
                </span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center">
                  <Bell className="mr-1 h-3 w-3 text-slate-400" /> 
                  <span>Limited partner spots available</span>
                </span>
              </p>
            )}
          </div>

          {/* CTA buttons
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full px-8 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105"
            >
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Play className="mr-2 h-4 w-4" /> {watchDemoText}
            </Button>
          </div> */}
        </div>

        {/* Visual elements showing contrast */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Traditional Ads Card */}
          <motion.div 
            className="relative bg-slate-800/80 p-6 rounded-xl border border-slate-700 shadow-lg transition-all duration-300 hover:shadow-blue-900/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-slate-400 text-sm font-medium">
                TRADITIONAL ADS
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <X size={16} /> : <span className="text-xs">Learn more</span>}
              </button>
            </div>
            
            <motion.div 
              className="relative bg-slate-700/80 rounded-lg overflow-hidden"
              animate={{ 
                height: isExpanded ? 'auto' : '180px',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Mock browser window */}
              <div className="border-b border-slate-600 p-2 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-slate-400">example.com</div>
              </div>
              
              {/* Ad content */}
              <div className="p-4 relative h-[140px] flex items-center justify-center">
                {/* Annoying popup ad */}
                <div className="absolute inset-0 bg-slate-800 border border-slate-600 shadow-lg flex flex-col z-10 m-2 rounded">
                  <div className="bg-slate-700 p-2 flex justify-between items-center">
                    <span className="text-xs text-slate-300">Advertisement</span>
                    <X size={14} className="text-slate-400" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="text-center">
                      <span className="block text-3xl mb-3">{content.traditional.emoji}</span>
                      <p className="text-slate-300 text-sm font-medium">{content.traditional.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Blurred content behind */}
                <div className="flex flex-col space-y-2 blur-sm w-full">
                  <div className="h-4 bg-slate-600 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-600 rounded"></div>
                  <div className="h-4 bg-slate-600 rounded w-5/6"></div>
                  <div className="h-4 bg-slate-600 rounded w-2/3"></div>
                </div>
              </div>
              
              {/* Extended content */}
              {isExpanded && (
                <div className="p-4 border-t border-slate-600 text-slate-300 text-sm">
                  <h4 className="font-medium mb-2">Problems with traditional ads:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {content.traditional.problems.map((problem, index) => (
                      <li key={index}>{problem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Adventurize Card */}
          <motion.div 
            className="relative bg-blue-900/40 p-6 rounded-xl border border-blue-800/50 shadow-lg transition-all duration-300 hover:shadow-blue-900/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-blue-400 text-sm font-medium">
                ADVENTURIZE
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-400 hover:text-white transition-colors"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <X size={16} /> : <span className="text-xs">Learn more</span>}
              </button>
            </div>
            
            <motion.div 
              className="relative bg-blue-800/40 rounded-lg overflow-hidden"
              animate={{ 
                height: isExpanded ? 'auto' : '180px',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Mock browser window */}
              <div className="border-b border-blue-700/50 p-2 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-blue-300">example.com</div>
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bell size={10} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Adventure content */}
              <div className="p-4 relative h-[140px] flex items-center justify-center">
                <div className="bg-blue-900/60 border border-blue-700/50 shadow-lg rounded-lg p-4 text-center w-full flex flex-col items-center justify-center">
                  <div className="w-10 h-10 bg-blue-700/50 rounded-full flex items-center justify-center mb-3">
                    <Sparkles size={20} className="text-blue-300" />
                  </div>
                  <h4 className="text-blue-200 font-medium mb-1">{content.adventure.title}</h4>
                  <p className="text-blue-300 text-xs">{content.adventure.description}</p>
                </div>
              </div>
              
              {/* Extended content */}
              {isExpanded && (
                <div className="p-4 border-t border-blue-700/50 text-blue-200 text-sm">
                  <h4 className="font-medium mb-2">Benefits of Adventurize:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {content.adventure.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-10"></div>
    </section>
  );
};

export default HeroSection;
