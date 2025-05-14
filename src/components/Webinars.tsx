
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Webinars = () => {
  return (
    <section id="webinars" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-4">Upcoming Webinars</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join live sessions with engineering leaders from top companies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-blue-50 to-white mb-16">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <Badge className="mb-4 bg-blue-100 text-[#03045E] hover:bg-blue-200 w-fit">
                    Featured Webinar
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#03045E] mb-3">System Design for MAANG Interviews</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>May 25, 2025 • 7:00 PM IST</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Learn how to approach system design interview questions at top tech companies with practical examples and strategies.
                  </p>
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                      alt="Amit Sharma" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-[#03045E]">Amit Sharma</h4>
                      <p className="text-sm text-gray-600">Senior Engineering Manager, Google</p>
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto bg-[#03045E] hover:bg-blue-800">
                    Register Now
                  </Button>
                </div>
                <div className="h-64 md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="System Design Webinar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#03045E] mb-3">Building Scalable Microservices</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 2, 2025 • 6:30 PM IST</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Practical guide to building and deploying microservices that can handle millions of users.
                </p>
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80" 
                    alt="Priya Mehta" 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-[#03045E]">Priya Mehta</h4>
                    <p className="text-sm text-gray-600">Tech Lead, Microsoft</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full hover:bg-blue-50">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#03045E] mb-3">ML Engineering Career Paths</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 15, 2025 • 7:00 PM IST</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Explore different career paths in machine learning and AI engineering, from research to production.
                </p>
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Rohit Kumar" 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-[#03045E]">Rohit Kumar</h4>
                    <p className="text-sm text-gray-600">ML Engineer, TikTok</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full hover:bg-blue-50">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#03045E] hover:bg-blue-800" size="lg">
              View All Webinars
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
