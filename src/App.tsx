import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import GetStarted from './Pages/GetStarted';
import { FitnessProvider } from './Context/FitnessContext';
import Home from './Pages/Home';
import Exercises from './Pages/Exercises';
import HowToDoIt from './Pages/HowToDoIt';
import Login from './Pages/Login';
import AllExercises from './Pages/AllExercises';

const App: React.FC = () => {
  return (
    <FitnessProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
          <Route path="/body-parts/:bodyPart" element={<Exercises />} />
          <Route path="/how-to-do-it/:exerciseName" element={<HowToDoIt />} />
          <Route path="/all-exercise" element={<AllExercises />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </FitnessProvider>
  );
};

export default App;
