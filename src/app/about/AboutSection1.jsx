"use client"
import { BsFillExclamationOctagonFill, BsFillQuestionCircleFill, BsFillChatFill } from 'react-icons/bs';

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
            <div className="h-max flex flex-col items-center justify-center py-20">
                <div className="text-4xl lg:text-5xl font-manrope font-extrabold text-center">
                    What's <span className="text-gradient-full">The Problem?</span>
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
                
            </div>
            
        </>
    )
}