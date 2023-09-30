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
  


const featuresData = [
  {
    icon: <FaHandsHelping />,
    title: "Find Volunteer Opportunities",
    subtitle: "Discover a wide range of volunteering options tailored to your interests and location, making it easier than ever to give back to your community.",
    color: 'blue'
  },
  {
    icon: <FaBuilding />,
    title: "Connect with Local Businesses",
    subtitle: "Build valuable connections with businesses in your area that are actively seeking volunteers to support their initiatives, creating opportunities for meaningful collaboration.",
    color: 'red'
  },
  {
    icon: <FaGraduationCap />,
    title: "Streamline Your CAS Experience",
    subtitle: "Simplify your CAS service component by quickly finding and applying for volunteer opportunities that align with your academic goals and IB requirements.",
    color: 'yellow'
  },
  {
    icon: <FaBusinessTime />,
    title: "Businesses and Schools Unite",
    subtitle: "Bridge the gap between businesses seeking help and IB schools with motivated students ready to volunteer, fostering partnerships that benefit both sides.",
    color: 'green'
  },
  {
    icon: <FaLightbulb />,
    title: "Create Your Own Initiatives",
    subtitle: "Empower students to take initiative by proposing their own volunteer projects, giving them the freedom to make a positive impact in their community.",
    color: 'purple'
  },
  {
    icon: <FaClipboardCheck />,
    title: "Effortless Application Process",
    subtitle: "Apply to volunteer opportunities with ease and track your applications conveniently, streamlining your journey toward making a difference.",
    color: 'pink'
  },
];


export default function Features() {
    return (
      <div className="bg-white pb-16 relative">


        <div className="max-w-7xl mx-auto pt-20">
          <div className="text-center">

            <div class="tracking-tight text-6xl font-manrope font-extrabold">
                Packed &
                <div>
                  <span class="highlight-container">
                    <span class="highlight mr-4">
                      Full of
                    </span>
                  </span>
                  Features
                </div> 
            </div>
            <p className="text-md text-gray-600 mb-12 font-archivo pt-4 ">
              Stella offers a variety of features to <br /> turbo-charge the volunteering process.
              </p>
          </div>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-15">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`bg-[#f6f6f6] transform hover:scale-105 px-6 py-6 mx-4 rounded-xl border-2 border-transparent transition duration-300 ${colorClasses[feature.color]}`}
              >
                <div className={`text-3xl mb-4 ${colorTextClasses[feature.color]} ${colorFillClasses[feature.color]} p-4 w-max rounded-full`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2 font-archivo font-medium">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base font-outfit">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>

      
    );
  }
