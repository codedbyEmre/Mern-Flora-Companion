const Signup = () => {
  const handleSignup = async e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto bg-white py-4 px-6 mt-6 rounded-md shadow-md">
      <h3 className="mb-8 text-2xl font-medium text-center mt-2">Sign Up</h3>

      <div className="mb-6">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input className="w-full border border-slate-400 p-1 rounded" type="email" id="email" />
      </div>

      <label className="block mb-1" htmlFor="password">
        Password
      </label>
      <input className="w-full border border-slate-400 p-1 rounded" type="password" id="password" />

      <div className="flex justify-end mt-8 mb-2">
        <button className="btn btn-neutral">Signup</button>
      </div>
    </form>
  );
};

export default Signup;
