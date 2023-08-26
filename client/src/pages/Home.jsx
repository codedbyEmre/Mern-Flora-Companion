// imports
import { useEffect } from 'react';
import Flora from '../components/Flora';
import AddFlora from '../components/AddFlora';
import { useFloraContext } from '../hooks/useFloraContext';
import Loading from '../components/shared/Loading';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
  const { floras, dispatch } = useFloraContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getFloras = async () => {
      const res = await fetch('http://localhost:3000/api/floras', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
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
          {floras.map((flora, index) => (
            <Flora key={flora._id} flora={flora} index={index} />
          ))}
        </div>
      ) : (
        <Loading size={50} />
      )}

      {/* If there is no flora  */}
      {floras && !floras.length ? <div className="text-slate-700 text-2xl text-center mt-4">No floras found!</div> : ''}
    </>
  );
};

export default Home;
