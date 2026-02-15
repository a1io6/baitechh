import React from 'react';
import './StatsCards.scss';
import { useOrders } from "@/lib/order/hook";

const StatsCards = () => {
  const { statuses } = useOrders();
  const stats = statuses;

  const cardsConfig = [
    { 
      title: 'Доставлено', 
      value: stats?.delivered?.count || 0, 
      subValue: 'Завершённых заказов', 
      footer: `Общая выручка: ${stats?.delivered?.revenue?.toLocaleString() || 0} сом`, 
      type: 'green' 
    },
    { 
      title: 'В пути', 
      value: stats?.on_the_way?.count || 0, 
      subValue: 'Заказов в доставке', 
      footer: `На сумму: ${stats?.on_the_way?.revenue?.toLocaleString() || 0} сом`, 
      type: 'yellow' 
    },
    { 
      title: 'На складе', 
      value: `${stats?.in_stock?.count || 0} шт`, 
      subValue: 'Товаров в наличии', 
      footer: `Запас на складе`, 
      type: 'blue' 
    },
    { 
      title: 'Всего заказов', 
      value: stats?.all_orders?.count || 0, 
      subValue: 'За весь период', 
      footer: `Общая выручка: ${stats?.all_orders?.revenue?.toLocaleString() || 0} сом`, 
      type: 'red' 
    },
    { 
      title: 'Возвраты', 
      value: stats?.returned?.count || 0, 
      subValue: 'Товаров возвращено', 
      footer: `Убыток: ${stats?.returned?.revenue?.toLocaleString() || 0} сом`, 
      type: 'gray' 
    },
  ];

  return (
    <div className="stats-container">
      {cardsConfig.map((item, index) => (
        <div key={index} className={`stats-card ${item.type}`}>
          <div className="card-header">
            <div className="card-title">{item.title}</div>
            <div className="card-value">{item.value}</div>
            <div className="card-subvalue">{item.subValue}</div>
          </div>
          <div className="card-footer">{item.footer}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;