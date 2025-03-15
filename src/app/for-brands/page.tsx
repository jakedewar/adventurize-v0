import React from "react";
import Navbar from "@/components/landing/Navbar";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
import EmailCollectionForm from "@/components/landing/EmailCollectionForm";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import MockBrowserSection from "@/components/landing/MockBrowserSection";
import { Target, BarChart3, Award, Check } from "lucide-react";

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

      {/* How it works section with mock browser */}
      <section id="how-it-works">
        <MockBrowserSection userContext="brand" />
      </section>

      {/* Social proof section */}
      <section id="testimonials">
        <SocialProofSection />
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing for Every Brand</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your brand's needs and scale as you grow.
            </p>
            <div className="mt-4 inline-flex items-center px-3 py-1 bg-blue-900/40 rounded-full text-sm text-blue-300 border border-blue-800">
              <span className="mr-2">🚀</span> Early Adopter Discount: 30% off for our first 50 customers!
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
                <div className="text-sm text-slate-400 mb-4">
                  <span className="line-through">$349</span>
                  <span className="ml-2 text-blue-400">Save $100</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Perfect for small brands looking to experiment with interactive ads.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Up to 3 interactive ad campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Standard templates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Email support</span>
                  </li>
                </ul>
                <div className="mt-6 space-y-3">
                  <button className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">
                    Start 30-Day Free Trial
                  </button>
                  <div className="text-center text-sm text-slate-400">
                    Save 20% with <a href="#" className="text-blue-400 hover:text-blue-300">annual billing</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-gradient-to-br from-blue-900/90 to-indigo-900/90 rounded-xl shadow-xl overflow-hidden border-2 border-blue-500/70 transform scale-105 z-10">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-1 text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="p-6 border-b border-blue-700/70">
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">$499</span>
                  <span className="text-slate-300 ml-2">/month</span>
                </div>
                <div className="text-sm text-slate-300 mb-4">
                  <span className="line-through">$999</span>
                  <span className="ml-2 text-blue-300">Save $300</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Ideal for growing brands looking to scale their interactive advertising.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Up to 10 interactive ad campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Advanced analytics with user insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Custom templates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Priority email & chat support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">A/B testing capabilities</span>
                  </li>
                </ul>
                <div className="mt-6 space-y-3">
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                    Start 30-Day Free Trial
                  </button>
                  <div className="text-center text-sm text-slate-300">
                    Save 20% with <a href="#" className="text-blue-300 hover:text-blue-200">annual billing</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <p className="text-slate-400 text-sm">
                  For large brands with specific needs and high-volume campaigns.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Unlimited interactive ad campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Enterprise-grade analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Fully customized experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">API access & integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Performance-based pricing options</span>
                  </li>
                </ul>
                <div className="mt-6 space-y-3">
                  <button className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">
                    Contact Sales
                  </button>
                  <div className="text-center text-sm text-slate-400">
                    Custom solutions tailored to your needs
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center px-4 py-2 bg-slate-800/70 rounded-lg">
                <Check className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-slate-300">30-day free trial</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-slate-800/70 rounded-lg">
                <Check className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-slate-300">No credit card required</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-slate-800/70 rounded-lg">
                <Check className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-slate-300">Cancel anytime</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Need a custom solution? <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Contact our sales team</a> for a personalized quote.
            </p>
          </div>
        </div>
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