"use client"
import './style.scss';
import logo from '../../../assets/svg/logo.svg';

import { FiPhone, FiClock, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoChevronDownSharp } from "react-icons/io5";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useSiteSettings } from '@/lib/settings/hook';

function Footer() {
  const { t } = useTranslation();
  const { settings, isLoading } = useSiteSettings();

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

        {/* Контакты */}
        <div className="footer__col footer__col--contacts">
          <Image src={logo} alt="Baitex" className="footer__logo" />

          <div className="footer__item">
            <FiPhone />
            {isLoading ? (
              <span className="footer__skeleton" />
            ) : (
              <a href={`tel:${settings?.phone}`}>{settings?.phone}</a>
            )}
          </div>

          <div className="footer__item">
            <FiClock />
            {isLoading ? (
              <span className="footer__skeleton" />
            ) : (
              <span>{settings?.work_hours}</span>
            )}
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
              href={settings?.whatsapp ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <span className="footer__social-icon"><FaWhatsapp /></span>
              <span className="footer__social-text">WhatsApp</span>
            </a>

            <a
              href={settings?.instagram ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <span className="footer__social-icon"><FaInstagram /></span>
              <span className="footer__social-text">Instagram</span>
            </a>
          </div>
        </div>

        {/* Информация */}
        <div className="footer__col footer__col--accordion">
          <button
            className="footer__accordion-header"
            onClick={() => toggleSection('info')}
            type="button"
          >
            <h4>{t('footer.information.title')}</h4>
            <IoChevronDownSharp
              className={`footer__accordion-icon ${openSections.info ? 'footer__accordion-icon--open' : ''}`}
            />
          </button>
          <div className={`footer__accordion-content ${openSections.info ? 'footer__accordion-content--open' : ''}`}>
            <ul>
              <li><Link href="/about">{t('footer.information.aboutUs')}</Link></li>
              <li><Link href="/privacy">{t('footer.information.privacy')}</Link></li>
              <li><Link href="/terms">{t('footer.information.terms')}</Link></li>
              <li><Link href="/brands">{t('footer.information.manufacturers')}</Link></li>
              <li><Link href="/certificates">{t('footer.information.certificates')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Клиенту */}
        <div className="footer__col footer__col--accordion">
          <button
            className="footer__accordion-header"
            onClick={() => toggleSection('client')}
            type="button"
          >
            <h4>{t('footer.client.title')}</h4>
            <IoChevronDownSharp
              className={`footer__accordion-icon ${openSections.client ? 'footer__accordion-icon--open' : ''}`}
            />
          </button>
          <div className={`footer__accordion-content ${openSections.client ? 'footer__accordion-content--open' : ''}`}>
            <ul>
              <li><Link href="/profile">{t('footer.client.account')}</Link></li>
              <li><Link href="/orders">{t('footer.client.orderHistory')}</Link></li>
              <li><Link href="/return">{t('footer.client.returns')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Карта */}
        <div className="footer__col footer__col--map">
          <div className="footer__map">
            <div className="footer__map-title">{t('footer.map')}</div>
            {!isLoading && settings?.address && (
              <iframe
                title="2GIS Map"
                src={settings.address}
                width="100%"
                height="400"
                loading="lazy"
              />
            )}
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        Baitech © 2025
      </div>
    </footer>
  );
}

export default Footer;