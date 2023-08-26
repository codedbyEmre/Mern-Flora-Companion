// imports
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(false);
    setError(null);

    const res = await fetch('http://localhost:3000/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    console.log('data :>> ', data);

    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data));

      dispatch({ type: 'LOGIN', payload: data });

      setIsLoading(false);

      setError(null);

      toast.success('Signed up successfully!');
    } else {
      setIsLoading(false);

      setError(data.error);

      toast.error('Something went wrong!');
    }
  };

  return { signup, isLoading, error };
};
