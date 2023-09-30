"use client"

import Image from 'next/image'

export default function BusinessCta() {
    return (
        <>
            <div className="my-20 flex flex-col gap-y-6 items-center justify-center">
                <div className='flex flex-col gap-y-4'>
                    <div className="font-sans font-semibold text-6xl text-center">It&apos;s your business&apos; time to <span className="shine-gradient">Shine</span> 🌟</div>
                    <p className='font-sans text-xl text-center text-slate-500'>Stay Tuned for updates.</p>
                </div>

                <div class="sm:flex sm:gap-4">
                    <div class="sm:flex-1 border-2 border-slate-200 rounded-md">
                    <label for="email" class="sr-only">Email</label>

                    <input
                        type="email"
                        placeholder="Email address"
                        class="placeholder:font-sans w-full rounded-md border-gray-900 bg-white p-3 font-inter shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    </div>

                    <button
                        type="submit"
                        class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
                    >
                    <span class="text-sm font-medium font-sans">Get Updates</span>

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
                    </button>
                </div>
            </div>
        </>
    )
}