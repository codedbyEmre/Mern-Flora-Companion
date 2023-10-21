// imports
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);
  const { login, error } = useLogin();

  const handleLogin = async e => {
    e.preventDefault();
    setBtnLoading(true);

    try {
      const res = await login(username, email, password);

      if (!res.ok) {
        throw new Error();
      }
    } catch (error) {
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="max-w-sm mx-auto bg-white py-4 px-6 mt-6 rounded-md shadow-md">
        <h3 className="mb-8 text-2xl font-medium text-center mt-2">Log In</h3>

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
          Not a member?
          <Link to="/signup" className="font-medium ml-2 underline">
            Sign up now!
          </Link>
        </p>

        {error && <div className="text-red-600 mt-4 -mb-2">{error}</div>}

        <div className="flex justify-end mt-8 mb-2">
          {btnLoading ? (
            <button className="btn btn-neutral capitalize text-base">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <button className="btn btn-neutral capitalize text-base">Login</button>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
