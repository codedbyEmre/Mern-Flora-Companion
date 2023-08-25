// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FloraDetails from './components/FloraDetails';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-200 overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-6xl mx-auto p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<FloraDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
