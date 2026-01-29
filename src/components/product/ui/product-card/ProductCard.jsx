'use client'
import { useState } from "react";
import "./ProductCard.scss";
import { ShoppingCart  } from "lucide-react";
import Image from "next/image";
const images = [
  "https://www.delta.kg/images/detailed/4069/33603.jpg",
  "https://www.delta.kg/images/detailed/4069/33603_1.jpg",
  "https://www.delta.kg/images/detailed/4069/33603_2.jpg",
];

const ProductCard = () => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [count, setCount] = useState(1);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => count > 1 && setCount((c) => c - 1);

  const addToCart = () => {
    console.log({
      product: "Dahua DH-IPC-HFW2431S-S",
      quantity: count,
    });
  };

  return (
    <div className="product">
      <div className="product__gallery">
        <div className="product__thumbs">
          {images.map((img) => (
            <button
              key={img}
              className={`product__thumb ${
                activeImage === img ? "active" : ""
              }`}
              onClick={() => setActiveImage(img)}
            >
              <Image src={img} alt="preview" width={82} height={82}/>
            </button>
          ))}
        </div>

        <div className="product__image">
          <Image src={activeImage} alt="camera" width={471} height={471}/>
        </div>
      </div>

      <div className="product__info">
        <h3>IP-камера видеонаблюдения 4MP Dahua DH-IPC-HFW2431S-S</h3>

        <p className="product__desc">
          Современная IP-камера для внутреннего и наружного видеонаблюдения
          с высоким качеством изображения и поддержкой удалённого доступа.
        </p>

        <div className="product__price">10 000 сом</div>
        <div className="product__bonus">200 бонусов</div>

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