"use client"
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function LogoutModal({ isOpen, onClose, onConfirm }) {
  const { t } = useTranslation();

  // Закрытие по Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Блокировка скролла при открытии
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[12px] w-[90%] max-w-[340px] p-[24px] relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Крестик */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Заголовок */}
        <h2 className="text-[18px] font-bold text-[#1e293b] pr-6 mb-2 leading-snug">
          {t('profile.logout.title')}
        </h2>

        {/* Описание */}
        <p className="text-[14px] text-gray-500 mb-5 leading-relaxed">
          {t('profile.logout.confirmation')}
        </p>

        {/* Кнопки */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-[12px] border border-gray-200 text-[15px] font-medium text-[#1e293b] hover:bg-gray-50 transition-colors"
          >
            {t('profile.logout.cancelButton')}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-[12px] bg-red-500 text-white text-[15px] font-medium hover:bg-red-600 transition-colors"
          >
            {t('profile.logout.confirmButton')}
          </button>
        </div>
      </div>
    </div>
  );
}