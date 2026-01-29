"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import "./AdminInfo.scss";
import ProductList from "@/components/admin/product-list/ProductList";

const AdminInfo = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      photo: "https://via.placeholder.com/80",
      title: "текст текст текст",
      description: "текст текст текст",
      active: true,
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/80",
      title: "",
      description: "",
      active: false,
    },
  ]);

  const handleAdd = () => {
    const newBanner = {
      id: Date.now(),
      photo: "",
      title: "",
      description: "",
      active: false,
    };
    setBanners([...banners, newBanner]);
  };

  return (
    <div className="admin-info">
      <h2 className="admin-info__title">Дополнение информации для решения</h2>

      <div className="admin-info__card">
        <div className="admin-info__header">
          <button className="admin-info__add-btn" onClick={handleAdd}>
            <Plus size={16} />
            добавить
          </button>
        </div>

        <ProductList products={banners} setProducts={setBanners} />
      </div>
    </div>
  );
};

export default AdminInfo;
