import React from 'react';
import './BrandsPage.scss';
import Under from '../ui/under/Under';

const BrandsPage = () => {
  return (
    <section className="brands-page">
      <div className="content-1220">
        
        <Under text={"Главная"} text1={"Наши производители и бренды"}/>

        <h1 className="title-h1">Наши производители и бренды</h1>

        <p className="description-text">
          В своей работе мы используем оборудование только от проверенных и надёжных производителей, 
          которые зарекомендовали себя на международном рынке. Это позволяет нам гарантировать 
          стабильную работу систем, высокое качество и соответствие современным стандартам безопасности.
        </p>

        <h2 className="title-h2">Мы сотрудничаем с ведущими брендами:</h2>

        <div className="brands-grid">
          {/* 1-Колонна */}
          <div className="column">
            <div className="category">
              <h3>LED-экраны и информационные киоски</h3>
              <ul>
                <li>- Unilumin</li>
                <li>- Absen</li>
                <li>- Novastar</li>
              </ul>
            </div>
            <div className="category">
              <h3>Интерактивные и сенсорные панели</h3>
              <ul>
                <li>- Samsung</li>
                <li>- LG</li>
                <li>- BOE</li>
                <li>- OEM / SKD / CKD-производители (Китай)</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="category">
              <h3>Системы видеонаблюдения и безопасности</h3>
              <ul>
                <li>- Dahua Technology</li>
                <li>- Hikvision</li>
                <li>- HiWatch / HiVideo</li>
                <li>- AJAX Systems</li>
              </ul>
            </div>
            <div className="category">
              <h3>Слаботочные и СКС-системы</h3>
              <ul>
                <li>- TP-Link</li>
                <li>- Ubiquiti</li>
                <li>- D-Link</li>
              </ul>
            </div>
          </div>

          {/* 3-Колонна */}
          <div className="column">
            <div className="category">
              <h3>СКУД, турникеты и контроль доступа</h3>
              <ul>
                <li>- ZKTeco</li>
                <li>- Hikvision Access Control</li>
                <li>- Dahua Access Control</li>
              </ul>
            </div>
            <div className="category">
              <h3>Смарт-замки и умные решения</h3>
              <ul>
                <li>- Smart Lock (RFID, биометрия)</li>
                <li>- TTLock / Tuya Smart</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="conclusion-section">
          <p>Мы подбираем оборудование индивидуально под задачи клиента — от бюджетных <br /> решений до профессиональных систем для крупных объектов. <br />
            Все поставки сопровождаются технической поддержкой, гарантией и сервисным <br /> обслуживанием.</p>        </div>

      </div>
    </section>
  );
};

export default BrandsPage;