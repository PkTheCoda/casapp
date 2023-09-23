"use client"

export default function HeroComponent() {
    return (
        <>
        <div className="bg-[#e9eefa] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mb-40 gap-y-2">

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

                <button className="px-6 py-3 bg-black font-inter transition transform hover:scale-110 mt-4 text-white rounded-lg">
                    Start Volunteering For Free.
                </button>
                <p className="mt-3 text-xs font-inter">No Payment required*</p>
            </div>
            <img
                src="https://www.figma.com/file/em0PnNFFrGPpdk9YEGEHVQ/Dashboard%2C-android-filter-(Community)?type=design&node-id=1326-9&mode=design&t=jh3cvQ05m3AfVDHk-4" 
                alt="Mock Dashboard of the software"
                className="w-64 h-64" 
            />
        </div>
        </>
    )
}