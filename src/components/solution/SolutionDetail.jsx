"use client";

import Image from 'next/image';
import React from 'react';
import { useParams } from 'next/navigation';
import { useSolutionBannerById } from '@/lib/solution/hooks/hooks';

const SolutionDetail = () => {
  const params = useParams();
  const { data, isLoading, isError } = useSolutionBannerById(params.id);

  if (isLoading) return <div className='loader'></div>;
  if (isError) return <div>Ошибка загрузки</div>;

  const imageUrl = data?.existing_images?.[0]?.image || '';

  return (
    <div className="w-full  bg-[#F5F7FA] container pb-[30px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-[0px]">

        <h1 className="font-medium text-[20px] lg:text-[24px] text-[#1f2937] mb-8 lg:mb-[40px]">
          {data?.title}
        </h1>

        <div className="flex flex-col gap-[31px]">
          <div className="flex flex-col">

            {imageUrl && (
              <div className="w-full lg:w-[854px] aspect-[854/481] lg:h-[481px] rounded-[20px] overflow-hidden bg-[#d9d6d4] mb-2 lg:mb-[10px]">
                <Image
                  src={imageUrl}
                  alt={data?.title}
                  width={854}
                  height={481}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="w-full lg:max-w-[1166px]">
              <p className="font-medium text-[16px] lg:text-[20px] leading-[120%] text-[#00162ACC] break-words">
                {data?.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;