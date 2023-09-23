import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Replace with the actual react-icons you want to use

const featuresData = [
  {
    icon: <FaCheckCircle />,
    title: "Feature 1",
    subtitle: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Feature 2",
    subtitle: "Consectetur adipiscing elit.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Feature 3",
    subtitle: "Sed do eiusmod tempor incididunt.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Feature 4",
    subtitle: "Ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Feature 5",
    subtitle: "Duis aute irure dolor in reprehenderit.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Feature 6",
    subtitle: "Excepteur sint occaecat cupidatat non.",
  },
];

export default function Features() {
  return (
    <div className="bg-[#e9eefa] py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-medium mb-2 font-inter">Find the <span className="bg-yellow-400 rounded-xl p-1">Perfect</span> Opportunities</h2>
        <p className="text-lg text-gray-600 mb-12 font-inter">
          Stella offers a variety of features to turbo-charge the volunteering process.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md shadow-blue-200/50 font-inter"
            >
              <div className="text-3xl mb-4 text-blue-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
