"use client";
import { useRouter } from "next/navigation";
import './NotFound.scss';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="not-found-wrapper">
      <div className="inner-content">
        <div className="error-visual">
          <h1 className="error-number">404</h1>
          <div className="divider"></div>
        </div>
        
        <h2 className="error-heading">{t('notFound.title')}</h2>
        <p className="error-description">
          {t('notFound.description')}
        </p>

        <button className="go-home-button" onClick={() => router.push('/')}>
          {t('notFound.goHomeButton')}
        </button>
      </div>
    </div>
  );
}