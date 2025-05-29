
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <img
          src="/lovable-uploads/f9f78053-63ce-481b-b0ae-b570b13ad6c9.png"
          alt="Catalift Logo"
          className="h-40 w-auto mx-auto -my-4"
        />

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#03045E]">Coming Soon!</h1>
          <p className="text-lg text-gray-700">
            Our mobile app is currently under development and will be available soon.
            We're working hard to bring you the best experience possible!
          </p>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Get Notified When We Launch</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <Button className="bg-[#03045E] hover:bg-blue-800">
                Notify Me
              </Button>
            </div>
          </div>
        </div>

        <Button asChild variant="ghost" className="mt-8">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
