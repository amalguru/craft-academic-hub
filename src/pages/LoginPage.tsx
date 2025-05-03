
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Briefcase } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Here we would normally have authentication logic
    setTimeout(() => {
      setIsLoading(false);
      // Mock successful login
      if (userType === 'client') {
        navigate('/dashboard/client');
      } else {
        navigate('/dashboard/provider');
      }
    }, 1500);
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
                <CardTitle>Student Login</CardTitle>
                <CardDescription>
                  Sign in to your student account to manage your academic projects
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="client-password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-eduBlue-600 hover:text-eduBlue-700">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="client-password" 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-eduBlue-600 hover:bg-eduBlue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                  <div className="text-center text-sm">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-eduBlue-600 hover:text-eduBlue-700 font-medium">
                      Create an account
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="provider">
            <Card>
              <CardHeader>
                <CardTitle>Expert Login</CardTitle>
                <CardDescription>
                  Sign in to your expert account to manage your projects and earnings
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="provider-password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-eduBlue-600 hover:text-eduBlue-700">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="provider-password" 
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-eduBlue-600 hover:bg-eduBlue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                  <div className="text-center text-sm">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-eduBlue-600 hover:text-eduBlue-700 font-medium">
                      Apply as an expert
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

export default LoginPage;
