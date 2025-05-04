import { useAuth } from '../../lib/auth-context';

export function AuthTest() {
  const { user, profile, signOut } = useAuth();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Authentication Test</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold mb-2">User Information</h3>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>

        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold mb-2">Profile Information</h3>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(profile, null, 2)}
          </pre>
        </div>

        <button
          onClick={signOut}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
} 