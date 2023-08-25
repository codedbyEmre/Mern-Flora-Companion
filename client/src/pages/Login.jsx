// imports
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSignup = async e => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto bg-white py-4 px-6 mt-6 rounded-md shadow-md">
      <h3 className="mb-8 text-2xl font-medium text-center mt-2">Log In</h3>

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
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
