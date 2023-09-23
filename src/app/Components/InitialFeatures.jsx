"use client"

import React from "react";
import Image from "next/image";

import {
    FaHandsHelping,
    FaBuilding,
    FaGraduationCap,
    FaBusinessTime,
    FaLightbulb,
    FaClipboardCheck,
} from "react-icons/fa";

const colorClasses = {
    blue: "hover:border-blue-400",
    red: "hover:border-red-400",
    yellow: "hover:border-yellow-400",
    green: "hover:border-green-400",
    purple: "hover:border-purple-400",
    pink: "hover:border-pink-400",
};

const colorFillClasses = {
    blue: "bg-blue-100",
    red: "bg-red-100",
    yellow: "bg-yellow-100",
    green: "bg-green-100",
    purple: "bg-purple-100",
    pink: "bg-pink-100",
};

const colorTextClasses = {
    blue: "text-blue-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
};

import ibdpprogramlogo from '../Images/ibdpprogramlogo.png'
import ibmyplogopic from '../Images/ibmyplogopic.png'
import ibprogramfulllogo from '../Images/ibprogramfulllogo.png'
  


const featuresData = [
  {
    icon: <FaHandsHelping />,
    title: "Find Volunteer Opportunities",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: 'blue'
  },
  {
    icon: <FaBuilding />,
    title: "Connect with Local Businesses",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: 'red'
  },
  {
    icon: <FaGraduationCap />,
    title: "Streamline Your CAS Experience",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: 'yellow'
  },
  {
    icon: <FaBusinessTime />,
    title: "Businesses and Schools Unite",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: 'green'
  },
  {
    icon: <FaLightbulb />,
    title: "Create Your Own Initiatives",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: 'purple'
  },
  {
    icon: <FaClipboardCheck />,
    title: "Effortless Application Process",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: 'pink'
  },
];

export default function Features() {
    return (
      <div className="bg-[#e9eefa] pb-16">


        <div className="max-w-7xl mx-auto pt-20">
          <div className="text-center">

            <p class="font-bold text-5xl font-archivo">
                Packed &
                <span class="text-blue-500 mx-1 font-semibold text-5xl relative inline-block stroke-current">
                    Full of Features
                    <svg class="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none">
                        <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                    </svg>
                </span>  
            </p>
            <p className="text-md text-gray-600 mb-12 font-archivo pt-4">
              Stella offers a variety of features to <br /> turbo-charge the volunteering process.
              </p>
          </div>

          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-15">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`bg-white px-6 py-6 rounded-xl border-2 border-transparent transition duration-500 ${colorClasses[feature.color]}`}
              >
                <div className={`text-3xl mb-4 ${colorTextClasses[feature.color]} ${colorFillClasses[feature.color]} p-4 w-max rounded-full`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2 font-archivo font-medium">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base font-inter">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
