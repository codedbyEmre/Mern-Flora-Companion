// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components & pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FloraDetails from './components/FloraDetails';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-200 overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-6xl mx-auto p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<FloraDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
