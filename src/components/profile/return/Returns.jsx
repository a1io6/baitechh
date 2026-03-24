'use client'
import Under from '@/components/ui/under/Under'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { $api } from '../../../../API/api'

export function Returns() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReturns = async () => {
            try {
                const response = await $api.get('api/returns/requests/');
                setData(response.data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReturns();
    }, []);

    const getStatusClass = (status) => {
        if (!status) return 'status';
        switch (status) {
            case 'delivered': return 'status status--success';
            case 'pending':   return 'status status--pending';
            case 'cancelled': return 'status status--error';
            default:          return 'status';
        }
    };

    if (loading) return (
        <div className='otderhistory container'>
            <p className='loader'></p>
        </div>
    );

    if (error) return (
        <div className='otderhistory container'>
            <p>{`Ошибка: ${error}`}</p>
        </div>
    );

    return (
        <div className='otderhistory container'>
            <Under
                text={t('returns.breadcrumbs.orderHistory')}
                link={'/'}
                text1={t('returns.breadcrumbs.allOrders')}
                text2={t('returns.breadcrumbs.delivered')}
            />
            <div className='orderhistorycards'>
                {data.length === 0 ? (
                    <p>{t('returns.empty') || 'Заявок на возврат нет.'}</p>
                ) : (
                    data.map((item) => (
                        <div className='otherhistorycard' key={item.id}>
                            <h1 className='ordernumber'>
                                {t('returns.orderNumber')} #{item.order_number}
                            </h1>

                            <p className='date'>
                                {t('returns.ordered')} {item.order_date}
                            </p>

                            <p className='statuss'>
                                {t('returns.status')}:{' '}
                                <span className={getStatusClass(item.status)}>
                                    {item.status_display}
                                </span>
                            </p>

                            <h2 className='price'>
                                {t('returns.amount')}: {item.total_price} {t('returns.currency')}
                            </h2>

                            <div className="orderImg">
                                {item.items[0]?.image ? (
                                    <Image
                                        src={item.items[0].image}
                                        alt="image"
                                        width={20}
                                        height={20}
                                    />
                                ) : (
                                    <div style={{
                                        width: 100,
                                        height: 100,
                                        background: '#fff',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: 4,
                                        flexShrink: 0,
                                    }}/>
                                )}
                                <span>{item.items[0]?.product_name} {item.items[0]?.quantity}шт.</span>
                            </div>

                            <p>{item.address}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}