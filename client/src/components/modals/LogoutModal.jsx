// imports
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLogout } from '../../hooks/useLogout';

const LogoutModal = ({ closeModal }) => {
  const { logout } = useLogout();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLogout = async () => {
    await logout();
    toast.success('Logged out successfully!');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    closeModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <dialog id="my_modal_1" className="modal" open>
        <form method="dialog" className="modal-box">
          <button onClick={() => handleCloseModal()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-2xl">Log Out</h3>
          <p className="py-4 text-lg">Are you sure you want to log out?</p>
          <div className="modal-action">
            <button className="btn btn-outline mr-2" onClick={handleCloseModal}>
              Close
            </button>
            <button onClick={() => handleLogout()} className="btn btn-neutral">
              Logout
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default LogoutModal;
