
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Users, FileText, MessageSquare, CreditCard, Settings, BookOpen, User, LogOut } from 'lucide-react';

interface DashboardSidebarProps {
  collapsed: boolean;
}

// Mock auth - to be replaced with real auth
const mockAuth = {
  user: { role: 'client' } 
};

const DashboardSidebar = ({ collapsed }: DashboardSidebarProps) => {
  const { pathname } = useLocation();
  const role = mockAuth.user.role;

  // Define navigation based on user role
  const getNavigation = () => {
    switch (role) {
      case 'client':
        return [
          { name: 'Dashboard', href: '/dashboard/client', icon: Home },
          { name: 'My Orders', href: '/dashboard/client/orders', icon: FileText },
          { name: 'Chat', href: '/dashboard/client/chat', icon: MessageSquare },
          { name: 'Payments', href: '/dashboard/client/payments', icon: CreditCard },
          { name: 'Profile', href: '/dashboard/client/profile', icon: User },
        ];
      case 'provider':
        return [
          { name: 'Dashboard', href: '/dashboard/provider', icon: Home },
          { name: 'Projects', href: '/dashboard/provider/projects', icon: FileText },
          { name: 'Chat', href: '/dashboard/provider/chat', icon: MessageSquare },
          { name: 'Earnings', href: '/dashboard/provider/earnings', icon: CreditCard },
          { name: 'Profile', href: '/dashboard/provider/profile', icon: User },
        ];
      case 'admin':
        return [
          { name: 'Dashboard', href: '/dashboard/admin', icon: Home },
          { name: 'Users', href: '/dashboard/admin/users', icon: Users },
          { name: 'Orders', href: '/dashboard/admin/orders', icon: FileText },
          { name: 'Providers', href: '/dashboard/admin/providers', icon: BookOpen },
          { name: 'Payments', href: '/dashboard/admin/payments', icon: CreditCard },
          { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
        ];
      default:
        return [];
    }
  };

  const navigation = getNavigation();

  return (
    <div
      className={cn(
        'h-screen border-r bg-background transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-eduBlue-600">
              Edu<span className="text-eduGreen-600">Craft</span>
            </span>
          </Link>
        )}
        {collapsed && (
          <Link to="/" className="mx-auto">
            <span className="text-xl font-bold text-eduBlue-600">E</span>
          </Link>
        )}
      </div>
      <nav className="flex flex-col gap-1 p-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent',
              pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
              collapsed ? 'justify-center' : ''
            )}
          >
            <item.icon size={18} />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 w-full px-2">
        <Link 
          to="/login" 
          className={cn(
            'flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent',
            collapsed ? 'justify-center' : ''
          )}
        >
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
