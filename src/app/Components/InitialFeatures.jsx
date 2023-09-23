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

import ibdpprogramlogo from '../Images/ibdpprogramlogo.png'
import ibmyplogopic from '../Images/ibmyplogopic.png'
import ibprogramfulllogo from '../Images/ibprogramfulllogo.png'
  


const featuresData = [
  {
    icon: <FaHandsHelping />,
    title: "Find Volunteer Opportunities",
    subtitle: "Discover a wide range of volunteering options tailored to your interests and location.",
    color: 'blue'
  },
  {
    icon: <FaBuilding />,
    title: "Connect with Local Businesses",
    subtitle: "Businesses in your area are looking for volunteers like you to support their initiatives.",
    color: 'red'
  },
  {
    icon: <FaGraduationCap />,
    title: "Streamline Your CAS Experience",
    subtitle: "Simplify the CAS service component by easily finding and applying for volunteer opportunities.",
    color: 'yellow'
  },
  {
    icon: <FaBusinessTime />,
    title: "Businesses and Schools Unite",
    subtitle: "Bridge the gap between businesses seeking help and IB schools with motivated students ready to volunteer.",
    color: 'green'
  },
  {
    icon: <FaLightbulb />,
    title: "Create Your Own Initiatives",
    subtitle: "Empower students to take initiative by proposing their own volunteer projects.",
    color: 'purple'
  },
  {
    icon: <FaClipboardCheck />,
    title: "Effortless Application Process",
    subtitle: "Apply to volunteer opportunities with ease and track your applications conveniently.",
    color: 'pink'
  },
];

export default function Features() {
    return (
      <div className="bg-[#e9eefa] pb-16">

        <div className='flex flex-col items-center justify-center gap-y-10 pb-20 bg-[#f6f7fc] pt-16'>
            <div className="text-center text-lg font-inter text-slate-600">Trusted by thousands of schools and <b>millions</b> of students.</div>

            <div className="h-20 flex justify-center items-center w-full gap-x-10">
                <Image 
                    src={ibdpprogramlogo}
                    className="h-20 w-auto"
                />

                <Image 
                    src={ibmyplogopic}
                    className="h-20 w-auto"
                />

                <Image 
                    src={ibprogramfulllogo}
                    className="h-20 w-auto"
                />
            </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10">
          <div className="text-center">
              <h2 className="text-5xl font-semibold mb-2 font-archivo">Why We Rule.</h2>
              <p className="text-md text-gray-600 mb-12 font-archivo">
              Stella offers a variety of features to <br /> turbo-charge the volunteering process.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-15">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`bg-white px-6 py-6 rounded-xl border-2 border-transparent transition duration-500 ${colorClasses[feature.color]}`}
              >
                <div className="text-3xl mb-4 text-blue-500 bg-blue-100 p-4 w-max rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2 font-archivo font-medium">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {feature.subtitle}
                </p>

                <p className="hover:underline text-black font-outfit cursor-pointer mt-4">
                    Try Now
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
