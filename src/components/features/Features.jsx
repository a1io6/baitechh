'use client';
import React from 'react';
import './style.scss';
import img from '../../../assets/svg/Vector (41).svg';
import img1 from '../../../assets/svg/Ellipse 4.svg';
import img2 from '../../../assets/svg/wallet-tick.svg';
import img3 from '../../../assets/svg/Vector (42).svg';
import img4 from '../../../assets/svg/6.svg fill.svg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      icon: img,
      title: t('features.freeDelivery.title'),
      description: t('features.freeDelivery.description')
    },
    {
      id: 2,
      icon: img1,
      title: t('features.support247.title'),
      description: t('features.support247.description')
    },
    {
      id: 3,
      icon: img2,
      title: t('features.payment.title'),
      description: t('features.payment.description')
    },
    {
      id: 4,
      icon: img3,
      title: t('features.qualityGuarantee.title'),
      description: t('features.qualityGuarantee.description')
    },
    {
      id: 5,
      icon: img4,
      title: t('features.specialOffers.title'),
      description: t('features.specialOffers.description')
    }
  ];

  return (
    <div className="features">
      <div className="features__container container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <h3 className="feature-card__title">{feature.title}</h3>
            <div className="feature-card__icon">
               <Image src={feature.icon} alt="" />
            </div>
            <p className="feature-card__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;