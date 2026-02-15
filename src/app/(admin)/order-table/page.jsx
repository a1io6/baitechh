"use client";

import React, { useState } from "react";
import "./OrderTable.scss";
import StatsCards from "./ui/StatsCards.jsx";
import { Settings2, ChevronDown, ChevronUp } from "lucide-react";
import { useOrders } from "@/lib/order/hook";

// Мапинг статусов для корректных SCSS классов
const STATUS_MAP = {
  1: { class: "stock", label: "На складе" },
  2: { class: "delivered", label: "Доставлено" },
  3: { class: "transit", label: "В пути" },
  4: { class: "returns", label: "Возврат" },
};

const OrderTable = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [filters, setFilters] = useState({
    date_from: "", date_to: "", order_number: "", payment_method: "", status: "",
  });

  const { orders, totalCount, isLoading, updateStatus } = useOrders(filters);

  const toggleOrder = (id) => setExpandedOrderId(expandedOrderId === id ? null : id);
  const updateFilter = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));

  if (isLoading) return <div className="loader" />;

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Поиск по номеру заказа..."
            value={filters.order_number}
            onChange={(e) => updateFilter("order_number", e.target.value)}
          />
        </div>

        <div className="filter-wrapper">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`settings-button ${isFilterOpen ? 'active' : ''}`}
          >
            <Settings2 size={26} />
          </button>

          {isFilterOpen && (
            <div className="filter-modal">
              <div className="filter-modal__header"><h3>Фильтры</h3></div>
              <div className="filter-modal__section">
                <h4>Статус</h4>
                <div className="filter-modal__chips">
                  {Object.entries(STATUS_MAP).map(([id, s]) => (
                    <button key={id} className="chip" onClick={() => updateFilter("status", id)}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
              <button className="filter-modal__apply" onClick={() => setIsFilterOpen(false)}>
                Показать ({totalCount})
              </button>
            </div>
          )}
        </div>
      </div>

      <StatsCards />

      <main className="dashboard__content">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "50px" }}></th>
              <th>№ заказа</th>
              <th>Адрес / Клиент</th>
              <th>Оплата</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="table__row" onClick={() => toggleOrder(order.id)}>
                  <td>{expandedOrderId === order.id ? <ChevronUp /> : <ChevronDown />}</td>
                  <td className="fw-bold">#{order.order_number}</td>
                  <td className="table__address">{order.address}</td>
                  <td>{order.payment_method === "cash" ? "Наличными" : "QR оплачено"}</td>
                  <td className="fw-bold">{order.total_price} сом</td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <div className={`status-wrapper status-wrapper--${STATUS_MAP[order.status]?.class}`}>
                      <select
                        className="status-wrapper__select"
                        value={order.status}
                        onChange={(e) => updateStatus({ id: order.id, statusId: Number(e.target.value) })}
                      >
                        {Object.entries(STATUS_MAP).map(([id, s]) => (
                          <option key={id} value={id}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                  </td>
                  <td>{order.formatted_date}</td>
                </tr>

                {/* Выпадающая карточка товара */}
                {expandedOrderId === order.id && (
                  <tr className="items-row">
                    <td colSpan="7">
                      <div className="items-container">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="order-details-card">
                            {/* Серая заглушка для фото (как на скрине) */}
                            <div className="item-photo-placeholder"></div>

                            <div className="item-info-grid">
                              <div className="info-block">
                                <span className="info-label">№ Заказ</span>
                                <span className="info-value">{order.order_number}</span>
                              </div>

                              <div className="info-block title">
                                <span className="info-label">Название</span>
                                <span className="info-value">
                                  Электровелосипед Duotts E29 750 ватт, 27.5 колеса, батарея 13.5 ач. Двухподвес.
                                </span>
                              </div>

                              <div className="info-block">
                                <span className="info-label">Цена</span>
                                <span className="info-value">{item.price} сом</span>
                              </div>

                              <div className="info-block">
                                <span className="info-label">Адрес</span>
                                <span className="info-value">{order.address}</span>
                              </div>

                              <div className="info-block">
                                <span className="info-label">Артикул</span>
                                <span className="info-value">656565</span>
                              </div>

                              <div className="info-block">
                                <span className="info-label">Количество</span>
                                <span className="info-value">{item.quantity} шт</span>
                              </div>

                              <div className="info-block">
                                <span className="info-label">Дата</span>
                                <span className="info-value">{order.formatted_date.split(' ')[0]}</span>
                              </div>

                              <div className="info-block">
                                <span className="info-label">Статус :</span>
                                <span className="info-value status">В наличии</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default OrderTable;