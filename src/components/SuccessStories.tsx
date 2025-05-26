
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const successStories = [
  {
    name: "Aditya Singh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    college: "NIT Trichy, 2022",
    achievement: "Software Engineer @ Google",
    story: "With Catalift's mentorship and MAANG interview prep cohort, I landed my dream job at Google. My mentor guided me through the entire process.",
    mentor: "Rahul Sharma, Ex-Google"
  },
  {
    name: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    college: "BITS Pilani, 2023",
    achievement: "MS in CS @ Stanford University",
    story: "Catalift helped me build projects that strengthened my application and prepared me for grad school interviews. Forever grateful!",
    mentor: "Priya Joshi, Stanford Alum"
  },
  {
    name: "Vikram Patel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    college: "IIT Roorkee, 2021",
    achievement: "Founding Engineer @ Funded Startup",
    story: "My mentor helped me navigate the risks of joining an early-stage startup. Now our company has raised $5M in funding!",
    mentor: "Arjun Reddy, Serial Entrepreneur"
  }
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-4">Success Stories</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See how Catalift has helped engineering students achieve their dreams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#03045E]">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.college}</p>
                  </div>
                </div>
                
                <Badge className="mb-4 bg-blue-100 text-[#03045E] hover:bg-blue-200 w-fit">
                  {story.achievement}
                </Badge>
                
                <p className="text-gray-700 mb-6 flex-grow">"{story.story}"</p>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Mentored by:</span> {story.mentor}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="flex space-x-1">
                  <div className="w-6 h-16 bg-green-500 rounded-full"></div>
                  <div className="w-6 h-24 bg-blue-500 rounded-full"></div>
                  <div className="w-6 h-20 bg-secondary-amber rounded-full"></div>
                  <div className="w-6 h-28 bg-[#03045E] rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#03045E] mb-2">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-[#03045E]">500+</p>
                    <p className="text-gray-600 text-sm">Students Placed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#03045E]">50+</p>
                    <p className="text-gray-600 text-sm">MAANG Offers</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#03045E]">200+</p>
                    <p className="text-gray-600 text-sm">MS Admits</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#03045E]">300+</p>
                    <p className="text-gray-600 text-sm">Active Mentors</p>
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

export default SuccessStories;
