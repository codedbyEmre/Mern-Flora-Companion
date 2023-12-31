// imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import Loading from './shared/Loading';
import { useAuthContext } from '../hooks/useAuthContext';
import Back from './shared/Back';

const FloraDetails = () => {
  const { id } = useParams();
  const [flora, setFlora] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const getFlora = async () => {
      const res = await fetch(`https://mern-flora-companion-api.vercel.app/api/floras/${id}`, {
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
      {/* Go back to where you came from */}
      <Back />

      {flora ? (
        <div className="bg-white py-4 px-6 rounded-md shadow-md break-words">
          <div className="text-2xl font-medium">{flora.commonName}</div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-6">
            <div className="flex">
              <span className="font-semibold">Botanical Name: </span>
              <span>{flora.botanicalName}</span>
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
