import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { workoutData } from '../Data/MainData';
import { Equipment } from '../Data/Equipment';
import { ExerciseImage } from '../Data/ExerciseImage';

const Exercises: React.FC = () => {
  const location = useLocation();
  const selectedPart = decodeURIComponent(
    location.pathname.split('/').pop() || ''
  );
  const navigate = useNavigate();

  const handleClick = (exerciseImage: string) => {
    navigate(`/how-to-do-it/${exerciseImage}`);
  };

  const filteredExercises = workoutData[selectedPart] || [];

  return (
    <div className="p-5">
      <div className="flex items-center justify-center">
        <p className="text-2xl font-bold">Workout Plan</p>
      </div>
      <p className="font-bold texl-xl mt-2">{selectedPart}</p>
      <div className="flex gap-1.5 text-xs text-[#7B6F72]">
        <p>{filteredExercises.numberOfExercises} Exercises</p>|
        <p>{filteredExercises.duration} mins</p>|
        <p>{filteredExercises.calorieCount} Calories Burn</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h2 className=" font-bold">You'll Need</h2>
          <p className=" text-sm text-[#7B6F72]">
            {filteredExercises.equipmentRequired.length} Items
          </p>
        </div>
        <div className="flex mt-2 overflow-x-auto gap-2">
          {filteredExercises.equipmentRequired.map((equipment, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1"
            >
              <div className="bg-[#F7F8F8] p-2 flex items-center justify-center rounded-[20px] w-[120px] h-[120px]">
                <Equipment type={equipment} />
              </div>
              <p className="text-xs">{equipment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-bold">Exercises</h2>
        {filteredExercises.exercises.map((exercise, index) => (
          <div key={index} className="flex items-center mt-4">
            <ExerciseImage type={exercise.image} size="sm" />
            <div className="flex-1">
              <p className=" font-semibold">{exercise.name}</p>
              <p className="text-xs text-[#7B6F72]">
                Sets: {exercise.sets} | Reps: {exercise.reps}
              </p>
            </div>
            <button
              className="text-[44px]"
              onClick={() => handleClick(exercise.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                  stroke="#ADA4A5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                  stroke="#ADA4A5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="w-full p-1 pt-5 flex items-center justify-center">
        <div className="w-full p-1 pt-5 flex items-center justify-center">
          <button className="bg-[#130F26] text-white px-20 py-4 rounded-[40px] bg-custom-gradient">
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
