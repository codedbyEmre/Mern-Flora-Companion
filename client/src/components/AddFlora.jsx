// imports
import { useState } from 'react';
import { useFloraContext } from '../hooks/useFloraContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { toast } from 'react-toastify';
import { floraArrays } from './../modules/floraArrays.js';

const { plantFamilies, plantTypes, plantColors, plantAreas, soilTypes, bloomTimes } = floraArrays();

const AddFlora = () => {
  const [commonName, setCommonName] = useState('');
  const [botanicalName, setBotanicalName] = useState('');
  const [family, setFamily] = useState('');
  const [plantType, setPlantType] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [soilType, setSoilType] = useState('');
  const [soilPh, setSoilPh] = useState('');
  const [bloomTime, setBloomTime] = useState('');
  const [area, setArea] = useState('');
  const [error, setError] = useState(null);
  const { dispatch } = useFloraContext();
  const { user } = useAuthContext();
  const [emptyFields, setEmptyFields] = useState(null);

  const handleAddFlora = async e => {
    e.preventDefault();

    setError(null);

    const flora = {
      commonName,
      botanicalName,
      family,
      plantType,
      color,
      size,
      soilType,
      soilPh,
      bloomTime,
      area
    };

    const res = await fetch('https://mern-flora-companion-api.vercel.app/api/floras', {
      method: 'POST',
      body: JSON.stringify(flora),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    });
    const data = await res.json();

    if (res.ok) {
      dispatch({ type: 'ADD_FLORA', payload: data });

      toast.success('Flora added successfully!');

      resetFields();

      window.addModal.close();
    } else {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    }
  };

  const closeModal = () => {
    window.addModal.close();

    setTimeout(() => {
      resetFields();
    }, 300);
  };

  const resetFields = () => {
    setCommonName('');
    setBotanicalName('');
    setFamily('');
    setPlantType('');
    setColor('');
    setSize('');
    setSoilType('');
    setSoilPh('');
    setBloomTime('');
    setArea('');
    setError(null);
    setEmptyFields(null);
  };

  return (
    <>
      <button className="btn btn-neutral mt-4 mb-6" onClick={() => window.addModal.showModal()}>
        Add Flora
      </button>

      <dialog id="addModal" className="modal">
        <form onSubmit={handleAddFlora} method="dialog" className="modal-box">
          <button onClick={() => closeModal()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-2xl mb-6">Add a New Flora</h3>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <label className="block mb-1" htmlFor="commonName">
                * Common Name
              </label>
              <input
                value={commonName}
                onChange={e => setCommonName(e.target.value)}
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
                value={botanicalName}
                onChange={e => setBotanicalName(e.target.value)}
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
              <select
                value={family}
                onChange={e => setFamily(e.target.value)}
                id="family"
                className="w-full p-[0.4rem] bg-white border border-[#94a3b8] rounded cursor-pointer"
              >
                {plantFamilies &&
                  plantFamilies.map((plantFamily, index) => (
                    <option value={plantFamily} key={index}>
                      {plantFamily}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block mb-1" htmlFor="color">
                * Color
              </label>
              <select
                value={color}
                onChange={e => setColor(e.target.value)}
                id="color"
                className="w-full p-[0.4rem] bg-white border border-[#94a3b8] rounded cursor-pointer"
              >
                {plantColors &&
                  plantColors.map((plantColor, index) => (
                    <option value={plantColor} key={index}>
                      {plantColor}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block mb-1" htmlFor="area">
                * Area
              </label>
              <select
                value={area}
                onChange={e => setArea(e.target.value)}
                id="area"
                className="w-full p-[0.4rem] bg-white border border-[#94a3b8] rounded cursor-pointer"
              >
                {plantAreas &&
                  plantAreas.map((plantArea, index) => (
                    <option value={plantArea} key={index}>
                      {plantArea}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block mb-1" htmlFor="plantType">
                * Plant Type
              </label>
              <select
                value={plantType}
                onChange={e => setPlantType(e.target.value)}
                id="plantType"
                className="w-full p-[0.4rem] bg-white border border-[#94a3b8] rounded cursor-pointer"
              >
                {plantTypes &&
                  plantTypes.map((plantType, index) => (
                    <option value={plantType} key={index}>
                      {plantType}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block mb-1" htmlFor="size">
                * Size
              </label>
              <input
                value={size}
                onChange={e => setSize(e.target.value)}
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
              <select
                value={soilType}
                onChange={e => setSoilType(e.target.value)}
                id="soilType"
                className="w-full p-[0.4rem] bg-white border border-[#94a3b8] rounded cursor-pointer"
              >
                {soilTypes &&
                  soilTypes.map((soilType, index) => (
                    <option value={soilType} key={index}>
                      {soilType}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block mb-1" htmlFor="soilPh">
                * Soil Ph
              </label>
              <input
                value={soilPh}
                onChange={e => setSoilPh(e.target.value)}
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
              <select
                value={bloomTime}
                onChange={e => setBloomTime(e.target.value)}
                id="bloomTime"
                className="w-full p-[0.4rem] bg-white border border-[#94a3b8] rounded cursor-pointer"
              >
                {bloomTimes &&
                  bloomTimes.map((bloomTime, index) => (
                    <option value={bloomTime} key={index}>
                      {bloomTime}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {error && <div className="text-red-600 mt-4">{error}</div>}

          <div className="modal-action mt-10">
            <button onClick={() => closeModal()} className="btn btn-outline mr-2">
              Close
            </button>
            <button className="btn btn-neutral">Save</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddFlora;
