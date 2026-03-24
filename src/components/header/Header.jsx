'use client'
import './style.scss'
import Image from 'next/image'
import logo from '../../../assets/svg/logo.svg'
import { FiSearch, FiUser, FiPhone, FiMail, FiMapPin, FiChevronDown } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoCartOutline, IoClose } from 'react-icons/io5'
import { IoLanguageOutline } from 'react-icons/io5'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import ModalAuth from '../ui/modalauth/ModalAuth'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useCart } from '@/lib/cart/hooks/hooks'
import { useSiteSettings } from '@/lib/settings/hook'
import { useQueryClient } from '@tanstack/react-query'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isContactsOpen, setIsContactsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const modalRef = useRef(null)
  const langMenuRef = useRef(null)
  const contactsRef = useRef(null)
  const router = useRouter()
  const { t, i18n } = useTranslation()
  const { data: items = [] } = useCart()
  const { settings, isLoading } = useSiteSettings()
  const queryClient = useQueryClient()

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

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'ru'
    i18n.changeLanguage(savedLang)
  }, [i18n])

  const handleUserClick = () => {
    if (isAuth) {
      setIsOpen(!isOpen)
    } else {
      router.push('/login')
    }
  }

  const handleCartClick = (event) => {
    const token =
      localStorage.getItem('access_token') ||
      localStorage.getItem('acces_token')

    if (!token) {
      event.preventDefault()
      setShowAuthModal(true)
    }
  }

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
    queryClient.invalidateQueries()
    setIsLangMenuOpen(false)
  }

  const getCurrentLanguage = () => {
    const lang = i18n.language || localStorage.getItem('language') || 'ru'
    switch (lang) {
      case 'en':
        return 'EN'
      case 'ru':
        return 'RU'
      case 'ky':
        return 'KG'
      default:
        return 'RU'
    }
  }

  const languages = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'ky', label: 'Кыргызча' },
  ]

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const normalizedQuery = searchQuery.trim()

    if (!normalizedQuery) {
      router.push('/catalog')
      return
    }

    router.push(`/catalog?query=${encodeURIComponent(normalizedQuery)}`)
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

          <div className="contacts-wrapper" ref={contactsRef}>
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
                  <h3>
                    <FiPhone /> {t('header.phones')}
                  </h3>
                  <div className="contacts-list">
                    {isLoading ? (
                      <span className="footer__skeleton" />
                    ) : (
                      <a href={`tel:${settings?.phone}`} className="contact-item">
                        <FiPhone />
                        <span>{settings?.phone}</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="contacts-section">
                  <h3>
                    <FiMail /> Email
                  </h3>
                  <div className="contacts-list">
                    {isLoading ? (
                      <span className="footer__skeleton" />
                    ) : (
                      <a href={`mailto:${settings?.email}`} className="contact-item">
                        <FiMail />
                        <span>{settings?.email}</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="contacts-section">
                  <h3>
                    <FiMapPin /> {t('header.address')}
                  </h3>
                  <div className="contacts-list">
                    <div className="contact-item">
                      <FiMapPin />
                      {isLoading ? (
                        <span className="footer__skeleton" />
                      ) : (
                        <span>{t('footer.address.street')}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="contacts-section">
                  <h3>{t('header.socials')}</h3>
                  <div className="contacts-social">
                    {settings?.whatsapp && (
                      <a
                        href={settings.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link whatsapp"
                      >
                        <FaWhatsapp />
                      </a>
                    )}
                    {settings?.instagram && (
                      <a
                        href={settings.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link instagram"
                      >
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <form className="header__search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder={t('header.search')}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button
            type="submit"
            className="header__search-btn"
            aria-label={t('header.search')}
          >
            <FiSearch className="icon" />
          </button>
        </form>

        <div className="header__icons">
          <div className="language-selector" ref={langMenuRef}>
            <button
              className="language-button"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <IoLanguageOutline />
              <span className="language-current">{getCurrentLanguage()}</span>
              <FiChevronDown className={`arrow-icon ${isLangMenuOpen ? 'open' : ''}`} />
            </button>

            {isLangMenuOpen && (
              <div className="language-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? 'active' : ''}
                  >
                    <span>{lang.label}</span>
                    {i18n.language === lang.code && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M13.3332 4L5.99984 11.3333L2.6665 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/korzina" onClick={handleCartClick}>
            <div className="relative">
              <HiOutlineShoppingCart />
              {items.length > 0 && (
                <span className="absolute top-[-10px] right-[-10px] text-[14px] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#3AA15B] pr-[0px] pt-[1px] text-white">
                  {items.length}
                </span>
              )}
            </div>
          </Link>

          <div className="relative">
            <FiUser onClick={handleUserClick} />
            {isAuth && isOpen && (
              <ModalAuth onClose={() => setIsOpen(false)} ref={modalRef} />
            )}
          </div>
        </div>
      </div>

      {showAuthModal && (
        <div className="auth-modal__overlay" onClick={() => setShowAuthModal(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="auth-modal__close"
              onClick={() => setShowAuthModal(false)}
              aria-label="Закрыть"
            >
              <IoClose size={20} />
            </button>
            <div className="auth-modal__icon">
              <IoCartOutline size={48} />
            </div>
            <h3 className="auth-modal__title">{t('auth.modal.title')}</h3>
            <p className="auth-modal__text">{t('auth.modal.description')}</p>
            <div className="auth-modal__actions">
              <Link
                href="/register"
                className="auth-modal__btn auth-modal__btn--primary"
                onClick={() => setShowAuthModal(false)}
              >
                {t('auth.modal.register')}
              </Link>
              <Link
                href="/login"
                className="auth-modal__btn auth-modal__btn--secondary"
                onClick={() => setShowAuthModal(false)}
              >
                {t('auth.modal.login')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
