
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Home } from "lucide-react";

const EmailConfirmation = () => {
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
              <Mail className="h-16 w-16 text-blue-600" />
            </div>
            <CardTitle className="text-2xl text-[#03045E]">Check Your Email</CardTitle>
            <CardDescription>
              We've sent you a confirmation email. Please check your inbox and click the confirmation link to activate your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-sm text-gray-600">
              <p>Didn't receive the email? Check your spam folder or try signing up again.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild variant="outline" className="w-full">
                <Link to="/sign-up">
                  Try Signing Up Again
                </Link>
              </Button>
              <Button asChild className="w-full bg-[#03045E] hover:bg-blue-800">
                <Link to="/" className="flex items-center justify-center gap-2">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailConfirmation;
