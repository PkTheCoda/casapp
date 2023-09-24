"use client"

import Image from 'next/image'
import casvector1 from '../Images/casvector1.png'
import casvector2 from '../Images/casvector2.png'
import { FaTachometerAlt, FaChartBar } from 'react-icons/fa'

export default function CasComponent() {
    return (
        <>
            <div>
                <div className="font-manrope text-6xl text-center font-extrabold mt-10">Make CAS and IB 
                    <span className="main-gradient block">a breeze.</span>
                </div>

                <div className="h-max flex items-center justify-center px-10 lg:px-40 gap-x-20 my-10">
                    <div className="bg-blue-300 rounded-xl w-2/5 py-10 flex flex-col items-center h-max meshgradientbluepurple gap-y-4">
                        <Image 
                            src={casvector1}
                            className='w-4/5 h-auto rounded-lg'
                            alt="Vector illustration of one of our features"
                        />
                        <div className='w-4/5 flex flex-col gap-y-3'>
                            <div className='font-inter text-white flex items-center gap-x-2'>
                                <FaTachometerAlt
                                    className='h-4 w-4'
                                />
                                <div className='inline'>Organization made easy.</div>
                            </div>
                            <div className='text-3xl text-white font-manrope font-extrabold'>
                                Organize your CAS Service
                                <span className="block">
                                    all in one place.
                                </span>
                            </div>

                            <div className='font-inter text-white'>
                                We make the service component of your CAS easier than ever. With our intuitive dashboard, you're able to organize and see all your applications in one place.   
                            </div>

                            <button className="px-6 py-3 w-max bg-black font-outfit transition transform hover:scale-110 text-white rounded-full">
                                    Learn More
                            </button>

                        </div>
                    </div>

                    <div className="bg-blue-300 rounded-xl w-2/5 py-12 flex flex-col items-center h-max meshgradientbluepurple gap-y-4">
                        <Image 
                            src={casvector2}
                            className='w-4/5 h-auto rounded-lg'
                            alt="Vector illustration of one of our features"
                        />
                        <div className='w-4/5 flex flex-col gap-y-3'>
                            <div className='font-inter text-white flex items-center gap-x-2'>
                                <FaChartBar
                                    className='h-4 w-4'
                                />
                                <div className='inline'>Detailed Stats & Overview</div>
                            </div>
                            <div className='text-3xl text-white font-manrope font-extrabold'>
                                Get Detailed Reminders
                                <span className="block">
                                    and Statistics
                                </span>
                            </div>

                            <div className='font-inter text-white'>
                                Our dashboard provides detailed statistics and oversight over all of your CAS reflections + evidence making it easier to organize and get them finished!  
                            </div>

                            <button className="px-6 py-3 w-max bg-black font-outfit transition transform hover:scale-110 text-white rounded-full">
                                    Learn More
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}