
// This is a frontend service that would communicate with a MongoDB backend
// In production, you should implement this with a proper backend API
// For demonstration purposes, we'll simulate MongoDB interactions

interface User {
  name?: string;
  email: string;
  password: string;
  userType: 'client' | 'provider';
  mobileNumber?: string;
}

// In-memory storage for demonstration purposes
// In a real app, this would be replaced with MongoDB API calls
const users: User[] = [];

export const registerUser = async (userData: User): Promise<{ success: boolean; message: string }> => {
  // Check if user already exists
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    return { success: false, message: 'User with this email already exists' };
  }
  
  // In a real app, you would hash the password before storing
  users.push(userData);
  console.log('User registered:', userData.email);
  console.log('All users:', users);
  
  return { success: true, message: 'Registration successful' };
};

export const loginUser = async (
  email: string, 
  password: string, 
  userType: 'client' | 'provider'
): Promise<{ success: boolean; message: string; userType?: 'client' | 'provider' }> => {
  const user = users.find(u => u.email === email && u.password === password && u.userType === userType);
  
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }
  
  console.log('User logged in:', email);
  return { success: true, message: 'Login successful', userType: user.userType };
};
