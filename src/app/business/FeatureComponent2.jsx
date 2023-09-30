"use client"

import { CursorArrowRaysIcon, PencilSquareIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/20/solid'
import individualapplication from '../Images/individualapplication.svg'
import Image from 'next/image'

let feature2list = [
    {
        id: 1,
        title: "Seamless Interface",
        subtitle: "Filter through applications with our powerful filtering system and find the perfect candidate through our seamless interface.",
        icon: CursorArrowRaysIcon
    },
    {
        id: 2,
        title: "Details, anyone?",
        subtitle: "Make the application process easier by setting listing-specific questions to ask potential applicants",
        icon: PencilSquareIcon
    },
    {
        id: 3,
        title: "Functionality Galore",
        subtitle: "Add comments to applications, chat with applicants, view resumes, reject/accept, and much more with our powerful interface.",
        icon: ClipboardDocumentCheckIcon

    }
]



export default function FeatureComponent2() {
    return (
        <>
            <div className="h-max flex items-center square-pattern">
                <div className="mx-0 md:mx-20 lg:mx-60 w-full flex flex-col gap-y-12 my-20">

                    <div className="w-max flex flex-col gap-y-4">
                        <h1 className="font-sans font-semibold text-6xl">View and Accept Instantly.</h1>
                        <p className="text-slate-600 text-2xl">
                            Manage, edit, and accept applications <br /> in a breeze with Stella.
                            <span className="text-blue-500 hover:underline pl-4 cursor-pointer" onClick={() => alert("Coming Soon")}>Learn more.</span>
                        </p>
                    </div>

                    <div className="h-max flex flex-col lg:flex-row lg:gap-y-0 gap-y-8">
                        {feature2list.map((feature) => (
                            <div key={feature.id} className='w-full lg:w-1/3'>
                                <feature.icon className='h-8 w-auto text-blue-500'/>
                                <div className='font-sans font-semibold text-2xl py-2'>{feature.title}</div>
                                <p className='text-lg leading-6 text-[#828282] font-sans pr-8'>{feature.subtitle}</p>
                            </div>
                        ))}
                    </div>

                    <Image 
                        src={individualapplication}
                        className='w-full shadow-xl'
                    />

                    <p className='font-sans text-lg text-center text-slate-600'>Need Help? <span className='cursor-pointer hover:underline'>Contact us</span></p>


                </div>
            </div>
        </>
    )
}