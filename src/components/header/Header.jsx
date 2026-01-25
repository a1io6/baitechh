import './style.scss'
import Image from 'next/image'
import logo from '../../../assets/svg/logo.svg'
import { FiSearch, FiUser } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoLanguageOutline } from 'react-icons/io5'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header__logo">
         <Image src={logo} alt="Байтех" width={150} height={50} />
        </div>

        <button className="header__contacts">
          Контакты 
        </button>

        <div className="header__search">
          <input type="text" placeholder="Поиск" />
          <FiSearch className="icon" />
        </div>

        <div className="header__icons">
          <IoLanguageOutline />
         <Link href="/cart">
             <HiOutlineShoppingCart /> 
         </Link> 
         <Link href="/login"><FiUser /></Link> 
        </div>

      </div>
    </header>
  )
}