import React from 'react';
import './style.scss';
import img from '../../../assets/svg/Vector (41).svg';
import img1 from '../../../assets/svg/Ellipse 4.svg';
import img2 from '../../../assets/svg/wallet-tick.svg';
import img3 from '../../../assets/svg/Vector (42).svg';
import img4 from '../../../assets/svg/6.svg fill.svg';
import Image from 'next/image';

function Features() {
  const features = [
    {
      id: 1,
      icon: img,
      title: 'Бесплатная доставка',
      description: 'Бесплатная доставка при покупке от 1000 сом и выше'
    },
    {
      id: 2,
      icon: img1,
      title: 'Поддержка 24/7',
      description: 'Служба технической поддержки работает 24/7'
    },
    {
      id: 3,
      icon: img2,
      title: 'Оплата',
      description: 'Принимаем оплату как наличными так и картой в онлайн'
    },
    {
      id: 4,
      icon: img3,
      title: 'Гарантия качества',
      description: 'Оригинальная продукция только от проверенных поставщиков'
    },
    {
      id: 5,
      icon: img4,
      title: 'Выгодные предложения',
      description: 'В нашем магазине всегда скидки и акции для постоянных клиентов'
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