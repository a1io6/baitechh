'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../../../assets/svg/Vector (47).svg'
import img2 from '../../../../assets/svg/Vector (48).svg'
import './style.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

function ModalAuth({ onClose }) {
  const router = useRouter()

  const handleLogout = () => {
    // Удаляем только пользовательские токены
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    
    console.log('🚪 Выход из аккаунта')
    
    // Уведомляем другие компоненты об изменении статуса авторизации
    window.dispatchEvent(new Event('authChange'))
    
    // Показываем уведомление
    toast.success('Вы успешно вышли из аккаунта')
    
    onClose()
    
    router.push('/')
  }

  return (
    <div className='modal-auth'>
      <a href="/profile">
        <div className='flex gap-[15px] items-center justify-start cursor-pointer'>
          <Image src={img} alt="Личный кабинет" />
          <h2 className='text-[16px] font-[400]'>Личный кабинет</h2>
        </div>
      </a>
      
      <div 
        className='flex gap-[15px] items-center justify-start cursor-pointer' 
        onClick={handleLogout}
      >
        <Image src={img2} alt="Выход" />
        <h2 className='text-[16px] font-[400]'>Выход</h2>
      </div>
      
      <div 
        onClick={onClose} 
        style={{ padding: '10px' }} 
        className='modal-auth-overlay'
      />
    </div>
  )
}

export default ModalAuth