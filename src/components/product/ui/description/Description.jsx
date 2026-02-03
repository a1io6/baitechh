'use client'
import React, { useState, useEffect } from 'react';
import './Description.scss';
import { productApi } from '@/lib/products/api/useProducts';

function Description({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productApi.getById(productId);
        setProduct(data);
      } catch (err) {
        console.error("Ошибка загрузки товара:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="description">
        <h4 className="description__title">Описание</h4>
        <p className="description__text">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="description">
      <h4 className="description__title">Описание</h4>
      <p className="description__text">
        {product?.description || 'Описание отсутствует'}
      </p>
    </div>
  );
}

export default Description;