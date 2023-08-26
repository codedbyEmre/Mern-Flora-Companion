// imports
import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = async () => {
    await logout();

    toast.success('Logged out successfully!');
  };

  return (
    <header className="bg-slate-600">
      <div className="max-w-6xl mx-auto p-5 flex sm:flex-row flex-col items-center justify-between">
        <Link to="/">
          <div className="text-3xl text-white font-medium">Flora Companion</div>
        </Link>
        <nav className="flex items-center gap-4 text-white text-lg sm:mt-0 mt-4">
          {user ? (
            <>
              <span className="font-semibold">{user?.user.username}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink to="/signup" activeclassname="active-link">
                Signup
              </NavLink>
              <NavLink to="/login" activeclassname="active-link">
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
