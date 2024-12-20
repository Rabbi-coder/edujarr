"use client"

import React from 'react'

import test1 from "../../../../public/test1.png"
import test2 from "../../../../public/test2.png"
import test3 from "../../../../public/test3.png"
// import Image from 'next/image'
// import { IoStarSharp } from 'react-icons/io5';

// const Testimonials = () => {
//     return (
//         <div className='bg-gradient-to-b from-slate-50 to-blue-200 py-32'>
//             <div className="container mx-auto">
//                 <div className='flex flex-col items-center'>
//                     <h2 style={{ fontSize: '48px' }} className='font-rowdies font-bold text-[#2AAA94]'>Testimonials</h2>
//                     <p className='pt-[20px] w-[664px] text-center font-saira font-normal text-2xl'>
//                         What our student say about us
//                     </p>
//                 </div>
//                 <div className="py-[120px]">

//                     <div className="grid grid-cols-3 gap-4 ">
//                         <div>
//                             <div>

//                                 <div className=' bg-white w-[500px] h-[400px] rounded-lg '>
//                                     <div className=" py-12 px-12">
//                                         <div className='flex items-center space-x-4'>
//                                             <div className="w-10 rounded-full">
//                                                 <Image src={test1} alt='test' />
//                                             </div>
//                                             <div>
//                                                 <h3 className='font-rowdies font-bold text-xl'>Ronald Richards</h3>
//                                             </div>
//                                         </div>

//                                         <div className='pt-[40px] '>
//                                             <p className='font-saira font-normal text-lg'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
//                                         </div>

//                                         <div className='flex items-center space-x-2 pt-[20px]'>
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div>

//                                 <div className='bg-white w-[500px] h-[400px] rounded-lg '>
//                                     <div className=" py-12 px-12">
//                                         <div className='flex items-center space-x-4'>
//                                             <div className="w-10 rounded-full">
//                                                 <Image src={test2} alt='test' />
//                                             </div>
//                                             <div>
//                                                 <h3 className='font-rowdies font-bold text-xl'>Ronald Richards</h3>
//                                             </div>
//                                         </div>

//                                         <div className='pt-[40px] '>
//                                             <p className='font-saira font-normal text-lg'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
//                                         </div>

//                                         <div className='flex items-center space-x-2 pt-[20px]'>
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div>

//                                 <div className='bg-white w-[500px] h-[400px] rounded-lg '>
//                                     <div className=" py-12 px-12">
//                                         <div className='flex items-center space-x-4'>
//                                             <div className="w-10 rounded-full">
//                                                 <Image src={test3} alt='test' />
//                                             </div>
//                                             <div>
//                                                 <h3 className='font-rowdies font-bold text-xl'>Ronald Richards</h3>
//                                             </div>
//                                         </div>

//                                         <div className='pt-[40px] '>
//                                             <p className='font-saira font-normal text-lg'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
//                                         </div>

//                                         <div className='flex items-center space-x-2 pt-[20px]'>
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                             <IoStarSharp className='text-[#FFB800]' />
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>



//                 </div>

//             </div>
//         </div>

//     )
// }

// export default Testimonials


import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { IoStarSharp } from 'react-icons/io5';

const TouchSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        const mouseDownHandler = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const mouseLeaveHandler = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const mouseUpHandler = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const mouseMoveHandler = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;

            // Adjust the multiplier to control speed
            const speedMultiplier = 1; // Change this value to control scroll speed

            const walk = (x - startX) * speedMultiplier;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousedown', mouseDownHandler);
        slider.addEventListener('mouseleave', mouseLeaveHandler);
        slider.addEventListener('mouseup', mouseUpHandler);
        slider.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            slider.removeEventListener('mousedown', mouseDownHandler);
            slider.removeEventListener('mouseleave', mouseLeaveHandler);
            slider.removeEventListener('mouseup', mouseUpHandler);
            slider.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    const slides = [
        { img: '/test1.jpg', name: 'Ronald Richards', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', stars: 5 },
        { img: '/test2.jpg', name: 'Ronald Richards', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', stars: 5 },
        { img: '/test3.jpg', name: 'Ronald Richards', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', stars: 5 },
        { img: '/test2.jpg', name: 'Ronald Richards', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', stars: 5 },
        { img: '/test3.jpg', name: 'Ronald Richards', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', stars: 5 },
        { img: '/test1.jpg', name: 'Ronald Richards', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', stars: 5 },
        // Add more slides as needed
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap bg-gradient-to-b from-slate-50 to-blue-200 py-[150px] md:py-[100px] lg:py-[50px] xl:py-[150px]" ref={sliderRef}>
            {slides.map((slide, index) => (
                <div key={index} className="inline-block bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px] rounded-lg p-12 mx-4 md:mx-6 lg:mx-8 xl:mx-10">
                    <div className='flex items-center space-x-4'>
                        <div className="w-10 rounded-full">
                            <Image src={slide.img} alt='test' width={40} height={40} />
                        </div>
                        <div>
                            <h3 className='font-rowdies font-bold text-xl md:text-lg lg:text-xl xl:text-2xl'>{slide.name}</h3>
                        </div>
                    </div>
                    <div className='pt-[40px] md:pt-[20px] lg:pt-[30px] xl:pt-[40px]'>
                        <p className='font-saira font-normal text-lg md:text-md lg:text-lg xl:text-xl break-words overflow-hidden text-ellipsis'>{slide.text}</p>
                    </div>
                    <div className='flex items-center space-x-2 pt-[20px] md:pt-[10px] lg:pt-[15px] xl:pt-[20px]'>
                        {[...Array(slide.stars)].map((_, i) => (
                            <IoStarSharp key={i} className='text-[#FFB800]' />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TouchSlider;



