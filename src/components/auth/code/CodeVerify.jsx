import React, { useState, useRef } from 'react';
import './CodeVerify.scss';
import Button from '../../../shared/ui/ButtonRegister/Button';
import CloseRegister from '../../../shared/ui/CloseRegister/CloseRegister';
import { useNavigate } from 'react-router';

function CodeVerify() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
    const navigate = useNavigate();

  const handleChange = (index, value) => {
    // Проверяем, что введена только цифра
    if (value !== '' && !/^\d$/.test(value)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Автоматический переход к следующему полю
    if (value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Обработка удаления (Backspace)
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Обработка стрелок
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === 'ArrowRight' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    if (/^\d{4}$/.test(pastedData)) {
      const pastedCode = pastedData.split('');
      setCode(pastedCode);
      
      // Фокус на последнее поле
      inputRefs.current[3].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    
    if (fullCode.length === 4) {
      console.log('Код подтверждения:', fullCode);
      // Здесь будет логика отправки кода на сервер
    } else {
      alert('Пожалуйста, введите все 4 цифры');
    }
  };

  return (
    <div>
        <CloseRegister onClose={() => {navigate("/")}}/>
      <div className="forgot-password-page-container">
        <div className="forgot-password-page">
          <h2 className="forgot-password-page__title">
            Подтверждение кода
          </h2>
          <h4 className="forgot-password-page__subtitle">
            Введите 4-значный код, отправленный на ваш email
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
                />
              ))}
            </div>
            
            <Button type="submit" variant="dark-blue">
              Подтвердить код
            </Button>
          </form>
        </div>
      </div>
      
    
    </div>
  );
}

export default CodeVerify;