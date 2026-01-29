import { Edit2, Trash2 } from "lucide-react";
import "./BannerCard.scss";

export function AdminItem({ banner, handleDelete, handleToggle }) {
  return (
    <div key={banner.id} className="banner-item">
      {/* Чекбокс */}
      <label className="banner-item__checkbox">
        <input
          type="checkbox"
          checked={banner.active}
          onChange={() => handleToggle(banner.id)}
        />
        <span className="banner-item__checkmark"></span>
      </label>

      {/* Превью изображения */}
      <div className="banner-item__image">
        {banner.image ? (
          <img src={banner.image} alt="Banner" />
        ) : (
          <div className="banner-item__image-placeholder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
              <path
                d="M21 15L16 10L5 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Кнопки действий */}
      <div className="banner-item__actions">
        <button className="banner-item__action-btn banner-item__action-btn--edit">
          <Edit2 size={16} />
        </button>
        <button
          className="banner-item__action-btn banner-item__action-btn--delete"
          onClick={() => handleDelete(banner.id)}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
