import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateBlock = () => {
  const data = [
    {
      id: 1,
      title: "Безопасность жилых комплексов",
      description: "Безопасность превыше всего! Воры, пожары, затопления — какие ещё угрозы таит современный мир для имущества граждан? Видеодомофония и централизованное управление...",
      image: "/img/placeholder.jpg",
    },
    {
      id: 2,
      title: "Безопасность жилых комплексов",
      description: "Современные системы безопасности позволяют контролировать доступ, видеонаблюдение и экстренные ситуации в одном интерфейсе.",
      image: "/img/placeholder.jpg",
    },
    {
      id: 3,
      title: "Безопасность жилых комплексов",
      description: "Комплексный подход к безопасности — это не роскошь, а необходимость для современных жилых объектов.",
      image: "/img/placeholder.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[40px] bg-[#F5F7FA]  container">
        <h1 style={{marginLeft:'20px'}} className='text-[24px] font-medium text-[#00162A]'>Комплексные решения под ключ</h1>
      {data.map((item) => (
        <div key={item.id} className="flex flex-col lg:flex-row w-full px-4 lg:px-0">
          
          {/* Сол боштук (Мобилдикте жок, ноутбукта 76px) */}
          {/* <div className="hidden lg:block lg:w-[76px] flex-shrink-0" /> */}
          
              <div className="w-full lg:w-[527px] aspect-[527/327] lg:h-[327px] rounded-xl overflow-hidden bg-[#d9d6d4] flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
               width={527}
                height={327}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Сүрөт менен тексттин ортосу */}
          <div className="h-5 lg:h-auto lg:w-[31px] flex-shrink-0" />

          {/* Текст блок: Ноутбукта 628px */}
          <div className="w-full lg:w-[628px] font-['Montserrat'] font-medium text-[#1f2937]">
            {/* Заголовок */}
            <h3 className="text-[18px] lg:text-[20px] leading-tight mb-4 lg:mb-[50px] mt-2 lg:mt-[10px]">
              {item.title}
            </h3>

            {/* Описаниe */}
            <p className="text-[15px] lg:text-[16px] leading-[130%] text-[#4b5563] mb-4 lg:mb-[10px]">
              {item.description}
            </p>

            {/* Читать дальше */}
            <Link style={{marginTop:'13px'}}
              href={`/solutionDetail/${item.id}`}
              className="text-[14px] text-green-600 hover:underline w-fit inline-block"
            >
              Читать дальше
            </Link>
          </div>

          {/* Оң боштук (Мобилдикте жок) */}
          <div className="hidden lg:block lg:w-[178px] flex-shrink-0" />

        </div>
      ))}
    </div>
  );
};

export default CorporateBlock;