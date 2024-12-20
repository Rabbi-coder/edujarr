"use client";
import React from "react";
import brand1 from "../../../../public/brand1.png";
import brand2 from "../../../../public/brand2.png";
import brand3 from "../../../../public/brand3.png";
import brand4 from "../../../../public/brand4.png";
import brand5 from "../../../../public/brand5.png";
import brand6 from "../../../../public/brand6.png";
import Image from "next/image";

const SubBanner = () => {
  return (
    <div className="py-8 bg-black bg-gradient-to-r from-purple-500  to-blue-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 justify-items-center px-0 py-0 ">
          <div className="flex-1">
            <Image
              src={brand1}
              alt="brand image"
              className="object-contain h-[37px] w-[120px]"
            />
          </div>
          <div className="flex-1">
            <Image
              src={brand2}
              alt="brand image"
              className="object-contain h-[37px] w-[120px]"
            />
          </div>
          <div className="flex-1">
            <Image
              src={brand3}
              alt="brand image"
              className="object-contain h-[37px] w-[120px]"
            />
          </div>
          <div className="flex-1">
            <Image
              src={brand4}
              alt="brand image"
              className="object-contain h-[37px] w-[120px]"
            />
          </div>
          <div className="flex-1">
            <Image
              src={brand5}
              alt="brand image"
              className="object-contain h-[37px] w-[120px]"
            />
          </div>
          <div className="flex-1">
            <Image
              src={brand6}
              alt="brand image"
              className="object-contain h-[37px] w-[120px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
