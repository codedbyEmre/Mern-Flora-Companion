// imports
import { useState } from 'react';
import { useFloraContext } from '../../hooks/useFloraContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { toast } from 'react-toastify';

const DeleteModal = ({ id, closeModal }) => {
  const { dispatch } = useFloraContext();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { user } = useAuthContext();

  const deleteFlora = async () => {
    const res = await fetch(`http://localhost:3000/api/floras/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    const data = await res.json();

    if (res.ok) {
      dispatch({ type: 'DELETE_FLORA', payload: data });

      toast.success('Flora deleted successfully!');
    }
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
          <h3 className="font-bold text-2xl">Delete Flora</h3>
          <p className="py-4 text-lg">Are you sure you want to delete this flora?</p>
          <div className="modal-action">
            <button className="btn btn-outline mr-2" onClick={handleCloseModal}>
              Close
            </button>
            <button onClick={() => deleteFlora()} className="btn btn-neutral">
              Delete
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default DeleteModal;
