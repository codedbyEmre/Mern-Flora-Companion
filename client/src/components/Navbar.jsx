// imports
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="bg-slate-600">
      <div className="max-w-6xl mx-auto p-5 flex items-center justify-between">
        <Link to="/">
          <div className="text-3xl text-white font-medium">Flora Companion</div>
        </Link>
        <nav className="flex items-center gap-4 text-white text-lg">
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
