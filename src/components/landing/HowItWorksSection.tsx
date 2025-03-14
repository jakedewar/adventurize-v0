import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap, Target, BarChart } from "lucide-react";

interface HowItWorksSectionProps {
  title?: string;
  description?: string;
  steps?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const HowItWorksSection = ({
  title = "How Adventurize Works",
  description = "Our revolutionary AdTech method transforms boring advertisements into engaging adventures that captivate your audience.",
  steps = [
    {
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      title: "Identify Boring Ad Spaces",
      description:
        "We locate traditional ad placements that typically get ignored by users.",
    },
    {
      icon: <Target className="h-10 w-10 text-emerald-500" />,
      title: "Transform into Adventures",
      description:
        "Our proprietary technology converts standard ads into interactive adventure experiences.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Measure Increased Engagement",
      description:
        "Watch as your audience actively engages with your brand through these adventure-based experiences.",
    },
  ],
}: HowItWorksSectionProps) => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium">
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {/* Connection lines between steps */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-700 dark:to-blue-700 transform -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative z-10 border border-slate-100 dark:border-slate-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute -right-4 top-1/2 transform translate-x-full -translate-y-1/2 z-20">
                  <ArrowRight className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#email-signup"
            className={cn(
              "inline-flex items-center justify-center px-8 py-4 rounded-full",
              "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
              "text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",
              "transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            )}
          >
            Join the Revolution
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
