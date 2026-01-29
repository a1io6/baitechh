"use client"; // Обязательно для использования useState и useRouter

import React, { useState } from 'react';
// Импортируем useRouter из next/navigation вместо react-router-dom
import { useRouter } from "next/navigation";
import './SettingWeb.scss';

const SettingWeb = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    email: '',
    instagram: '',
    whatsapp: '',
    workTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные отправлены:', formData);
    // В Next.js используем router.push
    // router.push("/admin/updatesetting");
  };

  return (
    <div className="settings-web">
      <div className="form-container">
        <h2 className="form-title">Настройки сайта</h2>
        
        <form onSubmit={handleSubmit} className="product-form">
          <div className="input-group">
            <label>* Номер телефона</label>
            <input 
              type="text" 
              name="phone"
              placeholder="tel" 
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div className="input-group">
            <label>* Адрес компании</label>
            <input 
              type="text" 
              name="address"
              placeholder="Фактический адрес, отображаемый в футере сайта." 
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div className="input-group">
            <label>* Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="Email address" 
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className="input-group">
            <label>* Instagram</label>
            <input 
              type="text" 
              name="instagram"
              placeholder="Ссылка на официальный аккаунт компании." 
              onChange={handleChange}
              value={formData.instagram}
            />
          </div>

          <div className="input-group">
            <label>* WhatsApp</label>
            <input 
              type="text" 
              name="whatsapp"
              placeholder="ссылка" 
              onChange={handleChange}
              value={formData.whatsapp}
            />
          </div>

          <div className="input-group">
            <label>* Время работы</label>
            <input 
              type="text" 
              name="workTime"
              placeholder="График работы компании." 
              onChange={handleChange}
              value={formData.workTime}
            />
          </div>

          <div className="form-actions">
            {/* Заменяем navigate на router.push */}
            <button 
              type="button" 
              className="cancel-btn" 
              onClick={() => router.push('/admin/camera-catalog')}
            >
              Отмена
            </button>
            <button type="submit" className="submit-btn">
              Сохранить настройки
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingWeb;