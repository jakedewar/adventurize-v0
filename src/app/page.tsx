import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
import EmailCollectionForm from "@/components/landing/EmailCollectionForm";
import Navbar from "@/components/landing/Navbar";
import ExtensionBanner from "@/components/landing/ExtensionBanner";
import MockBrowserSection from "@/components/landing/MockBrowserSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Animated background that spans the entire page */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />
      
      {/* Extension Banner */}
      <ExtensionBanner />

      {/* Hero section with email collection */}
      <HeroSection userContext="consumer" />

      {/* How it works section with mock browser */}
      <section id="how-it-works">
        <MockBrowserSection userContext="consumer" />
      </section>

      {/* Social proof section */}
      <section id="testimonials">
        <SocialProofSection />
      </section>

      {/* Final call to action */}
      <section id="email-signup" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our waitlist to be among the first to experience our Chrome Extension MVP. 
            Nobody likes an Ad. Everyone likes an Adventure.
          </p>
          <div className="max-w-lg mx-auto">
            <EmailCollectionForm
              buttonText="Get Early Access"
              placeholderText="Your email address"
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
