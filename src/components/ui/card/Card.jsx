"use client";
import React, { useState } from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  useCart,
  useCreateCartItem,
  useDeleteCartItem,
} from "@/lib/cart/hooks/hooks";
import { IoCart, IoCartOutline, IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { useSiteSettings } from "@/lib/settings/hook";

const HIGH_PRICE_LIMIT = 100000;

const buildWhatsAppLink = (whatsapp, phone, message) => {
  const encodedMessage = encodeURIComponent(message);
  const raw = String(whatsapp || "").trim();

  if (raw) {
    if (/^https?:\/\//i.test(raw)) {
      try {
        const url = new URL(raw);
        url.searchParams.set("text", message);
        return url.toString();
      } catch {
        const separator = raw.includes("?") ? "&" : "?";
        return `${raw}${separator}text=${encodedMessage}`;
      }
    }

    const digits = raw.replace(/\D/g, "");
    if (digits) return `https://wa.me/${digits}?text=${encodedMessage}`;
  }

  const phoneDigits = String(phone || "").replace(/\D/g, "");
  if (phoneDigits) return `https://wa.me/${phoneDigits}?text=${encodedMessage}`;

  return null;
};

function Card({ product }) {
  const { t } = useTranslation();
  const { mutate: addToCart, isPending } = useCreateCartItem();
  const { mutate: deleteFromCart } = useDeleteCartItem();
  const { data: cartItems } = useCart();
  const { settings } = useSiteSettings();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const cartItem = cartItems?.find(
    (item) => item.product?.id === product?.id || item.product_id === product?.id
  );
  const isInCart = !!cartItem;
  const imageSrc = product?.existing_images?.[0]?.image;
  const isAvailable = product?.is_available;
  const formattedPrice = Number.isFinite(Number(product?.price))
    ? Number(product.price).toLocaleString("ru-RU")
    : "-";

  const isHighPrice = Number(product?.price) >= HIGH_PRICE_LIMIT;
  const whatsappMessage = `Здравствуйте! Интересует товар: ${product?.name || "-"}, артикул: ${product?.article || "-"}, цена: ${formattedPrice} сом.`;
  const whatsappLink = buildWhatsAppLink(settings?.whatsapp, settings?.phone, whatsappMessage);

  const handleAddToCart = () => {
    if (!product?.id) return;
    const token = localStorage.getItem("access_token");
    if (!token) {
      setShowAuthModal(true);
      return;
    }
    if (isInCart) {
      deleteFromCart(cartItem.id);
    } else {
      addToCart({ product_id: product.id, quantity: 1 });
    }
  };

  return (
    <>
      <div className="product-card">
        <div
          className="product-card__badge"
          style={{ backgroundColor: isAvailable ? "#94C184" : "#E35845" }}
        >
          {isAvailable ? t("card.inStock") : t("card.outOfStock")}
        </div>

        <Link href={`/productdetail/${product.id}`}>
          <div className="product-card__image">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={product?.name || "product"}
                width={300}
                height={300}
                className="product-card__img"
                sizes="(max-width: 480px) 45vw, (max-width: 768px) 30vw, 300px"
                quality={95}
              />
            ) : (
              <div className="image-placeholder">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="40" r="15" stroke="#ccc" strokeWidth="2" />
                  <path d="M30 80 Q50 60 70 80" stroke="#ccc" strokeWidth="2" fill="none" />
                </svg>
              </div>
            )}
          </div>
        </Link>

        <h3 className="product-card__article">
          {t("card.article")}: {product.article}
        </h3>
        <h3 className="product-card__title">
          {product.name}
        </h3>

        <ul className="product-card__features">
          {product.description}
        </ul>

        <div className="product-card__footer">
          {isHighPrice ? (
            <div className="product-card__contact-price">
              <p className="product-card__contact-title">{t("card.contactForPrice")}</p>
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="product-card__whatsapp product-card__whatsapp--full"
                >
                  <FaWhatsapp size={16} />
                  {t("card.writeToWhatsApp")}
                </a>
              )}
            </div>
          ) : isAvailable ? (
            <>
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
            </>
          ) : (
            <a
              href={whatsappLink ?? settings?.whatsapp ?? `tel:${settings?.phone}`}
              target="_blank"
              rel="noreferrer"
              className="product-card__availability-btn"
            >
              {t("card.checkAvailability")}
            </a>
          )}
        </div>

        {!isAvailable && !isHighPrice && whatsappLink ? (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="product-card__whatsapp"
          >
            <FaWhatsapp size={16} />
            {t("card.whatsapp")}
          </a>
        ) : null}
      </div>

      {showAuthModal && (
        <div className="auth-modal__overlay" onClick={() => setShowAuthModal(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button className="auth-modal__close" onClick={() => setShowAuthModal(false)} aria-label="Р—Р°РєСЂС‹С‚СЊ">
              <IoClose size={20} />
            </button>
            <div className="auth-modal__icon">
              <IoCartOutline size={48} />
            </div>
            <h3 className="auth-modal__title">{t("auth.modal.title")}</h3>
            <p className="auth-modal__text">{t("auth.modal.description")}</p>
            <div className="auth-modal__actions">
              <Link href="/register" className="auth-modal__btn auth-modal__btn--primary" onClick={() => setShowAuthModal(false)}>
                {t("auth.modal.register")}
              </Link>
              <Link href="/login" className="auth-modal__btn auth-modal__btn--secondary" onClick={() => setShowAuthModal(false)}>
                {t("auth.modal.login")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;


