
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const allCohorts = [
  {
    title: "Advancing in AI/ML",
    description: "Master machine learning algorithms, neural networks, and AI applications in real-world projects",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "July 1, 2025",
    spots: "25 spots available",
    category: "Technology",
    level: "Intermediate",
    tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "DSA with Python",
    description: "Build strong problem-solving skills with data structures and algorithms using Python",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "June 20, 2025",
    spots: "30 spots available",
    category: "Programming",
    level: "Beginner to Intermediate",
    tags: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Robotics (Drone Technologies)",
    description: "Explore autonomous systems, drone programming, and robotics engineering fundamentals",
    duration: "1.5 months",
    dailyTime: "60 minutes",
    startDate: "July 15, 2025",
    spots: "20 spots available",
    category: "Engineering",
    level: "Intermediate",
    tags: ["Robotics", "Drones", "Arduino", "Autonomous Systems"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Entrepreneurship and Innovation",
    description: "Learn to identify opportunities, validate ideas, and build scalable business models",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "June 25, 2025",
    spots: "35 spots available",
    category: "Business",
    level: "Beginner",
    tags: ["Startup", "Business Model", "Innovation", "Leadership"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Full Stack Development",
    description: "Build modern web applications with React, Node.js, and database integration",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "June 15, 2025",
    spots: "Limited spots",
    category: "Technology",
    level: "Intermediate",
    tags: ["React", "Node.js", "MongoDB", "Full Stack"],
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, content strategy, and digital advertising",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "July 5, 2025",
    spots: "40 spots available",
    category: "Marketing",
    level: "Beginner",
    tags: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Graphic Designing",
    description: "Create stunning visuals using Adobe Creative Suite and design principles",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "June 30, 2025",
    spots: "25 spots available",
    category: "Design",
    level: "Beginner",
    tags: ["Photoshop", "Illustrator", "Design Theory", "Branding"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Business Development and Sales",
    description: "Learn sales strategies, client relationship management, and business growth tactics",
    duration: "2 months",
    dailyTime: "60 minutes",
    startDate: "July 8, 2025",
    spots: "30 spots available",
    category: "Business",
    level: "Beginner to Intermediate",
    tags: ["Sales", "Business Development", "CRM", "Negotiation"],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Marketing Management",
    description: "Develop comprehensive marketing strategies and campaign management skills",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "July 12, 2025",
    spots: "35 spots available",
    category: "Marketing",
    level: "Intermediate",
    tags: ["Marketing Strategy", "Campaign Management", "Analytics", "Brand Management"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Financial Marketing",
    description: "Understand financial markets, investment strategies, and wealth management",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "July 18, 2025",
    spots: "20 spots available",
    category: "Finance",
    level: "Intermediate",
    tags: ["Financial Markets", "Investment", "Portfolio Management", "Risk Analysis"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Income Tax For Beginners",
    description: "Learn tax planning, filing procedures, and financial compliance fundamentals",
    duration: "2 months",
    dailyTime: "60-120 minutes",
    startDate: "July 22, 2025",
    spots: "25 spots available",
    category: "Finance",
    level: "Beginner",
    tags: ["Tax Planning", "Compliance", "Financial Planning", "Legal Framework"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
];

const categories = ["All", "Technology", "Business", "Marketing", "Design", "Finance", "Programming", "Engineering"];

const CohortsList = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCohorts = selectedCategory === "All" 
    ? allCohorts 
    : allCohorts.filter(cohort => cohort.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#03045E] to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              All Available Cohorts
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Join our expert-led cohorts and accelerate your career with hands-on learning
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>11 Active Cohorts</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Flexible Timing</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Starting Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-[#03045E] hover:bg-blue-800" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cohorts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCohorts.map((cohort, index) => (
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
                    <Badge variant="outline" className="bg-blue-50 text-[#03045E] border-blue-200 mb-2">
                      {cohort.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {cohort.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#03045E] mb-3">{cohort.title}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">{cohort.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cohort.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-100 text-[#03045E] hover:bg-blue-200 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{cohort.duration} • {cohort.dailyTime}/day</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Starts: {cohort.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{cohort.spots}</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-[#03045E] hover:bg-blue-800 mt-auto"
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CohortsList;
