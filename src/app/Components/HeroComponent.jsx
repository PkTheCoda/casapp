"use client"
import Image from 'next/image'
import dashboard from '../Images/dashboardother.svg'

export default function HeroComponent() {
    return (
        <>
            <div className='pb-20 relative'>
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
                            <button className="px-6 py-3 z- bg-black font-inter transition transform hover:scale-110 mt-4 text-white rounded-lg">
                                Start Volunteering
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
            </div>

        <div
            className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-2xl sm:-top-[5rem]"
            aria-hidden="true"
            >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    'polygon(28.22% 33.13%, 37.2% 26.09%, 48.37% 23.76%, 60.27% 26.09%, 66.68% 29.23%, 70.05% 35.52%, 72.34% 46.86%, 71.78% 53.33%, 70.05% 61.09%, 62.84% 64.45%, 51.31% 69.45%, 38.91% 67.34%, 28.22% 57.35%, 23.5% 43.51%)',
                }}
            />
        </div>

        <div
            className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:top-[15rem]"
            aria-hidden="true"
            >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-700 via-red-300 to-blue-500 opacity-30 sm:left-[90rem] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    'polygon(29.43% 29.68%, 39.76% 20.45%, 53.62% 20.45%, 62.15% 25.67%, 70.77% 29.68%, 78.79% 33.4%, 82.55% 40.88%, 84.16% 54.27%, 85.78% 67.69%, 79.3% 79.55%, 70.03% 84.96%, 59.38% 83.54%, 44.14% 83.54%, 29.43% 79.55%, 23.94% 72.57%, 16.26% 54.15%, 20.92% 40.88%)',
                }}
            />
        </div>



        </>
    )
}