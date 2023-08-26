// imports
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { ToastContainer } from 'react-toastify';

// components & pages
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import FloraDetails from './components/FloraDetails';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Stats from './pages/Stats';

const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="min-h-screen bg-slate-200 overflow-hidden">
      <ToastContainer position="top-right" />

      <BrowserRouter>
        <Navbar />
        <div className="max-w-6xl mx-auto p-5">
          <Routes>
            <Route path="/details/:id" element={<FloraDetails />} />
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/stats" element={user ? <Stats /> : <Navigate to="/login" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
