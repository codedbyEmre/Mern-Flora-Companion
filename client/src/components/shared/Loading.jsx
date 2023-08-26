// imports
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ size }) => {
  return (
    <div className="flex items-center justify-center">
      <ClipLoader color="bg-slate-200" size={size} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
};

export default Loading;
