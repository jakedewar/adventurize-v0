"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CompassIcon } from "lucide-react";
import ExtensionPopup from "./ExtensionPopup";

const ExtensionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling down 300px
      setIsVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Start pulsing animation after banner is visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsPulsing(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleBannerClick = () => {
    setShowPopup(true);
    setIsPulsing(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
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
              <span className="hidden sm:inline">Adventurize transforms boring ads into exciting adventures</span>
              <span className="sm:hidden">Adventurize your browsing</span>
            </div>
            
            {/* Right side extension icon - mimicking Chrome extension placement */}
            <div 
              className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-102" 
              onClick={handleBannerClick}
            >
              <span className="text-sm font-medium mr-2 hidden sm:inline">
                Try an Adventure
              </span>
              <div className="text-xs px-2 py-0.5 bg-white/20 rounded-full mr-2">
                Click to preview
              </div>
              <div className="relative">
                <div className="bg-white/20 p-1.5 rounded-md transition-all duration-300">
                  <CompassIcon className="h-5 w-5" />
                </div>
                {/* Extension badge with "1" notification */}
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