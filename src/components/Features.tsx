
import React from 'react';
import {
  Users,
  Award,
  Book,
  Video,
  Briefcase,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "1-on-1 Mentorship",
    description: "Get personalized guidance from experienced alumni who've walked your path and succeeded"
  },
  {
    icon: <Book className="h-8 w-8 text-blue-500" />,
    title: "Skill-Building Cohorts",
    description: "Join structured learning cohorts taught by industry experts with guaranteed internship interviews"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-500" />,
    title: "Real-World Projects",
    description: "Build portfolio-worthy projects that showcase your skills to potential employers"
  },
  {
    icon: <Video className="h-8 w-8 text-blue-500" />,
    title: "Expert Webinars",
    description: "Attend live sessions with engineers from top companies like Google, Amazon, and Microsoft"
  },
  {
    icon: <Award className="h-8 w-8 text-blue-500" />,
    title: "Career Guidance",
    description: "Get expert advice for internships, placements, higher studies, and research opportunities"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
    title: "Community Support",
    description: "Join a supportive community of peers and mentors who understand your challenges"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-4">How We Support Your Journey</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive support at every stage of your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#03045E] mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
