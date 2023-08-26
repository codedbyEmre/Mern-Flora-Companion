// imports
import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import LogoutModal from '../modals/LogoutModal';
import { useState } from 'react';

const Navbar = () => {
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-slate-600">
        <div className="max-w-6xl mx-auto p-5 flex sm:flex-row flex-col items-center justify-between">
          <div className="flex items-center sm:flex-row flex-col text-white gap-4 sm:gap-16">
            <Link to="/">
              <div className="text-3xl text-white font-medium">Flora Companion</div>
            </Link>
            {user ? (
              <div className="flex items-center gap-4">
                <NavLink to="/" activeclassname="active-link">
                  Home
                </NavLink>
                <NavLink to="/stats" activeclassname="active-link">
                  Stats
                </NavLink>
              </div>
            ) : (
              ''
            )}
          </div>
          <nav className="flex items-center gap-4 text-white text-lg sm:mt-0 mt-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="font-semibold">{user?.user.username}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
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

      {isModalOpen && <LogoutModal closeModal={closeLogoutModal} />}
    </>
  );
};

export default Navbar;
