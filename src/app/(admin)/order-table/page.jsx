"use client";

import React, { useMemo, useState } from "react";
import "./OrderTable.scss";
import StatsCards from "./ui/StatsCards.jsx";
import { Settings2, ChevronDown, ChevronUp, CalendarDays, X } from "lucide-react";
import { useOrders } from "@/lib/order/hook";

const STATUS_MAP = {
  1: { class: "stock", label: "На складе", apiValue: "in_stock" },
  2: { class: "delivered", label: "Доставлено", apiValue: "delivered" },
  3: { class: "transit", label: "В пути", apiValue: "on_the_way" },
  4: { class: "returns", label: "Возврат", apiValue: "returned" },
};

const STATUS_BY_API_VALUE = Object.values(STATUS_MAP).reduce((acc, statusMeta) => {
  acc[statusMeta.apiValue] = statusMeta;
  return acc;
}, {});

const PAYMENT_METHODS = [
  { id: "cash", label: "Наличными" },
  { id: "qr", label: "QR" },
];

const DATE_PRESETS = [
  { id: "today", label: "Сегодня" },
  { id: "week", label: "7 дней" },
  { id: "month", label: "30 дней" },
  { id: "quarter", label: "90 дней" },
];

const DEFAULT_PAGE_SIZE = 10;

const DEFAULT_FILTERS = {
  date_from: "",
  date_to: "",
  order_number: "",
  payment_method: "",
  status: "",
};

const getPaginationItems = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages];
};

const formatDateForInput = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getDateRangeByPreset = (presetId) => {
  const endDate = new Date();
  const startDate = new Date();

  switch (presetId) {
    case "today":
      break;
    case "week":
      startDate.setDate(endDate.getDate() - 6);
      break;
    case "month":
      startDate.setDate(endDate.getDate() - 29);
      break;
    case "quarter":
      startDate.setDate(endDate.getDate() - 89);
      break;
    default:
      return { date_from: "", date_to: "" };
  }

  return {
    date_from: formatDateForInput(startDate),
    date_to: formatDateForInput(endDate),
  };
};

const normalizeDateRange = (dateFrom, dateTo) => {
  if (!dateFrom || !dateTo) {
    return { date_from: dateFrom, date_to: dateTo };
  }

  if (dateFrom <= dateTo) {
    return { date_from: dateFrom, date_to: dateTo };
  }

  return { date_from: dateTo, date_to: dateFrom };
};

