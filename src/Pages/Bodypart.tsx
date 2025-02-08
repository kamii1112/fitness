import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFitnessContext } from '../Context/FitnessContext';
import { workoutHeadings } from '../Data/MainData';

const Bodypart: React.FC = () => {
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

  return (
    <div className="p-5">
      <div className="flex items-center justify-center">
        <p className="text-xl font-bold">What Do You Want To Train</p>
      </div>
      <ul className="mt-4">
        <div className="flex flex-col gap-3">
          {workoutHeadings.map((exercise, index) => (
            <li
              key={index}
              className="flex justify-between items-center mt-2 bg-[#eaf0ff] rounded-2xl py-4 px-6"
            >
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
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Bodypart;
