import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // You can import other icons as needed
import 'tailwindcss/tailwind.css';

const StepsComponent = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">How it works:</h2>

        <div className="flex justify-center items-center space-x-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              {/* Your content for Step 1 */}
              <h3 className="text-xl font-semibold">Step 1</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <FaArrowRight className="text-blue-500 text-4xl mt-4" />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              {/* Your content for Step 2 */}
              <h3 className="text-xl font-semibold">Step 2</h3>
              <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <FaArrowRight className="text-blue-500 text-4xl mt-4" />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              {/* Your content for Step 3 */}
              <h3 className="text-xl font-semibold">Step 3</h3>
              <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <FaArrowRight className="text-blue-500 text-4xl mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
