import React from 'react';
import './AboutCompany.scss';
import img1 from '../../../assets/png/reklama.png';
import Image from 'next/image';
import Link from 'next/link';


const AboutCompany = () => {
  const specializations = [
    "систем видеонаблюдения",
    "охранно-пожарной сигнализации (ОПС)",
    "СКУД-систем (контроль и управление доступом)",
    "турникетов и шлагбаумов",
    "смарт-локов и решений «Умный дом»",
    "интерактивных и сенсорных панелей"
  ];

  return (
    <section className="about-company">
      <div className="content-wrapper">
        
        {/* Навигация */}
        <nav className="breadcrumbs">
          <Link href="/">Главная</Link>
          <span>/</span>
          <span className="current">О компании</span>
        </nav>

        {/* Башкы заголовок */}
        <h1 className="main-title">О компании</h1>

        {/* Киришүү текст */}
        <div className="intro-text">
          <p>
            Наша компания — это команда профессионалов в сфере систем безопасности и умных технологий, 
            которая уже более 10 лет успешно реализует проекты различной сложности для частных, 
            коммерческих и государственных объектов.
          </p>
        </div>

        {/* Сүрөт жана Тизме */}
        <div className="media-section">
          <div className="image-container">
            <div className="image-placeholder">
              <Image src={img1}  alt="Наша команда" className='w-full' />
            </div>
          </div>

          <div className="specialization">
            <h2>Мы специализируемся на проектировании, поставке, монтаже и обслуживании:</h2>
            <ul>
              {specializations.map((item, index) => (
                <li key={index}>
                  <span className="bullet">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Максат бөлүмү */}
        <div className="goal-section">
          <h2 className="goal-title">Наша цель</h2>
          <p className="goal-highlight">
            Наша цель — создавать безопасные, умные и эффективные пространства, используя современные технологии и практический опыт.
          </p>
        </div>

        <div className="footer-description">
          <p>
            Компания работает напрямую с проверенными производителями и заводами, в том числе из Китая, 
            что позволяет нам предлагать выгодные цены, оригинальное оборудование и гибкие условия сотрудничества. 
            Для корпоративных клиентов и партнеров действуют дилерские условия.
          </p>
          <p>
            В нашей команде более 20 специалистов: инженеры, проектировщики, технический отдел, отдел продаж, 
            маркетинг и бухгалтерия. Такой подход позволяет сопровождать клиента на всех этапах — от консультации 
            и проектирования до запуска и сервисного обслуживания.
          </p>
          <p>
            Мы ценим качество, надежность и ответственность, поэтому каждый проект реализуем с учетом 
            стандартов безопасности, технических требований и задач клиента.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutCompany;