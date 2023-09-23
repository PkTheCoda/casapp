"use client"
import Image from 'next/image'
import dashboard from '../Images/dashboardother.svg'

export default function HeroComponent() {
    return (
        <>
        <div className="bg-[#e9eefa] pt-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-y-2 relative">

                <div>
                    <h1 className="text-4xl font-[600] font-inter tracking-tight text-gray-900 sm:text-7xl">
                        Volunteer opportunities 
                    </h1>

                    <h1 className="mt-4 text-4xl font-[600] font-inter tracking-tight text-gray-900 sm:text-7xl">
                        made <span className="bg-yellow-400 rounded-xl mt-10 px-2">accessible.</span>
                    </h1>
                </div>

                <p className="mt-6 text-lg leading-8 font-inter">
                Find the perfect volunteer opportunities in <b>minutes, not days.</b> <br /> The ultimate site for finding and getting volunteer hours.
                </p>

                <div>
                    <button className="px-6 py-3 bg-black font-inter transition transform hover:scale-110 mt-4 text-white rounded-lg">
                        Start Volunteering For Free.
                    </button>
                    <p className="mt-3 text-xs font-inter">No Payment required*</p>
                </div>
            </div>

        </div>

        <div className='bg-gradient-to-b from-[#e9eefa] via-white via-70% to-white flex flex-col items-center'>
            <Image 
                    src={dashboard}
                    className='w-auto h-auto t-0'
                    alt="Test"
            />
        </div>
        </>
    )
}