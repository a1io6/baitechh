// app/codeverify/page.jsx
"use client"
import React, { useState, useRef, Suspense, useEffect } from 'react';
import './CodeVerify.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';
import CloseRegister from '@/components/ui/auth/closeregister';
import Button from '@/components/ui/auth/buttton';
import { useResendActivationCode, useVerifyRegistration } from '@/lib/auth/hooks/hooks';

export function CodeVerifyContent() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // ✅ Сохраняем email в state чтобы не потерять при ре-рендерах
  const [email, setEmail] = useState('');

  const verifyMutation = useVerifyRegistration();
  const resendMutation = useResendActivationCode();

  // ✅ Получаем email из URL один раз при загрузке
  useEffect(() => {
    const emailFromUrl = searchParams.get('email');
    console.log('📧 Email из URL:', emailFromUrl);
    
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    } else {
      toast.error('Email не найден. Пожалуйста, зарегистрируйтесь снова.');
      setTimeout(() => router.push('/register'), 2000);
    }
  }, [searchParams, router]);

  const handleChange = (index, value) => {
    // Разрешаем только цифры
    if (value !== '' && !/^\d$/.test(value)) {
      return;
    }

    const newCode = [...code];
    
    // Если вставили больше одного символа (автозаполнение)
    if (value.length > 1) {
      const digits = value.slice(0, 4).split('');
      digits.forEach((digit, i) => {
        if (index + i < 4 && /^\d$/.test(digit)) {
          newCode[index + i] = digit;
        }
      });
      setCode(newCode);
      
      // Фокус на последнее заполненное поле или следующее пустое
      const nextEmptyIndex = newCode.findIndex(d => d === '');
      const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex;
      setTimeout(() => inputRefs.current[focusIndex]?.focus(), 0);
      return;
    }

    // Обычный ввод одной цифры
    newCode[index] = value;
    setCode(newCode);

    // Автоматический переход к следующему полю
    if (value !== '' && index < 3) {
      setTimeout(() => inputRefs.current[index + 1]?.focus(), 0);
    }
  };

  const handleKeyDown = (index, e) => {
    // Обработка удаления (Backspace)
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newCode = [...code];
      
      if (code[index] !== '') {
        // Удаляем текущую цифру
        newCode[index] = '';
        setCode(newCode);
      } else if (index > 0) {
        // Переходим назад и удаляем предыдущую
        newCode[index - 1] = '';
        setCode(newCode);
        setTimeout(() => inputRefs.current[index - 1]?.focus(), 0);
      }
      return;
    }

    // Обработка Delete
    if (e.key === 'Delete') {
      e.preventDefault();
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
      return;
    }

    // Обработка стрелок
    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 3) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }

    // Обработка Enter
    if (e.key === 'Enter' && code.join('').length === 4) {
      handleSubmit(e);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    // Извлекаем только цифры
    const digits = pastedData.replace(/\D/g, '').slice(0, 4);
    
    if (digits.length === 4) {
      const pastedCode = digits.split('');
      setCode(pastedCode);
      
      // Фокус на последнее поле
      setTimeout(() => inputRefs.current[3]?.focus(), 0);
    } else {
      toast.error('Пожалуйста, вставьте 4-значный код');
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const fullCode = code.join('');
  
  console.log('🔍 Проверка данных перед отправкой:');
  console.log('Email:', email);
  console.log('OTP:', fullCode);
  console.log('Длина OTP:', fullCode.length);
  
  if (fullCode.length !== 4) {
    toast.error('Пожалуйста, введите все 4 цифры');
    return;
  }

  if (!email) {
    toast.error('Email не найден');
    return;
  }

  const payload = {
    email: email,
    otp: fullCode
  };
  
  console.log('📦 Payload для отправки:', payload);

  try {
    console.log('📤 Отправка запроса...');
    const result = await verifyMutation.mutateAsync(payload);
    console.log('✅ Результат:', result);
  } catch (error) {
    console.error('❌ Ошибка:', error);
    console.error('Response data:', error?.response?.data);
    
    const errorMessage = 
      error?.response?.data?.message || 
      error?.response?.data?.detail ||
      error?.response?.data?.error ||
      'Неверный код. Попробуйте еще раз';
    
    toast.error(errorMessage);
    
    setCode(['', '', '', '']);
    setTimeout(() => inputRefs.current[0]?.focus(), 0);
  }
};

  const handleResendCode = async () => {
    console.log('🔥 Клик на повторную отправку');
    console.log('📧 Email:', email);
    
    if (!email) {
      console.log('❌ Email отсутствует!');
      toast.error('Email не найден');
      return;
    }

    try {
      console.log('📤 Отправляю запрос на повторную отправку кода...');
      await resendMutation.mutateAsync({ email });
      console.log('✅ Код успешно отправлен повторно');
      
      toast.success('Код отправлен повторно на ' + email);
      
      // Очищаем код для нового ввода
      setCode(['', '', '', '']);
      setTimeout(() => inputRefs.current[0]?.focus(), 0);
    } catch (error) {
      console.error('❌ Ошибка при повторной отправке:', error);
      console.error('Response:', error?.response?.data);
      
      const errorMessage = 
        error?.response?.data?.message || 
        error?.response?.data?.detail ||
        error?.response?.data?.error ||
        'Ошибка при отправке кода';
      
      toast.error(errorMessage);
    }
  };

  const isLoading = verifyMutation.isPending || resendMutation.isPending;

  // Показываем загрузку пока email не загрузится
  if (!email) {
    return (
      <div>
        <CloseRegister onClose={() => router.push("/")} />
        <div className="forgot-password-page-container">
          <div className="forgot-password-page">
            <div className="text-center p-6">Загрузка...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CloseRegister onClose={() => router.push("/")} />
      <div className="forgot-password-page-container">
        <div className="forgot-password-page">
          <h2 className="forgot-password-page__title">
            Подтверждение кода
          </h2>
          <h4 className="forgot-password-page__subtitle">
            Введите 4-значный код, отправленный на {email}
          </h4>
          
          <form className="forgot-password-page__form" onSubmit={handleSubmit}>
            <div className="code-input-container">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="code-input"
                  autoFocus={index === 0}
                  disabled={isLoading}
                  autoComplete="off"
                />
              ))}
            </div>

            {verifyMutation.isError && (
              <div className="forgot-password-page__error">
                {verifyMutation.error?.response?.data?.message || 
                 verifyMutation.error?.response?.data?.detail || 
                 verifyMutation.error?.response?.data?.non_field_errors || 
                 verifyMutation.error?.response?.data?.error ||
                 'Неверный код. Попробуйте еще раз'}
              </div>
            )}
            
            <Button
              type="submit" 
              variant="dark-blue"
              loading={verifyMutation.isPending}
              disabled={isLoading || code.join('').length !== 4}
            >
              Подтвердить код
            </Button>

            <button
              type="button"
              onClick={handleResendCode}
              className="forgot-password-page__resend-button"
              disabled={isLoading}
            >
              {resendMutation.isPending ? 'Отправка...' : 'Отправить код повторно'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function CodeVerify() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <CodeVerifyContent />
    </Suspense>
  );
}