// imports
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);
  const { signup, error } = useSignup();

  const handleSignup = async e => {
    e.preventDefault();
    setBtnLoading(true);

    try {
      const res = await signup(username, email, password);

      if (!res.ok) {
        throw new Error();
      }
    } catch (error) {
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto bg-white py-4 px-6 mt-6 rounded-md shadow-md">
      <h3 className="mb-8 text-2xl font-medium text-center mt-2">Sign Up</h3>

      <div className="mb-6">
        <label className="block mb-1" htmlFor="username">
          * Username
        </label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border border-slate-400 p-1 rounded"
          type="text"
          id="username"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1" htmlFor="email">
          * Email
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
        * Password
      </label>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full border border-slate-400 p-1 rounded"
        type="password"
        id="password"
      />

      <p className="mt-4 text-lg">
        Already a member?
        <Link to="/login" className="font-medium ml-2 underline">
          Log in now!
        </Link>
      </p>

      {error && <div className="text-red-600 mt-6 -mb-2">{error}</div>}

      <div className="flex justify-end mt-8 mb-2">
        {btnLoading ? (
          <button className="btn btn-neutral capitalize text-base">
            <span className="loading loading-spinner"></span>
            loading
          </button>
        ) : (
          <button className="btn btn-neutral capitalize text-base">Signup</button>
        )}
      </div>
    </form>
  );
};

export default Signup;
