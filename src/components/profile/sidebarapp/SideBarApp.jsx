'use client'
import React, { useState } from 'react';
import { User, Key, BookOpen, Package, RotateCcw, CreditCard, Gift, LogOut, Menu, X } from 'lucide-react';
import ChangePassword from '../changepassword/ChangePassword';
import OrderHistory from '../historyorders/HistoryOrders';
import img from '../../../../assets/svg/Vector (49).svg'
import Image from 'next/image';
import TransactionHistory from '../transitionhistory/TransitionHistory';
import { Returns } from '../return/Returns';
import AddressBook from '../adressbook/AdressBook';
export default function SidebarApp() {
  const [activePage, setActivePage] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'profile', label: 'Моя информация', icon: User },
    { id: 'password', label: 'Изменить пароль', icon: Key },
    { id: 'address', label: 'Адресная книга', icon: BookOpen },
    { id: 'orders', label: 'История заказов', icon: Package },
    { id: 'returns', label: 'Возвраты', icon: RotateCcw },
    { id: 'transactions', label: 'История транзакций', icon: CreditCard },
    { id: 'bonuses', label: 'Бонусы', icon: Gift },
    { id: 'logout', label: 'Выход', icon: LogOut },
  ];

  const renderPageContent = () => {
    switch (activePage) {
      case 'profile':
        return (
          <div>
            <h1 className="text-[30px] font-bold mb-6">Моя информация</h1>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg" placeholder="+996 XXX XXX XXX" />
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Сохранить
              </button>
            </div>
          </div>
        );
      case 'password':
        return (
          <div>
           <ChangePassword/>
          </div>
        );
      case 'address':
        return (
          <>
          <AddressBook/>
          </>
        );
      case 'orders':
        return (
        <>
        <OrderHistory/>
        </>
        );
      case 'returns':
        return (
          <>
            <Returns/>
          </>
        );
      case 'transactions':
        return (
          <>
        <TransactionHistory/>
          </>
        );
      case 'bonuses':
        return (
          <div>
            <h1 className="text-[30px] font-bold mb-6">Бонусы</h1>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white mb-6">
              <p className="text-lg mb-2">Ваш баланс бонусов</p>
              <p className="text-[36px] font-bold">1250 бонусов</p>
            </div>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Начислено за покупку</p>
                    <p className="text-sm text-gray-600">20 января 2026</p>
                  </div>
                  <p className="font-bold text-green-600">+250</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'logout':
        return (
          <div>
            <h1 className="text-[30px] font-bold mb-6">Выход</h1>
            <p className="text-gray-600 mb-4">Вы уверены, что хотите выйти из аккаунта?</p>
            <div className="space-x-3">
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Выйти
              </button>
              <button 
                onClick={() => setActivePage('profile')}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Отмена
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const MenuContent = () => (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => {
              setActivePage(item.id);
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-[30px] transition-colors text-left ${
              activePage === item.id
                ? 'bg-blue-50 text-blue-600 font-medium border-l-8 border-[#0E2E5B] rounded-l-[7px]'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm ml-[5px]">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="flex h-screen container relative">
      {/* Основной контент */}
      <div className="sidebarapp  flex-1 relative">
        <div className="">
          <div className="flex items-center justify-between mb-6 relative">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex flex-col gap-[2px] items-center py-1 px-2 border rounded-lg bg-[#0E2E5B] hover:bg-gray-100 absolute top-[0px] right-0"
            >
                <Image src={img} alt="Menu" width={22} height={20}/>
                <p className='text-[11px] text-center text-white'>Меню</p>
            </button>
          </div>

          {/* Контент страницы */}
          {renderPageContent()}
        </div>
      </div>

      {/* Правое меню - всегда видно на десктопе */}
      <div className="hidden md:block w-[288px] max-h-[363px] rounded-[15px] bg-white shadow-lg py-1 absolute right-0 top-[0px]">
        <MenuContent/>
      </div>

      {/* Мобильное меню - выезжает справа */}
      {isMobileMenuOpen && (
        <>
          {/* Затемнение фона */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Меню */}
          <div className="fixed right-0 top-0 h-full w-[320px] bg-white shadow-2xl z-50 overflow-y-auto md:hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Личный кабинет</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <MenuContent />
            </div>
          </div>
        </>
      )}
    </div>
  );
}