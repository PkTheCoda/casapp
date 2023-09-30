import Image from 'next/image'

export default function BusinessCta() {
    return (
        <>
            <div className="my-20 flex flex-col gap-y-10 items-center justify-center">
                <div className="font-sans font-semibold text-6xl text-center">It&apos;s your business&apos; time to <span className="shine-gradient">Shine</span> 🌟</div>

                <button
                    className="bg-gradient-to-br from-blue-500 via-blue-600 to-gray-900 shadow-md p-4 font-sans rounded-lg w-max text-white transition transform hover:scale-110 font-semibold"
                >
                    Make a Business Account
                </button>
            </div>
        </>
    )
}