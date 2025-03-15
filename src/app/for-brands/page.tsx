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

      {/* Integrations section */}
      <section id="integrations" className="py-20 bg-gradient-to-b from-black to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Connect Adventurize with your favorite tools and platforms to maximize your marketing efforts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Google Analytics Integration */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-700 transition-all hover:border-blue-500/50 hover:shadow-blue-500/10 group">
              <div className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-900/20">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM16.9 17.39C16.64 16.58 15.9 16 15 16H14V13C14 12.45 13.55 12 13 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 18.81 15.89 16.9 17.39Z" fill="#4285F4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Google Analytics</h3>
                <p className="text-slate-300 text-center mb-4">
                  Track user engagement and campaign performance with detailed analytics integration.
                </p>
                <ul className="space-y-2 text-sm text-slate-300 w-full">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time event tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom conversion goals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Audience segmentation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Shopify Integration */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-700 transition-all hover:border-green-500/50 hover:shadow-green-500/10 group">
              <div className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-900/20">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5008 3.00001C17.5008 3.00001 17.4008 3.10001 17.3008 3.10001C17.3008 3.10001 15.9008 3.30001 15.9008 3.30001C15.9008 3.30001 14.8008 2.00001 13.4008 2.00001C13.4008 2.00001 13.0008 2.00001 12.6008 2.10001C11.9008 1.40001 11.2008 1.00001 10.7008 1.00001C8.60078 1.00001 8.50078 2.90001 8.60078 3.50001C8.60078 3.80001 8.70078 4.20001 8.70078 4.50001C6.70078 5.10001 5.60078 5.50001 5.40078 5.60001C4.80078 5.80001 4.80078 5.80001 4.70078 6.40001C4.60078 6.80001 3.50078 18.4 3.50078 18.4L15.8008 20.9L20.5008 19.7C20.5008 19.7 17.5008 3.00001 17.5008 3.00001ZM13.4008 3.00001C13.9008 3.20001 14.3008 3.60001 14.7008 4.10001C14.2008 4.20001 13.7008 4.30001 13.1008 4.50001C13.2008 3.60001 13.3008 3.20001 13.4008 3.00001ZM12.6008 4.80001C13.4008 4.60001 14.2008 4.40001 14.9008 4.30001C14.9008 4.30001 15.5008 5.10001 15.9008 6.60001C15.5008 6.70001 13.9008 7.10001 13.9008 7.10001C13.9008 7.10001 13.3008 5.80001 12.6008 4.80001ZM10.7008 2.00001C10.9008 2.00001 11.2008 2.20001 11.5008 2.50001C10.8008 2.80001 10.3008 3.40001 10.1008 4.40001C9.70078 4.50001 9.30078 4.60001 9.00078 4.70001C9.20078 3.50001 9.70078 2.00001 10.7008 2.00001Z" fill="#95BF47"/>
                    <path d="M17.3 3.10001C17.3 3.10001 17.2 3.10001 17.1 3.20001C17.1 3.20001 15.7 3.40001 15.7 3.40001C15.7 3.40001 14.6 2.10001 13.2 2.10001C13.2 2.10001 13.2 2.10001 13.1 2.10001C13.1 2.10001 13.1 3.00001 13.1 3.00001C13.6 3.20001 14 3.60001 14.4 4.10001C13.9 4.20001 13.4 4.30001 12.8 4.50001C12.9 3.60001 13 3.20001 13.1 3.00001C13.1 3.00001 13.1 2.10001 13.1 2.10001C13.1 2.10001 12.7 2.10001 12.3 2.20001C12.3 2.20001 12.3 2.20001 12.3 2.20001C12.3 2.20001 12.3 3.10001 12.3 3.10001C12.3 3.30001 12.4 3.70001 12.5 4.30001C12.1 4.40001 11.7 4.50001 11.3 4.70001C11.3 4.10001 11.3 3.60001 11.3 3.40001C11.3 3.00001 11.2 2.60001 11 2.30001C10.8 2.10001 10.5 2.00001 10.2 2.00001C9.7 2.00001 9.3 2.30001 9 2.80001C8.8 3.10001 8.6 3.50001 8.5 4.00001C8.3 4.10001 8.1 4.10001 7.9 4.20001C7.9 4.20001 8.5 12.8 8.5 12.8C8.5 12.8 10.3 12.4 12.2 12.1C13.7 11.9 15.2 11.6 16.1 11.5C16.1 11.5 16.7 4.30001 16.7 4.30001C16.3 4.40001 15.8 4.50001 15.3 4.60001C15.3 4.60001 14.7 3.80001 14.1 3.30001C14.1 3.30001 14.1 3.30001 14.1 3.30001C14.1 3.30001 14.1 4.20001 14.1 4.20001C14.1 4.20001 15.7 4.00001 15.7 4.00001C15.7 4.00001 16.3 4.80001 16.7 6.30001C16.3 6.40001 14.7 6.80001 14.7 6.80001C14.7 6.80001 14.1 5.50001 13.4 4.50001C13.4 4.50001 13.4 4.50001 13.4 4.50001C13.4 4.50001 13.4 5.40001 13.4 5.40001C13.4 5.40001 14.9 5.10001 14.9 5.10001C14.9 5.10001 15.3 6.10001 15.5 6.90001C15.1 7.00001 14.1 7.20001 13.5 7.30001C13.5 7.30001 13.5 7.30001 13.5 7.30001C13.5 7.30001 13.5 8.20001 13.5 8.20001C13.5 8.20001 14.5 8.00001 14.5 8.00001C14.5 8.00001 14.6 8.70001 14.7 9.40001C13.5 9.60001 12.3 9.90001 12.3 9.90001C12.3 9.90001 12.3 10.8 12.3 10.8C12.3 10.8 13.5 10.5 13.5 10.5C13.5 10.5 13.5 11.2 13.5 11.2C12.4 11.4 11.3 11.6 10.7 11.7C10.7 11.7 10.7 12.6 10.7 12.6C10.7 12.6 11.7 12.4 11.7 12.4C11.7 12.4 11.7 13.1 11.7 13.1C10.9 13.3 10.1 13.4 9.7 13.5C9.7 13.5 9.7 14.4 9.7 14.4C9.7 14.4 10.5 14.2 10.5 14.2C10.5 14.2 10.3 16.7 10.3 16.7C10.3 16.7 11.2 16.5 11.2 16.5C11.2 16.5 11.4 14 11.4 14C11.4 14 12.2 13.8 12.2 13.8C12.2 12.9 12.2 12.9C11.4 13.1 11.4 13.1C11.4 13.1 11.4 12.4 11.4 12.4C12.2 12.2 13.3 12 14.1 11.9C14.1 11.9 14.1 11 14.1 11C14.1 11 13 11.2 13 11.2C13 11.2 12.9 10.5 12.9 10.5C14 10.3 15.2 10 15.9 9.90001C15.9 9.90001 15.9 9.00001 15.9 9.00001C15.9 9.00001 14.8 9.20001 14.8 9.20001C14.8 9.20001 14.7 8.50001 14.6 7.80001C15.2 7.70001 16.2 7.50001 16.6 7.40001C16.6 7.40001 16.6 6.50001 16.6 6.50001C16.6 6.50001 15.2 6.80001 15.2 6.80001C15.2 6.80001 14.8 5.80001 14.6 5.00001C15.1 4.90001 15.6 4.80001 16 4.70001C16 4.70001 16 3.80001 16 3.80001C16 3.80001 15.6 3.90001 15.2 3.90001C15.2 3.90001 14.6 3.10001 14 2.60001C14 2.60001 14 2.60001 14 2.60001C14 2.60001 14 3.50001 14 3.50001C14 3.70001 14.1 4.10001 14.2 4.70001C13.8 4.80001 13.4 4.90001 13 5.10001C12.8 4.50001 12.7 4.10001 12.7 3.90001C12.7 3.50001 12.6 3.10001 12.4 2.80001C12.2 2.60001 11.9 2.50001 11.6 2.50001C11.1 2.50001 10.7 2.80001 10.4 3.30001C10.2 3.60001 10 4.00001 9.9 4.50001C9.7 4.60001 9.5 4.60001 9.3 4.70001C9.3 4.70001 9.9 13.3 9.9 13.3C9.9 13.3 11.7 12.9 13.6 12.6C15.1 12.4 16.6 12.1 17.5 12C17.5 12 17.5 3.10001 17.5 3.10001C17.4 3.10001 17.3 3.10001 17.3 3.10001Z" fill="#5E8E3E"/>
                    <path d="M10.7 7.90001C10.7 7.90001 10.3 7.50001 9.8 7.50001C9 7.50001 9 8.10001 9 8.20001C9 8.90001 11.3 9.50001 11.3 11.5C11.3 13 10.3 14 9.1 14C7.7 14 7 12.9 7 12.9L7.5 12C7.5 12 8.2 12.8 8.9 12.8C9.3 12.8 9.6 12.5 9.6 12.1C9.6 11 7.7 10.7 7.7 9C7.7 7.60001 8.7 6.70001 10 6.70001C11 6.70001 11.6 7.30001 11.6 7.30001L11.2 8.20001C11.2 8.20001 10.7 7.80001 10.1 7.80001C9.6 7.80001 9.3 8.10001 9.3 8.50001C9.3 9.40001 10.7 9.60001 10.7 11.2C10.7 11.2 10.7 7.90001 10.7 7.90001Z" fill="#FFF"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Shopify</h3>
                <p className="text-slate-300 text-center mb-4">
                  Seamlessly connect your Shopify store to create interactive shopping experiences.
                </p>
                <ul className="space-y-2 text-sm text-slate-300 w-full">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Product catalog sync</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Order tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Customer data integration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Klaviyo Integration */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-700 transition-all hover:border-purple-500/50 hover:shadow-purple-500/10 group">
              <div className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-900/20">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7132 4.28683C17.6369 2.21054 14.9211 1.0249 12.0001 1.0249C9.07906 1.0249 6.36328 2.21054 4.28699 4.28683C2.2107 6.36312 1.02505 9.0789 1.02505 12C1.02505 14.9211 2.2107 17.6369 4.28699 19.7132C6.36328 21.7895 9.07906 22.9751 12.0001 22.9751C14.9211 22.9751 17.6369 21.7895 19.7132 19.7132C21.7895 17.6369 22.9751 14.9211 22.9751 12C22.9751 9.0789 21.7895 6.36312 19.7132 4.28683ZM12.0001 21.5251C6.76577 21.5251 2.47505 17.2344 2.47505 12C2.47505 6.76564 6.76577 2.4749 12.0001 2.4749C17.2344 2.4749 21.5251 6.76564 21.5251 12C21.5251 17.2344 17.2344 21.5251 12.0001 21.5251Z" fill="#5D43FB"/>
                    <path d="M16.5 7.5H13.5V16.5H16.5V7.5Z" fill="#5D43FB"/>
                    <path d="M10.5 7.5H7.5V16.5H10.5V7.5Z" fill="#5D43FB"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Klaviyo</h3>
                <p className="text-slate-300 text-center mb-4">
                  Power your email marketing with interactive content and personalized campaigns.
                </p>
                <ul className="space-y-2 text-sm text-slate-300 w-full">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Email campaign integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated flows</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Segmentation based on interactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-300 mb-6">
              Need a different integration? We're constantly expanding our ecosystem.
            </p>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors inline-flex items-center">
              <span>Request Custom Integration</span>
            </button>
          </div>
        </div>
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
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-700 transition-colors hover:border-slate-600">
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
                  <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center">
                    <span>Lock In Early Adopter Price</span>
                  </button>
                  <div className="text-center text-sm text-slate-300">
                    <span className="text-blue-300">✓</span> Includes 30-day free trial, no credit card required
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-gradient-to-br from-blue-900/90 to-indigo-900/90 rounded-xl shadow-2xl overflow-hidden border-2 border-blue-500/70 relative md:-mt-2 md:-mb-2">
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
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                    <span>Lock In Early Adopter Price</span>
                  </button>
                  <div className="text-center text-sm text-slate-300">
                    <span className="text-blue-300">✓</span> 30-day free trial <span className="text-slate-400">•</span> <span className="text-blue-300">✓</span> Cancel anytime
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-700 transition-colors hover:border-slate-600">
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
                  <button className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center">
                    <span>Contact Sales</span>
                  </button>
                  <div className="text-center text-sm text-slate-300">
                    <span className="text-blue-300">✓</span> Custom pricing <span className="text-slate-400">•</span> <span className="text-blue-300">✓</span> 30-day trial included
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