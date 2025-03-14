"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface EmailCollectionFormProps {
  onSubmit?: (email: string) => Promise<void>;
  buttonText?: string;
  placeholderText?: string;
  className?: string;
}

const EmailCollectionForm = ({
  onSubmit = async () => {},
  buttonText = "Join Waitlist",
  placeholderText = "Enter your email",
  className = "",
}: EmailCollectionFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(email);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col sm:flex-row gap-4 items-center justify-center ${className}`}
    >
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholderText}
        className="flex-grow w-full sm:w-auto rounded-lg border-slate-700/30 focus-visible:ring-blue-500 focus-visible:border-blue-500 shadow-sm py-6 px-4 text-base bg-slate-800/50 backdrop-blur-sm"
        disabled={isSubmitting}
        required
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 px-8 py-6 text-base hover:scale-105 whitespace-nowrap"
      >
        {isSubmitting ? "Submitting..." : buttonText}
      </Button>
    </form>
  );
};

export default EmailCollectionForm;
