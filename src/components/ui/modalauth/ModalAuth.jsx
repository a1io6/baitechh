'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../../../assets/svg/Vector (47).svg'
import img2 from '../../../../assets/svg/Vector (48).svg'
import './style.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { LogoutModal } from '@/components/logoutModal/logoutModal'
import { useTranslation } from 'react-i18next'

function ModalAuth({ onClose }) {
  const { t } = useTranslation()
  const router = useRouter()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Удаляем только пользовательские токены
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    
    console.log('🚪 Выход из аккаунта')
    
    // Уведомляем другие компоненты об изменении статуса авторизации
    window.dispatchEvent(new Event('authChange'))
    
    // Показываем уведомление
    toast.success(t('modalAuth.messages.logoutSuccess'))
    
    onClose()
    
    router.push('/')
  }

  return (
    <div className='modal-auth'>
      <a href="/profile">
        <div className='flex gap-[15px] items-center justify-start cursor-pointer'>
          <Image src={img} alt={t('modalAuth.personalAccount')} />
          <h2 className='text-[16px] font-[400]'>{t('modalAuth.personalAccount')}</h2>
        </div>
      </a>
      
      <div 
        className='flex gap-[15px] items-center justify-start cursor-pointer' 
        onClick={() => setIsLogoutModalOpen(true)}
      >
        <Image src={img2} alt={t('modalAuth.logout')} />
        <h2 className='text-[16px] font-[400]'>{t('modalAuth.logout')}</h2>
      </div>
      
      <div 
        onClick={onClose} 
        style={{ padding: '10px' }} 
        className='modal-auth-overlay'
      />
      
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  )
}

export default ModalAuth