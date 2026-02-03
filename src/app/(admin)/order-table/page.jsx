"use client";

import React, { useState } from "react";
import "./OrderTable.scss";
import StatsCards from "./ui/StatsCards.jsx";
import { Settings2, X } from "lucide-react";
import { useOrders } from "@/lib/order/hook";

const OrderTable = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Начальные фильтры согласно Swagger
  const [filters, setFilters] = useState({
    date_from: "",
    date_to: "",
    order_number: "",
    payment_method: "", // 'cash' или 'qr'
    status: "", // 'on_the_way', 'delivered', 'in_stock', 'returned'
  });

  const { orders, stats, totalCount, isLoading, updateStatus } =
    useOrders(filters);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      date_from: "",
      date_to: "",
      order_number: "",
      payment_method: "",
      status: "",
    });
  };

  if (isLoading) {
    return <div className="loader" />;
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Номер заказа..."
            value={filters.order_number}
            onChange={(e) => updateFilter("order_number", e.target.value)}
          />
        </div>

        <div className="filter-wrapper">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="settings-button"
          >
            <Settings2 size={20} />
          </button>

          {isFilterOpen && (
            <div className="filter-modal">
              <div className="filter-modal__header">
                <h3>Фильтры</h3>
                <button onClick={resetFilters} className="reset-btn">
                  Сбросить
                </button>
              </div>

              {/* Статус из Swagger */}
              <div className="filter-modal__section">
                <h4>Статус</h4>
                <div className="filter-modal__chips">
                  {[
                    { val: "on_the_way", label: "В пути" },
                    { val: "delivered", label: "Доставлено" },
                    { val: "in_stock", label: "На складе" },
                    { val: "returned", label: "Возвраты" },
                  ].map((s) => (
                    <button
                      key={s.val}
                      className={`chip ${filters.status === s.val ? "active" : ""}`}
                      onClick={() => updateFilter("status", s.val)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Оплата из Swagger */}
              <div className="filter-modal__section">
                <h4>Оплата</h4>
                <div className="filter-modal__chips">
                  <button
                    className={`chip ${filters.payment_method === "cash" ? "active" : ""}`}
                    onClick={() => updateFilter("payment_method", "cash")}
                  >
                    Наличными
                  </button>
                  <button
                    className={`chip ${filters.payment_method === "qr" ? "active" : ""}`}
                    onClick={() => updateFilter("payment_method", "qr")}
                  >
                    QR-код
                  </button>
                </div>
              </div>

              <div className="filter-modal__section">
                <h4>Период</h4>
                <div className="filter-modal__dates">
                  <input
                    type="text"
                    value={filters.date_from}
                    onChange={(e) => updateFilter("date_from", e.target.value)}
                  />
                  <input
                    type="text"
                    value={filters.date_to}
                    onChange={(e) => updateFilter("date_to", e.target.value)}
                  />
                </div>
              </div>

              <button
                className="filter-modal__apply"
                onClick={() => setIsFilterOpen(false)}
              >
                Показать ({totalCount})
              </button>
            </div>
          )}
        </div>
      </div>

      <StatsCards stats={stats} />

      <main className="dashboard__content">
        <table className="table">
          <thead>
            <tr>
              <th>№ заказа</th>
              <th>Клиент</th>
              <th>Оплата</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="table__row">
                <td>{order.order_number}</td>
                <td>
                  {order.first_name} {order.last_name}
                </td>
                <td>{order.payment_method === "cash" ? "Наличными" : "QR"}</td>
                <td>{order.total_price} сом</td>
                <td>
                  <td>
                    <select
                      className={`status-select status-select--${order.status}`}
                      value={order.status} // Предполагаем, что order.status приходит как строка (напр. "in_stock")
                      onChange={(e) => {
                        const selectedStatus = e.target.value;
                        updateStatus({
                          id: order.id,
                          status_data: {
                            name: selectedStatus,
                            color_code:
                              STATUS_CONFIG[selectedStatus]?.color || "#000000",
                          },
                        });
                      }}
                    >
                      {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                        <option key={key} value={key}>
                          {config.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </td>
                <td>{order.formatted_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default OrderTable;
