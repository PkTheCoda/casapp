import { CalendarDaysIcon, Cog6ToothIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import applicationview from '../Images/applicationview.svg'

const features = [
    {
      name: 'Customized Volunteer Matching',
      description:
        'AI-powered algorithm matches high school volunteers based on skills, availability, and interests for a perfect fit.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Real-time Shift Management',
      description:
        'Coordinate schedules, assign shifts, and get instant notifications for seamless event planning.',
      icon: CalendarDaysIcon,
    },
    {
      name: 'Comprehensive Volunteer Profiles',
      description:
        'Access detailed profiles and qualifications to select the right volunteers for your projects.',
      icon: UserCircleIcon,
    },
  ];
  

export default function FeatureComponent1() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Grow Faster</h2>
              <div className="mt-2 text-3xl font-sans font-semibold text-gray-900 sm:text-6xl">
                <span className="main-gradient">Elevating</span> Business Efficiency
                </div>
              <p className="mt-4 text-xl font-inter text-gray-600">
                Streamline your business with Stella. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-sky-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <Image
            src={applicationview}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          
        </div>
      </div>
    </div>
  )
}
