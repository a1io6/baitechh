"use client";

import React from 'react';
import './Certificates.scss';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Certificates = () => {
  const { t } = useTranslation();
  const certificateCards = t('certificates.cards', { returnObjects: true });

  return (
    <section className="certificates-page">
      <div className="container-1220">
        <nav className="breadcrumbs">
          <Link href="/">{t('certificates.breadcrumbs.home')}</Link> 
          <span className="sep">/</span> 
          <span className="active">{t('certificates.breadcrumbs.current')}</span>
        </nav>

        <h1 className="title-h1">{t('certificates.title')}</h1>
        <p className="desc-main">
          {t('certificates.description')}
        </p>

        <h2 className="title-h2">{t('certificates.subtitle')}</h2>

        <div className="cert-grid">
          {certificateCards.map((card, index) => (
            <div key={index} className="cert-card">
              <h3 className="cert-card-title">{card.title}</h3>
              <div className="img-wrapper">
                <div className="placeholder-img">585 x 335</div>
              </div>
            </div>
          ))}

          <div className="cert-footer-text">
            {t('certificates.footer', { returnObjects: true }).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;