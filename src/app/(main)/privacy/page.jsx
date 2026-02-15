import Link from 'next/link';
// Эгер CSS Modules колдонсоң styles.privacyContainer деп жазылат, 
// бирок сен берген код боюнча жөнөкөй импортту калтырдым:
import './Privacy.scss';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="wrapper-1220">
        <nav className="breadcrumb">
          <Link href="/">Главная</Link> / <span>Политика конфиденциальности</span>
        </nav>

        <h1 className="page-title">Политика конфиденциальности</h1>

        <p className="intro">Оставляя данные на данном сайте, вы соглашаетесь с их обработкой.</p>

        <h3 className="sub-heading">
          Мы собираем и используем персональные данные (имя, телефон, email и другую информацию, предоставленную вами) исключительно для:
        </h3>

        <ul className="privacy-list">
          <li>связи с вами,</li>
          <li>обработки заявок,</li>
          <li>предоставления информации о наших товарах и услугах.</li>
        </ul>

        <div className="privacy-footer">
          <p>Ваши данные не передаются третьим лицам без законных оснований и защищены в соответствии с требованиями законодательства.</p>
          <p>Сайт может использовать cookies для корректной работы и улучшения пользовательского опыта.</p>
          <p>Вы можете в любой момент запросить изменение или удаление своих данных, связавшись с нами через контакты, указанные на сайте.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;