'use client'
import React from 'react';
import './Description.scss';

function Description() {
  return (
    <div className="description">
      <h4 className="description__title">Описание</h4>
      <div className="description__content">
        <p className="description__text">
          IP-камера видеонаблюдения предназначена для организации системы безопасности на объектах различного типа: офисы, магазины, склады, жилые дома и коммерческие помещения. Обеспечивает стабильную работу и чёткое изображение в любое время суток.
        </p>
      </div>
    </div>
  );
}

export default Description;