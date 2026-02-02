"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useSiteSettings } from '@/lib/settings/hook';
import './SettingWeb.scss';

const SettingWeb = () => {
  const router = useRouter();
  const { settings, isLoading, updateSettings, isUpdating } = useSiteSettings();
  
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    email: '',
    instagram: '',
    whatsapp: '',
    work_hours: '' 
  });

  useEffect(() => {
    if (settings) {
      setFormData({
        phone: settings.phone || '',
        address: settings.address || '',
        email: settings.email || '',
        instagram: settings.instagram || '',
        whatsapp: settings.whatsapp || '',
        work_hours: settings.work_hours || ''
      });
    }
  }, [settings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Создаем объект только с измененными полями
    const changedFields = Object.keys(formData).reduce((acc, key) => {
      // Сравниваем текущее значение в форме с тем, что пришло из API
      if (formData[key] !== (settings[key] || '')) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    // Если изменений нет, просто выходим или уведомляем пользователя
    if (Object.keys(changedFields).length === 0) {
      
      return;
    }

    // Отправляем только патч (измененные поля)
    updateSettings(changedFields);
  };

  if (isLoading) return  <div className="loader"/>;

  return (
    <div className="settings-web">
      <div className="form-container">
        <h2 className="form-title">Настройки сайта</h2>
        
        <form onSubmit={handleSubmit} className="product-form">
          {/* Инпуты остаются без изменений */}
          <div className="input-group">
            <label>* Номер телефона</label>
            <input 
              type="text" 
              name="phone"
              placeholder="Например: +996..." 
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div className="input-group">
            <label>* Адрес компании</label>
            <input 
              type="text" 
              name="address"
              placeholder="Фактический адрес" 
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div className="input-group">
            <label>* Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="example@mail.com" 
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className="input-group">
            <label>Instagram (ссылка)</label>
            <input 
              type="text" 
              name="instagram"
              placeholder="https://instagram.com/..." 
              onChange={handleChange}
              value={formData.instagram || ''}
            />
          </div>

          <div className="input-group">
            <label>WhatsApp (номер или ссылка)</label>
            <input 
              type="text" 
              name="whatsapp"
              placeholder="https://wa.me/..." 
              onChange={handleChange}
              value={formData.whatsapp || ''}
            />
          </div>

          <div className="input-group">
            <label>* Время работы</label>
            <input 
              type="text" 
              name="work_hours"
              placeholder="Пн-Пт 9:00 - 18:00" 
              onChange={handleChange}
              value={formData.work_hours}
            />
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-btn" 
              onClick={() => router.back()}
            >
              Отмена
            </button>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isUpdating || Object.keys(formData).every(key => formData[key] === (settings[key] || ''))}
            >
              {isUpdating ? "Сохранение..." : "Сохранить настройки"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingWeb;