'use client'
import Under from '@/components/ui/under/Under';
import React from 'react';

const ChangePassword = () => {
  return (
    <div className="bg-[#F5F7FA] ">
      <div className=" lg:pt-[0px]">
        
        <div className=" mb-8 lg:mb-[40px]">
          <Under text={"Главная"} text1={"Личный кабинет"} text2={"Изменить пароль"} />
        </div>

        <div className="">
          <form className="flex flex-col gap-6 lg:gap-[25px]">
            
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] lg:text-[16px] font-medium text-[#1f2937]">
                * Пароль
              </label>
              <input
                type="password"
                placeholder="Пароль"
                className="w-full lg:w-[845px] h-[48px] px-[20px] bg-white border border-[#D1D5DB] rounded-[8px] outline-none focus:border-[#122D52] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] lg:text-[16px] font-medium text-[#1f2937]">
                * Подтвердите пароль
              </label>
              <input
                type="password"
                placeholder="........................"
                className="w-full lg:w-[845px] h-[48px] px-[20px] bg-white border border-[#D1D5DB] rounded-[8px] outline-none focus:border-[#122D52] transition-colors"
              />
            </div>

            <div className="mt-4 lg:mt-[15px]">
              <button
                type="submit"
                className="w-full lg:w-[280px] h-[52px] lg:h-[48px] bg-[#122D52] text-white font-medium rounded-[8px] hover:bg-[#0d213d] transition-colors text-[16px] lg:text-[14px]"
              >
                Сохранить
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ChangePassword;