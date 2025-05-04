
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { sendContactEmail, initEmailService, EMAIL_CONFIG } from '@/utils/emailService';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailService(EMAIL_CONFIG.userId);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using our utility function
      await sendContactEmail(formData);

      // Show success toast
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-eduBlue-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              We're here to answer your questions and provide the support you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our services, pricing, or need assistance with an existing order, our team is ready to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-eduBlue-100 rounded-full p-3">
                    <Mail className="h-5 w-5 text-eduBlue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600 mb-1">For general inquiries</p>
                    <a href="mailto:amalanathang20@gmail.com" className="text-eduBlue-600 hover:text-eduBlue-700">
                      amalanathang20@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-eduBlue-100 rounded-full p-3">
                    <Phone className="h-5 w-5 text-eduBlue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600 mb-1">Mon-Fri, 9am-6pm IST</p>
                    <a href="tel:+919025775763" className="text-eduBlue-600 hover:text-eduBlue-700">
                      +91 902 577 5763
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-eduBlue-100 rounded-full p-3">
                    <MapPin className="h-5 w-5 text-eduBlue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600 mb-1">Registered Office</p>
                    <address className="not-italic text-gray-700">
                      123 Tech Park, Knowledge Road<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-eduBlue-100 rounded-full p-3">
                    <MessageSquare className="h-5 w-5 text-eduBlue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Live Chat</h3>
                    <p className="text-gray-600 mb-1">Get instant support</p>
                    <Button variant="outline" className="text-eduBlue-600 border-eduBlue-600 hover:bg-eduBlue-50">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full bg-eduBlue-600 hover:bg-eduBlue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What type of academic services do you provide?",
                  answer: "We provide a wide range of academic services including research papers, essays, technical projects, presentations, thesis and dissertation support, programming assignments, and more. Our experts cover all major disciplines and academic levels."
                },
                {
                  question: "How do you ensure the quality of work?",
                  answer: "All our academic experts go through a rigorous vetting process. We verify their qualifications, expertise, and work experience. Additionally, every project undergoes multiple quality checks and plagiarism scanning before delivery."
                },
                {
                  question: "How does pricing work?",
                  answer: "Our pricing is based on several factors including the type of project, academic level, deadline, and complexity. We provide transparent pricing and you'll receive a detailed quote before confirming your order."
                },
                {
                  question: "What if I'm not satisfied with the work?",
                  answer: "Customer satisfaction is our priority. If you're not completely satisfied, you can request revisions. We offer unlimited free revisions until you're happy with the final product."
                },
                {
                  question: "How do I pay for services?",
                  answer: "We accept various payment methods including credit/debit cards, UPI, bank transfers, and digital wallets. All payments are processed through secure payment gateways like Stripe or Razorpay."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div>
                        <AlertCircle className="h-6 w-6 text-eduBlue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for?
              </p>
              <Link to="/order">
                <Button className="bg-eduBlue-600 hover:bg-eduBlue-700">
                  Contact Customer Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
