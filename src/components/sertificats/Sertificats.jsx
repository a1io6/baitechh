'use client'
import React from 'react';
import './Certificates.scss';
import { useCertificat } from '@/lib/sertificats/hooks/hooks';
import Link from 'next/link';

const Certificates = () => {
  const certificateCards = [
    { title: "Сертификаты соответствия на поставляемое оборудование" },
    { title: "Допуски на монтаж и обслуживание систем безопасности" },
    { title: "Обученный и сертифицированный технический персонал" },
    { title: "Соблюдение норм пожарной и технической безопасности" },
    { title: "Официальные гарантийные обязательства от производителей" }
  ];
  const {data, loading} = useCertificat()
  console.log(data);
  
  return (
    <section className="certificates-page">
      <div className="container-1220">
        <nav className="breadcrumbs">
          <Link href="/">Главная</Link> <span className="sep">/</span> <span className="active">Сертификаты и лицензии</span>
        </nav>

        <h1 className="title-h1">Сертификаты и лицензии</h1>
        <p className="desc-main">
          Мы работаем в соответствии с действующими стандартами и требованиями в сфере систем безопасности...
        </p>

        <h2 className="title-h2">Наша компания имеет:</h2>

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
            <p>Мы регулярно проходим обучение и техническую аттестацию у производителей...</p>
            <p>По запросу клиента мы предоставляем копии сертификатов и лицензий.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;