// imports
import { Link } from 'react-router-dom';

const NoPageFound = () => {
  return (
    <div className="flex flex-col items-center mt-6 text-slate-700">
      <div className="sm:text-8xl text-7xl font-bold">404</div>
      <p className="sm:text-2xl text-xl mt-2">Sorry, the page you're looking for does not exist.</p>
      <button className="btn btn-neutral mt-8">
        <Link to="/">Home Page</Link>
      </button>
    </div>
  );
};

export default NoPageFound;
