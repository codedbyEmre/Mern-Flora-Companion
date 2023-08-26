// imports
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default Back;
