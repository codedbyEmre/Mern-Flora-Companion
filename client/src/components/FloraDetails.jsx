// imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import Loading from './Loading';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const FloraDetails = () => {
  const { id } = useParams();
  const [flora, setFlora] = useState(null);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getFlora = async () => {
      const res = await fetch(`http://localhost:3000/api/floras/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      const data = await res.json();

      if (res.ok) {
        setFlora(data);
      }
    };

    getFlora();
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn btn-neutral flex items-center mb-6 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back
      </button>
      {flora ? (
        <div className="bg-white py-4 px-6 rounded-md shadow-md">
          <div className="text-2xl font-medium">{flora.commonName}</div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-6">
            <div>
              <span className="font-semibold">Botanical Name: </span>
              {flora.botanicalName}
            </div>
            <div>
              <span className="font-semibold">Family: </span>
              {flora.family}
            </div>
            <div>
              <span className="font-semibold">Color: </span>
              {flora.color}
            </div>
            <div>
              <span className="font-semibold">Area: </span>
              {flora.area}
            </div>
            <div>
              <span className="font-semibold">Size: </span>
              {flora.size}
            </div>
            <div>
              <span className="font-semibold">Plant Type: </span>
              {flora.plantType}
            </div>
            <div>
              <span className="font-semibold">Bloom Time: </span>
              {flora.bloomTime}
            </div>
            <div>
              <span className="font-semibold">Soil Type: </span>
              {flora.soilType}
            </div>
            <div>
              <span className="font-semibold">Soil Ph: </span>
              {flora.soilPh}
            </div>
          </div>
          <div className="capitalize">{formatDistanceToNow(new Date(flora.createdAt), { addSuffix: true })}</div>
        </div>
      ) : (
        <Loading size={50} />
      )}
    </>
  );
};

export default FloraDetails;
