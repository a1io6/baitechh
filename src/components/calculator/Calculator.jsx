'use client';
import React, { useState } from 'react';
import { $api } from '../../../API/api';
import { useTranslation } from 'react-i18next';
import './Calculator.scss';

const STEPS = ['object', 'camera', 'count', 'storage', 'installation'];

const OBJECT_TYPES = (t) => [
  { id: 'house', label: t('calculator.house'), image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80', defaultInternal: 2, defaultExternal: 4 },
  { id: 'apartment', label: t('calculator.flat'), image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80', defaultInternal: 2, defaultExternal: 0 },
  { id: 'shop', label: t('calculator.store'), image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&q=80', defaultInternal: 4, defaultExternal: 2 },
  { id: 'office', label: t('calculator.office'), image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80', defaultInternal: 3, defaultExternal: 1 },
];

const CAMERA_TYPES = (t) => [
  { id: 'wireless', label: t('calculator.wifi'), desc: t('calculator.wifiDesc'),     image: 'data:image/jpeg;base64,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',
 },
  { id: 'wired', label: t('calculator.ip'), desc: t('calculator.ipDesc'),     image: 'data:image/jpeg;base64,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',
 },
];

const STORAGE_OPTIONS = [7, 14, 30, 60, 90];

const PLACEMENT_IMAGES = {
  internal: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80',
  external: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  storage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
};

export default function Calculator() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    object_type: '',
    camera_type: '',
    internal_count: 2,
    external_count: 2,
    storage_days: 14,
    need_installation: false,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const objectTypes = OBJECT_TYPES(t);
  const cameraTypes = CAMERA_TYPES(t);
  const progress = Math.round((step / STEPS.length) * 100);

  const handleObject = (obj) => {
    setForm((prev) => ({ ...prev, object_type: obj.id, internal_count: obj.defaultInternal, external_count: obj.defaultExternal }));
    setStep(1);
  };

  const handleCamera = (type) => {
    setForm((prev) => ({ ...prev, camera_type: type }));
    setStep(2);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await $api.post('/products/estimate/', form);
      setResult(data);
      setStep(5);
    } catch {
      setError(t('calculator.error'));
    } finally {
      setLoading(false);
    }
  };

  const selectedObject = objectTypes.find((o) => o.id === form.object_type);

  return (
    <div className="calculator">
      <div className="calculator__container container">
        <h2 className="calculator__title">{t('calculator.title')}</h2>
        <p className="calculator__subtitle">{t('calculator.subtitle')}</p>

        <div className="calculator__body">
          <div className="calculator__left">
            {step < 5 && (
              <div className="calc-progress">
                <span>{t('calculator.ready')} <strong>{progress}%</strong></span>
                <div className="calc-progress__bar">
                  <div className="calc-progress__fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}

            {/* Шаг 1 */}
            {step === 0 && (
              <div className="calc-step">
                <h3 className="calc-step__title">{t('calculator.step1Title')}</h3>
                <div className="calc-objects">
                  {objectTypes.map((obj) => (
                    <button key={obj.id} type="button" className={`calc-object ${form.object_type === obj.id ? 'calc-object--active' : ''}`} onClick={() => handleObject(obj)}>
                      <div className="calc-object__img-wrap">
                        <img src={obj.image} alt={obj.label} className="calc-object__img" />
                      </div>
                      <span className="calc-object__label">{obj.label}</span>
                      <span className={`calc-object__radio ${form.object_type === obj.id ? 'calc-object__radio--active' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Шаг 2 */}
            {step === 1 && (
              <div className="calc-step">
                <h3 className="calc-step__title">{t('calculator.step2Title')}</h3>
                <div className="calc-camera-types">
                  {cameraTypes.map((type) => (
                    <button key={type.id} type="button" className={`calc-camera-type ${form.camera_type === type.id ? 'calc-camera-type--active' : ''}`} onClick={() => handleCamera(type.id)}>
                      <div className="calc-camera-type__img-wrap">
                        <img src={type.image} alt={type.label} className="calc-camera-type__img" />
                      </div>
                      <div className="calc-camera-type__info">
                        <div className="calc-camera-type__label">{type.label}</div>
                        <div className="calc-camera-type__desc">{type.desc}</div>
                      </div>
                      <span className={`calc-object__radio ${form.camera_type === type.id ? 'calc-object__radio--active' : ''}`} />
                    </button>
                  ))}
                </div>
                <button className="calc-back" onClick={() => setStep(0)}>{t('calculator.back')}</button>
              </div>
            )}

            {/* Шаг 3 */}
            {step === 2 && (
              <div className="calc-step">
                <h3 className="calc-step__title">{t('calculator.step3Title')}</h3>
                <p className="calc-step__desc">{t('calculator.step3Desc')}</p>
                <div className="calc-sliders">
                  <div className="calc-slider-group">
                    <div className="calc-slider-group__header">
                      <label>{t('calculator.internal')}</label>
                      <span className="calc-slider-group__value">{form.internal_count}</span>
                    </div>
                    <input type="range" min="0" max="16" value={form.internal_count} onChange={(e) => handleChange('internal_count', Number(e.target.value))} className="calc-slider" />
                    <div className="calc-slider-group__minmax"><span>0</span><span>16</span></div>
                  </div>
                  {form.object_type !== 'flat' && (
                    <div className="calc-slider-group">
                      <div className="calc-slider-group__header">
                        <label>{t('calculator.external')}</label>
                        <span className="calc-slider-group__value">{form.external_count}</span>
                      </div>
                      <input type="range" min="0" max="16" value={form.external_count} onChange={(e) => handleChange('external_count', Number(e.target.value))} className="calc-slider" />
                      <div className="calc-slider-group__minmax"><span>0</span><span>16</span></div>
                    </div>
                  )}
                </div>
                <div className="calc-nav">
                  <button className="calc-back" onClick={() => setStep(1)}>{t('calculator.back')}</button>
                  <button className="calc-next" onClick={() => setStep(3)}>{t('calculator.next')}</button>
                </div>
              </div>
            )}

            {/* Шаг 4 */}
            {step === 3 && (
              <div className="calc-step">
                <h3 className="calc-step__title">{t('calculator.step4Title')}</h3>
                <div className="calc-group__options">
                  {STORAGE_OPTIONS.map((days) => (
                    <button key={days} type="button" className={`calc-option ${form.storage_days === days ? 'calc-option--active' : ''}`} onClick={() => handleChange('storage_days', days)}>
                      {days} {t('calculator.days')}
                    </button>
                  ))}
                </div>
                <div className="calc-nav">
                  <button className="calc-back" onClick={() => setStep(2)}>{t('calculator.back')}</button>
                  <button className="calc-next" onClick={() => setStep(4)}>{t('calculator.next')}</button>
                </div>
              </div>
            )}

            {/* Шаг 5 */}
            {step === 4 && (
              <div className="calc-step">
                <h3 className="calc-step__title">{t('calculator.step5Title')}</h3>
                <div className="calc-group__options">
                  <button type="button" className={`calc-option ${form.need_installation ? 'calc-option--active' : ''}`} onClick={() => handleChange('need_installation', true)}>
                    {t('calculator.installYes')}
                  </button>
                  <button type="button" className={`calc-option ${!form.need_installation ? 'calc-option--active' : ''}`} onClick={() => handleChange('need_installation', false)}>
                    {t('calculator.installNo')}
                  </button>
                </div>
                <div className="calc-nav">
                  <button className="calc-back" onClick={() => setStep(3)}>{t('calculator.back')}</button>
                  <button className="calc-next calc-next--submit" onClick={handleSubmit} disabled={loading}>
                    {loading ? t('calculator.calculating') : t('calculator.calculate')}
                  </button>
                </div>
              </div>
            )}

            {/* Результат */}
            {step === 5 && result && (
              <div className="calc-step">
                <h3 className="calc-step__title">{t('calculator.resultTitle')}</h3>
                <div className="calc-summary">
                  <div className="calc-summary__item"><span>{t('calculator.cameras')}</span><strong>{result.summary.cameras_total.toLocaleString()} {result.summary.currency}</strong></div>
                  <div className="calc-summary__item"><span>{t('calculator.cable')} ({result.summary.cable_meters} м)</span><strong>{result.summary.cable_total.toLocaleString()} {result.summary.currency}</strong></div>
                  <div className="calc-summary__item">
  <span>{t('calculator.recorder')}</span>
  <strong>{(result.summary.recorder_total || 0).toLocaleString()} {result.summary.currency}</strong>
</div>
                  {result.summary.installation_total > 0 && (
                    <div className="calc-summary__item"><span>{t('calculator.installation')}</span><strong>{result.summary.installation_total.toLocaleString()} {result.summary.currency}</strong></div>
                  )}
                  <div className="calc-summary__item calc-summary__item--total"><span>{t('calculator.total')}</span><strong>{result.summary.grand_total.toLocaleString()} {result.summary.currency}</strong></div>
                </div>
                <h4 className="calc-result__subtitle">{t('calculator.equipment')}</h4>
                <div className="calc-equipment">
                  {result.equipment_items.map((item, i) => (
                    <div key={i} className="calc-equipment__item">
                      <div className="calc-equipment__name">
                        <span>{item.name}</span>
                        {item.article !== '—' && <span className="calc-equipment__article">{t('calculator.article')}: {item.article}</span>}
                      </div>
                      <div className="calc-equipment__qty">{item.quantity} {item.unit}</div>
                      <div className="calc-equipment__price">{item.total.toLocaleString()} {result.summary.currency}</div>
                    </div>
                  ))}
                </div>
                <div className="calc-storage">
                  {t('calculator.storage')}: <strong>{result.storage_info.required_tb} ТБ</strong> ({result.storage_info.required_gb} ГБ)
                </div>
                <div className="calc-result__actions">
                  {result.excel_url && (
                    <a href={result.excel_url} target="_blank" rel="noopener noreferrer" className="calc-excel-btn">
                      {t('calculator.downloadExcel')}
                    </a>
                  )}
                  <button className="calc-back" onClick={() => { setStep(0); setResult(null); }}>{t('calculator.recalculate')}</button>
                </div>
              </div>
            )}

            {error && <div className="calculator__error">{error}</div>}
          </div>

          {/* Правая панель */}
          {step > 0 && step < 5 && (
            <div className="calculator__right">
              <h4 className="calc-choice__title">{t('calculator.yourChoice')}</h4>
              <div className="calc-choice">
                {selectedObject && (
                  <div className="calc-choice__item">
                    <img src={selectedObject.image} alt={selectedObject.label} className="calc-choice__img" />
                    <span>{selectedObject.label}</span>
                  </div>
                )}
                {form.camera_type && (
                  <div className="calc-choice__item">
                    <img src={cameraTypes.find((c) => c.id === form.camera_type)?.image} alt={form.camera_type} className="calc-choice__img" />
                    <span>{form.camera_type === 'wired' ? t('calculator.ip') : t('calculator.wifi')}</span>
                  </div>
                )}
                {step >= 3 && (
                  <div className="calc-choice__item">
                    <img src={PLACEMENT_IMAGES.internal} alt={t('calculator.internalShort')} className="calc-choice__img" />
                    <span>{t('calculator.internalShort')}: {form.internal_count} шт.</span>
                  </div>
                )}
                {step >= 3 && form.object_type !== 'flat' && (
                  <div className="calc-choice__item">
                    <img src={PLACEMENT_IMAGES.external} alt={t('calculator.externalShort')} className="calc-choice__img" />
                    <span>{t('calculator.externalShort')}: {form.external_count} шт.</span>
                  </div>
                )}
                {step >= 4 && (
                  <div className="calc-choice__item">
                    <img src={PLACEMENT_IMAGES.storage} alt={t('calculator.archive')} className="calc-choice__img" />
                    <span>{t('calculator.archive')}: {form.storage_days} {t('calculator.days')}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}