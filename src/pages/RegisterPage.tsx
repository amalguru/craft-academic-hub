
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Briefcase, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/utils/authService';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [userType, setUserType] = useState('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    try {
      // Here we would register the user with MongoDB
      const result = await registerUser({
        name,
        email,
        password,
        mobileNumber,
        userType: userType as 'client' | 'provider',
      });
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Registration successful. Please login.",
        });
        navigate('/login');
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Registration failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md">
        <Tabs defaultValue="client" onValueChange={setUserType} className="w-full">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="client" className="flex items-center gap-2">
              <User size={16} />
              <span>Student</span>
            </TabsTrigger>
            <TabsTrigger value="provider" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>Expert</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="client">
            <Card>
              <CardHeader>
                <CardTitle>Create Student Account</CardTitle>
                <CardDescription>
                  Sign up to get academic project help from expert professionals
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-name">Full Name</Label>
                    <Input 
                      id="client-name"
                      type="text" 
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-email">Email</Label>
                    <Input 
                      id="client-email"
                      type="email" 
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-mobile">Mobile Number</Label>
                    <Input 
                      id="client-mobile"
                      type="tel" 
                      placeholder="Your mobile number"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-password">Password</Label>
                    <Input 
                      id="client-password" 
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-confirm-password">Confirm Password</Label>
                    <Input 
                      id="client-confirm-password" 
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="client-terms" 
                      checked={agreeToTerms}
                      onCheckedChange={() => setAgreeToTerms(!agreeToTerms)}
                    />
                    <Label htmlFor="client-terms" className="text-sm">
                      I agree to the{' '}
                      <Link to="/terms" className="text-eduBlue-600 hover:text-eduBlue-700">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-eduBlue-600 hover:text-eduBlue-700">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-eduBlue-600 hover:bg-eduBlue-700"
                    disabled={isLoading || !agreeToTerms}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-eduBlue-600 hover:text-eduBlue-700 font-medium">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="provider">
            <Card>
              <CardHeader>
                <CardTitle>Join as an Academic Expert</CardTitle>
                <CardDescription>
                  Apply to become a service provider and earn by helping students excel
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="provider-name">Full Name</Label>
                    <Input 
                      id="provider-name"
                      type="text" 
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider-email">Email</Label>
                    <Input 
                      id="provider-email"
                      type="email" 
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider-mobile">Mobile Number</Label>
                    <Input 
                      id="provider-mobile"
                      type="tel" 
                      placeholder="Your mobile number"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider-password">Password</Label>
                    <Input 
                      id="provider-password" 
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider-confirm-password">Confirm Password</Label>
                    <Input 
                      id="provider-confirm-password" 
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="provider-terms" 
                      checked={agreeToTerms}
                      onCheckedChange={() => setAgreeToTerms(!agreeToTerms)}
                    />
                    <Label htmlFor="provider-terms" className="text-sm">
                      I agree to the{' '}
                      <Link to="/terms" className="text-eduBlue-600 hover:text-eduBlue-700">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-eduBlue-600 hover:text-eduBlue-700">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-eduBlue-600 hover:bg-eduBlue-700"
                    disabled={isLoading || !agreeToTerms}
                  >
                    {isLoading ? 'Submitting Application...' : 'Apply Now'}
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-eduBlue-600 hover:text-eduBlue-700 font-medium">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RegisterPage;
