'use client'
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight} from "react-icons/go";
import { LuArrowRight } from "react-icons/lu";
import { useTranslation } from 'react-i18next'
import {
  Building2,
  Cable,
  Camera,
  CarFront,
  DoorOpen,
  House,
  HousePlug,
  Laptop,
  Lightbulb,
  Lock,
  MonitorSmartphone,
  Network,
  Router,
  Server,
  Shield,
  ShieldCheck,
  ShieldUser,
  Siren,
  Store,
  Wifi,
  Wrench,
} from 'lucide-react'
import Under from '../ui/under/Under'
import { solutionsData, solutionTranslations } from '@/lib/solution/data'

// ─── SVG иконки (outline, монолинейные — под стиль arman) ───────────────────
const icons = {
  camera: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="4" y="16" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M44 26l14-8v28l-14-8V26z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="22" cy="32" r="6" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  'building-store': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8 24l6-14h36l6 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 24a8 8 0 0016 0 8 8 0 0016 0 8 8 0 0016 0" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M8 32v22h48V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="24" y="38" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M6 30L32 8l26 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 26v26h40V26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="24" y="36" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  car: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M10 34l8-16h28l8 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="4" y="34" width="56" height="14" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="16" cy="52" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="48" cy="52" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M4 42h56" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  'shield-lock': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M32 6L8 16v18c0 14 12 22 24 26 12-4 24-12 24-26V16L32 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="24" y="30" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M27 30v-4a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  door: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="14" y="6" width="36" height="52" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M14 58H6m44 0h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="44" cy="32" r="3" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="10" y="28" width="44" height="30" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 28V20a12 12 0 0124 0v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="44" r="4" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="32" y1="48" x2="32" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M32 8a18 18 0 0118 18v12l4 6H10l4-6V26A18 18 0 0132 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M26 44a6 6 0 0012 0" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="32" y1="4" x2="32" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'user-shield': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M4 58c0-12 9-18 20-18s20 6 20 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M46 28l12 6v10c0 6-5 11-12 13-7-2-12-7-12-13V34l12-6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8 24a34 34 0 0148 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M16 32a22 22 0 0132 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 40a10 10 0 0116 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="50" r="4" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  router: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="6" y="28" width="52" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M16 28V18m16 10V14m16 14V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="16" cy="38" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="28" cy="38" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M40 38h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'topology-star': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="32" cy="8" r="5" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="56" cy="44" r="5" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="8" cy="44" r="5" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M32 26V13m15.7 18.5l8.7 5M16.3 31.5l-8.7 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M22 6v16m20-16v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M12 22h40a16 16 0 01-16 16H28A16 16 0 0112 22z" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="32" y1="38" x2="32" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'smart-home': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M6 30L32 8l26 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 26v26h40V26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="38" r="8" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M28 34l3 4 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M32 10c-9.9 0-18 7.9-18 17.8 0 6.1 3 10.3 6.9 14.2 1.7 1.7 3.1 3.9 3.1 6h16c0-2.1 1.4-4.3 3.1-6 3.9-3.9 6.9-8.1 6.9-14.2C50 17.9 41.9 10 32 10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M26 48h12M24 54h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M32 4v4M18 12l3 3M46 12l-3 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'device-tv': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="12" y="8" width="40" height="48" rx="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="32" cy="28" r="10" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M32 22v6l4 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 46h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M18 14l8 8-9 9-8-8 9-9z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M38 14a10 10 0 0112 12L34 42l-8-8 16-16z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M30 38l-8 8M18 50l-4 4M34 42l10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  server: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="6" y="8" width="52" height="16" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="6" y="28" width="52" height="16" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="6" y="48" width="52" height="10" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="16" cy="36" r="3" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  'shield-check': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M32 6L8 16v18c0 14 12 22 24 26 12-4 24-12 24-26V16L32 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M22 33l7 7 14-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'cloud-lock': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M44 44H20a14 14 0 010-28 4 4 0 010-.4A16 16 0 0152 28a10 10 0 01-8 16z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="24" y="40" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M27 40v-4a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'device-laptop': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="10" y="10" width="44" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M4 52h56M18 52l-4 0m32 0h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M4 52l6-10h44l6 10" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
  ),
}

