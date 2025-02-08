import React, { useEffect, useState } from 'react';
import { useFitnessContext } from '../Context/FitnessContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ExercisesData } from '../Data/ExerciseData';
import { ExerciseImage } from '../Data/ExerciseImage';

const HowToDoIt: React.FC = () => {
  const { isLoggedIn } = useFitnessContext();
  const navigate = useNavigate();
  const { exerciseName } = useParams<{ exerciseName: string }>();
  const exercise = ExercisesData.filter(
    exercise => exercise.id === exerciseName
  )[0];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
  const [readMore, setReadMore] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <button className="bg-[#F7F8F8] p-2 rounded-lg" onClick={handleBack}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12"
              stroke="#1D1617"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 4L12 12"
              stroke="#1D1617"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Exercise Title and Stats */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{exerciseName}</h1>
        <p className="text-gray-600">
          {exercise.difficulty} | {exercise.caloriesBurned} Calories Burn
        </p>
      </div>
      <div className="flex items-center justify-center mb-3">
        <ExerciseImage type={exercise.image} size="lg" />
      </div>

      {/* Description Section */}
      <div className="mb-4">
        <p className="text-gray-700">
          Jumping jacks are a great full-body exercise that can be done
          anywhere. They help improve cardiovascular fitness, strengthen
          muscles, and burn calories.
          {readMore && (
            <span>
              {' '}
              To perform a jumping jack, start by standing with your feet
              together and your arms at your sides. Jump up, spreading your legs
              out to the sides and raising your arms above your head. Jump again
              to return to the starting position.
            </span>
          )}
        </p>
        <button
          onClick={() => setReadMore(!readMore)}
          className="text-blue-500"
        >
          {readMore ? 'Read Less' : 'Read More...'}
        </button>
      </div>

      {/* Step-by-Step Instructions Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">How To Do It</h2>
          <span className="text-gray-600">4 Steps</span>
        </div>
        <ol className="list-decimal list-inside space-y-2">
          {exercise.steps.map(steps => (
            <li key={steps.title} className="flex items-start">
              <span className="text-pink-500 font-bold mr-2">
                {steps.stepNumber}
              </span>
              <div>
                <h3 className="font-bold">{steps.title}</h3>
                <p className="text-gray-700">{steps.instruction}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HowToDoIt;
