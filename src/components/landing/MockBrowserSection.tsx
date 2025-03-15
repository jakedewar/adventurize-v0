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
    <section className="w-full py-24 bg-gradient-to-b from-slate-950/95 via-slate-950 to-slate-900/95 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Larger, more diffused gradient blobs */}
        <div className="absolute -top-48 -right-48 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-600/20 to-indigo-700/20 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute -bottom-48 -left-48 w-[30rem] h-[30rem] bg-gradient-to-tr from-purple-600/20 to-blue-700/20 rounded-full blur-[100px] opacity-30"></div>
        
        {/* Additional smaller accent blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-[50px]"></div>
      </div>

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-grid-slate-800/20 bg-[size:20px_20px] opacity-10"></div>
      
      {/* Gradient overlay for smoother transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 opacity-40"></div>

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