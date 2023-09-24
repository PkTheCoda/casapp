"use client"

import Image from 'next/image'
import casvector1 from '../Images/casvector1.png'
import { FaTachometerAlt } from 'react-icons/fa'

export default function CasComponent() {
    return (
        <>
            <div>
                <div className="font-manrope text-6xl text-center font-extrabold mt-10">Make CAS and IB 
                    <span className="main-gradient block">a breeze.</span>
                </div>

                <div className="h-max flex items-center justify-center px-40 gap-x-20 my-10">
                    <div className="bg-blue-300 rounded-xl w-2/5 py-10 flex flex-col items-center h-max meshgradientbluepurple gap-y-4">
                        <Image 
                            src={casvector1}
                            className='w-4/5 h-auto rounded-lg'
                        />
                        <div className='w-4/5 flex flex-col gap-y-3'>
                            <div className='font-inter text-white flex items-center gap-x-2'>
                                <FaTachometerAlt
                                    className='h-4 w-4'
                                />
                                <div className='inline'>Organization made easy.</div>
                            </div>
                            <div className='text-3xl text-white font-manrope font-extrabold'>
                                Organize your CAS 
                                <span className="block">
                                    all in one place.
                                </span>
                            </div>

                            <div className='font-inter text-white'>
                                With our intuitive dashboard, you're able to organize and view all your applications in one area.  
                            </div>

                            <button className="px-6 py-3 w-max bg-black font-outfit transition transform hover:scale-110 text-white rounded-full">
                                    Learn More
                            </button>

                        </div>
                    </div>

                    <div className="meshgradientbluepurple w-1/2 h-40 my-20 rounded-xl">
                        hi
                    </div>
                </div>

            </div>
        </>
    )
}