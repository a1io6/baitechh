"use client"
import './style.scss';
import logo from '../../../assets/svg/logo.svg';

import { FiPhone, FiClock, FiMapPin, } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoChevronDownSharp } from "react-icons/io5";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
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
              {t('footer.workingHours.weekdays')} <br />
              {t('footer.workingHours.weekend')}
            </span>
          </div>

          <div className="footer__item">
            <FiMapPin />
            <span>
              {t('footer.address.street')} <br />
              {t('footer.address.country')}
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
            <h4>{t('footer.information.title')}</h4>
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
              <li><Link href="/about">{t('footer.information.aboutUs')}</Link></li>
              <li><a href="/privacy">{t('footer.information.privacy')}</a></li>
              <li><a href="/terms">{t('footer.information.terms')}</a></li>
              <li><a href="/brands">{t('footer.information.manufacturers')}</a></li>
              <li><a href="/certificates">{t('footer.information.certificates')}</a></li>
              <li><a href="/sales">{t('footer.information.promotions')}</a></li>
              <li><a href="/sitemap">{t('footer.information.news')}</a></li>
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
            <h4>{t('footer.client.title')}</h4>
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
              <li><a href="/profile">{t('footer.client.account')}</a></li>
              <li><a href="/orders">{t('footer.client.orderHistory')}</a></li>
              <li><a href="/return">{t('footer.client.returns')}</a></li>
            </ul>
          </div>
        </div>

        {/* Map – always visible, but adapts width on mobile */}
        <div className="footer__col footer__col--map">
          <div className="footer__map">
            <div className="footer__map-title">{t('footer.map')}</div>
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