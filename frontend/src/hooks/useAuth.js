// useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useRequireAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to the sign-in page if no token is found
      navigate('/');
    }
  }, [navigate]);

  // Optionally, you can return true/false based on authentication status
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated;
}

export default useRequireAuth;
