import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFitnessContext } from '../Context/FitnessContext';
import Bodypart from './Bodypart';
import { workoutHeadings } from '../Data/MainData';

const Home: React.FC = () => {
  const { isLoggedIn } = useFitnessContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const navigateToExercise = (exerciseName: string) => {
    navigate(`/body-parts/${exerciseName}`);
  };

  const today = new Date();
  const dayOfWeek = today.getDay();
  const exerciseIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Sunday is 0, so set it to 6
  const isSunday = dayOfWeek === 0;
  const exercise = workoutHeadings[exerciseIndex];

  return (
    <div className="p-5 flex flex-col justify-between h-[85vh]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-sm">Welcome back,</h1>
          <h1 className="text-lg font-bold">Jella Komal</h1>
        </div>
        {/* add onclick here */}
        <div className="pr-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.3888 20.8572C13.0247 22.3719 10.8967 22.3899 9.51947 20.8572"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {!isSunday && (
        <div className="p-5">
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold">Upcoming Workout</p>
          </div>
          <div className="flex justify-between items-center mt-2 bg-[#eaf0ff] rounded-2xl py-4 px-6">
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{exercise.name}</p>
              <p className=" text-[#7B6F72] text-sm">
                {exercise.numberOfExercises} Exercises
              </p>
              <div className="mt-4 -ml-0.5">
                <button
                  className="bg-white px-6 py-1 rounded-2xl"
                  onClick={() => navigateToExercise(exercise.name)}
                >
                  <p className="bg-[linear-gradient(274.42deg,_#92A3FD_0%,_#9DCEFF_124.45%)] bg-clip-text text-transparent">
                    View more
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSunday && 
      <div>Today is rest day </div>
      }

      <Bodypart />
    </div>
  );
};

export default Home;
