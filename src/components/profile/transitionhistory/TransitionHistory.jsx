"use client";

import React from "react";
import { RxCross2 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import "./TransactionHistory.scss";
import Under from "@/components/ui/under/Under";
import { useTranslation } from "react-i18next";

function TransactionHistory() {
  const {t} = useTranslation();

  const data = [
    { id: 1, status: "success" },
    { id: 2, status: "success" },
    { id: 3, status: "error" },
    { id: 4, status: "success" },
    { id: 5, status: "success" }
  ];

  return (
    <div className="transactionhistory container">
      <Under
        text={t("transactionHistory.breadcrumb.home")}
        text1={t("transactionHistory.breadcrumb.personalAccount")}
        text2={t("transactionHistory.breadcrumb.history")}
      />

      {data.map((item) => (
        <div key={item.id} className="transactionhistorycard">
          <div
            className={`icon ${
              item.status === "success" ? "icon--success" : "icon--error"
            }`}
          >
            <span>
              {item.status === "success" ?  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3332 7.33333L6.6665 14L3.33317 10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> : <RxCross2 />}
            </span>
          </div>

          <div className="details">
            <div className="title">
              <h3>{t("transactionHistory.payment")}</h3>
              <span>{t("transactionHistory.amount")}</span>
            </div>

            <div className="date">
              <p>12.08.2023</p>
            </div>

            <div className="status">
              <p>{t(`transactionHistory.status.${item.status}`)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionHistory;