const OrderTable = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [draftFilters, setDraftFilters] = useState(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const [returningItem, setReturningItem] = useState(null); // { orderId, productId }

  const {
    orders,
    totalCount,
    nextPageUrl,
    previousPageUrl,
    isLoading,
    isFetching,
    isUpdating,
    updateStatus,
  } = useOrders({
    ...filters,
    page,
  });
  const isSyncing = isFetching || isUpdating;
  const hasNextPage = Boolean(nextPageUrl);
  const hasPreviousPage = Boolean(previousPageUrl);

  const activeFilterCount = useMemo(() => {
    const keys = ["order_number", "status", "payment_method", "date_from", "date_to"];

    return keys.reduce((count, key) => count + (filters[key] ? 1 : 0), 0);
  }, [filters]);

  const toggleOrder = (id) => setExpandedOrderId((prev) => (prev === id ? null : id));

  const toggleFilterModal = () => {
    setIsFilterOpen((prev) => {
      const next = !prev;

      if (next) {
        setDraftFilters(filters);
      }

      return next;
    });
  };

  const updateDraftFilter = (key, value) => {
    setDraftFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleDraftChip = (key, value) => {
    setDraftFilters((prev) => ({
      ...prev,
      [key]: String(prev[key]) === String(value) ? "" : String(value),
    }));
  };

  const applyDatePreset = (presetId) => {
    const nextRange = getDateRangeByPreset(presetId);

    setDraftFilters((prev) => ({
      ...prev,
      date_from: nextRange.date_from,
      date_to: nextRange.date_to,
    }));
  };

  const isPresetActive = (presetId) => {
    const range = getDateRangeByPreset(presetId);

    return draftFilters.date_from === range.date_from && draftFilters.date_to === range.date_to;
  };

  const applyDraftFilters = () => {
    const normalizedRange = normalizeDateRange(draftFilters.date_from, draftFilters.date_to);

    setPage(1);
    setFilters((prev) => ({
      ...prev,
      status: draftFilters.status,
      payment_method: draftFilters.payment_method,
      date_from: normalizedRange.date_from,
      date_to: normalizedRange.date_to,
    }));

    setIsFilterOpen(false);
  };

  const resetDraftFilters = () => {
    setDraftFilters((prev) => ({
      ...prev,
      status: "",
      payment_method: "",
      date_from: "",
      date_to: "",
    }));
  };

  const resetAllFilters = () => {
    setPage(1);
    setFilters(DEFAULT_FILTERS);
    setDraftFilters(DEFAULT_FILTERS);
  };

  // ─── Возврат товара ───────────────────────────────────────────────────────
  const handleReturn = async (order, item) => {
    setReturningItem({ orderId: order.id, productId: item.product });
    try {
      const response = await fetch(`/api/returns/requests/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: order.id,
          reason: "Бракованный товар",
          items: [{ order_item_id: item.product, quantity: item.quantity }],
        }),
      });

      if (response.ok) {
        alert("Возврат успешно оформлен!");
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(`Ошибка: ${errorData?.detail || "Не удалось оформить возврат"}`);
      }
    } catch {
      alert("Ошибка сети. Попробуйте снова.");
    } finally {
      setReturningItem(null);
    }
  };

  const isItemReturning = (orderId, productId) =>
    returningItem?.orderId === orderId && returningItem?.productId === productId;
  // ─────────────────────────────────────────────────────────────────────────

  const currentPage = page;
  const pageSizeForCalc = (() => {
    if (!orders.length) return DEFAULT_PAGE_SIZE;
    if (nextPageUrl) return orders.length;
    if (previousPageUrl && currentPage > 1) {
      const inferred = Math.ceil((totalCount - orders.length) / (currentPage - 1));
      return inferred || orders.length;
    }
    return orders.length;
  })();
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSizeForCalc));
  const showPagination = totalPages > 1;
  const displayPage = Math.min(currentPage, totalPages);
  const paginationItems = getPaginationItems(displayPage, totalPages);

  const getPaymentLabel = (paymentMethod) => {
    if (paymentMethod === "cash") return "Наличными";
    if (paymentMethod === "qr") return "QR оплачено";

    return "Не указано";
  };

  if (isLoading) {
    return (
      <div className="dashboard dashboard--loading">
        <div className="loading-state" role="status" aria-live="polite">
          <div className="loader" />
          <h2>Загружаем заказы</h2>
          <p>Админ-панель получает актуальные данные...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Поиск по номеру заказа"
            value={filters.order_number}
            onChange={(event) => {
              setPage(1);
              setFilters((prev) => ({
                ...prev,
                order_number: event.target.value,
              }));
            }}
          />
        </div>

        <div className="dashboard__actions">
          {activeFilterCount > 0 && (
            <button type="button" className="clear-filters-btn" onClick={resetAllFilters}>
              {"Сбросить все"}
            </button>
          )}

          <div className="filter-wrapper">
            <button
              type="button"
              onClick={toggleFilterModal}
              className={`settings-button ${isFilterOpen ? "active" : ""}`}
            >
              <Settings2 size={20} />
              <span>{"Фильтры"}</span>
              {activeFilterCount > 0 && <span className="settings-button__count">{activeFilterCount}</span>}
            </button>

            {isFilterOpen && (
              <>
                <button
                  type="button"
                  className="filter-overlay"
                  onClick={() => setIsFilterOpen(false)}
                  aria-label={"Закрыть окно фильтров"}
                />

                <div className="filter-modal">
                  <div className="filter-modal__header">
                    <h3>{"Фильтр заказов"}</h3>
                    <button
                      type="button"
                      className="filter-modal__close"
                      onClick={() => setIsFilterOpen(false)}
                      aria-label={"Закрыть фильтр"}
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="filter-modal__body">
                    <div className="filter-modal__section">
                      <h4>{"Статус"}</h4>
                      <div className="filter-modal__chips">
                        {Object.entries(STATUS_MAP).map(([id, status]) => (
                          <button
                            type="button"
                            key={id}
                            className={`chip ${draftFilters.status === status.apiValue ? "active" : ""}`}
                            onClick={() => toggleDraftChip("status", status.apiValue)}
                          >
                            {status.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="filter-modal__section">
                      <h4>{"Способ оплаты"}</h4>
                      <div className="filter-modal__chips">
                        {PAYMENT_METHODS.map((method) => (
                          <button
                            type="button"
                            key={method.id}
                            className={`chip ${draftFilters.payment_method === method.id ? "active" : ""}`}
                            onClick={() => toggleDraftChip("payment_method", method.id)}
                          >
                            {method.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="filter-modal__section">
                      <h4>
                        <CalendarDays size={15} />
                        {"Дата заказа"}
                      </h4>

                      <div className="filter-modal__presets">
                        {DATE_PRESETS.map((preset) => (
                          <button
                            type="button"
                            key={preset.id}
                            className={`chip chip--preset ${isPresetActive(preset.id) ? "active" : ""}`}
                            onClick={() => applyDatePreset(preset.id)}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>

                      <div className="filter-modal__dates">
                        <label>
                          <span>{"От"}</span>
                          <input
                            type="date"
                            value={draftFilters.date_from}
                            max={draftFilters.date_to || undefined}
                            onChange={(event) => updateDraftFilter("date_from", event.target.value)}
                          />
                        </label>

                        <label>
                          <span>{"До"}</span>
                          <input
                            type="date"
                            value={draftFilters.date_to}
                            min={draftFilters.date_from || undefined}
                            onChange={(event) => updateDraftFilter("date_to", event.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="filter-modal__footer">
                    <button type="button" className="filter-modal__reset" onClick={resetDraftFilters}>
                      {"Сбросить"}
                    </button>
                    <button type="button" className="filter-modal__apply" onClick={applyDraftFilters}>
                      {"Применить"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {isSyncing && (
        <div className="sync-banner" role="status" aria-live="polite">
          <span className="sync-banner__dot" />
          <span>
            {isUpdating
              ? "Сохраняем изменение статуса..."
              : "Обновляем список заказов..."}
          </span>
        </div>
      )}

      <StatsCards />

      <main className="dashboard__content">
        <div className={`table-wrap ${isSyncing ? "is-syncing" : ""}`}>
          {isSyncing && (
            <div className="table-wrap__status" role="status" aria-live="polite">
              <span className="table-wrap__status-dot" />
              <span>
                {isUpdating
                  ? "Применяем изменение..."
                  : "Загружаем новые данные..."}
              </span>
            </div>
          )}

          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "48px" }}></th>
                <th>{"№ заказа"}</th>
                <th>{"Адрес / Клиент"}</th>
                <th>{"Оплата"}</th>
                <th>{"Сумма"}</th>
                <th>{"Статус"}</th>
                <th>{"Дата"}</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const statusMeta =
                  STATUS_MAP[order.status] ||
                  STATUS_BY_API_VALUE[order.status] ||
                  STATUS_MAP[1];
                const statusValue =
                  Number.isFinite(Number(order.status)) && Number(order.status) > 0
                    ? Number(order.status)
                    : Number(
                        Object.entries(STATUS_MAP).find(([, status]) => status.apiValue === order.status)?.[0] || 1
                      );

                return (
                  <React.Fragment key={order.id}>
                    <tr className="table__row" onClick={() => toggleOrder(order.id)}>
                      <td>{expandedOrderId === order.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</td>
                      <td className="fw-bold">#{order.order_number}</td>
                      <td className="table__address">{order.address}</td>
                      <td>{getPaymentLabel(order.payment_method)}</td>
                      <td className="fw-bold">
                        {order.total_price} {"сом"}
                      </td>
                      <td onClick={(event) => event.stopPropagation()}>
                        <div className={`status-wrapper status-wrapper--${statusMeta.class}`}>
                          <select
                            className="status-wrapper__select"
                            value={statusValue}
                            disabled={isUpdating}
                            onChange={(event) => {
                              const nextStatusId = Number(event.target.value);
                              const nextStatus = STATUS_MAP[nextStatusId];

                              if (!nextStatus) return;

                              updateStatus({
                                id: order.id,
                                status: nextStatus.apiValue,
                                statusId: nextStatusId,
                              });
                            }}
                          >
                            {Object.entries(STATUS_MAP).map(([id, status]) => (
                              <option key={id} value={id}>
                                {status.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td>{order.formatted_date}</td>
                    </tr>

                    {expandedOrderId === order.id && (
                      <tr className="items-row">
                        <td colSpan="7">
                          <div className="items-container">
                            {(order.items || []).map((item, index) => (
                              <div key={index} className="order-details-card">
                                <div className="item-photo-placeholder">
                                  {item.image && <img src={item.image} alt={item.name} />}
                                </div>

                                <div className="item-info-grid">
                                  <div className="info-block">
                                    <span className="info-label">{"№ заказа"}</span>
                                    <span className="info-value">{order.order_number}</span>
                                  </div>

                                  <div className="info-block title">
                                    <span className="info-label">{"Название"}</span>
                                    <span className="info-value">{item.name || "Товар"}</span>
                                  </div>

                                  <div className="info-block">
                                    <span className="info-label">{"Цена"}</span>
                                    <span className="info-value">
                                      {item.price} {"сом"}
                                    </span>
                                  </div>

                                  <div className="info-block">
                                    <span className="info-label">{"Адрес"}</span>
                                    <span className="info-value">{order.address}</span>
                                  </div>

                                  <div className="info-block">
                                    <span className="info-label">{"Артикул"}</span>
                                    <span className="info-value">{item.sku || "-"}</span>
                                  </div>

                                  <div className="info-block">
                                    <span className="info-label">{"Количество"}</span>
                                    <span className="info-value">
                                      {item.quantity} {"шт"}
                                    </span>
                                  </div>

                                  <div className="info-block">
                                    <span className="info-label">{"Дата"}</span>
                                    <span className="info-value">
                                      {order.formatted_date ? order.formatted_date.split(" ")[0] : "-"}
                                    </span>
                                  </div>

                                  <div className="info-block">
                                    <span className="info-label">{"Статус"}</span>
                                    <span className="info-value status">{statusMeta.label}</span>
                                  </div>

                                  {/* ─── Кнопка возврата ─── */}
                                  <div className="info-block" style={{ gridColumn: "span 2" }}>
                                    <button
                                      type="button"
                                      className="return-btn"
                                      disabled={isItemReturning(order.id, item.product)}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleReturn(order, item);
                                      }}
                                    >
                                      {isItemReturning(order.id, item.product)
                                        ? "Отправка..."
                                        : "↩ Оформить возврат"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {showPagination && (
          <div className="pagination">
            <div className="pagination__controls">
              <button
                className="page-btn arrow"
                type="button"
                disabled={!hasPreviousPage}
                onClick={() => {
                  if (!hasPreviousPage) return;
                  setPage(Math.max(1, displayPage - 1));
                }}
              >
                &lt;
              </button>

              {paginationItems.map((item, index) =>
                item === "ellipsis" ? (
                  <span key={`dots-${index}`} className="dots">
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    className={`page-btn ${item === displayPage ? "active" : ""}`}
                    type="button"
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </button>
                )
              )}

              <button
                className="page-btn arrow"
                type="button"
                disabled={!hasNextPage}
                onClick={() => {
                  if (!hasNextPage) return;
                  setPage(Math.min(totalPages, displayPage + 1));
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrderTable;