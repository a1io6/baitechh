'use client'
import { productApi } from "@/lib/products/api/useProducts";
import "./ProductSpecs.scss";
import { useState, useEffect } from "react";

const ProductSpecs = ({ productId }) => {
  const [open, setOpen] = useState(true);
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

  // Функция для форматирования характеристик
  const formatCharacteristics = (text) => {
    if (!text) return null;
    
    // Заменяем \r\n на <br/> и сохраняем пробелы
    return text.split('\r\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="specs">
      <button 
        className="specs__header" 
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="specs__header-content">
          <span className="specs__header-text">Характеристики</span>
        </div>
        <div className={`specs__arrow ${open ? "specs__arrow--open" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div className={`specs__content ${open ? "specs__content--open" : "specs__content--closed"}`}>
        {loading ? (
          <p>Загрузка...</p>
        ) : product?.characteristics ? (
          <div style={{ whiteSpace: 'pre-line' }}>
           <p>{formatCharacteristics(product.characteristics)}</p> 
          </div>
        ) : (
          <p>Характеристики отсутствуют</p>
        )}
      </div>
    </div>
  );
};

export default ProductSpecs;