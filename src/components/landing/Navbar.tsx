"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X, Download, Building2, User } from "lucide-react";
import { CompassIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = true }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isForBrandsPage = pathname === "/for-brands";
  const oppositePageLink = isForBrandsPage ? "/" : "/for-brands";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#testimonials" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !transparent
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href={isForBrandsPage ? "/" : "#"} className="flex items-center">
              <div className="h-8 w-8 text-white rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
                <CompassIcon />
              </div>
              <span
                className={cn(
                  "font-bold text-xl",
                  isScrolled || !transparent
                    ? "text-slate-900 dark:text-white"
                    : "text-white",
                )}
              >
                Adventurize
              </span>
            </a>
            
            {/* Audience Toggle */}
            <div className="ml-4 hidden sm:flex items-center">
              <div className={cn(
                "flex items-center rounded-lg overflow-hidden border",
                isScrolled || !transparent
                  ? "border-slate-200 dark:border-slate-700"
                  : "border-white/20"
              )}>
                <a 
                  href="/" 
                  className={cn(
                    "flex items-center px-3 py-1.5 text-sm font-medium transition-colors",
                    !isForBrandsPage 
                      ? "bg-blue-600 text-white" 
                      : isScrolled || !transparent
                        ? "text-slate-700 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" 
                        : "text-white hover:bg-white/10"
                  )}
                >
                  <User className="h-3.5 w-3.5 mr-1.5" />
                  <span>For You</span>
                </a>
                <a 
                  href="/for-brands" 
                  className={cn(
                    "flex items-center px-3 py-1.5 text-sm font-medium transition-colors",
                    isForBrandsPage 
                      ? "bg-blue-600 text-white" 
                      : isScrolled || !transparent
                        ? "text-slate-700 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" 
                        : "text-white hover:bg-white/10"
                  )}
                >
                  <Building2 className="h-3.5 w-3.5 mr-1.5" />
                  <span>For Brands</span>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isScrolled || !transparent
                        ? "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                        : "text-slate-200 hover:text-white hover:bg-white/10",
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-4 flex items-center space-x-2">
              <ThemeSwitcher />
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium hover:scale-105 transition-all duration-200 shadow-md"
                size="sm"
              >
                <Download size={16} className="mr-1" />
                Join Waitlist
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                isScrolled || !transparent
                  ? "text-slate-900 dark:text-white"
                  : "text-white",
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Audience Toggle */}
            <div className="flex rounded-md overflow-hidden border border-slate-200 dark:border-slate-700 mb-2">
              <a 
                href="/" 
                className={cn(
                  "flex-1 flex justify-center items-center px-3 py-2 text-sm font-medium",
                  !isForBrandsPage 
                    ? "bg-blue-600 text-white" 
                    : "text-slate-700 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-1.5" />
                <span>For You</span>
              </a>
              <a 
                href="/for-brands" 
                className={cn(
                  "flex-1 flex justify-center items-center px-3 py-2 text-sm font-medium",
                  isForBrandsPage 
                    ? "bg-blue-600 text-white" 
                    : "text-slate-700 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Building2 className="h-4 w-4 mr-1.5" />
                <span>For Brands</span>
              </a>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={16} className="mr-1" />
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
