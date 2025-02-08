import React from 'react';
import { ExercisesData } from '../Data/ExerciseData';
import { useNavigate } from 'react-router-dom';
import { ExerciseImage } from '../Data/ExerciseImage';

const AllExercises: React.FC = () => {
  const navigate = useNavigate();
  const navigateToExercise = (exerciseName: string) => {
    navigate(`/how-to-do-it/${exerciseName}`);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Exercises</h1>

      {ExercisesData.map((exercise, index) => (
        <li
          key={index}
          className="flex justify-between mt-2 bg-[#eaf0ff] rounded-2xl py-2 px-6"
        >
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <ExerciseImage size="sm" type={exercise.image} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{exercise.name}</p>
              <p className='text-xs text-[#7B6F72]'>
              {exercise.difficulty} | {exercise.caloriesBurned} Calories Burn
              </p>
            </div>
          </div>
          <button
            className="text-[44px]"
            onClick={() => navigateToExercise(exercise.id)}
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
        </li>
      ))}
    </div>
  );
};

export default AllExercises;
