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
      const res = await fetch('https://mern-flora-companion-api.vercel.app/api/floras', {
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {floras.map((flora, index) => (
            <Flora key={flora._id} flora={flora} index={index} />
          ))}
        </div>
      ) : (
        <Loading size={50} />
      )}

      {/* If there is no flora  */}
      {floras && !floras.length ? (
        <div className="text-slate-700 text-2xl flex items-center justify-center gap-2 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          No floras found!
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Home;
