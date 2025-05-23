
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Great! Let's continue your registration",
        description: "Redirecting you to complete your sign up...",
      });
      
      // Navigate to sign up page with the email prefilled
      navigate('/sign-up', { state: { email } });
    } else {
      toast({
        title: "Email required",
        description: "Please enter your email to continue.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <section id="get-started" className="py-20 bg-[#03045E] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Engineering Journey With Expert Guidance</h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of engineering students across India who are accelerating their careers with personalized mentorship and skill-building opportunities.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Get Early Access</h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-blue-400" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="bg-white text-[#03045E] hover:bg-blue-100 whitespace-nowrap">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button asChild className="bg-white text-[#03045E] hover:bg-blue-100 whitespace-nowrap">
                <Link to="/coming-soon" className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download App
                </Link>
              </Button>
              
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-[#03045E]" />
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-[#03045E]" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-[#03045E]" />
                </div>
                <span className="text-sm text-blue-100">Joined by 25,000+ students</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-1 rounded-2xl shadow-2xl">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Mentorship session" className="w-full h-auto" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Surya matched with a mentor!</h4>
                    <p className="text-sm text-gray-600">3 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
