import React from 'react';
import CustomButton from '../Components/Button';
import { useNavigate } from 'react-router-dom';

const GetStarted: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-[85%]">
        <h1 className="text-xl font-bold mb-4">Welcome to Fitness App</h1>
      </div>
      <CustomButton onClick={handleClick}>Get Started</CustomButton>
    </div>
  );
};

export default GetStarted;
