"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X, LogIn } from "lucide-react";
import { CompassIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = true }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#email-signup" },
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
            <a href="#" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
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
                variant="ghost"
                size="sm"
                className={cn(
                  "flex items-center gap-1",
                  isScrolled || !transparent
                    ? "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    : "text-slate-200 hover:text-white hover:bg-white/10",
                )}
              >
                <LogIn size={16} />
                <span>Log in</span>
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium hover:scale-105 transition-all duration-200 shadow-md"
                size="sm"
              >
                Get Started
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
              variant="outline"
              className="w-full mt-2 flex items-center justify-center gap-2 border-slate-300 dark:border-slate-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn size={16} />
              <span>Log in</span>
            </Button>
            <Button
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
