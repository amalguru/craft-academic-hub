
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-eduBlue-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Academic Services</h1>
            <p className="text-xl opacity-90">
              Professional assistance for all your academic needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Research Papers',
                description: 'Well-researched academic papers with proper formatting and citations.',
                features: [
                  'Original research',
                  'Literature reviews',
                  'Proper citations (APA, MLA, etc.)',
                  'Plagiarism-free content',
                  'Expert academic writers'
                ],
                icon: '📑'
              },
              {
                title: 'Technical Projects',
                description: 'Engineering, IT and technical project implementation with documentation.',
                features: [
                  'Software development',
                  'Circuit design',
                  'CAD modeling',
                  'Simulation projects',
                  'Technical documentation'
                ],
                icon: '🔧'
              },
              {
                title: 'Assignments & Essays',
                description: 'High-quality essays and assignments across all academic disciplines.',
                features: [
                  'Critical analysis',
                  'Argumentative essays',
                  'Case studies',
                  'Reflective writing',
                  'Custom formatting'
                ],
                icon: '📝'
              },
              {
                title: 'Presentations',
                description: 'Professional PowerPoint presentations with speaking notes.',
                features: [
                  'Visually appealing slides',
                  'Speaking notes',
                  'Research-backed content',
                  'Engaging graphics',
                  'Professional animations'
                ],
                icon: '📊'
              },
              {
                title: 'Thesis & Dissertations',
                description: 'Comprehensive support for graduate and post-graduate research.',
                features: [
                  'Thesis proposal development',
                  'Methodology guidance',
                  'Data analysis support',
                  'Chapter drafting assistance',
                  'Editing and proofreading'
                ],
                icon: '🎓'
              },
              {
                title: 'Programming & Coding',
                description: 'Custom coding solutions for computer science students.',
                features: [
                  'Algorithm development',
                  'Web applications',
                  'Mobile apps',
                  'Database projects',
                  'Code documentation'
                ],
                icon: '💻'
              }
            ].map((service, index) => (
              <div key={index} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={16} className="text-eduGreen-600 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/order">
                    <Button className="w-full bg-eduBlue-600 hover:bg-eduBlue-700">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600">
              Our streamlined process ensures you get high-quality work delivered on time
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-gray-300">
              {[
                {
                  title: 'Submit your requirements',
                  description: 'Fill out our detailed order form specifying your project requirements, deadline, and academic level.'
                },
                {
                  title: 'Get matched with an expert',
                  description: 'Our system matches your project with the most qualified academic professional in that field.'
                },
                {
                  title: 'Review and approve',
                  description: "The expert will draft a project plan that you'll need to review and approve before work begins."
                },
                {
                  title: 'Track progress',
                  description: "Monitor your project's progress and communicate directly with your expert through our platform."
                },
                {
                  title: 'Receive and review',
                  description: "Once completed, you'll receive your project for review. Request revisions if needed."
                },
                {
                  title: 'Release payment',
                  description: "When you're satisfied with the work, release the payment to complete the transaction."
                }
              ].map((step, index) => (
                <li key={index} className="ml-6 mb-10 last:mb-0">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-eduBlue-600 text-white text-xs">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-600">
              Our pricing varies based on project type, academic level, and deadline. Get an instant quote with our calculator.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg bg-white p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Undergraduate</h3>
                <p className="text-gray-600 mb-4">For college assignments</p>
                <p className="text-3xl font-bold">Starting at ₹1,500</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Essays & Assignments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Basic Research Papers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Presentations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Simple Technical Projects</span>
                </li>
              </ul>
              <Link to="/order">
                <Button className="w-full bg-eduBlue-600 hover:bg-eduBlue-700">
                  Get Quote
                </Button>
              </Link>
            </div>
            
            <div className="border rounded-lg bg-white p-6 shadow-md relative">
              <div className="absolute top-0 right-0 bg-eduGreen-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Graduate</h3>
                <p className="text-gray-600 mb-4">For master's level work</p>
                <p className="text-3xl font-bold">Starting at ₹2,500</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Advanced Research Papers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Technical Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Complex Programming</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Literature Reviews</span>
                </li>
              </ul>
              <Link to="/order">
                <Button className="w-full bg-eduGreen-600 hover:bg-eduGreen-700">
                  Get Quote
                </Button>
              </Link>
            </div>
            
            <div className="border rounded-lg bg-white p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">PhD & Research</h3>
                <p className="text-gray-600 mb-4">For doctoral level work</p>
                <p className="text-3xl font-bold">Starting at ₹4,000</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Dissertation Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Statistical Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Publication-Ready Papers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-eduGreen-600" />
                  <span>Advanced Research Methods</span>
                </li>
              </ul>
              <Link to="/order">
                <Button className="w-full bg-eduBlue-600 hover:bg-eduBlue-700">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-eduBlue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Excel in Your Academics?</h2>
            <p className="text-xl mb-8">
              Get started with EduCraft Projects today and experience the difference our expert assistance can make.
            </p>
            <Link to="/order">
              <Button size="lg" className="bg-white text-eduBlue-600 hover:bg-gray-100">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
