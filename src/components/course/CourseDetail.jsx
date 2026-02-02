'use client'
import React from 'react';
import './CourseDetails.scss';
import { Smile, Layout, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';

const CourseDetails = () => {
  const benefits = [
    { icon: <Smile size={32} />, text: "Практические навыки работы с оборудованием" },
    { icon: <Layout size={32} />, text: "Понимание принципов работы систем видеонаблюдения" },
    { icon: <ShieldCheck size={32} />, text: "Уверенность в самостоятельной установке" },
    { icon: <HeartPulse size={32} />, text: "Поддержку и ответы на вопросы в процессе и после окончания обучения" },
    { icon: <GraduationCap size={32} />, text: "Возможность получить сертификат от топовых брендов Hikvision и Dahua" }
  ];

  return (
    <div className="course-page">
      <div className="course-container">
        <header className="course-header">
          <h1 className="course-title">Курсы по системам видеонаблюдения</h1>
          <p className="course-description">
            Освой системы видеонаблюдения с нуля! курс для тех, кто хочет новую профессию или дополнительный доход. 
            Без воды — только то, что реально нужно в работе. Научим устанавливать, настраивать и обслуживать 
            современные системы видеонаблюдения с нуля.
          </p>
        </header>

        <main className="course-main-info">
          <div className="course-image">
            <div className="image-placeholder"></div>
          </div>

          <div className="course-program">
            <h3>В программе курса:</h3>
            <div className="program-items">
              <p>Основы локальных сетей</p>
              <p>Аналоговые и гибридные системы видеонаблюдения</p>
              <p>Цифровые системы видеонаблюдения</p>
              <p>Подбор оборудования под задачи клиента</p>
              <p>Монтаж и правильное подключение камер</p>
              <p>Настройка видеорегистраторов и удалённого доступа</p>
              <p>Типовые ошибки и способы их избежать</p>
              <p>Обслуживание и модернизация систем</p>
              <p>Занятие проходят в практическом формате</p>
            </div>
          </div>
        </main>

        <section className="benefits-section">
          <h2>Что вы получите:</h2>
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div key={index} className="benefit-card">
                <div className="icon-wrapper">{item.icon}</div>
                <p className="benefit-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="course-footer">
          <div className="footer-links">
            <p>Перечень курсов: СКУД- Система Контроля и Управления Доступом</p>
            <p>СВН- Системы Видеонаблюдения</p>
            <p>ОПС- Охранно-Пожарная Сигнализация</p>
            <p>Подготовка и обучение реализации проектных объектов</p>
          </div>
          {/* <div className="footer-contact">
            <p>Звоните проконсультируем:</p>
            <a href="tel:+996503406805">+996 503 406 805</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;