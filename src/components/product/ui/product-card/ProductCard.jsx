'use client'
import { useState, useEffect } from "react";
import "./ProductCard.scss";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { productApi } from "@/lib/products/api/useProducts";

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productApi.getById(productId);
        setProduct(data);
        const images = data.existing_images?.map((img) => img.image) || [];
        setActiveImage(images[0] || null);
      } catch (err) {
        console.error("Ошибка загрузки товара:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  const images = product?.existing_images?.map((img) => img.image) || [];

  const increment = () => setCount((c) => c + 1);
  const decrement = () => count > 1 && setCount((c) => c - 1);

  const addToCart = () => {
    console.log({
      product: product?.name,
      quantity: count,
    });
  };

  if (loading) return <div className="product">Загрузка...</div>;
  if (!product) return <div className="product">Товар не найден</div>;

  return (
    <div className="product">
      <div className="product__gallery">
        <div className="product__thumbs">
          {images.map((img) => (
            <button
              key={img}
              className={`product__thumb ${activeImage === img ? "active" : ""}`}
              onClick={() => setActiveImage(img)}
            >
              <Image src={img} alt="preview" width={82} height={82} />
            </button>
          ))}
        </div>

        <div className="product__image">
          {activeImage && (
            <Image src={activeImage} alt={product.name} width={471} height={471} />
          )}
        </div>
      </div>

      <div className="product__info">
        <h1>Артикул: {product.article}</h1>
        <p className="product__desc">{product.name}</p>
        <p className="product__descip">{product.description.slice(0, 150)}...</p>
        <div className="product__price">{product.price.toLocaleString()} сом</div>
        <div className="product__bonus">{product.bonus || 0} бонусов</div>

        <div className="product__actions">
          <div className="counter">
            <button onClick={decrement}>−</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>

          <button className="add-to-cart" onClick={addToCart}>
            <ShoppingCart /> Корзина
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;