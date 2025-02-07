import React from 'react';
import img from '../Assets/barbel.png';
import { useNavigate } from 'react-router-dom';

const Exercises: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/how-to-do-it');
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-center">
        <p className="text-2xl font-bold">Workout Plan</p>
      </div>
      <p className="font-bold texl-xl mt-2">Chest & Tricepts</p>
      <div className="flex gap-1.5 text-xs text-[#7B6F72]">
        <p>10 Exercises</p>|<p>45mins</p>|<p>300 Calories Burn</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h2 className=" font-bold">You'll Need</h2>
          <p className=" text-sm text-[#7B6F72]">5 Items</p>
        </div>
        <div className="flex mt-2 overflow-x-auto gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1"
            >
              <div className="bg-[#F7F8F8] p-2 flex items-center justify-center rounded-[20px] w-[120px] h-[120px]">
                <img src={img} alt={`Equipment ${index + 1}`} />
              </div>
              <p className="text-xs">Equipment {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-bold">Exercises</h2>
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="flex items-center mt-4">
            <img
              src={`https://s3-alpha-sig.figma.com/img/e3a3/10fc/bb0a8e26f5db42f5eb34fe9c5ecd777d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tfrt7DQskP11uZQULZXCluaByJdEK~WnolV-s8N7x93uP2i4qfbgOB~PkuP89RlyNJZBKKX654l5khAo8oGm8uMwdLjjjRccq5PcgCf9Ndr3iQRdmcx8gWqxc4FfAlPrSLpOy9CATnGsoOCiSic11gVMq7nGwpOUmjChsYOXqRcIO-94pVFr9Asd3ZQxDlAMV7jbcWPPl8Un4xVzsNsFjx0K~-nH-huIVTEhNhJLVQgNPFAmvtTmD0lHNDuQnB69Z3NyFPKyne~RYqtsuU9pqlKz~FcEnUIwt6SprhAFvftof2SUyqodbj808fy0D2C2q~970f3uaxsRdKquX-u7hg__`}
              alt={`Exercise ${index + 1}`}
              className="w-[70px] h-[70px] rounded-[20px] mr-2"
            />
            <div className="flex-1">
              <p className=" font-semibold">Exercise {index + 1}</p>
              <p className="text-xs text-[#7B6F72]"> Sets: 3 | Reps: 12</p>
            </div>
            <button className="text-[44px]"  onClick={handleClick}>
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
        {/* Add more exercises as needed */}
      </div>
      <div className="w-full p-1 pt-5 flex items-center justify-center">
        <div className="w-full p-1 pt-5 flex items-center justify-center">
          <button
            className="bg-[#130F26] text-white px-20 py-4 rounded-[40px] bg-custom-gradient"
          >
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
