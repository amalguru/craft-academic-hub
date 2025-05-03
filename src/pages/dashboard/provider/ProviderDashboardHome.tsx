
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare, CreditCard, Clock, CheckCircle, Users, AlertCircle } from 'lucide-react';

const ProviderDashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Expert Dashboard</h1>
      
      {/* Welcome Card */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Welcome back, Dr. Sharma!</CardTitle>
          <CardDescription>
            Here's an overview of your projects and earnings.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 mb-4">
              You have <strong>2 new project</strong> requests waiting for your response.
            </p>
            <Link to="/dashboard/provider/projects">
              <Button className="bg-eduBlue-600 hover:bg-eduBlue-700">
                Review New Projects
              </Button>
            </Link>
          </div>
          <div className="hidden sm:block">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&q=80" 
              alt="Person working on laptop" 
              className="h-28 w-auto rounded"
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">1 due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">5 completed this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Earnings</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹24,500</div>
            <p className="text-xs text-muted-foreground">Available for withdrawal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Client Rating</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.9/5</div>
            <p className="text-xs text-muted-foreground">From 42 client reviews</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Current Projects */}
      <h2 className="text-xl font-semibold mb-4">Current Projects</h2>
      <div className="space-y-4">
        {[
          {
            id: 'PRJ-2023-1',
            title: 'Machine Learning Research Paper',
            client: 'Rahul K.',
            status: 'in-progress',
            deadline: '2023-05-10',
            payment: '₹8,500'
          },
          {
            id: 'PRJ-2023-2',
            title: 'Database Management System Project',
            client: 'Priya S.',
            status: 'in-progress',
            deadline: '2023-05-15',
            payment: '₹12,000'
          },
          {
            id: 'PRJ-2023-3',
            title: 'Advanced Circuit Design',
            client: 'Amit P.',
            status: 'review',
            deadline: '2023-05-05',
            payment: '₹4,000'
          }
        ].map(project => (
          <Card key={project.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{project.id}</span>
                    {project.status === 'in-progress' ? (
                      <span className="flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                        <Clock size={12} className="mr-1" />
                        In Progress
                      </span>
                    ) : (
                      <span className="flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        <AlertCircle size={12} className="mr-1" />
                        Client Review
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium mt-1">{project.title}</h3>
                  <div className="flex gap-4 mt-1 text-sm text-gray-600">
                    <span>Client: {project.client}</span>
                    <span>Deadline: {project.deadline}</span>
                    <span>Payment: {project.payment}</span>
                  </div>
                </div>
                <div>
                  <Link to={`/dashboard/provider/projects/${project.id}`}>
                    <Button variant="outline">View Project</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6">
        <Link to="/dashboard/provider/projects">
          <Button variant="outline">View All Projects</Button>
        </Link>
      </div>
      
      {/* Recent Messages */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Recent Messages</h2>
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {[
              {
                from: 'Rahul K.',
                project: 'Machine Learning Research Paper',
                time: '1 hour ago',
                message: 'Can you please include more examples in the methodology section?'
              },
              {
                from: 'Priya S.',
                project: 'Database Management System Project',
                time: '3 hours ago',
                message: 'Thank you for the progress update. Looking forward to the next milestone.'
              },
              {
                from: 'EduCraft Support',
                project: 'System',
                time: '1 day ago',
                message: 'Your monthly performance review is now available. View it in your profile section.'
              }
            ].map((msg, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-eduBlue-100 text-eduBlue-600 flex items-center justify-center">
                  <span className="font-medium text-sm">{msg.from.charAt(0)}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{msg.from}</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {msg.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Re: {msg.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <Link to="/dashboard/provider/chat">
          <Button variant="outline">View All Messages</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProviderDashboardHome;
