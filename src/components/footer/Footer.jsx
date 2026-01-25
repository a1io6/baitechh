"use client"
import './style.scss';
import logo from '../../../assets/svg/logo.svg';

import { FiPhone, FiClock, FiMapPin, } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoChevronDownSharp } from "react-icons/io5";
import Image from 'next/image';
import { useState } from 'react';

function Footer() {
  const [openSections, setOpenSections] = useState({
    info: false,
    client: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left column - contacts & socials (always visible) */}
        <div className="footer__col footer__col--contacts">
          <Image src={logo} alt="Baitex" className="footer__logo" />

          <div className="footer__item">
            <FiPhone />
            <span>
              +996 (505) 406 805 <br />
              +996 (505) 406 805
            </span>
          </div>

          <div className="footer__item">
            <FiClock />
            <span>
              Пн–Пт: 09:00–18:00 <br />
              Сб: 10:00–15:30, Вс — выходной
            </span>
          </div>

          <div className="footer__item">
            <FiMapPin />
            <span>
              г. Бишкек, ул. 7 апреля, 4а <br />
              720065, Kyrgyzstan
            </span>
          </div>

          <div className="footer__socials">
            <a
              href="https://wa.me/996505406805"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <span className="footer__social-icon">
                <FaWhatsapp />
              </span>
              <span className="footer__social-text">WhatsApp</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <span className="footer__social-icon">
                <FaInstagram />
              </span>
              <span className="footer__social-text">Instagram</span>
            </a>
          </div>
        </div>

        {/* Информация – accordion on mobile */}
        <div className="footer__col footer__col--accordion">
          <button
            className="footer__accordion-header"
            onClick={() => toggleSection('info')}
            type="button"
          >
            <h4>Информация</h4>
            <IoChevronDownSharp 

              className={`footer__accordion-icon ${
                openSections.info ? 'footer__accordion-icon--open' : ''
              }`}
            />
          </button>

          <div
            className={`footer__accordion-content ${
              openSections.info ? 'footer__accordion-content--open' : ''
            }`}
          >
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/brands">Производители</a></li>
              <li><a href="/certificates">Сертификаты</a></li>
              <li><a href="/sales">Акции</a></li>
              <li><a href="/sitemap">Новости</a></li>
            </ul>
          </div>
        </div>

        {/* Клиенту – accordion on mobile */}
        <div className="footer__col footer__col--accordion">
          <button
            className="footer__accordion-header"
            onClick={() => toggleSection('client')}
            type="button"
          >
            <h4>Клиенту</h4>
            <IoChevronDownSharp 

              className={`footer__accordion-icon ${
                openSections.client ? 'footer__accordion-icon--open' : ''
              }`}
            />
          </button>

          <div
            className={`footer__accordion-content ${
              openSections.client ? 'footer__accordion-content--open' : ''
            }`}
          >
            <ul>
              <li><a href="/profile">Личный кабинет</a></li>
              <li><a href="/orders">История заказов</a></li>
              <li><a href="/return">Возврат товара</a></li>
            </ul>

            {/* Uncomment if you decide to bring back subscription */}
            {/* <p className="footer__subscribe-text">...</p>
            <button className="footer__btn">...</button> */}
          </div>
        </div>

        {/* Map – always visible, but adapts width on mobile */}
        <div className="footer__col footer__col--map">
          <div className="footer__map">
            <div className="footer__map-title">Карта</div>
            <iframe
  title="2GIS Map"
  src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.844049%2C%22lon%22%3A74.636407%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001075101217%22%7D"
  width="100%"
  height="400"
/>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        Baitech © 2025 <a href="https://www.instagram.com/a1i.o6/">@a1i.o6</a>
      </div>
    </footer>
  );
}

export default Footer;