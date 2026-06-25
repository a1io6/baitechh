"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateDiller } from '../../../lib/diler/hook';

export default function Diller() {
  const { t } = useTranslation();
  const { mutate, isPending, isSuccess, isError } = useCreateDiller();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-[1280px] mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 text-[#2c3e50] font-sans">

        <h2 className="text-[#0f3161] text-2xl font-semibold mb-4">
          {t('diller.title')}
        </h2>

        <p className="text-sm md:text-base leading-relaxed mb-5 text-justify">
          {t('diller.description')}
        </p>

        <div className="mb-5">
          <h3 className="text-base font-semibold mb-2">
            {t('diller.advantages.title')}
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            {t('diller.advantages.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="mb-6">{t('diller.requestText')}</p>

        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold mb-1">Заявка отправлена!</p>
            <p className="text-sm">Наш менеджер свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0f3161]">
              {t('diller.form.title')}
            </h3>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-800">
                * {t('diller.form.fullName')}
              </label>
              <input
                type="text"
                name="fullName"
                placeholder={t('diller.form.fullNamePlaceholder')}
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base outline-none focus:border-[#0f3161] transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-800">
                * {t('diller.form.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                placeholder={t('diller.form.phonePlaceholder')}
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base outline-none focus:border-[#0f3161] transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-800">
                * {t('diller.form.email')}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t('diller.form.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base outline-none focus:border-[#0f3161] transition-colors placeholder:text-gray-400"
              />
            </div>

            {isError && (
              <p className="text-red-500 text-sm">Ошибка при отправке. Попробуйте снова.</p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="bg-[#0f3161] hover:bg-[#163d75] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-12 py-3.5 rounded-lg text-base transition-all cursor-pointer"
              >
                {isPending ? 'Отправка...' : t('diller.form.submitButton')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}