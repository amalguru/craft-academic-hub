
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare, CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ClientDashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Client Dashboard</h1>
      
      {/* Welcome Card */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Welcome back, Rahul!</CardTitle>
          <CardDescription>
            Here's an overview of your academic projects and activities.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Need help with a new project? We're here to help you succeed.
            </p>
            <Link to="/order">
              <Button className="bg-eduBlue-600 hover:bg-eduBlue-700">
                Create New Order
              </Button>
            </Link>
          </div>
          <div className="hidden sm:block">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80" 
              alt="Computer with code" 
              className="h-28 w-auto rounded"
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">2 orders in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 new since yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,450</div>
            <p className="text-xs text-muted-foreground">Across 6 projects</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Orders */}
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="space-y-4">
        {[
          {
            id: 'ORD-2023-1',
            title: 'Machine Learning Research Paper',
            status: 'in-progress',
            date: '2023-05-01',
            dueDate: '2023-05-10'
          },
          {
            id: 'ORD-2023-2',
            title: 'Database Management System Project',
            status: 'in-progress',
            date: '2023-04-28',
            dueDate: '2023-05-15'
          },
          {
            id: 'ORD-2023-3',
            title: 'Business Case Study Analysis',
            status: 'completed',
            date: '2023-04-15',
            dueDate: '2023-04-25'
          },
          {
            id: 'ORD-2023-4',
            title: 'Engineering Drawing and Design',
            status: 'completed',
            date: '2023-03-20',
            dueDate: '2023-04-01'
          }
        ].map(order => (
          <Card key={order.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{order.id}</span>
                    {order.status === 'in-progress' ? (
                      <span className="flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                        <Clock size={12} className="mr-1" />
                        In Progress
                      </span>
                    ) : (
                      <span className="flex items-center text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        <CheckCircle size={12} className="mr-1" />
                        Completed
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium mt-1">{order.title}</h3>
                  <div className="flex gap-4 mt-1 text-sm text-gray-600">
                    <span>Ordered: {order.date}</span>
                    <span>Due: {order.dueDate}</span>
                  </div>
                </div>
                <div>
                  <Link to={`/dashboard/client/orders/${order.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6">
        <Link to="/dashboard/client/orders">
          <Button variant="outline">View All Orders</Button>
        </Link>
      </div>
    </div>
  );
};

export default ClientDashboardHome;
