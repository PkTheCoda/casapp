import Image from 'next/image'

export default function BusinessCta() {
    return (
        <>
            <div className="my-20 flex flex-col gap-y-10 items-center justify-center">
                <div className="font-sans font-semibold text-6xl text-center">It's your business' time to Shine 🌟</div>

                <button
                    className="bg-slate-200 p-4 font-sans rounded-lg w-max text-slate-600 transition transform hover:scale-110 font-semibold"
                >
                    Make a Business Account
                </button>
            </div>
        </>
    )
}