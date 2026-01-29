"use client";

import React, { useState } from "react";
import "./OrderTable.scss";
import StatsCards from "./ui/StatsCards.jsx";
import { Settings2 } from "lucide-react";

// Варианты статусов для Select
const STATUS_OPTIONS = [
  { value: "returns", label: "Возвраты" },
  { value: "delivered", label: "Доставлено" },
  { value: "stock", label: "На складе" },
  { value: "transit", label: "В пути" },
];

const OrderTable = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1,
      number: "122222",
      client: "Асан",
      phone: "708 26 37 04",
      address: "г. Москва, ул. Ленина, д. 12, кв. 45",
      payment: "QR оплачено",
      amount: "5 200 сом",
      status: "returns",
      date: "12.12.25",
    },
    {
      id: 2,
      number: "122222",
      client: "Асан",
      phone: "708 26 37 04",
      address: "г. Москва, ул. Ленина, д. 12, кв. 45",
      payment: "QR оплачено",
      amount: "5 200 сом",
      status: "delivered",
      date: "12.12.25",
    },
    {
      id: 3,
      number: "122222",
      client: "Асан",
      phone: "708 26 37 04",
      address: "г. Москва, ул. Ленина, д. 12, кв. 45",
      payment: "QR оплачено",
      amount: "5 200 сом",
      status: "stock",
      date: "12.12.25",
    },
    {
      id: 4,
      number: "122222",
      client: "Асан",
      phone: "708 26 37 04",
      address: "г. Москва, ул. Ленина, д. 12, кв. 45",
      payment: "QR оплачено",
      amount: "5 200 сом",
      status: "transit",
      date: "12.12.25",
    },
  ]);

  // Изменение статуса через неизменяемое состояние (Immutable)
  const updateStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order,
      ),
    );
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Поиск"
            className="search-bar__input"
          />
        </div>

        {/* Контейнер для кнопки и окна */}
        <div className="filter-wrapper">
          <button
            className={`settings-button ${isFilterOpen ? "active" : ""}`}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Settings2 size={20} />
          </button>

          {/* Всплывающее окно */}
          {isFilterOpen && (
            <div className="filter-modal">
              <div className="filter-modal__header">
                <h3>Фильтр заказов</h3>
              </div>

              <div className="filter-modal__section">
                <h4>Статус</h4>
                <div className="filter-modal__chips">
                  <button className="chip">Доставлен</button>
                  <button className="chip">В пути</button>
                  <button className="chip">На складе</button>
                </div>
              </div>

              <div className="filter-modal__section">
                <h4>Способ оплаты</h4>
                <div className="filter-modal__chips">
                  <button className="chip">Наличными</button>
                  <button className="chip">QR</button>
                </div>
              </div>

              <div className="filter-modal__section">
                <h4>Дата</h4>
                <div className="filter-modal__dates">
                  <input type="text" defaultValue="12.10.24" />
                  <input type="text" defaultValue="22.10.25" />
                </div>
              </div>

              <button className="filter-modal__apply">Показать (202)</button>
            </div>
          )}
        </div>
      </div>
      <StatsCards />
      <main className="dashboard__content">
        <table className="table">
          <thead>
            <tr className="table__header">
              <th>№ заказа</th>
              <th>Клиент</th>
              <th>Телефон</th>
              <th>Адрес доставки</th>
              <th>Способ оплаты</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="table__row">
                <td>{order.number}</td>
                <td>{order.client}</td>
                <td>{order.phone}</td>
                <td className="table__address">{order.address}</td>
                <td>{order.payment}</td>
                <td>{order.amount}</td>
                <td>
                  <div
                    className={`status-wrapper status-wrapper--${order.status}`}
                  >
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="status-wrapper__select"
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default OrderTable;
