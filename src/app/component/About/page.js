import React from 'react'
import about1 from "../../../../public/about1.png"
import about2 from "../../../../public/about2.png"
import about3 from "../../../../public/about3.png"
import Image from 'next/image'

const About = () => {
    return (
        <div className='bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 py-32 relative'>
            <div className='absolute top-[-70px] left-0'>
                <svg width="490" height="951" viewBox="0 0 490 951" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_0_1)">
                        <circle cx="14.5" cy="475.5" r="175.5" fill="#3E96EE" />
                    </g>
                    <path opacity="0.2" d="M54.5 283.5C115.804 283.5 165.5 333.196 165.5 394.5C165.5 455.804 115.804 505.5 54.5 505.5L-149.5 505.5L-149.5 283.5L54.5 283.5Z" stroke="white" stroke-width="3" />
                    <path opacity="0.2" d="M51.5 239.5C137.104 239.5 206.5 308.896 206.5 394.5C206.5 480.104 137.104 549.5 51.4999 549.5L-149.5 549.5L-149.5 239.5L51.5 239.5Z" stroke="white" stroke-width="3" />
                    <path opacity="0.2" d="M51.5 260.5C125.506 260.5 185.5 320.494 185.5 394.5C185.5 468.506 125.506 528.5 51.4999 528.5L-149.5 528.5L-149.5 260.5L51.5 260.5Z" stroke="white" stroke-width="3" />
                    <defs>
                        <filter id="filter0_f_0_1" x="-461" y="0" width="951" height="951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_1" />
                        </filter>
                    </defs>
                </svg>

            </div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col items-center'>
                        <h2 style={{ fontSize: '48px' }} className='font-rowdies font-bold text-white'>Why <span className='text-[#4BE5CA]'>learn</span>  with our courses?</h2>
                        <p className='pt-[20px] w-[664px] text-center font-saira font-normal text-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-center mx-auto max-w-md pt-[94px] gap-60'>

                    <div className="flex-1">
                        <div className="card  w-80 ">
                            <figure className="px-10 pt-10">
                                <Image src={about1} alt='about' />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-saira font-bold text-2xl text-white">01. Learn</h2>
                                <p className='text-center w-[285px] pt-7 font-saira tex-md font-normal text-white'>Lorem ipsum dolor sit amet, consectetur
                                    dolorili adipiscing elit. Felis donec
                                    massa aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="card w-80 relative">
                            <div className="absolute left-[-100px] top-0 h-full w-1 border-l-2 border-dashed border-white"></div>
                            <div className="absolute right-[-100px] top-0 h-full w-1 border-r-2 border-dashed border-white"></div>
                            <figure className="px-10 pt-10">
                                <Image src={about2} alt='about' />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-saira font-bold text-2xl text-white">01. Learn</h2>
                                <p className='text-center w-[285px]  pt-7 font-saira tex-md font-normal text-white'>Lorem ipsum dolor sit amet, consectetur
                                    dolorili adipiscing elit. Felis donec
                                    massa aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="card  w-80 ">
                            <figure className="px-10 pt-10">
                                <Image src={about3} alt='about' />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-saira font-bold text-2xl text-white">01. Learn</h2>
                                <p className='text-center w-[285px]  pt-7 font-saira tex-md font-normal text-white'>Lorem ipsum dolor sit amet, consectetur
                                    dolorili adipiscing elit. Felis donec
                                    massa aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About