// imports
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import DeleteModal from './modals/DeleteModal';
import EditModal from './modals/EditModal';
import { Link } from 'react-router-dom';

const Flora = ({ flora }) => {
  const { _id, commonName, family, color, area, createdAt } = flora;
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="bg-white py-4 px-6 rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-medium mb-3">{commonName}</div>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white shadow-lg rounded-box w-52"
            >
              {/* Flora details */}
              <Link to={`/details/${_id}`}>
                <li>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>

                    <div className="text-base ml-2">Details</div>
                  </button>
                </li>
              </Link>

              {/* Edit flora */}
              <li className="my-2">
                <button onClick={handleEdit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <div className="text-base ml-2">Edit</div>
                </button>
              </li>

              {/* Delete flora */}
              <li>
                <button onClick={handleDelete}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <div className="text-base ml-2">Delete</div>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-2">
          <span className="font-semibold">Family: </span>
          {family}
        </div>
        <div className="my-2">
          <span className="font-semibold">Color: </span>
          {color}
        </div>
        <div className="my-2">
          <span className="font-semibold">Area: </span>
          {area}
        </div>
        <div className="capitalize mt-4">Created {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</div>
      </div>

      {/* Show edit modal */}
      {showEditModal && <EditModal id={_id} closeModal={closeEditModal} flora={flora} />}

      {/* Show delete modal */}
      {showDeleteModal && <DeleteModal id={_id} closeModal={closeDeleteModal} />}
    </>
  );
};

export default Flora;
