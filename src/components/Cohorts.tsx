
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cohorts = [
  {
    title: "Full Stack Web Development",
    description: "Build modern web applications with React & Node.js",
    duration: "8 weeks",
    startDate: "June 15, 2025",
    slots: "Limited spots",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Master ML basics and build real-world AI projects",
    duration: "10 weeks",
    startDate: "July 1, 2025",
    slots: "Filling fast",
    tags: ["Python", "TensorFlow", "Data Science"],
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "MAANG Interview Prep",
    description: "Algorithms, system design, and mock interviews",
    duration: "12 weeks",
    startDate: "July 10, 2025",
    slots: "Almost full",
    tags: ["DSA", "System Design", "Behavioral"],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
];

const Cohorts = () => {
  return (
    <section id="cohorts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-4">Join a Skill-Building Cohort</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn in-demand technical skills in structured cohorts led by industry experts, with internship opportunities upon completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cohorts.map((cohort, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cohort.image} 
                  alt={cohort.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#03045E]">{cohort.title}</h3>
                  <Badge variant="outline" className="bg-blue-50 text-[#03045E] border-blue-200">
                    {cohort.slots}
                  </Badge>
                </div>
                <p className="text-gray-700 mb-4">{cohort.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cohort.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-100 text-[#03045E] hover:bg-blue-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-6 mt-auto">
                  <div className="flex justify-between">
                    <span>Duration: {cohort.duration}</span>
                    <span>Starts: {cohort.startDate}</span>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-[#03045E] hover:bg-blue-800"
                >
                  <a 
                    href="https://forms.gle/MpXw3UAs8Ucsfep89" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Cohort
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Cohorts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cohorts;
