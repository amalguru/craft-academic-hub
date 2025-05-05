
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function AuthCallback() {
  const navigate = useNavigate();
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
              setTimeout(() => navigate('/login'), 3000);
              return;
            }
          }
          
          // Redirect to profile page
          navigate('/profile');
        } else {
          console.log('No session found, redirecting to login');
          navigate('/login');
        }
      } catch (err) {
        console.error('Unexpected error during authentication:', err);
        setError('An unexpected error occurred. Please try again.');
        setTimeout(() => navigate('/login'), 3000);
      } finally {
        setLoading(false);
      }
    };

    // Execute the function
    handleAuthRedirect();
  }, [navigate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-4 text-red-500">{error}</div>
        <div>Redirecting to login page...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
      <div className="text-gray-600">Completing authentication...</div>
      <div className="mt-4 text-sm text-gray-500">Please wait, you'll be redirected shortly</div>
    </div>
  );
}
