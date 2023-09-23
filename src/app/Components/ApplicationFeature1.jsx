import applications from '../Images/applications.svg'
import search from '../Images/search.svg'
import Image from 'next/image'
import { FaFilter, FaSearch } from 'react-icons/fa';


export default function ApplicationFeature1() {
    return (
        <>
            <div className="py-20 pt-40 flex justify-center items-center relative">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:top-0"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 opacity-30 sm:left-[70rem] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(29.43% 29.68%, 39.76% 20.45%, 53.62% 20.45%, 62.15% 25.67%, 70.77% 29.68%, 78.79% 33.4%, 81.82% 40.98%, 78.79% 51.37%, 78.79% 62.2%, 67.15% 69.94%, 48.58% 67.17%, 33.89% 65.46%, 21.92% 59.94%, 16.26% 54.15%, 20.92% 40.88%)',
                    }}
                />
            </div>
                <div className="w-[70%] h-max flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 flex flex-col justify-center gap-y-2 ">
                        <div className="font-archivo text-medium text-5xl flex flex-col gap-y-2">
                            <div className='bg-gradient-to-bl from-green-300 to-blue-500  w-max p-2 rounded-lg'>
                                <FaFilter className='h-5 w-5 text-white '/>
                            </div>
                            One Massive, <br/> Filterable, and <br />Convenient Database.
                        </div>
                        <p>
                            Stella allows you to effortlessly navigate our extensive volunteer opportunities database, helping you discover the ideal match for your interests and goals.
                        </p>
                        <button className="px-6 py-3 w-max bg-black font-archivo transition transform hover:scale-110 mt-4 text-white rounded-full">
                                Learn More
                        </button>
                    </div>
                    <div className='pt-8 lg:pt-0 lg:w-1/2 flex items-center'>
                        <Image 
                            src={applications}
                            className='w-max h-auto'
                        />
                    </div>
                </div>
            </div>

            <div className="py-20 flex justify-center items-center ">
                <div className="w-[70%] h-max flex-col lg:flex-row flex">

                    <div className='lg:w-1/2 flex items-center'>
                        <Image 
                            src={search}
                            className='w-max h-auto p-4'
                        />
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-center gap-y-4 pl-8">
                        <div className="font-archivo text-medium text-5xl flex flex-col gap-y-2">
                            <div className='bg-gradient-to-bl from-yellow-500 to-orange-300  w-max p-2 rounded-lg'>
                                <FaSearch className='h-5 w-5 text-white '/>
                            </div>
                            A Powerful Search & Filtering System
                        </div>
                        <p>
                            Stella allows you to effortlessly navigate our extensive volunteer opportunities database, helping you discover the ideal match for your interests and goals.
                        </p>
                        <button className="px-6 py-3 w-max bg-black font-archivo transition transform hover:scale-110 mt-4 text-white rounded-full">
                                Learn More
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}