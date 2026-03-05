"use client";
import React from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  useCart,
  useCreateCartItem,
  useDeleteCartItem,
} from "@/lib/cart/hooks/hooks";
import { IoCart, IoCartOutline } from "react-icons/io5";

function Card({ product }) {
  const { t } = useTranslation();
  const { mutate: addToCart, isPending } = useCreateCartItem();
  const { mutate: deleteFromCart } = useDeleteCartItem();
  const { data: cartItems } = useCart();
  const cartItem = cartItems?.find(
    (item) => item.product?.id === product?.id || item.product_id === product?.id
  );
  const isInCart = !!cartItem;
  const imageSrc = product?.existing_images?.[0]?.image;

  const handleAddToCart = () => {
    if (!product?.id) return;

    if (isInCart) {
      deleteFromCart(cartItem.id);
    } else {
      addToCart({ product_id: product.id, quantity: 1 });
    }
  };

  return (
    <div className="product-card">
      <div
        className="product-card__badge"
        style={{
          backgroundColor: product.is_available ? "#94C184" : "#E35845",
        }}
      >
        {product.is_available ? t("card.inStock") : t("card.outOfStock")}
      </div>

      <Link href={`/productdetail/${product.id}`}>
        <div className="product-card__image">
          {imageSrc ? (
            <Image src={imageSrc} alt={"product"} width={300} height={300} />
          ) : (
            <div className="image-placeholder">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="40" r="15" stroke="#ccc" strokeWidth="2" />
                <path
                  d="M30 80 Q50 60 70 80"
                  stroke="#ccc"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          )}
        </div>
      </Link>

      <h3 className="product-card__article">
        {t("card.article")}: {product.article}
      </h3>
      <h3 className="product-card__title">
        {product.name?.slice(0, 80)}
        {product.name?.length > 80 ? "..." : ""}
      </h3>

      <ul className="product-card__features">
        {product.description?.slice(0, 85)}
        {product.description?.length > 85 ? "..." : ""}
      </ul>

      <div className="product-card__footer">
        <div className="product-card__price">
          <span className="currency">
            {product.bonus || 0} {t("card.bonuses")}
          </span>
          <span className="amount">
            {product.price.toLocaleString()} {t("card.currency")}
          </span>
        </div>

        <button
          className="product-card__cart"
          aria-label={t("card.addToCart")}
          onClick={handleAddToCart}
          disabled={isPending}
        >
          {isInCart ? <IoCart size={20} /> : <IoCartOutline size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Card;