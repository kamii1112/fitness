import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bodypart: React.FC = () => {
  const navigate = useNavigate();
  const exercises = [
    { name: 'Bench Press', sets: 4, reps: 10 },
    { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
    { name: 'Chest Fly', sets: 3, reps: 15 },
    { name: 'Tricep Dips', sets: 3, reps: 12 },
    { name: 'Tricep Pushdown', sets: 3, reps: 15 },
    { name: 'Overhead Tricep Extension', sets: 3, reps: 12 },
    { name: 'Cable Chest Press', sets: 3, reps: 15 },
    { name: 'Tricep Kickbacks', sets: 3, reps: 12 },
  ];

  const navigateToExercise = () => {
    navigate(`/exercises`);
  };

  // const completeWorkout = () => {
  //   navigate('/home');
  // };

  return (
    <div className="p-5">
      <div className='flex items-center justify-center'>
      <p className="text-xl font-bold">What Do You Want To Train</p>
      </div>
      <ul className="mt-4">
        <div className="flex flex-col gap-3">
          {exercises.map((exercise, index) => (
            <li
              key={index}
              className="flex justify-between items-center mt-2 bg-[#eaf0ff] rounded-2xl py-4 px-6"
            >
              <div className="flex flex-col">
                <p className="font-semibold text-lg">{exercise.name}</p>
                <p className=" text-[#7B6F72] text-sm">
                  Sets: {exercise.sets}, Reps: {exercise.reps}
                </p>
                <div className="mt-4 -ml-0.5">
                  <button
                    className="bg-white px-6 py-1 rounded-2xl"
                    onClick={() => navigateToExercise()}
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
      <div className="w-full p-1 pt-5 flex items-center justify-center">
          <button
            className="bg-[#130F26] text-white px-20 py-4 rounded-[40px] bg-custom-gradient"
          >
            Complete
          </button>
        </div>
    </div>
  );
};

export default Bodypart;
