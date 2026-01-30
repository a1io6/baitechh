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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <div>
         <Link href="/"><Image src={logo} alt="Байтех" width={150} height={50} /></Link>
          </div>
        <button className="header__contacts">
          Контакты 
        </button>
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
         <div className='relative'>
        <FiUser onClick={() => setIsOpen(!isOpen)}/>
     {isOpen && <ModalAuth onClose={() => setIsOpen(false)} />}
         </div>
        </div>
      </div>
    </header>
  )
}