import React from 'react'
import './OtherHistoryCard.scss'

function OtherHistoryCard({ item }) {
    const statusClass = () => {
        switch (item.status) {
            case 1: return 'status status--pending';   // В обработке
            case 2: return 'status status--success';   // Доставлено
            case 3: return 'status status--error';     // Отменен
            default: return 'status';
        }
    }

    return (
        <div className='otherhistorycard'>
            <h1 className='ordernumber'>Заказ №{item.order_number}</h1>

            <p className='date'>Оформлен {item.formatted_date}</p>

            <p className='statuss'>
                Статус: <span className={statusClass()}>{item.status_display}</span>
            </p>

            <h2 className='price'>Сумма: {item.total_price} сом</h2>

            <div className="orderImg">
                {item.items[0]?.image ? (
                    <img src={item.items[0].image} alt="" />
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
                <span>{item.items[0]?.quantity} шт.</span>
            </div>

            <p>{item.address}</p>
        </div>
    )
}

export default OtherHistoryCard