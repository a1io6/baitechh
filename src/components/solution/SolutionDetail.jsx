"use client";

import Image from 'next/image';
import React from 'react';
import { useParams } from 'next/navigation';
import { SOLUTIONS_DATA } from './solutions';

const SolutionDetail = () => {
  const params = useParams();
  
  const currentSolution = SOLUTIONS_DATA.find(item => item.id === Number(params.id)) || SOLUTIONS_DATA[0];

  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] py-0 lg:py-[60px] container">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[0px]">
        
        {/* Башкы заголовок */}
        <h1 className="font-medium text-[20px] lg:text-[24px] text-[#1f2937] mb-8 lg:mb-[40px]">
          {currentSolution.title}
        </h1>

        {/* Блоктордун ортосундагы аралыкты (gap) 31px кылдык */}
        <div className="flex flex-col gap-[31px]">
          {currentSolution.blocks.map((block, index) => (
            <div key={block.id} className="flex flex-col">
              
              {/* СҮРӨТ */}
              <div className="w-full lg:w-[854px] aspect-[854/481] lg:h-[481px] rounded-[20px] overflow-hidden bg-[#d9d6d4] mb-2 lg:mb-[10px] flex-shrink-0">
                <Image
                  src={block.image}
                  alt={block.subtitle}
                  width={854}
                  height={481}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ТЕКСТ БЛОГУ - min-h-[120px] кошулду */}
              <div className="w-full lg:max-w-[1166px] min-h-[120px]">
                {/* Название */}
                <h2 className=" font-medium text-[18px] lg:text-[24px] text-[#1f2937] mb-1 lg:mb-[5px]">
                  {block.subtitle}
                </h2>

                {/* Описание */}
                <p className=" font-medium text-[16px] lg:text-[20px] leading-[120%] text-[#00162ACC] break-words">
                  {index === 0 ? (
                    <>
                      {currentSolution.mainDescription}
                      <br /><br />
                      {block.description}
                    </>
                  ) : (
                    block.description
                  )}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;