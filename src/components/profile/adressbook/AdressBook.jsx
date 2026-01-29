import React from 'react';

const AddressBook = () => {
  const addresses = [
    {
      id: 1,
      name: "Асанов Актан",
      address: "ул. Пушкина, д. 10, кв. 5",
      cityZip: "Москва, 101000",
      country: "Россия",
      status: "Основной адрес",
    },
    {
      id: 2,
      name: "Асанов Актан",
      address: "ул. Пушкина, д. 10, кв. 5",
      cityZip: "Москва, 101000",
      country: "Россия",
      status: "Основной адрес",
    }
  ];

  return (
    <div className="w-full bg-[#F5F7FA] font-['Montserrat'] ">
      <div className="">
        {/* 1. Хлебные крошки - Мобилдикте кичине padding */}
        <div className="">
          <nav className="text-[12px] lg:text-[14px] text-[#4b5563]">
            Главная / Личный кабинет / <span className="text-[#1f2937] font-medium">Адресная книга</span>
          </nav>
        </div>

        {/* Хлебные крошки менен Заголовоктун ортосу 40px */}
        <div className="h-6 lg:h-[40px]" />

        {/* 2. Заголовок */}
        <div className="">
          <h1 className="text-[20px] lg:text-[24px] font-medium text-[#1f2937]">Адресная книга</h1>
        </div>

        <div className="h-4 lg:h-[20px]" />

        <div className="">
          <button className="w-full md:w-auto bg-[#122D52] text-white px-[30px] h-[48px] rounded-[8px] font-medium hover:bg-[#0d213d] transition-colors text-[14px] lg:text-[16px]">
            Добавить новый адрес
          </button>
        </div>

        <div className="h-6 lg:h-[40px]" />

        <div className="flex flex-col gap-[20px] lg:gap-[25px]">
          {addresses.map((item) => (
            <div 
              key={item.id}
              className="w-full md:w-[761px] min-h-[206px] lg:h-[206px] bg-white rounded-[12px] p-5 lg:p-[30px] flex flex-col justify-between relative"
              style={{
                boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
              }}
            >
              <div className="space-y-1 text-[14px] lg:text-[16px] text-[#4b5563]">
                <p className="font-semibold text-[#1f2937] text-[16px] lg:text-[18px] mb-2">{item.name}</p>
                <p>Адрес: {item.address}</p>
                <p>Город/Индекс: {item.cityZip}</p>
                <p>Страна: {item.country}</p>
                <p>Статус: <span className="text-green-600 font-medium">{item.status}</span></p>
              </div>

              <div className="mt-6 lg:mt-0 flex lg:absolute lg:bottom-[30px] lg:right-[30px] gap-3 lg:gap-[15px]">
                <button className="flex-1 lg:flex-none flex items-center justify-center border border-[#D1D5DB] px-4 lg:px-[20px] py-2 lg:py-[8px] rounded-[8px] text-[13px] lg:text-[14px] text-[#122D52] hover:bg-gray-50 transition-colors">
                  Удалить
                </button>
                <button className="flex-1 lg:flex-none flex items-center justify-center border border-[#D1D5DB] px-4 lg:px-[20px] py-2 lg:py-[8px] rounded-[8px] text-[13px] lg:text-[14px] text-[#122D52] hover:bg-gray-50 transition-colors">
                  Изменить
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AddressBook;