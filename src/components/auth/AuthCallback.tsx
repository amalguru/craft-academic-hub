
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
      
      // Get the session from the URL
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error getting auth session:', error);
        setError('Authentication failed. Please try again.');
        setLoading(false);
        setTimeout(() => navigate('/login'), 2000);
        return;
      }

      if (data.session) {
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
          }
        }
        
        navigate('/profile');
      } else {
        navigate('/login');
      }
      
      setLoading(false);
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
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
      <div className="text-gray-600">Completing authentication...</div>
    </div>
  );
}
