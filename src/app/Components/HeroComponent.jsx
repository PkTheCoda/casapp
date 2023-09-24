"use client"
import Image from 'next/image'
import dashboard from '../Images/dashboardother.svg'

export default function HeroComponent() {
    return (
        <>
            <div className='pb-20 relative square-pattern '>
                <div className="pt-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center z-40 bg-transparent">
                    <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-y-2 relative">

                        <div>
                            <h1 className="text-4xl font-extrabold font-manrope tracking-tighter text-black sm:text-6xl">
                                Stella makes finding volunteer <br/> opportunities <span className='main-gradient'>easy and accessible</span>
                            </h1>
                        </div>

                        <p className="mt-6 text-lg leading-8 font-inter">
                        Find the perfect volunteer opportunities in <b className='main-gradient'>minutes, not days.</b> <br /> The ultimate site for finding and getting volunteer hours.
                        </p>

                        <div>
                            <a
                                class="group relative inline-flex items-center overflow-hidden rounded-lg bg-black px-6 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                href="/download"
                                >
                                <span class="absolute -start-full transition-all group-hover:start-4">
                                    <svg
                                    class="h-5 w-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                    </svg>
                                </span>

                                <span class="font-inter transition-all group-hover:ms-4">
                                    Start Volunteering
                                </span>
                            </a>
                            <p className="mt-3 text-xs font-inter">No Payment required*</p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col items-center'>
                    <Image 
                            src={dashboard}
                            className='w-auto h-auto t-0'
                            alt="Mock Dashboard of Stella"
                    />
                </div>
            </div>

            <div
                className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-2xl sm:top-[5rem] w-[30rem] h-max"
                aria-hidden="true"
                >
                <div
                    className="pointer-events-none relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 opacity-30 sm:left-[1rem] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(42.64% 13.22%, 67.05% 8.43%, 88.27% 13.22%, 95.85% 29.9%, 88.27% 54.16%, 85.86% 74.44%, 77.88% 87.47%, 58.91% 88.7%, 44.01% 91.62%, 24.38% 99.67%, 13.46% 86.95%, 33.65% 48.25%, 33.65% 36.41%)',
                        pointerEvents: 'none'
                    }}
                    
                />
            </div>

        {/* <div
            className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:top-[15rem]"
            aria-hidden="true"
            >
            <div
                className="pointer-events-none relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 via-red-300 to-orange-500 opacity-30 sm:left-[90rem] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div> */}



        </>
    )
}