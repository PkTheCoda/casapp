"use client"
import Image from 'next/image';
import { BsFillExclamationOctagonFill, BsFillQuestionCircleFill, BsFillChatFill } from 'react-icons/bs';
import abouthelp from '../Images/abouthelp.png'

export default function AboutSection2() {

    const statistics = [
        {
          title: "50%",
          description: "of students lack access to basic volunteering opportunities.",
          icon: <BsFillExclamationOctagonFill size={40} className="text-yellow-500" />,
        },
        {
          title: "30%",
          description: "Limiting their capacity to engage in community initiatives.",
          icon: <BsFillQuestionCircleFill size={40} className="text-green-500" />,
        },
        {
          title: "26%",
          description: "Due to a lack of efficient matching platforms.",
          icon: <BsFillChatFill size={40} className="text-blue-500" />,
        },
    ];

    return (
        <>
            <div className="h-max flex flex-col items-center justify-center pt-40">
                <div className="text-4xl lg:text-5xl font-manrope font-extrabold text-center">
                    What&apos;s <span className="text-gradient-full">The Problem?</span>
                </div>
                
                <div className="text-center text-gray-500 font-sans text-lg mt-4 px-[20%]">
                    There is no <b className='italic'>standardized and fast</b> way of finding volunteer opportunities for students.
                </div>

                <div className="flex flex-wrap justify-center">
                    {statistics.map((statistic, index) => (
                        <div key={index} className="aboutheromesh px-8 py-4 m-6 rounded-lg shadow-lg w-96">
                        {statistic.icon}
                            <h2 className="text-5xl font-manrope font-bold mt-4 mb-2">{statistic.title}</h2>
                            <p className="text-lg font-inter text-gray-800">{statistic.description}</p>
                            <p className='text-lg text-blue-100 cursor-pointer   underline font-sans'>View Source</p>
                        </div>
                    ))}
                </div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-manrope text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                            Our <span className='text-gradient-full'>Solution</span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                            Stella offers a solution for just this - we connect students and businesses together
                            and make the process easier. 
                            </p>
                        </div>
                        <p className="mb-4 text-sm font-extrabold font-manrope tracking-widest uppercase">
                            Features
                        </p>
                        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                            <ul className="space-y-3">
                            <li className="flex font-inter">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Easy to Use
                            </li>
                            <li className="flex font-inter">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Intuitive System
                            </li>
                            <li className="flex font-inter">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Free to Use
                            </li>
                            </ul>
                            <ul className="space-y-3">
                            <li className="flex font-inter">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Easily Filterable Database
                            </li>
                            <li className="flex font-inter">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Built for CAS & IB
                            </li>
                            <li className="flex font-inter">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Manage all in one place
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div>
                        <Image
                            className="object-cover w-full h-56sm:h-96"
                            src={abouthelp}
                            alt=""
                        />
                        </div>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}