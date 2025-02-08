import React, { useEffect } from 'react';
import CustomButton from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { useFitnessContext } from '../Context/FitnessContext';

const GetStarted: React.FC = () => {
  const { isLoggedIn } = useFitnessContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold mb-4">Welcome to Fitness App</h1>
      </div>
      <CustomButton onClick={handleClick}>Get Started</CustomButton>
    </div>
  );
};

export default GetStarted;
