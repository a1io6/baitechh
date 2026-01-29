import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";   
import './TransactionHistory.scss'
import Under from '@/components/ui/under/Under';
function TransactionHistory() {
    const data = [
        {
            id: 1,
            payment: 'Оплата заказа',
            date: '12 Августа, 2023',
            amount: '12 000 сом',
            icon: <GiCheckMark />,
            status: 'Успешно'
        },
        {
            id: 2,
            payment: 'Оплата заказа',
            date: '12 Августа, 2023',
            amount: '12 000 сом',
            icon: <GiCheckMark />,
            status: 'Успешно'
        },
        {
            id: 3,
            payment: 'Оплата заказа',
            date: '12 Августа, 2023',
            amount: '12 000 сом',
            icon: <RxCross2 />,
            status: 'Ошибка'
        },
        {
            id: 4,
            payment: 'Оплата заказа',
            date: '12 Августа, 2023',
            amount: '12 000 сом',
            icon: <GiCheckMark />,
            status: 'Успешно'
        },
        {
            id: 5,
            payment: 'Оплата заказа',
            date: '12 Августа, 2023',
            amount: '12 000 сом',
            icon: <GiCheckMark />,
            status: 'Успешно'
        }
    ]
  return (
    <div className='transactionhistory container'>
        <Under text={"Главная"} text1={"Личный кабинет"} text2={"История транзакций"} />
        {
            data.map((item) => (
                <div key={item.id} className="transactionhistorycard">
                    <div className={`icon ${item.status === 'Успешно' ? 'icon--success' : 'icon--error'}`}>
                        <span>{item.icon}</span>
                    </div>
                    <div className='details'>
                        <div className='title'>
                            <h3>{item.payment}</h3>
                            <span>{item.amount}</span>
                        </div>
                        <div className='date'>
                            <p>{item.date}  </p>
                        </div>
                    </div>
                    </div>
            ))
        }
    </div>
  )
}

export default TransactionHistory
