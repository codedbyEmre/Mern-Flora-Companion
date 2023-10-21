// imports
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';
import signupImg from '../../public/signupFormBg.png';

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
    <div className="mt-6 max-w-2xl mx-auto flex rounded-lg shadow-md overflow-hidden min-h-[50vh]">
      <div className="login-img flex-1 xs:block hidden">
        <img src={signupImg} className="h-full w-full object-cover" alt="login img" />
      </div>
      <div className="flex-1">
        <form onSubmit={handleSignup} className="h-full bg-white py-4 px-6 ">
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

          {error && <div className="text-red-600 mt-3 -mb-2">{error}</div>}

          <div className="flex justify-end mt-8 mb-2">
            <button className="btn btn-neutral capitalize text-base">
              {btnLoading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  loading
                </>
              ) : (
                'signup'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
