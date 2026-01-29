import Image from 'next/image';
import React from 'react';

const SolutionDetailPage = () => {
  const solutionData = {
    title: "Безопасность жилых комплексов",
    blocks: [
      {
        id: 1,
        subtitle: "Видеонаблюдение в подъезде",
        description: "Видеонаблюдение в многоквартирном доме позволяет пресекать акты вандализма...",
        image: "/img/security-1.jpg"
      },
      {
        id: 2,
        subtitle: "Контроль доступа и автоматизация",
        description: "Заманбап системалар ар бир кирген-чыккан адамды көзөмөлдөп...",
        image: "/img/security-2.jpg"
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] py-8 lg:py-[60px] container">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[76px]">
        
        {/* Башкы заголовок */}
        <h1 className="font-['Montserrat'] font-medium text-[20px] lg:text-[24px] text-[#1f2937] mb-8 lg:mb-[40px]">
          {solutionData.title}
        </h1>

        {/* Вертикалдуу тизмек */}
        <div className="flex flex-col gap-12 lg:gap-[80px]">
          {solutionData.blocks.map((block) => (
            <div key={block.id} className="flex flex-col">
              
              {/* Сүрөт: Ноутбукта 854x481px */}
              <div className="w-full lg:w-[854px] aspect-[854/481] lg:h-[481px] rounded-[20px] overflow-hidden bg-[#d9d6d4] mb-5 lg:mb-[25px] flex-shrink-0">
                <Image
                  src={block.image}
                  alt={block.subtitle}
                  width={854}
                  height={481}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Текст блогу: Максималдуу туурасы 1166px */}
              <div className="w-full lg:max-w-[1166px]">
                <h2 className="font-['Montserrat'] font-medium text-[18px] lg:text-[20px] text-[#1f2937] mb-3 lg:mb-[15px]">
                  {block.subtitle}
                </h2>
                <p className="font-['Montserrat'] font-medium text-[15px] lg:text-[16px] leading-[150%] text-[#4b5563] break-words">
                  {block.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionDetailPage;