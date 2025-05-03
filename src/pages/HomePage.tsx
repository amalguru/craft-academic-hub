
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Users, MessageSquare, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eduBlue-500 to-eduGreen-500 text-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Academic Excellence Made Simple
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
                Connect with expert academic professionals for all your project needs. Quality work, on-time delivery, guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/order">
                  <Button size="lg" className="bg-white text-eduBlue-600 hover:bg-gray-100">
                    Start Project Now
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Services
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>100% Plagiarism Free</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>On-time Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>Expert Assistance</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
                alt="Students working together" 
                className="rounded-lg shadow-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How EduCraft Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple three-step process to connect you with the perfect academic professional for your project needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-eduBlue-100 text-eduBlue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Submit Your Request</h3>
              <p className="text-gray-600">
                Fill out our detailed order form with your project requirements, deadline, and subject area.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-eduGreen-100 text-eduGreen-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Get Matched</h3>
              <p className="text-gray-600">
                We match you with the best academic professional based on your project requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-eduBlue-100 text-eduBlue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Collaborate & Deliver</h3>
              <p className="text-gray-600">
                Work directly with your expert through our platform until your project is completed to perfection.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/order">
              <Button className="bg-eduBlue-600 hover:bg-eduBlue-700">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Academic Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of academic services to support students at all levels of education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Research Papers',
                description: 'Well-researched academic papers with proper citations and formatting',
                icon: '📑'
              },
              {
                title: 'Technical Projects',
                description: 'Engineering, IT and technical project implementation and documentation',
                icon: '🔧'
              },
              {
                title: 'Assignments & Essays',
                description: 'High-quality essays and assignments across all academic disciplines',
                icon: '📝'
              },
              {
                title: 'Presentations',
                description: 'Professional PowerPoint presentations with speaking notes',
                icon: '📊'
              },
              {
                title: 'Thesis & Dissertations',
                description: 'Comprehensive support for graduate and post-graduate research work',
                icon: '🎓'
              },
              {
                title: 'Literature Reviews',
                description: 'In-depth analysis and summary of existing research',
                icon: '📚'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className="text-eduBlue-600 hover:text-eduBlue-800 font-medium flex items-center">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="border-eduBlue-600 text-eduBlue-600 hover:bg-eduBlue-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what students have to say about their experience with EduCraft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "My research paper was delivered on time and exceeded my expectations. The writer was very knowledgeable in the subject area.",
                author: "Priya S.",
                role: "Engineering Student, Mumbai"
              },
              {
                quote: "I was struggling with my dissertation until I found EduCraft. The guidance and support I received was invaluable to my success.",
                author: "Rahul K.",
                role: "PhD Candidate, Delhi"
              },
              {
                quote: "The quality of work and attention to detail was impressive. My professor was impressed with my project and I got an excellent grade.",
                author: "Ananya P.",
                role: "MBA Student, Bangalore"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-eduBlue-600 text-4xl mb-4">"</div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-eduBlue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Academic Journey?</h2>
            <p className="text-xl mb-8">
              Join thousands of students across India who are achieving academic success with EduCraft Projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/order">
                <Button size="lg" className="bg-white text-eduBlue-600 hover:bg-gray-100">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
