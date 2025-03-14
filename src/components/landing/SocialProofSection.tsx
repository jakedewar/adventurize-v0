import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
  rating?: number;
}

const Testimonial = ({
  quote = "Adventurize has completely transformed how we think about advertising. Our engagement rates have skyrocketed!",
  author = "Jane Smith",
  company = "Tech Innovators",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
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

interface PartnerLogoProps {
  name: string;
  logoUrl: string;
}

const PartnerLogo = ({
  name = "Partner Company",
  logoUrl = "https://api.dicebear.com/7.x/identicon/svg?seed=partner",
}: PartnerLogoProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="h-20 w-40 bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center border border-slate-200/10 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500/20 group-hover:bg-white/20 dark:group-hover:bg-slate-800/50">
        <img src={logoUrl} alt={name} className="max-h-14 max-w-full" />
      </div>
      <p className="mt-2 text-xs text-center text-muted-foreground">{name}</p>
    </div>
  );
};

interface SocialProofSectionProps {
  testimonials?: TestimonialProps[];
  partners?: PartnerLogoProps[];
}

const SocialProofSection = ({
  testimonials = [
    {
      quote:
        "Adventurize has completely transformed how we think about advertising. Our engagement rates have skyrocketed!",
      author: "Jane Smith",
      company: "Tech Innovators",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      rating: 5,
    },
    {
      quote:
        "We've seen a 300% increase in customer engagement since implementing Adventurize's approach to advertising.",
      author: "Michael Johnson",
      company: "Global Retail",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
    },
    {
      quote:
        "Our customers actually look forward to our ads now. That's something I never thought I'd say!",
      author: "Sarah Williams",
      company: "Consumer Brands",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 4,
    },
  ],
  partners = [
    {
      name: "TechCorp",
      logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=techcorp",
    },
    {
      name: "Innovate Inc",
      logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=innovate",
    },
    {
      name: "Future Brands",
      logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=future",
    },
    {
      name: "Global Media",
      logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=global",
    },
    {
      name: "Next Level",
      logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=next",
    },
  ],
}: SocialProofSectionProps) => {
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
            Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Trusted by Innovators
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Join the companies that are already transforming their advertising
            approach with Adventurize.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-center">
            What Our Partners Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20 py-12 px-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                300%
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Average Engagement Increase
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50+
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Enterprise Clients
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                10M+
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Monthly Active Users
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">
            Our Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
