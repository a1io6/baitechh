'use client'
import Under from '@/components/ui/under/Under';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { $api } from '../../../../API/api';

const ChangePassword = () => {
  const [step, setStep] = useState(1); // 1-Email, 2-OTP, 3-New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [passwords, setPasswords] = useState({
    new_password: '',
    confirm_password: ''
  });

  // 1. Запрос кода (OTP)
  const requestMutation = useMutation({
    mutationFn: (data) => $api.post('/api/password-reset/request/', data),
    onSuccess: () => setStep(2),
    onError: (error) => alert(error.response?.data?.detail || 'Ошибка запроса')
  });

  // 2. Верификация кода
  const verifyMutation = useMutation({
    mutationFn: (data) => $api.post('/api/password-reset/verify/', data),
    onSuccess: () => setStep(3), // Если код верный, идем к паролю
    onError: (error) => alert(error.response?.data?.detail || 'Неверный код')
  });

  // 3. Установка нового пароля
  const completeMutation = useMutation({
    mutationFn: (data) => $api.post('/api/password-reset/complete/', data),
    onSuccess: () => {
      alert('Пароль успешно изменен!');
      // Здесь можно сделать роут на логин: router.push('/login')
    },
    onError: (error) => alert(error.response?.data?.detail || 'Ошибка при сохранении пароля')
  });

  const handlePasswordsChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const onFinalSubmit = (e) => {
    e.preventDefault();
    if (passwords.new_password !== passwords.confirm_password) {
      alert("Пароли не совпадают");
      return;
    }
    // Отправляем пароли (обычно бэкенд также требует email или токен в этом запросе)
    completeMutation.mutate(passwords);
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <div className="max-w-[845px]">
        <div className="mb-8 lg:mb-[40px]">
          <Under text={"Главная"} text1={"Личный кабинет"} text2={"Восстановление пароля"} />
        </div>

        {/* ШАГ 1: EMAIL */}
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); requestMutation.mutate({ email }); }} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#1f2937]">* Электронная почта</label>
              <input 
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className="w-full h-[48px] px-5 bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#122D52]"
              />
            </div>
            <button disabled={requestMutation.isPending} className="w-full lg:w-[280px] h-[48px] bg-[#122D52] text-white rounded-lg disabled:bg-gray-400">
              {requestMutation.isPending ? 'Отправка...' : 'Получить код'}
            </button>
          </form>
        )}

        {/* ШАГ 2: OTP */}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); verifyMutation.mutate({ email, otp }); }} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-[#122D52] font-medium">Код отправлен на {email}</p>
              <label className="font-medium text-[#1f2937]">* Введите код подтверждения</label>
              <input 
                type="text" required value={otp} onChange={(e) => setOtp(e.target.value)}
                placeholder="Код из письма"
                className="w-full h-[48px] px-5 bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#122D52]"
              />
            </div>
            <div className="flex gap-4">
              <button disabled={verifyMutation.isPending} className="w-full lg:w-[280px] h-[48px] bg-[#122D52] text-white rounded-lg disabled:bg-gray-400">
                {verifyMutation.isPending ? 'Проверка...' : 'Подтвердить код'}
              </button>
              <button type="button" onClick={() => setStep(1)} className="text-[#122D52] underline text-sm">Изменить почту</button>
            </div>
          </form>
        )}

        {/* ШАГ 3: НОВЫЙ ПАРОЛЬ */}
        {step === 3 && (
          <form onSubmit={onFinalSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[#1f2937]">* Новый пароль</label>
                <input 
                  type="password" name="new_password" required value={passwords.new_password} onChange={handlePasswordsChange}
                  className="w-full h-[48px] px-5 bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#122D52]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[#1f2937]">* Подтвердите пароль</label>
                <input 
                  type="password" name="confirm_password" required value={passwords.confirm_password} onChange={handlePasswordsChange}
                  className="w-full h-[48px] px-5 bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#122D52]"
                />
              </div>
            </div>
            <button disabled={completeMutation.isPending} className="w-full lg:w-[280px] h-[48px] bg-[#122D52] text-white rounded-lg disabled:bg-gray-400">
              {completeMutation.isPending ? 'Сохранение...' : 'Сбросить пароль'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;