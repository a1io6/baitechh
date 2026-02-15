import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SOLUTIONS_DATA } from './solutions';

const CorporateBlock = () => {
  return (
    <section className="w-full bg-[#F5F7FA] py-0">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <h2 className="text-[20px] font-medium md:text-[24px] font-bold text-[#00162A] mb-10 ">
          Комплексные решения под ключ
        </h2>

        <div className="flex flex-col gap-12">
          {SOLUTIONS_DATA.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8"
            >
              {/* Сүрөт блогу */}
              <div className="relative w-full lg:w-[527px] h-[327px] rounded-2xl overflow-hidden shadow-sm bg-gray-200 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={item.id === 1}
                  sizes="(max-width: 768px) 100vw, 527px"
                  className="object-cover"
                />
              </div>

              {/* Текст блогу */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-[24px] font-medium lg:text-[24px] text-[#00162A] mb-4 leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-[15px] lg:text-[16px] text-[#4b5563] leading-relaxed mb-6 max-w-[628px] h-[99px] overflow-hidden line-clamp-4">
                  {item.mainDescription}
                </p>

                <Link
                  href={`/solutionDetail/${item.id}`}
                  className="w-fit text-[15px] font-bold text-[#10B981] hover:text-[#059669] transition-colors flex items-center gap-2"
                >
                  Читать дальше
                  <span className="text-xl">→</span>
                </Link>
              </div>
              
              <div className="hidden lg:block w-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateBlock;