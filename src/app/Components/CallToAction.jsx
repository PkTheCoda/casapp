"use client"

export default function CallToAction() {
    return (
        <>
            <div className="relative h-[20rem] flex items-center justify-center flex-col gap-y-4">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-[10rem] blur-3xl w-full h-max"
                    aria-hidden="true"
                    >
                    <div
                        className="pointer-events-none relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-sky-500 to-purple-500 opacity-30 sm:left-[40rem] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(9.43% 30.36%, 16.22% 33.1%, 21.01% 27.41%, 26.18% 30.36%, 34.36% 33.1%, 44.66% 26.08%, 49.71% 32.46%, 54.24% 32.46%, 59.29% 35.83%, 67.55% 27.62%, 69.66% 35.83%, 67.67% 44.24%, 66.09% 53.17%, 65.53% 62.84%, 64.39% 70.02%, 60.8% 75.55%, 56.62% 76.94%, 51.79% 81.56%, 46.32% 82.51%, 42.16% 81.78%, 38.17% 80.46%, 28.04% 81.06%, 19.06% 87.27%, 14.09% 85.04%, 9.43% 80.11%, 6.43% 73.32%, 6.43% 55.97%, 8.57% 43.63%)',
                            pointerEvents: 'none'
                        }}
                        
                    />
                </div>

                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-[10rem] blur-3xl w-full h-max"
                    aria-hidden="true"
                    >
                    <div
                        className="pointer-events-none relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400 via-red-500 to-yellow-400 opacity-30 sm:left-[80rem] sm:w-[72.1875rem] transform"
                        style={{
                        clipPath:
                            'polygon(9.43% 30.36%, 16.22% 33.1%, 21.01% 27.41%, 26.18% 30.36%, 34.36% 33.1%, 44.66% 26.08%, 49.71% 32.46%, 54.24% 32.46%, 59.29% 35.83%, 67.55% 27.62%, 69.66% 35.83%, 67.67% 44.24%, 66.09% 53.17%, 65.53% 62.84%, 64.39% 70.02%, 60.8% 75.55%, 56.62% 76.94%, 51.79% 81.56%, 46.32% 82.51%, 42.16% 81.78%, 38.17% 80.46%, 28.04% 81.06%, 19.06% 87.27%, 14.09% 85.04%, 9.43% 80.11%, 6.43% 73.32%, 6.43% 55.97%, 8.57% 43.63%)',
                            pointerEvents: 'none'
                        }}
                        
                    />
                </div>

            <div className="text-6xl font-extrabold text-center">Ready to get <span className="inline main-gradient">started?</span></div>
            <div className="font-inter text-lg">Signup on our waitlist so you don't miss our release!</div>
            
            <div class="mx-auto max-w-xl">
                <div class="sm:flex sm:gap-4">
                    <div class="sm:flex-1">
                    <label for="email" class="sr-only">Email</label>

                    <input
                        type="email"
                        placeholder="Email address"
                        class="w-full rounded-md border-gray-200 bg-white p-3 font-inter shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    </div>

                    <button
                        type="submit"
                        class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 font-inter px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
                    >
                    <span class="text-sm font-medium"> Sign Up </span>

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
            </div>
        </>
    )
}