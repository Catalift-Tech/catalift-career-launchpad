
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const steps = [
  {
    number: '1',
    title: 'Connect',
    description: 'Create your profile and get matched with experienced "Melvins" (mentors) who align with your career goals',
    icon: '👋',
  },
  {
    number: '2',
    title: 'Learn',
    description: 'Schedule 1-on-1 sessions, join cohorts, and participate in live webinars with industry experts',
    icon: '🚀',
  },
  {
    number: '3',
    title: 'Grow',
    description: 'Build real-world projects, develop in-demand skills, and get guidance for internships and placements',
    icon: '💪',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-4">How Catalift Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A simple process designed to help you excel in your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-blue-50 p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center text-4xl bg-white rounded-full shadow-md mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#03045E] mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-3">
                    {index === 0 && (
                      <>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">Personalized mentor matching</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">Profile building assistance</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">Live webinars with industry experts</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">Skill-building cohort programs</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">Portfolio-worthy projects</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">Internship & placement support</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
