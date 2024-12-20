"use client"
import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from "react-icons/io5"
import feature1 from "../../../../public/feature1.jpg"
import feature2 from "../../../../public/feature2.jpg"
import feature3 from "../../../../public/feature3.jpg"
import feature4 from "../../../../public/feature4.jpg"
import feature5 from "../../../../public/feature5.jpg"
import feature6 from "../../../../public/feature6.jpg"
import ellipse2 from "../../../../public/Ellipse2.png"
import Image from 'next/image'

const Feature = () => {
    return (
        <div className='bg-gradient-to-b from-slate-50 to-blue-200'>
            <div className='container mx-auto pt-[117px] relative     '>
                <Image src={ellipse2} alt="brand image" className="object-contain h-[100px] w-[100px] absolute left-0" />
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col items-center'>
                        <h2 style={{ fontSize: '48px' }} className='font-rowdies font-normal'>Featured <span className='text-[#2AAA94]'>Course</span></h2>
                        <p className='pt-[20px] w-[664px] text-center font-saira font-normal text-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-center pt-[94px] gap-8'>

                    <div className="card bg-base-100 w-96 shadow-xl flex-1">
                        <figure>
                            <Image
                                src={feature1}
                                alt="Shoes"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-between">
                                <p className="font-saira  text-[#4E596B] ">5,957 Students</p>
                                <span className='font-saira  text-[#4E596B] justify-end'>01h 49m</span>
                            </div>
                            <p className='className="font-saira font-semibold text-2xl pt-5'>Motion Graphics: Create a Nice
                                Typography Animation</p>
                            <div className="card-actions justify-between pt-[30px]">
                                <div className="font-saira font-semibold text-xl text-[#4E596B] ">$33.33</div>
                                <Link className='text-xl text-[#4E596B]' href={'/'}><IoCartOutline /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl flex-1">
                        <figure>
                            <Image
                                src={feature2}
                                alt="Shoes"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-between">
                                <p className="font-saira  text-[#4E596B] ">5,957 Students</p>
                                <span className='font-saira  text-[#4E596B] justify-end'>01h 49m</span>
                            </div>
                            <p className='className="font-saira font-semibold text-2xl pt-5'>Motion Graphics: Create a Nice
                                Typography Animation</p>
                            <div className="card-actions justify-between pt-[30px]">
                                <div className="font-saira font-semibold text-xl text-[#4E596B] ">$33.33</div>
                                <Link className='text-xl text-[#4E596B]' href={'/'}><IoCartOutline /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl flex-1">
                        <figure>
                            <Image
                                src={feature3}
                                alt="Shoes"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-between">
                                <p className="font-saira  text-[#4E596B] ">5,957 Students</p>
                                <span className='font-saira  text-[#4E596B] justify-end'>01h 49m</span>
                            </div>
                            <p className='className="font-saira font-semibold text-2xl pt-5'>Motion Graphics: Create a Nice
                                Typography Animation</p>
                            <div className="card-actions justify-between pt-[30px]">
                                <div className="font-saira font-semibold text-xl text-[#4E596B] ">$33.33</div>
                                <Link className='text-xl text-[#4E596B]' href={'/'}><IoCartOutline /></Link>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='flex items-center justify-center pt-[50px] gap-8'>

                    <div className="card bg-base-100 w-96 shadow-xl flex-1">
                        <figure>
                            <Image
                                src={feature4}
                                alt="Shoes"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-between">
                                <p className="font-saira  text-[#4E596B] ">5,957 Students</p>
                                <span className='font-saira  text-[#4E596B] justify-end'>01h 49m</span>
                            </div>
                            <p className='className="font-saira font-semibold text-2xl pt-5'>Motion Graphics: Create a Nice
                                Typography Animation</p>
                            <div className="card-actions justify-between pt-[30px]">
                                <div className="font-saira font-semibold text-xl text-[#4E596B] ">$33.33</div>
                                <Link className='text-xl text-[#4E596B]' href={'/'}><IoCartOutline /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl flex-1">
                        <figure>
                            <Image
                                src={feature5}
                                alt="Shoes"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-between">
                                <p className="font-saira  text-[#4E596B] ">5,957 Students</p>
                                <span className='font-saira  text-[#4E596B] justify-end'>01h 49m</span>
                            </div>
                            <p className='className="font-saira font-semibold text-2xl pt-5'>Motion Graphics: Create a Nice
                                Typography Animation</p>
                            <div className="card-actions justify-between pt-[30px]">
                                <div className="font-saira font-semibold text-xl text-[#4E596B] ">$33.33</div>
                                <Link className='text-xl text-[#4E596B]' href={'/'}><IoCartOutline /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl flex-1">
                        <figure>
                            <Image
                                src={feature6}
                                alt="Shoes"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-between">
                                <p className="font-saira  text-[#4E596B] ">5,957 Students</p>
                                <span className='font-saira  text-[#4E596B] justify-end'>01h 49m</span>
                            </div>
                            <p className='className="font-saira font-semibold text-2xl pt-5'>Motion Graphics: Create a Nice
                                Typography Animation</p>
                            <div className="card-actions justify-between pt-[30px]">
                                <div className="font-saira font-semibold text-xl text-[#4E596B] ">$33.33</div>
                                <Link className='text-xl text-[#4E596B]' href={'/'}><IoCartOutline /></Link>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center items-center py-24'>
                    <button className="btn btn-outline btn-primary font-saira ">Explore courses</button>
                </div>
            </div>

        </div>
    )
}

export default Feature