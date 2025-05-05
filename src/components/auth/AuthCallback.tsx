
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useToast } from '@/hooks/use-toast';

export function AuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthRedirect = async () => {
      setLoading(true);
      
      try {
        // Process the OAuth callback by getting the session
        const { data, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Error getting auth session:', sessionError);
          setError('Authentication failed. Please try again.');
          toast({
            title: "Authentication Error",
            description: "Failed to complete login process. Please try again.",
            variant: "destructive",
          });
          setTimeout(() => navigate('/login'), 3000);
          return;
        }

        if (data.session) {
          console.log('User authenticated successfully:', data.session.user.id);
          
          // Check if profile exists
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.session.user.id)
            .single();
            
          if (profileError && profileError.code !== 'PGRST116') {
            console.error('Error fetching profile:', profileError);
          }
          
          // If profile doesn't exist, create it
          if (!profileData) {
            console.log('Creating new user profile');
            const { error: insertError } = await supabase
              .from('profiles')
              .insert([
                {
                  id: data.session.user.id,
                  email: data.session.user.email,
                  full_name: data.session.user.user_metadata.full_name || '',
                  avatar_url: data.session.user.user_metadata.avatar_url || '',
                },
              ]);
              
            if (insertError) {
              console.error('Error creating profile:', insertError);
              setError('Failed to create user profile. Please try again.');
              toast({
                title: "Profile Creation Failed",
                description: "Could not create your user profile. Please try again.",
                variant: "destructive",
              });
              setTimeout(() => navigate('/login'), 3000);
              return;
            }
          }
          
          toast({
            title: "Login Successful",
            description: "You've been successfully logged in!",
          });
          
          // Redirect to profile page
          navigate('/profile');
        } else {
          console.log('No session found, redirecting to login');
          setError('Authentication session not found. Please try again.');
          toast({
            title: "Authentication Error",
            description: "No authentication session found. Please try logging in again.",
            variant: "destructive",
          });
          navigate('/login');
        }
      } catch (err) {
        console.error('Unexpected error during authentication:', err);
        setError('An unexpected error occurred. This may be due to network connectivity issues, or the OAuth provider refused the connection. Please ensure you have proper internet access and try again.');
        toast({
          title: "Connection Error",
          description: "Could not connect to authentication service. Please check your internet connection and try again.",
          variant: "destructive",
        });
        setTimeout(() => navigate('/login'), 3000);
      } finally {
        setLoading(false);
      }
    };

    // Execute the function
    handleAuthRedirect();
  }, [navigate, toast]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-red-500 text-xl mb-4">Authentication Error</div>
          <div className="text-gray-700 mb-4">{error}</div>
          <div className="text-sm text-gray-500">Redirecting to login page...</div>
          <button 
            onClick={() => navigate('/login')} 
            className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
        <div className="text-gray-700">Completing authentication...</div>
        <div className="mt-4 text-sm text-gray-500">Please wait, you'll be redirected shortly</div>
      </div>
    </div>
  );
}
