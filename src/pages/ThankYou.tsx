
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Mail } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50/50 px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/f9f78053-63ce-481b-b0ae-b570b13ad6c9.png" 
            alt="Catalift Logo" 
            className="h-24 w-auto" 
          />
        </Link>
        
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-[#03045E]">Thank You for Signing Up!</CardTitle>
            <CardDescription>
              Welcome to Catalift! We're excited to have you join our community of engineering students and mentors.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-blue-800 mb-1">Check Your Email</p>
                  <p className="text-blue-700">
                    We've sent you a confirmation email. Please check your inbox and click the confirmation link to activate your account.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-600 space-y-2">
              <p><strong>What's next?</strong></p>
              <ul className="text-left space-y-1">
                <li>• Confirm your email address</li>
                <li>• Complete your profile</li>
                <li>• Get matched with mentors</li>
                <li>• Start your engineering journey!</li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full bg-[#03045E] hover:bg-blue-800">
                <Link to="/" className="flex items-center justify-center gap-2">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/sign-in">
                  Already confirmed? Sign In
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
