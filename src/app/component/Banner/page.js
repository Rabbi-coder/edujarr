// src/app/component/Banner/page.js
"use client"
import React from 'react';
import Image from 'next/image';
import { IoStarSharp } from 'react-icons/io5';
import taste from "../../../../public/taste.png"
import bannerimg from "../../../../public/bannerimg.png"
import ellipseOne from "../../../../public/Ellipse1.png"

const Banner = () => {
    return (
        <div className="banner bg-[#04016C] w-full h-[700px] overflow-hidden relative">
            <div className="banner-content container mx-auto pt-[150px] flex flex-row relative">
                <div className='flex-1' >
                    <div className='w-[800px]'>
                        <h3 className='text-2xl font-saira font-semibold text-white'>Successful coaches are visionaries</h3>
                        <h1 className='text-6xl font-rowdies font-normal text-white w-[500px] leading-[90px] pt-[20px]'>Good <span className='text-[#4BE5CA]'>coaching</span> is good teaching & nothing else.</h1>
                        <div className='flex gap-[20px] pt-[20px]'>
                            <button className="btn btn-outline btn-primary ">View Courses</button>
                            <button className="btn btn-outline btn-primary">Get Free Consultation</button>


                        </div>
                        <form className="w-[500px] pt-[50px]">
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Mockups, Logos..."
                                    required=""
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className=''>
                    <div className='flex-1 '>
                        <div className='relative flex-row'>
                            <h3 className='text-xs font-rowdies font-normal  text-white'>Ronald Richards</h3>
                            <p className='w-[272px] text-xs font-saira font-normal text-white pt-[15px] leading-6'>In a coaching role, you ask the questions and rely more on your
                                staff, who become the experts, to provide the information.</p>
                            <div className='flex flex-row pt-[15px]'>
                                <div>
                                    <p className='text-[#5AB48E] text-[10px]'>4.9</p>
                                </div>
                                <div className='flex flex-row pl-[5px]'>
                                    <div className='flex-1 text-[#81C7A2] text-[10px] pt-[2px]'>
                                        <IoStarSharp />
                                    </div>
                                    <div className='flex-1 text-[#81C7A2] text-[10px] pt-[2px]'>
                                        <IoStarSharp />
                                    </div>
                                    <div className='flex-1 text-[#81C7A2] text-[10px] pt-[2px]'>
                                        <IoStarSharp />
                                    </div>
                                    <div className='flex-1 text-[#81C7A2] text-[10px] pt-[2px]'>
                                        <IoStarSharp />
                                    </div>
                                    <div className='flex-1 text-[#81C7A2] text-[10px] pt-[2px]'>
                                        <IoStarSharp />
                                    </div>
                                </div>
                                <Image className='absolute left-[-30px] top-0' src={taste} alt='element' />

                            </div>



                        </div>

                    </div>
                </div>
                <div className='relative' >

                    <Image src={bannerimg} alt='bannerimage' className='h-full object-cover z-30 relative -top-20 right-0 ' />
                    <div >
                        <Image src={ellipseOne} alt='element' className='absolute left-[0px] top-0 z-0 rounded-full blur-2xl h-full w-full' />
                    </div>


                </div>

                <div className='absolute bottom-[-50px] left-1/2 transform -translate-x-1/2'>
                    <svg width="313" height="359" viewBox="0 0 313 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M45.5 153.5C45.5 92.1964 95.1964 42.5 156.5 42.5C217.804 42.5 267.5 92.1964 267.5 153.5L267.5 357.5L45.4999 357.5L45.5 153.5Z" stroke="white" stroke-width="3" />
                        <path opacity="0.3" d="M1.49997 156.5C1.49999 70.8959 70.8959 1.50001 156.5 1.50003C242.104 1.50004 311.5 70.8959 311.5 156.5L311.5 357.5L1.49994 357.5L1.49997 156.5Z" stroke="white" stroke-width="3" />
                        <path opacity="0.3" d="M22.5 156.5C22.5 82.4938 82.4939 22.5 156.5 22.5C230.506 22.5 290.5 82.4939 290.5 156.5L290.5 357.5L22.4999 357.5L22.5 156.5Z" stroke="white" stroke-width="3" />
                    </svg>
                </div>



            </div>

            <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                <svg width="232" height="554" viewBox="0 0 232 554" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_500)">
                        <circle cx="-45" cy="277" r="157" fill="#81C7A2" fill-opacity="0.3" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_500" x="-322" y="0" width="554" height="554" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_500" />
                        </filter>
                    </defs>
                </svg>

            </div>
        </div>
    );
};

export default Banner;







