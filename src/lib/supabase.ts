import { createClient, User } from '@supabase/supabase-js';

const supabaseUrl = 'https://dokqupmprocohbmgdypc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRva3F1cG1wcm9jb2hibWdkeXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNjk1ODYsImV4cCI6MjA2MTk0NTU4Nn0.NdZVCrJKA9bCspcspR32LTPwJi84DEZNuKlWxOwuT8E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserProfile = {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
};

export type { User }; 