'use client'
import "./ProductSpecs.scss";
import { useState } from "react";

const ProductSpecs = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="specs">
      <button 
        className="specs__header" 
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="specs__header-content">
          <span className="specs__header-text">Характеристики</span>
        </div>
        <div className={`specs__arrow ${open ? "specs__arrow--open" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div className={`specs__content ${open ? "specs__content--open" : "specs__content--closed"}`}>
        <div className="specs__content-inner">
          <div className="specs__block">
            <div className="specs__block-header">
              <p className="specs__block-title">Комплектация:</p>
            </div>
            <ul className="specs__list">
              <li className="specs__item">
                <span className="specs__item-dot">•</span>
                <span>Количество: <strong>3 шт.</strong></span>
              </li>
              <li className="specs__item">
                <span className="specs__item-dot">•</span>
                <span>Вес: <strong>150 г</strong></span>
              </li>
            </ul>
          </div>

          <div className="specs__divider"></div>

          <div className="specs__block">
            <div className="specs__block-header">
              <p className="specs__block-title">Основные параметры вентилятора:</p>
            </div>
            <ul className="specs__list">
              <li className="specs__item">
                <span className="specs__item-label">Размер:</span>
                <span className="specs__item-value">120×120×25 мм</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Тип подшипника:</span>
                <span className="specs__item-value">гидродинамический</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Скорость вращения:</span>
                <span className="specs__item-value">1000–2000 RPM (±10%)</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Статическое давление:</span>
                <span className="specs__item-value">1.59 mmH₂O</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Уровень шума:</span>
                <span className="specs__item-value">18–33 dBA</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Разъём питания:</span>
                <span className="specs__item-value">4-pin</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Номинальное напряжение:</span>
                <span className="specs__item-value">12 V DC</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Номинальный ток:</span>
                <span className="specs__item-value">0.12 A (±0.03 A)</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Потребляемая мощность:</span>
                <span className="specs__item-value">1.44 W</span>
              </li>
            </ul>
          </div>

          <div className="specs__divider"></div>

          <div className="specs__block">
            <div className="specs__block-header">
              <p className="specs__block-title">Подсветка (ARGB):</p>
            </div>
            <ul className="specs__list">
              <li className="specs__item">
                <span className="specs__item-label">Тип:</span>
                <span className="specs__item-value">адресная RGB-подсветка</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Разъём:</span>
                <span className="specs__item-value">3-pin (+5V-D-G)</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Напряжение:</span>
                <span className="specs__item-value">5 V DC</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Ток:</span>
                <span className="specs__item-value">0.20 A (±10%)</span>
              </li>
              <li className="specs__item">
                <span className="specs__item-label">Потребляемая мощность:</span>
                <span className="specs__item-value">1.0 W</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;