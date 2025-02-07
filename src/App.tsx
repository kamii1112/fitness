import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetStarted from './Pages/GetStarted';
import Home from './Pages/Home';
import Bodypart from './Pages/Bodypart';
import Exercises from './Pages/Exercises';
import HowToDoIt from './Pages/HowToDoIt';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace this with your actual login check logic
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);

    if (!userLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <GetStarted /> : <Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/today-target" element={<Bodypart />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/how-to-do-it" element={<HowToDoIt />} />
      </Routes>
    </BrowserRouter>
  );
};

// text-[48px]
// text-[52px]
// text-[56px]
// text-[60px]
// text-[64px]
// text-[68px]
// text-[72px]
// text-[76px]

export default App;
