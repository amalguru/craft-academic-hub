
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, FileText, Calendar, Calculator, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const OrderPage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    serviceType: '',
    subjectArea: '',
    academicLevel: '',
    deadline: '',
    pageCount: 1,
    description: '',
    requirements: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    field: string,
    value: string | number
  ) => {
    setOrderData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Order submitted successfully!",
        description: "We'll match you with the perfect expert soon.",
      });
    }, 1500);
  };

  const calculatePrice = () => {
    // Very simplified price calculation logic
    const basePrice = {
      'undergraduate': 1500,
      'graduate': 2500,
      'phd': 4000
    }[orderData.academicLevel as keyof typeof basePrice] || 1500;
    
    const pagePrice = basePrice * (orderData.pageCount);
    
    // Urgency factor based on deadline
    const urgencyFactor = {
      'urgent': 1.5,
      'standard': 1.2,
      'relaxed': 1
    }[
      !orderData.deadline ? 'relaxed' :
      (new Date(orderData.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) < 3 ? 'urgent' :
      (new Date(orderData.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) < 7 ? 'standard' : 'relaxed'
    ];
    
    return Math.round(pagePrice * urgencyFactor);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Start Your Academic Project</h1>
            <p className="text-gray-600">
              Fill out the form below to get matched with the perfect academic professional
            </p>
          </div>
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[
                'Project Details',
                'Requirements',
                'Your Information'
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      currentStep > index + 1 ? 'bg-eduGreen-600 text-white' :
                      currentStep === index + 1 ? 'bg-eduBlue-600 text-white' :
                      'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > index + 1 ? <Check size={18} /> : index + 1}
                  </div>
                  <span 
                    className={`text-sm ${
                      currentStep >= index + 1 ? 'text-gray-800' : 'text-gray-400'
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-2 mt-4 rounded-full">
              <div 
                className="bg-eduBlue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep - 1) * 50}%` }}
              ></div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Project Details"}
                {currentStep === 2 && "Project Requirements"}
                {currentStep === 3 && "Your Information"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Tell us about the academic project you need help with"}
                {currentStep === 2 && "Provide detailed requirements to help us match you with the right expert"}
                {currentStep === 3 && "Enter your contact information to complete your order"}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Details */}
              {currentStep === 1 && (
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Type of Service</Label>
                    <Select 
                      onValueChange={(value) => handleChange('serviceType', value)}
                      value={orderData.serviceType}
                      required
                    >
                      <SelectTrigger id="serviceType">
                        <SelectValue placeholder="Select type of service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="essay">Essay/Assignment</SelectItem>
                        <SelectItem value="research">Research Paper</SelectItem>
                        <SelectItem value="technical">Technical Project</SelectItem>
                        <SelectItem value="presentation">Presentation</SelectItem>
                        <SelectItem value="thesis">Thesis/Dissertation</SelectItem>
                        <SelectItem value="programming">Programming/Coding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subjectArea">Subject Area</Label>
                    <Select 
                      onValueChange={(value) => handleChange('subjectArea', value)}
                      value={orderData.subjectArea}
                      required
                    >
                      <SelectTrigger id="subjectArea">
                        <SelectValue placeholder="Select subject area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computerScience">Computer Science</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="business">Business & Management</SelectItem>
                        <SelectItem value="medical">Medical & Life Sciences</SelectItem>
                        <SelectItem value="arts">Arts & Humanities</SelectItem>
                        <SelectItem value="law">Law</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="academicLevel">Academic Level</Label>
                    <Select 
                      onValueChange={(value) => handleChange('academicLevel', value)}
                      value={orderData.academicLevel}
                      required
                    >
                      <SelectTrigger id="academicLevel">
                        <SelectValue placeholder="Select academic level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="graduate">Graduate/Master's</SelectItem>
                        <SelectItem value="phd">PhD/Doctoral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <Input
                          id="deadline"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={orderData.deadline}
                          onChange={(e) => handleChange('deadline', e.target.value)}
                          required
                          className="flex-1"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pageCount">Number of Pages</Label>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-gray-500" />
                        <Input
                          id="pageCount"
                          type="number"
                          min={1}
                          value={orderData.pageCount}
                          onChange={(e) => handleChange('pageCount', parseInt(e.target.value))}
                          required
                          className="flex-1"
                        />
                      </div>
                      <p className="text-xs text-gray-500">1 page ≈ 275 words</p>
                    </div>
                  </div>
                </CardContent>
              )}
              
              {/* Step 2: Project Requirements */}
              {currentStep === 2 && (
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project in detail..."
                      value={orderData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      required
                      rows={5}
                    />
                    <p className="text-xs text-gray-500">
                      Include the main topic, research questions, or objectives of your project
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Specific Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Any specific instructions or format requirements..."
                      value={orderData.requirements}
                      onChange={(e) => handleChange('requirements', e.target.value)}
                      rows={5}
                    />
                    <p className="text-xs text-gray-500">
                      Format guidelines (APA, MLA, etc.), required sources, or any specific instructions
                    </p>
                  </div>
                  
                  {/* Price Estimate */}
                  <Card className="bg-gray-50 border-dashed">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calculator className="w-5 h-5 mr-2 text-eduBlue-600" />
                          <span className="font-medium">Price Estimate</span>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-eduGreen-600">₹{calculatePrice()}</span>
                          <p className="text-xs text-gray-500">Final price may vary based on specific requirements</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              )}
              
              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={orderData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={orderData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      value={orderData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                  
                  {/* Order Summary */}
                  <Card className="bg-gray-50 border-dashed">
                    <CardHeader>
                      <CardTitle className="text-base">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Type:</span>
                        <span className="font-medium">{orderData.serviceType || '-'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subject Area:</span>
                        <span className="font-medium">{orderData.subjectArea || '-'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Academic Level:</span>
                        <span className="font-medium">{orderData.academicLevel || '-'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pages:</span>
                        <span className="font-medium">{orderData.pageCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deadline:</span>
                        <span className="font-medium">{orderData.deadline || '-'}</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                        <span className="font-medium">Total Price:</span>
                        <span className="font-bold text-eduGreen-600">₹{calculatePrice()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              )}
              
              <CardFooter className="flex justify-between">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Back
                  </Button>
                )}
                {currentStep < 3 && (
                  <Button
                    type="button"
                    className="bg-eduBlue-600 hover:bg-eduBlue-700 ml-auto"
                    onClick={() => setCurrentStep(currentStep + 1)}
                  >
                    Continue <ArrowRight size={16} className="ml-1" />
                  </Button>
                )}
                {currentStep === 3 && (
                  <Button
                    type="submit"
                    className="bg-eduGreen-600 hover:bg-eduGreen-700 ml-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Place Order"} <ArrowRight size={16} className="ml-1" />
                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
