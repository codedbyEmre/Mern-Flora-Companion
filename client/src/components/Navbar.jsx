// imports
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-slate-600">
      <div className="max-w-6xl mx-auto p-5">
        <Link to="/">
          <div className="text-3xl text-white font-medium">Flora Companion</div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