function SvgIcon({ name }) {
  return (
    <div className="w-[80px] h-[80px] mx-auto mb-5 text-current transition-colors">
      {icons[name] || (
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <rect x="8" y="8" width="48" height="48" rx="6" stroke="currentColor" strokeWidth="2.5"/>
        </svg>
      )}
    </div>
  )
}

// ─── Одна секция (заголовок по центру + иконки-карточки в ряд) ───────────────
function SolutionSection({ section, lang }) {
  const title = section.title[lang] || section.title.ru
  const count = section.items.length

  return (
    <div id={section.id} className="mb-[80px]">
      <Link href={section.href} className="group block text-center mb-10">
        <span className="text-[22px] md:text-[26px] font-medium text-[#173B73] border-b-[2px] border-[#173B73] pb-1 group-hover:text-[#172B99] group-hover:border-[#172B99] transition-colors">
          {title}
        </span>
      </Link>

      <div className={
        count === 3
          ? "flex justify-between gap-6 flex-wrap"
          : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
      }>
        {section.items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`group flex flex-col items-center text-center text-[#173B73] ${count === 3 ? 'flex-1' : ''}`}
          >
            <SvgIcon name={item.icon} />
            <span className="text-[15px] flex text-[#1f2937] group-hover:text-[#172B99] transition-colors leading-snug">
              {item.title[lang] || item.title.ru}
              <span className="ml-1 text-[#173B73]"><LuArrowRight/></span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
// ─── Hero баннер (как на arman — оранжевый фон, список якорей) ───────────────
function HeroBanner({ sections, lang, uiT }) {
  return (
    <div
      className="w-full relative overflow-hidden mb-[70px]"
      style={{ background: 'linear-gradient(135deg, rgb(2, 13, 48) 0%, #0e2e5b 58%, #000000 100%)' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,121,65,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none select-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/60 rounded-full flex items-center justify-center"
            style={{
              width: 60 + (i % 3) * 20,
              height: 60 + (i % 3) * 20,
              top: `${10 + (i % 4) * 22}%`,
              left: `${40 + (i % 5) * 12}%`,
            }}
          >
            <div className="w-5 h-5 bg-[#172B99] rounded-sm opacity-60" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 xl:px-0 max-w-[1280px] py-[56px] md:py-[68px] relative z-10">
        <div className="max-w-[620px]">
          <h1 className="mt-5 text-[32px] md:text-[42px] font-bold text-white mb-5 leading-tight">
            {uiT.heroTitle}
          </h1>
          <p className="mb-8 text-[15px] md:text-[17px] leading-7 text-white/78">
            {uiT.heroDesc}
          </p>
        </div>
        <ul className="grid max-w-[760px] grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((s) => (
            <li key={s.id}
              
                href={`#${s.id}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white/90 backdrop-blur-sm transition-all hover:border-[#172B99]/70 hover:bg-white/12"
              >
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 text-[#D97941] p-[7px]">
                  {icons[s.icon] ? icons[s.icon] : (
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                      <rect x="8" y="8" width="48" height="48" rx="6" stroke="currentColor" strokeWidth="2.5"/>
                    </svg>
                  )}
                </div>
                <span className="text-[15px] md:text-[16px] flex-1 group-hover:text-white transition-colors">
                  {s.title[lang] || s.title.ru}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#173B72] text-[14px] font-bold text-white flex-shrink-0">
                  <GoArrowUpRight />
                </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
// ─── Главный компонент ────────────────────────────────────────────────────────
const CorporateBlock = () => {
  const { i18n } = useTranslation()
  const lang = ['ru', 'kg', 'en'].includes(i18n.language) ? i18n.language : 'ru'
  const uiT = solutionTranslations[lang]

  return (
    <section className="w-full">
      <div className="mx-auto px-4 xl:px-0 max-w-[1280px]">
        <Under text={uiT.breadcrumbHome} link="/" text1={uiT.breadcrumbSolutions} />
      </div>
      <HeroBanner sections={solutionsData} lang={lang} uiT={uiT} />

      <div className="container mx-auto px-4 xl:px-0 max-w-[1280px] pb-[60px]">

        {solutionsData.map((section) => (
          <SolutionSection
            key={section.id}
            section={section}
            lang={lang}
          />
        ))}
      </div>
    </section>
  )
}

export default CorporateBlock
