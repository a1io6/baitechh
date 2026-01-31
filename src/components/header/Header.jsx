'use client'
import './style.scss'
import Image from 'next/image'
import logo from '../../../assets/svg/logo.svg'
import { FiSearch, FiUser } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoLanguageOutline } from 'react-icons/io5'
import Link from 'next/link'
import ModalAuth from '../ui/modalauth/ModalAuth'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const modalRef = useRef(null)
  const router = useRouter();

  // Проверяем токен при загрузке хедера
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    setIsAuth(!!token)
  }, [])

  // Закрытие модалки при клике вне её
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleUserClick = () => {
    if (isAuth) {
      setIsOpen(!isOpen) // если авторизован — показываем ModalAuth
    } else {
      router.push('/login')
      console.log('Пользователь не авторизован')
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div>
            <Link href="/"><Image src={logo} alt="Байтех" width={150} height={50} /></Link>
          </div>
          <button className="header__contacts">Контакты</button>
        </div>

        <div className="header__search">
          <input type="text" placeholder="Поиск" />
          <FiSearch className="icon" />
        </div>

        <div className="header__icons">
          <IoLanguageOutline />
          <Link href="/cart">
            <HiOutlineShoppingCart />
          </Link>
          <div className="relative">
            <FiUser onClick={handleUserClick} />
            {isAuth && isOpen && <ModalAuth onClose={() => setIsOpen(false)} ref={modalRef} />}
          </div>
        </div>
      </div>
    </header>
  )
}