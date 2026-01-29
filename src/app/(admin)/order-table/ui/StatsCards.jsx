import React from 'react';
import './StatsCards.scss';

const StatsCards = () => {
  const stats = [
    { title: 'Доставлено', value: '860', subValue: 'Завершённых заказов', footer: 'Общая выручка: 3 100 200', type: 'green' },
    { title: 'В пути', value: '214', subValue: 'Заказов в доставке', footer: 'Товаров в пути: 420 шт', type: 'yellow' },
    { title: 'На складе', value: '3 580 шт', subValue: 'Товаров в наличии', footer: 'Нет в наличии: 68 позиций', type: 'blue' },
    { title: 'Всего заказов', value: '1 248', subValue: 'За весь период', footer: 'Общая выручка: 4 320 500', type: 'red' },
    { title: 'Возвраты', value: '56', subValue: 'Товаров возвращено', footer: 'На сумму: 214 800 ₽', type: 'gray' },
  ];

  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div key={index} className={`stats-card ${item.type}`}>
          <div className="card-title">{item.title}</div>
          <div className="card-value">{item.value}</div>
          <div className="card-subvalue">{item.subValue}</div>
          <div className="card-footer">{item.footer}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;