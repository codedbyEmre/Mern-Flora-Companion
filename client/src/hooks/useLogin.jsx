// imports
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, email, password) => {
    setIsLoading(false);
    setError(null);

    const res = await fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data));

      dispatch({ type: 'LOGIN', payload: data });

      setIsLoading(false);

      setError(null);
    } else {
      setIsLoading(false);

      setError(data.error);
    }
  };

  return { login, isLoading, error };
};
