import React from 'react'
import learnmore from "../../../../public/learnmore.jpg"
import Image from 'next/image'

const LearnMore = () => {
    return (
        <div>
            <div className='container mx-auto relative'>
                <div className='grid grid-cols-2 gap-4 py-32'>
                    <div className='my-auto'>
                        <Image src={learnmore} alt="brand image" className="object-contain h-[600px] w-[600px]" />
                    </div>
                    <div className=' my-auto '>
                        <h2 className='font-rowdies font-bold text-5xl leading-[60px] text-[#1D1D45]'>The number one factor in  <span className='text-[#2AAA94]'>relevance drives out resistance.</span></h2>
                        <p className='font-saira font-normal text-lg pt-[20px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='pt-[20px]'>
                            <button className="btn btn-outline btn-primary">Learn More</button>
                        </div>

                    </div>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <svg width="80" height="82" viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M79.5613 64.997C81.8552 75.5273 71.8897 84.592 61.6232 81.3135L9.93831 64.8086C-0.328133 61.5301 -3.19565 48.3674 4.7768 41.1156L44.913 4.60758C52.8854 -2.64419 65.7185 1.45386 68.0125 11.9841L79.5613 64.997Z" fill="#BFE3C6" />
                    </svg>

                </div>

            </div>


        </div>
    )
}

export default LearnMore