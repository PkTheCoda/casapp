"use client"

export default function AboutContact() {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-4">
              <div>
              </div>
              <h2 className="max-w-xl pb-4 font-manrope text-3xl font-extrabold leading-none text-gray-900 sm:text-5xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-10 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="b039bae0-fdd5-4311-b198-8557b064fce0"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{' '}
                Failing is not an option <br /><span className="text-gradient-full">Anywhere</span>
              </h2>
              <p className="text-base text-gray-700 md:text-xl">
                Sign up for our waitlist and join the next big platform - one dedicated to making student and business life easier.
              </p>
            </div>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transform hover:scale-110 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Join
              </button>
            </form>
            <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16">
              By signing up, you agree to us sending you (non-spammy!) emails about our updates, planned release, and more.
            </p>
            {/* <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    );
  };