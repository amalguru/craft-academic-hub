
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ClientDashboardPage from "./pages/dashboard/client/ClientDashboardPage";
import ProviderDashboardPage from "./pages/dashboard/provider/ProviderDashboardPage";
import AdminDashboardPage from "./pages/dashboard/admin/AdminDashboardPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import DashboardLayout from "./components/layout/DashboardLayout";
import { AuthProvider } from './lib/auth-context';
import { LoginForm } from './components/auth/LoginForm';
import { SignUpForm } from './components/auth/SignUpForm';
import { ProfileForm } from './components/auth/ProfileForm';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AuthCallback } from './components/auth/AuthCallback';
import { AuthTest } from './components/auth/AuthTest';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="order" element={<OrderPage />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="auth/callback" element={<AuthCallback />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="client/*" element={<ClientDashboardPage />} />
              <Route path="provider/*" element={<ProviderDashboardPage />} />
              <Route path="admin/*" element={<AdminDashboardPage />} />
            </Route>
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfileForm />
              </ProtectedRoute>
            } />
            <Route path="/auth-test" element={
              <ProtectedRoute>
                <AuthTest />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
