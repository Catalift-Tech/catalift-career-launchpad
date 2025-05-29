
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#03045E] mb-6">
              Get your dream placements,
              <span className="text-blue-500 block md:inline"> and internships</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Connect with experienced alumni mentors who can help you navigate your career, by upskilling yourself, and achieving your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[#03045E] hover:bg-blue-800 text-white">
                <Link to="/sign-up" className="flex items-center">
                  Get Matched With a Mentor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/coming-soon">Download the App</Link>
              </Button>
            </div>
            <div className="mt-8 text-gray-600 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">S</div>
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">A</div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">R</div>
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">P</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">+</div>
              </div>
              <p className="text-sm">Joined by <span className="font-bold">2,500+</span>  students across India</p>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 opacity-10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#03045E] opacity-10 rounded-full"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-1">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    alt="Engineering students with mentor"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                      alt="Mentor profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-[#03045E]">Ravi Patel</h3>
                      <p className="text-xs text-gray-600">SDE II at Google, IIT Delhi Alum</p>
                    </div>
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

export default Hero;
