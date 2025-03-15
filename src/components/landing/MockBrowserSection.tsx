"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  CompassIcon, 
  ArrowRight, 
  Bell, 
  Sparkles, 
  MousePointer, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  Search, 
  Globe, 
  Lock, 
  Star, 
  Plus, 
  Menu, 
  Maximize2
} from "lucide-react";
import { motion } from "framer-motion";
import ExtensionPopup from "./ExtensionPopup";
import { Button } from "@/components/ui/button";

interface MockBrowserSectionProps {
  userContext?: 'consumer' | 'brand';
}

const MockBrowserSection = ({ userContext = 'consumer' }: MockBrowserSectionProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleShowDemo = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Content variants based on user context
  const content = {
    consumer: {
      title: "How Adventurize Works For You",
      description: "Transform boring ads into fun, interactive adventures that reward you with knowledge and offers.",
      url: "example.com/article",
      tabTitle: "Interesting Article",
      steps: [
        {
          title: "Notification Appears",
          description: "A subtle notification appears when an adventure is available.",
          image: <Bell className="h-12 w-12 text-amber-500" />
        },
        {
          title: "Engage When You Want",
          description: "Click to start the adventure only when you're interested.",
          image: <MousePointer className="h-12 w-12 text-emerald-500" />
        },
        {
          title: "Enjoy & Earn Rewards",
          description: "Have fun with interactive content and earn rewards.",
          image: <Sparkles className="h-12 w-12 text-blue-500" />
        }
      ]
    },
    brand: {
      title: "How Adventurize Works For Brands",
      description: "Transform your ads into memorable experiences that boost engagement and brand recall.",
      url: "brandexample.com/dashboard",
      tabTitle: "Brand Dashboard",
      steps: [
        {
          title: "Create Adventures",
          description: "Design interactive adventures that align with your brand.",
          image: <Sparkles className="h-12 w-12 text-purple-500" />
        },
        {
          title: "Target Your Audience",
          description: "Deliver adventures to your ideal customers.",
          image: <MousePointer className="h-12 w-12 text-pink-500" />
        },
        {
          title: "Measure Results",
          description: "Track engagement, completion rates, and conversions.",
          image: <Globe className="h-12 w-12 text-blue-500" />
        }
      ]
    }
  };

  const currentContent = userContext === 'consumer' ? content.consumer : content.brand;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-900/50 text-blue-300 text-sm font-medium">
            {userContext === 'consumer' ? 'For Web Users' : 'For Brands & Marketers'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            {currentContent.title}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Mock Browser Window */}
        <motion.div
          className="max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-2xl border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Browser Chrome */}
          <div className="bg-slate-800 p-2">
            {/* Browser Controls - Top Bar with Window Controls and Tabs */}
            <div className="flex items-center mb-2">
              {/* Window Controls (macOS style) */}
              <div className="flex space-x-1.5 mr-4 ml-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center">
                  {/* Close icon */}
                  <X className="h-2 w-2 text-red-800 opacity-0 group-hover:opacity-100" />
                </div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center">
                  {/* Minimize icon */}
                  <span className="h-0.5 w-1.5 bg-yellow-800 opacity-0 group-hover:opacity-100"></span>
                </div>
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
                  {/* Maximize icon */}
                  <Plus className="h-2 w-2 text-green-800 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              
              {/* Chrome Tabs */}
              <div className="flex flex-1 items-center">
                {/* Active Tab */}
                <div 
                  className={cn(
                    "relative px-3 py-2 rounded-t-md text-xs font-medium flex items-center gap-2 min-w-[140px] max-w-[200px]",
                    "bg-slate-700 text-white border-t border-l border-r border-slate-600"
                  )}
                  onClick={() => setActiveTab(0)}
                >
                  {/* Favicon placeholder */}
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="truncate">{currentContent.tabTitle}</span>
                  <X className="h-3.5 w-3.5 ml-auto opacity-60 hover:opacity-100" />
                  
                  {/* Tab bottom border that overlaps the toolbar border */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-700"></div>
                </div>
                
                {/* Inactive Tab */}
                <div 
                  className={cn(
                    "relative px-3 py-2 rounded-t-md text-xs font-medium flex items-center gap-2 min-w-[100px] max-w-[160px]",
                    "bg-slate-800 text-slate-400 border-t border-l border-r border-slate-700/50 hover:bg-slate-750"
                  )}
                  onClick={() => setActiveTab(1)}
                >
                  <span className="truncate">New Tab</span>
                  <X className="h-3.5 w-3.5 ml-auto opacity-60 hover:opacity-100" />
                </div>
                
                {/* New Tab Button */}
                <div className="p-2 text-slate-400 hover:bg-slate-700/30 rounded-md">
                  <Plus className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
            
            {/* Browser Toolbar */}
            <div className="flex items-center px-2 py-1 relative">
              {/* Navigation Controls */}
              <div className="flex space-x-1 text-slate-400 mr-2">
                <button className="p-1 rounded-full hover:bg-slate-700/50">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="p-1 rounded-full hover:bg-slate-700/50">
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="p-1 rounded-full hover:bg-slate-700/50">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              
              {/* URL Bar */}
              <div className="flex-1 bg-slate-700 rounded-full flex items-center px-3 py-1.5 group hover:bg-slate-600/70">
                {/* Site security indicator */}
                <Lock className="h-3.5 w-3.5 text-green-500 mr-2" />
                
                {/* URL display */}
                <div className="flex-1 flex items-center">
                  <span className="text-xs text-slate-400">https://</span>
                  <span className="text-xs text-slate-300 ml-0.5">{currentContent.url}</span>
                </div>
                
                {/* Search icon */}
                <Search className="h-3.5 w-3.5 text-slate-400 opacity-0 group-hover:opacity-100" />
              </div>
              
              {/* Browser Action Icons */}
              <div className="flex ml-2 space-x-1 text-slate-400">
                <button className="p-1 rounded-full hover:bg-slate-700/50">
                  <Star className="h-4 w-4" />
                </button>
                <button className="p-1 rounded-full hover:bg-slate-700/50">
                  <Menu className="h-4 w-4" />
                </button>
              </div>
              
              {/* Chrome Extension Icons Area */}
              <div className="flex items-center ml-1 space-x-1">
                {/* Adventurize Extension Icon */}
                <div className="relative">
                  <button className="p-1 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    <CompassIcon className="h-4 w-4" />
                  </button>
                  {activeStep === 0 && (
                    <div className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white border border-slate-800">
                      1
                    </div>
                  )}
                </div>
                
                {/* Other extension icons (just for visual effect) */}
                <button className="p-1 rounded-full hover:bg-slate-700/50">
                  <div className="w-4 h-4 bg-slate-600 rounded-sm"></div>
                </button>
                <button className="p-1 rounded-full hover:bg-slate-700/50">
                  <div className="w-4 h-4 bg-slate-600 rounded-sm"></div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Browser Content */}
          <div className="bg-white dark:bg-slate-900 min-h-[400px] relative">
            {/* Mock Content - Blurred/Dimmed */}
            <div className="absolute inset-0 p-6 opacity-30 pointer-events-none">
              <div className="w-full h-12 bg-slate-200 dark:bg-slate-700 rounded-md mb-4"></div>
              <div className="flex gap-4 mb-6">
                <div className="w-1/3 h-64 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                <div className="w-2/3 space-y-3">
                  <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                  <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                  <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                  <div className="w-3/4 h-4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                  <div className="w-full h-24 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                  <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                  <div className="w-5/6 h-4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                </div>
              </div>
            </div>
            
            {/* Simplified Step Visualization - Single card with all steps */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 max-w-md">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  How Adventurize Works
                </h3>
                
                {/* Steps as a simple list */}
                <div className="space-y-4">
                  {currentContent.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0 flex items-center justify-center mr-4">
                        {step.image}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{step.title}</h4>
                        <p className="text-slate-300 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Demo Button */}
                <div className="mt-6 text-center">
                  <button 
                    onClick={handleShowDemo}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-colors"
                  >
                    Try Interactive Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Try Interactive Demo Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={handleShowDemo}
            className={cn(
              "inline-flex items-center justify-center px-8 py-4 rounded-full",
              "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
              "text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",
              "transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            )}
            size="lg"
          >
            Try Interactive Demo
            <CompassIcon className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      
      {/* Extension Popup */}
      {showPopup && <ExtensionPopup onClose={handleClosePopup} />}
    </section>
  );
};

export default MockBrowserSection; 