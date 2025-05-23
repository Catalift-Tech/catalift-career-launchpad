
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f9f78053-63ce-481b-b0ae-b570b13ad6c9.png" 
              alt="Catalift Logo" 
              className="h-12 w-auto" 
            />
          </Link>
          <Button asChild variant="ghost">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#03045E] mb-6">Welcome to Catalift</h1>
        <p className="text-gray-600 mb-8">
          This is a placeholder dashboard. In a real application, this would display personalized 
          content based on the user's profile, available mentors, upcoming events, etc.
        </p>
        
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-4">
            Complete your profile to get matched with the best mentors for your engineering journey.
          </p>
          <Button className="bg-[#03045E] hover:bg-blue-800">Complete Your Profile</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Available Mentors</h2>
            <p className="text-gray-600">
              You'll see personalized mentor recommendations here once your profile is complete.
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Webinars</h2>
            <p className="text-gray-600">
              Stay tuned for upcoming webinars and learning opportunities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
