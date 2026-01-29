import React from 'react'
import './OtherHistoryCard.scss'

function OtherHistoryCard({ item }) {
  const statusClass = () => {
    switch (item.status) {
      case 'Добавлен':
      case 'Успешно':
        return 'status status--success'
      case 'В обработке':
        return 'status status--pending'
      case 'Отменен':
        return 'status status--error'
      default:
        return 'status'
    }
  }

  return (
    <div className='otherhistorycard'>
      <h1 className='ordernumber'>{item.ordernumber}</h1>
      <p className='date'>Оформлен {item.date}</p>

      <p className='statuss'>
        Статус: <span className={statusClass()}>{item.status}</span>
      </p>

      <h2 className='price'>Сумма: {item.price} сом</h2>

      <div className="orderImg">
        <img src={item.image} alt="" />
        <span>Камера {item.currency}.</span>
      </div>

      <p>{item.description}</p>
    </div>
  )
}

export default OtherHistoryCard
