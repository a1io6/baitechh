'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../../../assets/svg/logo.svg'
import img1 from '../../../../../../assets/png/5310213237846513447.jpg'
import React, { Suspense, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { GoArrowUpRight } from 'react-icons/go'
import { Canvas, useFrame } from '@react-three/fiber'

// ─── ДЕКОРАТИВНЫЙ ИНТЕРАКТИВНЫЙ ФОН ДЛЯ БАННЕРА ───
function AnimatedGrid() {
  const pointsRef = useRef(null)

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const positions = pointsRef.current.geometry.attributes.position.array 
    const time = clock.getElapsedTime()

    let index = 0
    for (let i = 0; i < 35; i++) {
      for (let j = 0; j < 35; j++) {
        const x = (i - 17.5) * 0.5
        const y = (j - 17.5) * 0.5
        positions[index + 2] = Math.sin(x * 0.4 + time * 0.6) * Math.cos(y * 0.4 + time * 0.6) * 0.6
        index += 3
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  const count = 35
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * count * 3)
    let index = 0
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        pos[index++] = (i - count / 2) * 0.55
        pos[index++] = (j - count / 2) * 0.55
        pos[index++] = 0
      }
    }
    return pos
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#416fb8" size={0.07} sizeAttenuation={true} transparent opacity={0.5} />
    </points>
  )
}

/* ─── Декоративные иконки баннера ─── */
const bannerIcons = [
  { top: '6%', left: '46%', d: 'doc' },
  { top: '8%', left: '92%', d: 'doc2' },
  { top: '20%', left: '64%', d: 'gear' },
  { top: '34%', left: '85%', d: 'monitor' },
  { top: '46%', left: '50%', d: 'camera' },
  { top: '60%', left: '74%', d: 'speaker' },
  { top: '78%', left: '58%', d: 'valve' },
]

function BannerIcon({ kind }) {
  const stroke = 'rgba(255,255,255,0.35)'
  switch (kind) {
    case 'gear':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="7" stroke={stroke} strokeWidth="1.5" />
          <circle cx="20" cy="20" r="13" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 4" />
        </svg>
      )
    case 'monitor':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="9" width="28" height="18" rx="2" stroke={stroke} strokeWidth="1.5" />
          <line x1="14" y1="32" x2="26" y2="32" stroke={stroke} strokeWidth="1.5" />
          <line x1="20" y1="27" x2="20" y2="32" stroke={stroke} strokeWidth="1.5" />
        </svg>
      )
    case 'camera':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="14" width="22" height="14" rx="2" stroke={stroke} strokeWidth="1.5" />
          <path d="M28 18l8-4v14l-8-4" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'speaker':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 15h6l9-6v22l-9-6h-6z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M29 16a6 6 0 010 8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'valve':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="6" stroke={stroke} strokeWidth="1.5" />
          <line x1="20" y1="6" x2="20" y2="14" stroke={stroke} strokeWidth="1.5" />
          <line x1="20" y1="26" x2="20" y2="34" stroke={stroke} strokeWidth="1.5" />
          <line x1="6" y1="20" x2="14" y2="20" stroke={stroke} strokeWidth="1.5" />
          <line x1="26" y1="20" x2="34" y2="20" stroke={stroke} strokeWidth="1.5" />
        </svg>
      )
    case 'doc2':
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect x="7" y="4" width="20" height="26" rx="2" stroke={stroke} strokeWidth="1.5" />
          <line x1="11" y1="11" x2="23" y2="11" stroke={stroke} strokeWidth="1.5" />
          <line x1="11" y1="16" x2="23" y2="16" stroke={stroke} strokeWidth="1.5" />
        </svg>
      )
    default:
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect x="9" y="5" width="16" height="22" rx="2" stroke={stroke} strokeWidth="1.5" />
          <line x1="13" y1="11" x2="21" y2="11" stroke={stroke} strokeWidth="1.5" />
          <line x1="13" y1="16" x2="21" y2="16" stroke={stroke} strokeWidth="1.5" />
        </svg>
      )
  }
}

