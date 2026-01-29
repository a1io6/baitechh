"use client"
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './style.scss'
const eventsData = [
  { id: 1, title: 'Мероприятия Baitech', description: 'Мы проводим профессиональные и корпоративные мероприятия...' },
  { id: 2, title: 'Корпоративный выезд', description: 'Тимбилдинг на природе, сплавы на байдарках lorem smdgmslakg lksa gkla' },
  { id: 3, title: 'IT Конференция 2024', description: 'Крупнейшее событие года для разработчиков...' },
  { id: 4, title: 'Летний Хакатон', description: 'Ежегодное соревнование разработчиков...' },
];

export function News() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="pb-16">
      <div className="w-full  mx-auto px-6 xl:px-0">
        <h2 className="sm:text-5xl text-3xl font-bold md:text-center text-start text-[#1e293b]" style={{marginBottom:'50px'}}>
          Новости
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-[20px]">
            {eventsData.map((item) => (
              <div 
                key={item.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)]"
              >
                <div className="
                    bg-white 
                    flex flex-col 
                    gap-[10px] 
                    rounded-[15px] 
                    shadow-sm 
                    transition-all
                    duration-300
                    hover:shadow-lg
                  " 
                  style={{ padding: '10px' }}
                >
                  <div className="h-[308px] md:h-[308px] lg:h-[320px] w-full bg-[#bfbfbf] rounded-[10px] shrink-0">
                    <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 rounded-[10px]" />
                  </div>

                  <div className="px-2 h-[80px]">
                    <h3 className="text-[20px] font-semibold text-[#1e293b] mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#64748b] text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}