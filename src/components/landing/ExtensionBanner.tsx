"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CompassIcon } from "lucide-react";
import ExtensionPopup from "./ExtensionPopup";

const ExtensionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling down a bit
      setIsVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Start pulsing animation after banner is visible
  useEffect(() => {
    if (isVisible && !hasInteracted) {
      const timer = setTimeout(() => {
        setIsPulsing(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasInteracted]);

  const handleBannerClick = () => {
    setShowPopup(true);
    setIsPulsing(false);
    setHasInteracted(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Add keyframes for the soft pulse animation */}
      <style jsx global>{`
        @keyframes softPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
            background-color: rgba(255, 255, 255, 0.05);
          }
          50% {
            box-shadow: 0 0 0 5px rgba(255, 255, 255, 0);
            background-color: rgba(255, 255, 255, 0.15);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            background-color: rgba(255, 255, 255, 0.05);
          }
        }
        .soft-pulse {
          animation: softPulse 3s infinite;
        }
      `}</style>

      <div
        className={cn(
          "fixed top-16 md:top-20 left-0 right-0 z-40 transition-all duration-500 transform",
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 px-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            {/* Left side content */}
            <div className="text-sm font-medium">
              <span className="hidden sm:inline">See how Adventurize transforms ads into interactive experiences</span>
              <span className="sm:hidden">Try Adventurize demo</span>
            </div>
            
            {/* Right side extension icon - with subtle enhancement */}
            <div 
              className={cn(
                "flex items-center cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg px-3 py-1.5",
                isPulsing ? "soft-pulse" : ""
              )}
              onClick={handleBannerClick}
            >
              <span className="text-sm font-medium mr-2 hidden sm:inline">
                Try Interactive Demo
              </span>
              <div className="text-xs px-2 py-0.5 bg-white/20 rounded-full mr-2">
                Click to Experience
              </div>
              <div className="relative">
                <div className="bg-white/20 p-1.5 rounded-md transition-all duration-300">
                  <CompassIcon className="h-5 w-5" />
                </div>
                {/* Notification badge */}
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-white/30">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && <ExtensionPopup onClose={handleClosePopup} />}
    </>
  );
};

export default ExtensionBanner; 