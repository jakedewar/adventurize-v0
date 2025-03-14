import React from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import EmailCollectionForm from "./EmailCollectionForm";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  watchDemoText?: string;
}

const HeroSection = ({
  headline = "Nobody likes an ad. Everyone likes an Adventure.",
  subheadline = "Join the revolution in AdTech that transforms boring advertisements into exciting adventures that users actually want to engage with.",
  ctaText = "Join the waitlist",
  watchDemoText = "Watch how it works",
}: HeroSectionProps) => {
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
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-700/30 text-blue-300 text-sm font-medium animate-pulse">
            Revolutionizing AdTech
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          {/* Email collection form */}
          <div className="mb-10 w-full max-w-lg mx-auto">
            <EmailCollectionForm
              buttonText="Join Waitlist"
              placeholderText="Enter your email address"
              className="shadow-lg shadow-blue-900/20 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20"
            />
          </div>

          {/* CTA buttons */}
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
          </div>
        </div>

        {/* Visual elements showing contrast */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-900/20">
            <div className="text-slate-400 mb-2 text-sm font-medium">
              TRADITIONAL ADS
            </div>
            <div className="h-40 bg-slate-700/50 rounded-lg flex items-center justify-center">
              <div className="text-slate-500 text-center p-4">
                <span className="block text-3xl mb-2">😴</span>
                <span>Boring. Intrusive. Ignored.</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/50 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-900/20">
            <div className="text-blue-400 mb-2 text-sm font-medium">
              ADVENTURIZE
            </div>
            <div className="h-40 bg-blue-800/20 rounded-lg flex items-center justify-center">
              <div className="text-blue-300 text-center p-4">
                <span className="block text-3xl mb-2">🚀</span>
                <span>Exciting. Engaging. Memorable.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 left-0 right-0 mx-auto w-max animate-bounce">
          <a
            href="#how-it-works"
            className="flex flex-col items-center text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-xs mb-1">Scroll to learn more</span>
            <ChevronDown className="h-5 w-5" />
          </a>
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
