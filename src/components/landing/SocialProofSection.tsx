"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Star, Chrome, Clock, Smile, MapPin, Utensils, Compass, ChevronRight, X, Maximize2, Minimize2, ArrowLeft } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
  rating?: number;
}

const Testimonial = ({
  quote = "I love how Adventurize turns my browsing breaks into mini-adventures that are actually fun!",
  author = "Jake D.",
  company = "Boston, MA",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=jake",
  rating = 5,
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-white/10 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-blue-500/20">
            <img
              src={avatarUrl}
              alt={author}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-lg font-medium">{author}</CardTitle>
            <p className="text-sm text-muted-foreground">{company}</p>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < rating
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="italic text-sm md:text-base">"{quote}"</p>
      </CardContent>
    </Card>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="h-24 w-full bg-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col items-center justify-center border border-slate-200/10 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500/20 group-hover:bg-white/20 dark:group-hover:bg-slate-800/50">
        <div className="mb-2">{icon}</div>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-center text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

interface SocialProofSectionProps {
  testimonials?: TestimonialProps[];
  features?: FeatureCardProps[];
}

const SocialProofSection = ({
  testimonials = [
    {
      quote:
        "I love how Adventurize turns my browsing breaks into mini-adventures that are actually fun!",
      author: "Jake D.",
      company: "Boston, MA",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jake",
      rating: 5,
    },
    {
      quote:
        "The personalized taco quest adventure was hilarious and actually led me to discover a new restaurant I love!",
      author: "Maria S.",
      company: "Food Enthusiast",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      rating: 5,
    },
    {
      quote:
        "These micro-adventures are the perfect little break during my workday. Quick, fun, and surprisingly engaging!",
      author: "Alex W.",
      company: "Tech Professional",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      rating: 4,
    },
  ],
  features = [
    {
      icon: <Chrome className="h-8 w-8 text-blue-500" />,
      title: "Chrome Extension",
      description: "Simple installation with a clean, minimal interface that doesn't disrupt your browsing.",
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-500" />,
      title: "60-Second Adventures",
      description: "Short interactive narratives designed to be completed in about a minute.",
    },
    {
      icon: <Smile className="h-8 w-8 text-amber-500" />,
      title: "Personalized Content",
      description: "Adventures tailored to your interests, location, and preferences.",
    },
  ],
}: SocialProofSectionProps) => {
  // State to track the current step of the adventure
  const [adventureStep, setAdventureStep] = useState(1);
  // State to track which route was chosen (1 = Adventurous, 2 = Classic)
  const [chosenRoute, setChosenRoute] = useState(0);

  // Function to handle adventure progression
  const handleAdventureProgress = (step: number, route?: number) => {
    setAdventureStep(step);
    if (route) {
      setChosenRoute(route);
    }
  };

  // Function to reset the adventure
  const resetAdventure = () => {
    setAdventureStep(1);
    setChosenRoute(0);
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium">
            MVP Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Adventure in Your Browser
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our Chrome Extension MVP delivers personalized micro-adventures through a simple, engaging popup UI.
          </p>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">
            What Early Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
