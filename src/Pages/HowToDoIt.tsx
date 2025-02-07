import React, { useState } from 'react';

const HowToDoIt: React.FC = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-gray-600">
          {/* <FaTimes size={20} /> */}
          Times
        </button>
        <button className="text-gray-600">
          {/* <FaEllipsisV size={20} /> */}
          ellipse
        </button>
      </div>

      {/* Exercise Video Section */}
      <div className="relative mb-4">
        <img
          src="/path/to/video-thumbnail.jpg"
          alt="Jumping Jack"
          className="w-full rounded-lg"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          {/* <FaPlay size={40} className="text-white" /> */}
          play
        </button>
      </div>

      {/* Exercise Title and Stats */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Jumping Jack</h1>
        <p className="text-gray-600">Easy | 390 Calories Burn</p>
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
          <li className="flex items-start">
            <span className="text-pink-500 font-bold mr-2">01</span>
            <div>
              <h3
                className="font-bold</button>
                            "
              >
                Start Position
              </h3>
              <p className="text-gray-700">
                Stand upright with your legs together and arms at your sides.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 font-bold mr-2">02</span>
            <div>
              <h3 className="font-bold">Jump and Spread</h3>
              <p className="text-gray-700">
                Jump up, spreading your legs to shoulder-width apart and raising
                your arms above your head.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 font-bold mr-2">03</span>
            <div>
              <h3 className="font-bold">Return</h3>
              <p className="text-gray-700">
                Jump again to return to the starting position.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 font-bold mr-2">04</span>
            <div>
              <h3 className="font-bold">Repeat</h3>
              <p className="text-gray-700">
                Repeat the movement for the desired number of repetitions.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToDoIt;
