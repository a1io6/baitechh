'use client'
import './style.scss'
import Image from 'next/image'
import logo from '../../../assets/svg/logo.svg'
import { FiSearch, FiUser, FiPhone, FiMail, FiMapPin, FiChevronDown } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoLanguageOutline } from 'react-icons/io5'
import { FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import ModalAuth from '../ui/modalauth/ModalAuth'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isContactsOpen, setIsContactsOpen] = useState(false)
  const modalRef = useRef(null)
  const langMenuRef = useRef(null)
  const contactsRef = useRef(null)
  const router = useRouter()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const checkAuth = () => {
      const userToken = localStorage.getItem('access_token')
      setIsAuth(!!userToken)
    }
    checkAuth()
    window.addEventListener('storage', checkAuth)
    window.addEventListener('authChange', checkAuth)
    return () => {
      window.removeEventListener('storage', checkAuth)
      window.removeEventListener('authChange', checkAuth)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false)
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false)
      }
      if (contactsRef.current && !contactsRef.current.contains(event.target)) {
        setIsContactsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleUserClick = () => {
    if (isAuth) {
      setIsOpen(!isOpen) 
    } else {
      router.push('/login')
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsLangMenuOpen(false)
  }

  const getCurrentLanguage = () => {
    const lang = i18n.language
    switch(lang) {
      case 'en': return 'EN'
      case 'ru': return 'RU'
      case 'kg': return 'KG'
      default: return 'RU'
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div>
            <Link href="/">
              <Image src={logo} alt="Байтех" width={150} height={50} />
            </Link>
          </div>
          <div className='contacts-wrapper' ref={contactsRef}>
            <button 
              className={`header__contacts ${isContactsOpen ? 'active' : ''}`}
              onClick={() => setIsContactsOpen(!isContactsOpen)}
            >
              <span>{t('header.contact')}</span>
              <FiChevronDown className="arrow-icon" />
            </button>
            
            {isContactsOpen && (
              <div className="contacts-dropdown">
                <div className="contacts-section">
                  <h3><FiPhone /> {t('header.phones')}</h3>
                  <div className="contacts-list">
                    <a href="tel:+996555123456" className="contact-item">
                      <FiPhone />
                      <span>+996 555 123 456</span>
                    </a>
                    <a href="tel:+996700123456" className="contact-item">
                      <FiPhone />
                      <span>+996 700 123 456</span>
                    </a>
                    <a href="tel:+996777123456" className="contact-item">
                      <FiPhone />
                      <span>+996 777 123 456</span>
                    </a>
                  </div>
                </div>

                <div className="contacts-section">
                  <h3><FiMail /> Email</h3>
                  <div className="contacts-list">
                    <a href="mailto:info@baitech.kg" className="contact-item">
                      <FiMail />
                      <span>info@baitech.kg</span>
                    </a>
                  </div>
                </div>

                <div className="contacts-section">
                  <h3><FiMapPin /> {t('header.address')}</h3>
                  <div className="contacts-list">
                    <div className="contact-item">
                      <FiMapPin />
                      <span>г. Бишкек, ул. Примерная 123</span>
                    </div>
                  </div>
                </div>

                <div className="contacts-section">
                  <h3>{t('header.socials')}</h3>
                  <div className="contacts-social">
                    <a href="https://wa.me/996555123456" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                      <FaWhatsapp />
                    </a>
                    <a href="https://t.me/baitech" target="_blank" rel="noopener noreferrer" className="social-link telegram">
                      <FaTelegram />
                    </a>
                    <a href="https://instagram.com/baitech" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="header__search">
          <input type="text" placeholder={t('header.search')} />
          <FiSearch className="icon" />
        </div>
        <div className="header__icons">
          <div className="language-selector" ref={langMenuRef}>
            <button 
              className="language-button"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <IoLanguageOutline />
              <span className="language-current">{getCurrentLanguage()}</span>
            </button>
            {isLangMenuOpen && (
              <div className="language-menu">
                <button 
                  onClick={() => changeLanguage('ru')}
                  className={i18n.language === 'ru' ? 'active' : ''}
                >
                  Русский
                </button>
                <button 
                  onClick={() => changeLanguage('en')}
                  className={i18n.language === 'en' ? 'active' : ''}
                >
                  English
                </button>
                <button 
                  onClick={() => changeLanguage('kg')}
                  className={i18n.language === 'kg' ? 'active' : ''}
                >
                  Кыргызча
                </button>
              </div>
            )}
          </div>
          <Link href="/cart">
            <HiOutlineShoppingCart />
          </Link>
          <div className="relative">
            <FiUser onClick={handleUserClick} />
            {isAuth && isOpen && (
              <ModalAuth 
                onClose={() => setIsOpen(false)} 
                ref={modalRef}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}