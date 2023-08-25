// imports
import { useEffect } from 'react';
import Flora from '../components/Flora';
import AddFlora from '../components/AddFlora';
import { useFloraContext } from '../hooks/useFloraContext';
import Loading from '../components/Loading';

const Home = () => {
  const { floras, dispatch } = useFloraContext();

  useEffect(() => {
    const getFloras = async () => {
      const res = await fetch('http://localhost:3000/api/floras');
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: 'LIST_FLORAS', payload: data });
      }
    };

    getFloras();
  }, []);

  return (
    <>
      <AddFlora />

      {floras ? (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {floras.map(flora => (
            <Flora key={flora._id} flora={flora} />
          ))}
        </div>
      ) : (
        <Loading size={60} />
      )}
    </>
  );
};

export default Home;
