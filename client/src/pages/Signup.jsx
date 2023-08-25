// imports
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useSignup();

  const handleSignup = async e => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto bg-white py-4 px-6 mt-6 rounded-md shadow-md">
      <h3 className="mb-8 text-2xl font-medium text-center mt-2">Sign Up</h3>

      <div className="mb-6">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-slate-400 p-1 rounded"
          type="email"
          id="email"
        />
      </div>

      <label className="block mb-1" htmlFor="password">
        Password
      </label>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full border border-slate-400 p-1 rounded"
        type="password"
        id="password"
      />

      {error && <div className="text-red-600 mt-6 -mb-2">{error}</div>}

      <div className="flex justify-end mt-8 mb-2">
        <button disabled={isLoading} className="btn btn-neutral">
          Signup
        </button>
      </div>
    </form>
  );
};

export default Signup;
