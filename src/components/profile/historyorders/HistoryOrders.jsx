'use client'
import React from 'react'
import './OrderHistory.scss'
import Under from '@/components/ui/under/Under'
import OtherHistoryCard from '@/components/ui/orderhistorycard/Ordercard'
function OrderHistory() {
     const data = [
        {
            id:1,
            ordernumber:'Заказ №123456',
            date:'12.03.2023',
            status:'Доставлен',
            price:'12 000',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=42dfc155cc47de07e28fe6289b339e3dc9ece450-4902913-images-thumbs&n=13',
            description:'Доставка по адресу: ул. Пушкина, 10, кв. 5, Москва',
        },
        {
            id:2,
            ordernumber:'Заказ №654321',
            date:'15.04.2023',
            status:'В обработке',
            price:'8 500',
            currency:'2шт',
            image:'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
            description:'Доставка по адресу: пр. Ленина, 25, кв. 12, Санкт-Петербург',
        },
        {
            id:3,
            ordernumber:'Заказ №789012',
            date:'20.05.2023',
            status:'Отменен',
            price:'5 200',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=686a9be56666517d45d63247208696bc1fa73646-5870379-images-thumbs&n=13',
            description:'Доставка по адресу: ул. Советская, 8, кв. 3, Новосибирск',
        },
        {
            id:4,
            ordernumber:'Заказ №210987',
            date:'25.06.2023',
            status:'Доставлен', 
            price:'15 300',
            currency:'1шт',
            image:'https://avatars.mds.yandex.net/i?id=42dfc155cc47de07e28fe6289b339e3dc9ece450-4902913-images-thumbs&n=13',
            description:'Доставка по адресу: ул. Гагарина, 14, кв. 7, Екатеринбург',
        },
        {
            id:5,
            ordernumber:'Заказ №345678',
            date:'30.07.2023',
            status:'В обработке',
            price:'9 750',
            currency:'3шт',
            image:'https://img.championat.com/c/1200x900/news/big/g/k/v-anime-po-skottu-piligrimu-vernutsya-aktyory-iz-filma-edgara-rajta_16801858041715086869.jpg',
            description:'Доставка по адресу: пр. Мира, 30, кв. 15, Казань',
        }
    ]
  return (
    <div className='otderhistory container'>
        <Under text="История заказов" text1="Все заказы" text2="Доставленные" text3="Отмененные"/>
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
