import React from 'react';
import './StatsCards.scss';

const StatsCards = ({ stats }) => {
  // Массив конфигурации, который мапит ключи из API на визуальные карточки
  const cardsConfig = [
    { 
      title: 'Доставлено', 
      value: stats?.delivered || 0, 
      subValue: 'Завершённых заказов', 
      footer: `Выручка: ${stats?.total_revenue || 0} сом`, 
      type: 'green' 
    },
    { 
      title: 'В пути', 
      value: stats?.on_way || 0, 
      subValue: 'Заказов в доставке', 
      footer: 'Транспортировка', 
      type: 'yellow' 
    },
    { 
      title: 'На складе', 
      value: `${stats?.in_stock || 0} шт`, 
      subValue: 'Товаров в наличии', 
      footer: 'Готовы к отгрузке', 
      type: 'blue' 
    },
    { 
      title: 'Всего заказов', 
      value: stats?.total_orders || 0, 
      subValue: 'За весь период', 
      footer: `Общий оборот: ${stats?.total_revenue || 0}`, 
      type: 'red' 
    },
    { 
      title: 'Возвраты', 
      value: stats?.returns || 0, 
      subValue: 'Товаров возвращено', 
      footer: 'Требуют обработки', 
      type: 'gray' 
    },
  ];

  return (
    <div className="stats-container">
      {cardsConfig.map((item, index) => (
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