import React from "react";
import Navbar from "@/components/landing/Navbar";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
import EmailCollectionForm from "@/components/landing/EmailCollectionForm";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import { Target, BarChart3, Award } from "lucide-react";

export default function ForBrands() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Animated background that spans the entire page */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero section with email collection */}
      <HeroSection 
        headline="Transform Ads into Adventures" 
        subheadline="Engage your audience with interactive, gamified experiences that drive brand loyalty, increase conversions, and provide valuable consumer insights."
        ctaText="Schedule a Demo"
        watchDemoText="View Case Studies"
        userContext="brand"
      />

      {/* How it works section */}
      <section id="how-it-works">
        <HowItWorksSection 
          title="How Adventurize Works for Brands"
          description="Our platform enables brands to create engaging, interactive adventures that consumers actually enjoy experiencing."
          steps={[
            {
              icon: <Target className="h-10 w-10 text-blue-500" />,
              title: "Create Your Adventure",
              description: "Design interactive brand experiences using our intuitive dashboard. Customize challenges, rewards, and branding elements."
            },
            {
              icon: <BarChart3 className="h-10 w-10 text-emerald-500" />,
              title: "Deploy & Distribute",
              description: "Launch your adventure to consumers through our Chrome extension. Target specific demographics and browsing behaviors."
            },
            {
              icon: <Award className="h-10 w-10 text-amber-500" />,
              title: "Analyze & Optimize",
              description: "Track performance metrics, gather consumer insights, and refine your adventures for maximum impact and ROI."
            }
          ]}
        />
      </section>

      {/* Social proof section */}
      <section id="testimonials">
        <SocialProofSection />
      </section>

      {/* Final call to action */}
      <section id="email-signup" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Brand Advertising?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join innovative brands already using Adventurize to create memorable, engaging experiences that consumers love.
          </p>
          <div className="max-w-lg mx-auto">
            <EmailCollectionForm
              buttonText="Request a Demo"
              placeholderText="Your business email"
              className="mx-auto bg-white/5 backdrop-blur-sm p-2 rounded-xl border border-slate-800/30 shadow-lg"
            />
          </div>
          <p className="mt-4 text-sm text-slate-400">
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-slate-400 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <span className="font-bold text-slate-300">Adventurize</span>
              </div>
              <p className="mt-2">
                © {new Date().getFullYear()} Adventurize. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 