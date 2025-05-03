
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-eduBlue-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduCraft Projects</h1>
            <p className="text-xl opacity-90">
              Connecting students with expert academic project professionals across India
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                EduCraft Projects was founded in 2020 by a team of academic professionals who recognized the challenges faced by students in completing complex academic projects while managing their other responsibilities.
              </p>
              <p className="mb-4">
                What started as a small team of experts has now grown into a nationwide network of academic professionals specializing in various fields including engineering, business, arts, sciences, and more.
              </p>
              <p className="mb-4">
                Our mission is to empower students by connecting them with experts who can help them achieve academic excellence, while ensuring that they understand the concepts behind their projects.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=600&q=80" 
                alt="Students working together" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Integrity',
                description: 'We maintain the highest standards of academic integrity in all our work, ensuring that we provide guidance rather than promoting shortcuts.'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every project we undertake, providing high-quality work that exceeds expectations.'
              },
              {
                title: 'Student Growth',
                description: 'We believe in helping students grow by providing them with resources, guidance, and support to help them understand their subjects better.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Rajesh Verma',
                position: 'Founder & CEO',
                bio: 'Dr. Verma has over 15 years of experience in academia and holds a PhD in Computer Science from IIT Delhi.'
              },
              {
                name: 'Prof. Sunita Patel',
                position: 'Chief Academic Officer',
                bio: 'Prof. Patel leads our academic quality assurance team, bringing 12 years of experience in educational assessment.'
              },
              {
                name: 'Vikram Mehta',
                position: 'Head of Operations',
                bio: 'Vikram manages our nationwide network of experts and ensures smooth service delivery to all clients.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-600">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-eduBlue-600 mb-2">{member.position}</p>
                <p className="text-gray-600 max-w-sm mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-eduBlue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Academic Community</h2>
            <p className="text-xl mb-8">
              Whether you're a student looking for project assistance or an academic professional wanting to join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-eduBlue-600 hover:bg-gray-100">
                  Register as a Student
                </Button>
              </Link>
              <Link to="/register?type=provider">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Apply as an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
