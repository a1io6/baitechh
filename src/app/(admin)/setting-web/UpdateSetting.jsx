import React, { useState } from 'react';
import './UpdateSetting.scss';

const UpdateSetting = () => {
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

  const handleSave = () => {
    console.log("Маалымат сакталды:", formData);
    alert("Өзгөртүүлөр сакталды!");
  };

  const handleCancel = () => {
    setFormData({
      phone: '', address: '', email: '', instagram: '', whatsapp: '', workTime: ''
    });
    alert("Жокко чыгарылды");
  };

  return (
    <div className="edit-page-wrapper">
      <div className="edit-container">
        <h2 className="page-title">Настройки сайта</h2>
        
        <div className="form-content">
          <div className="input-field">
            <label>* Номер телефона</label>
            <input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Телеон номер" 
            />
          </div>

          <div className="input-field">
            <label>* Адрес компании</label>
            <input 
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Фактический адрес, отображаемый в футере сайта." 
            />
          </div>

          <div className="input-field">
            <label>*email</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address" 
            />
          </div>

          <div className="input-field">
            <label>*Instagram 1</label>
            <input 
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="Ссылка на официальный аккаунт компании." 
            />
          </div>

          <div className="input-field">
            <label>*WhatsApp</label>
            <input 
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Ссылка" 
            />
          </div>

          <div className="input-field">
            <label>*Время работы</label>
            <input 
              name="workTime"
              value={formData.workTime}
              onChange={handleChange}
              placeholder="График работы компании." 
            />
          </div>

          <div className="button-group">
            <button className="btn-save" onClick={handleSave}>
              Сохранить изменения
            </button>
            <button className="btn-cancel" onClick={handleCancel}>
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSetting;