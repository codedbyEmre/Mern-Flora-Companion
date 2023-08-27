// imports
import { useState } from 'react';
import { useFloraContext } from '../../hooks/useFloraContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { toast } from 'react-toastify';

const EditModal = ({ id, closeModal, flora }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { commonName, botanicalName, family, color, area, plantType, size, soilType, soilPh, bloomTime } = flora;
  const [editedCommonName, setEditedCommonName] = useState(commonName);
  const [editedBotanicalName, setEditedBotanicalName] = useState(botanicalName);
  const [editedFamily, setEditedFamily] = useState(family);
  const [editedPlantType, setEditedPlantType] = useState(plantType);
  const [editedColor, setEditedColor] = useState(color);
  const [editedSize, setEditedSize] = useState(size);
  const [editedSoilType, setEditedSoilType] = useState(soilType);
  const [editedSoilPh, setEditedSoilPh] = useState(soilPh);
  const [editedBloomTime, setEditedBloomTime] = useState(bloomTime);
  const [editedArea, setEditedArea] = useState(area);
  const { dispatch } = useFloraContext();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState(null);

  const editFlora = async e => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/floras/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        commonName: editedCommonName,
        botanicalName: editedBotanicalName,
        family: editedFamily,
        plantType: editedPlantType,
        color: editedColor,
        size: editedSize,
        soilType: editedSoilType,
        soilPh: editedSoilPh,
        bloomTime: editedBloomTime,
        area: editedArea
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      dispatch({ type: 'EDIT_FLORA', payload: data });

      window.editModal.close();

      setError(null);
      setEmptyFields(null);

      toast.success('Flora edited successfully!');
    } else {
      setError(data.error);
      setEmptyFields(data.emptyFields);
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
      <dialog id="editModal" className="modal" open>
        <form onSubmit={editFlora} method="dialog" className="modal-box">
          <button onClick={() => handleCloseModal()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-2xl mb-6">Edit Flora</h3>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <label className="block mb-1" htmlFor="commonName">
                * Common Name
              </label>
              <input
                value={editedCommonName}
                onChange={e => setEditedCommonName(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('commonName') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="commonName"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="botanicalName">
                * Botanical Name
              </label>
              <input
                value={editedBotanicalName}
                onChange={e => setEditedBotanicalName(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('botanicalName') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="botanicalName"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="family">
                * Family
              </label>
              <input
                value={editedFamily}
                onChange={e => setEditedFamily(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('family') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="family"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="color">
                * Color
              </label>
              <input
                value={editedColor}
                onChange={e => setEditedColor(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('color') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="color"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="area">
                * Area
              </label>
              <input
                value={editedArea}
                onChange={e => setEditedArea(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('area') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="area"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="plantType">
                * Plant Type
              </label>
              <input
                value={editedPlantType}
                onChange={e => setEditedPlantType(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('plantType') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="plantType"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="size">
                * Size
              </label>
              <input
                value={editedSize}
                onChange={e => setEditedSize(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('size') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="number"
                id="size"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="soilType">
                * Soil Type
              </label>
              <input
                value={editedSoilType}
                onChange={e => setEditedSoilType(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('soilType') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="soilType"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="soilPh">
                * Soil Ph
              </label>
              <input
                value={editedSoilPh}
                onChange={e => setEditedSoilPh(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('soilPh') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="number"
                id="soilPh"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="bloomTime">
                * Bloom Time
              </label>
              <input
                value={editedBloomTime}
                onChange={e => setEditedBloomTime(e.target.value)}
                className={`w-full border ${
                  emptyFields?.includes('bloomTime') ? 'border-red-400' : 'border-slate-400'
                }  p-1 rounded`}
                type="text"
                id="bloomTime"
              />
            </div>
          </div>

          {error && <div className="text-red-600 mt-4">{error}</div>}

          <div className="modal-action">
            <button className="btn btn-outline mr-2" onClick={handleCloseModal}>
              Close
            </button>
            <button className="btn btn-neutral">Save</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default EditModal;
