'use client'
import React from 'react'
import './OrderHistory.scss'
import Under from '@/components/ui/under/Under'
import OtherHistoryCard from '@/components/ui/orderhistorycard/Ordercard'
import { useTranslation } from 'react-i18next'

function OrderHistory() {
    const { t } = useTranslation();
    
    const data = [
        {
            id:1,
            ordernumber: t('orderHistory.orders.order1.number'),
            date:'12.03.2023',
            status: t('orderHistory.orders.order1.status'),
            price:'12 000',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=42dfc155cc47de07e28fe6289b339e3dc9ece450-4902913-images-thumbs&n=13',
            description: t('orderHistory.orders.order1.description'),
        },
        {
            id:2,
            ordernumber: t('orderHistory.orders.order2.number'),
            date:'15.04.2023',
            status: t('orderHistory.orders.order2.status'),
            price:'8 500',
            currency:'2шт',
            image:'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
            description: t('orderHistory.orders.order2.description'),
        },
        {
            id:3,
            ordernumber: t('orderHistory.orders.order3.number'),
            date:'20.05.2023',
            status: t('orderHistory.orders.order3.status'),
            price:'5 200',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=686a9be56666517d45d63247208696bc1fa73646-5870379-images-thumbs&n=13',
            description: t('orderHistory.orders.order3.description'),
        },
        {
            id:4,
            ordernumber: t('orderHistory.orders.order4.number'),
            date:'25.06.2023',
            status: t('orderHistory.orders.order4.status'), 
            price:'15 300',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=42dfc155cc47de07e28fe6289b339e3dc9ece450-4902913-images-thumbs&n=13',
            description: t('orderHistory.orders.order4.description'),
        },
        {
            id:5,
            ordernumber: t('orderHistory.orders.order5.number'),
            date:'30.07.2023',
            status: t('orderHistory.orders.order5.status'),
            price:'9 750',
            currency:'3шт',
            image:'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
            description: t('orderHistory.orders.order5.description'),
        }
    ];

    return (
        <div className='otderhistory container'>
            <Under 
                text={t('orderHistory.breadcrumbs.home')} 
                link={'/'} 
                text1={t('orderHistory.breadcrumbs.account')} 
                text2={t('orderHistory.breadcrumbs.current')}
            />
            <div className='orderhistorycards'>
                {
                    data.map((item) => (
                        <OtherHistoryCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default OrderHistory