export default function TelephoneSvyazPage() {
  const { t } = useTranslation()

  // Получаем переведенные данные
  const advantages = t('telephoneCommunication.advantages', { returnObjects: true })

  return (
    <div className="text-[#1f2937] font-sans min-h-screen antialiased select-none">
      
      {/* ─── БАННЕР ─── */}
      <header 
        className="w-full relative overflow-hidden h-[360px] md:h-[400px]"
        style={{ background: 'linear-gradient(135deg, #051636 0%, #0e2e5b 60%, #173B73 100%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,59,115,0.3),transparent_50%)]" />
        
        {/* Декоративные иконки */}
        {bannerIcons.map((ic, i) => (
          <div key={i} className="absolute hidden md:block" style={{ top: ic.top, left: ic.left }}>
            <BannerIcon kind={ic.d} />
          </div>
        ))}

        <div className="max-w-[1280px] mx-auto px-4 xl:px-0 h-full grid grid-cols-1 md:grid-cols-12 items-center relative z-10">
          <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
            
            {/* ─── ХЛЕБНЫЕ КРОШКИ ─── */}
            <div className="text-[13px] font-medium text-white/60 mb-3 flex items-center gap-1.5 flex-wrap">
              <Link href="/solutions" className="hover:text-white transition-colors duration-200">
                {t('telephoneCommunication.breadcrumb.solutions')}
              </Link>
              <span className="text-white/30">&gt;</span>
              <Link href="/solutions/promyshlennaya-svyaz" className="hover:text-white transition-colors duration-200">
                {t('telephoneCommunication.breadcrumb.industrialCommunication')}
              </Link>
              <span className="text-white/30">&gt;</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight">
              {t('telephoneCommunication.title')}
            </h1>
            <p className="text-white/70 text-[15px] mt-2 font-light">
              {t('telephoneCommunication.subtitle')}
            </p>
          </div>

          <div className="hidden md:block md:col-span-4 h-full relative">
            <div className="absolute inset-0 top-[-10px]">
              <Suspense fallback={null}>
                <Canvas camera={{ position: [0, -5, 4.5], fov: 45 }}>
                  <ambientLight intensity={0.6} />
                  <AnimatedGrid />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>
      </header>

      {/* ─── ARMTEL БЛОК ─── */}
      <section className="max-w-[1280px] mx-auto mt-6 px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex items-center justify-start">
            <Image 
              src={logo} 
              alt="Armtel Logo" 
              width={200} 
              height={200}
              className="object-contain"
            />
          </div>
          <div className="lg:col-span-8">
            <p className="text-[14px] text-slate-600 leading-relaxed">
              {t('telephoneCommunication.armtelDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* ─── ВВЕДЕНИЕ ─── */}
      <section className="max-w-[1280px] mx-auto mt-10 px-4 xl:px-0">
        <h2 className="text-2xl md:text-4xl font-normal text-slate-800 tracking-tight leading-snug max-w-4xl">
          {t('telephoneCommunication.mainTitle')}
        </h2>
        <p className="text-slate-500 text-[15px] mt-4 max-w-3xl font-light">
          {t('telephoneCommunication.mainSubtitle')}
        </p>
      </section>

      {/* ─── ТРИ КАРТОЧКИ ─── */}
      <section className="max-w-[1280px] mx-auto mt-12 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {advantages.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-8 flex flex-col justify-between min-h-[220px] shadow-sm">
              <div>
                <h3 className="text-[17px] font-semibold text-slate-800 leading-tight">{item.title}</h3>
                <p className="text-[13px] text-slate-400 mt-4 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                {item.icon === 'network' && (
                  <svg className="w-6 h-6 text-[#173B73]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A13.123 13.123 0 014.115 16c-.143-.368-.215-.76-.215-1.164 0-4.418 4.03-8 9-8a9.863 9.863 0 014.255.949M3.158 5.635A10.04 10.04 0 01.1 12c0 1.155.195 2.265.553 3.3a4.5 4.5 0 014.685-3.322m15.523-6.343A10.04 10.04 0 0012 2c-.52 0-1.028.04-1.527.117M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a3 3 0 11-6 0 3 3 0 016 0zM6 14a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {item.icon === 'connection' && (
                  <svg className="w-6 h-6 text-[#173B73]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                )}
                {item.icon === 'monitoring' && (
                  <svg className="w-6 h-6 text-[#173B73]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 100-12 6 6 0 000 12zM12 15a3 3 0 110-6 3 3 0 010 6z" />
                  </svg>
                )}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ─── ЗАГОЛОВОК ДЛЯ СХЕМЫ ─── */}
      <section className="max-w-[1280px] mx-auto mt-20 px-4 xl:px-0 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800">
          {t('telephoneCommunication.architectureTitle')}
        </h3>
        <div className="mt-6 border border-slate-200 rounded-sm p-2 inline-block w-full">
          <Image 
            src={img1} 
            alt={t('telephoneCommunication.architectureAlt')}
            className="w-full h-auto object-cover rounded-sm mx-auto"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </section>

      {/* ─── ТЕКСТОВАЯ ПЛАШКА "ЕДИНАЯ ЭКОСИСТЕМА" ─── */}
      <section className="max-w-[1280px] mx-auto mb-[100px] mt-24 px-4 xl:px-0">
        <div className="border-t border-[#173B73] pt-6 flex flex-col md:flex-row justify-between items-start gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
            {t('telephoneCommunication.footer.title')}
          </h3>
          <p className="text-[12px] text-slate-400 max-w-xs md:text-right font-light leading-relaxed">
            {t('telephoneCommunication.footer.subtitle')}
          </p>
        </div>
      </section>

    </div>
  )
}