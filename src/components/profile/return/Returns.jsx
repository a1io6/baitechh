'use client'
import Under from '@/components/ui/under/Under'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

export function Returns() {
    const { t } = useTranslation();
    
    const data = [
        {
            id:1,
            ordernumber: t('returns.orders.order1.number'),
            date:'12.03.2023',
            status: t('returns.orders.order1.status'),
            price:'12 000',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=42dfc155cc47de07e28fe6289b339e3dc9ece450-4902913-images-thumbs&n=13',
            description: t('returns.orders.order1.description'),
        },
        {
            id:2,
            ordernumber: t('returns.orders.order2.number'),
            date:'15.04.2023',
            status: t('returns.orders.order2.status'),
            price:'8 500',
            currency:'2шт',
            image:'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
            description: t('returns.orders.order2.description'),
        },
        {
            id:3,
            ordernumber: t('returns.orders.order3.number'),
            date:'20.05.2023',
            status: t('returns.orders.order3.status'),
            price:'5 200',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=686a9be56666517d45d63247208696bc1fa73646-5870379-images-thumbs&n=13',
            description: t('returns.orders.order3.description'),
        },
        {
            id:4,
            ordernumber: t('returns.orders.order4.number'),
            date:'25.06.2023',
            status: t('returns.orders.order4.status'), 
            price:'15 300',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=42dfc155cc47de07e28fe6289b339e3dc9ece450-4902913-images-thumbs&n=13',
            description: t('returns.orders.order4.description'),
        },
        {
            id:5,
            ordernumber: t('returns.orders.order5.number'),
            date:'30.07.2023',
            status: t('returns.orders.order5.status'),
            price:'9 750',
            currency:'3шт',
            image:'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
            description: t('returns.orders.order5.description'),
        }
    ];

    const getStatusClass = (status) => {
        const statusKey = status.toLowerCase();
        if (statusKey.includes(t('returns.statusTypes.delivered').toLowerCase()) || 
            statusKey.includes(t('returns.statusTypes.success').toLowerCase())) {
            return 'status status--success';
        }
        if (statusKey.includes(t('returns.statusTypes.processing').toLowerCase())) {
            return 'status status--pending';
        }
        if (statusKey.includes(t('returns.statusTypes.cancelled').toLowerCase())) {
            return 'status status--error';
        }
        return 'status';
    };

    return (
        <div className='otderhistory container'>
            <Under 
                text={t('returns.breadcrumbs.orderHistory')} 
                link={'/'}
                text1={t('returns.breadcrumbs.allOrders')} 
                text2={t('returns.breadcrumbs.delivered')} 
            />
            <div className='orderhistorycards'>
                {
                    data.map((item) => (
                        <div className='otherhistorycard' key={item.id}>
                            <h1 className='ordernumber'>{item.ordernumber}</h1>
                            <p className='date'>{t('returns.ordered')} {item.date}</p>

                            <p className='statuss'>
                                {t('returns.status')}: <span className={getStatusClass(item.status)}>{item.status}</span>
                            </p>

                            <h2 className='price'>{t('returns.amount')}: {item.price} {t('returns.currency')}</h2>

                            <div className="orderImg">
                                <Image src={item.image} alt="image" width={20} height={20}/>
                                <span>{t('returns.camera')} {item.currency}.</span>
                            </div>

                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}