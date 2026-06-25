'use client'
import { use } from 'react'
import { useTranslation } from 'react-i18next'
import { solutionsData } from '@/lib/solution/data'
import { subsectionExtras } from '@/lib/solution/subsectionExtras'
import SolutionDetailBlock from '@/components/solution/SolutionDetailBlock'
import Under from '@/components/ui/under/Under'
import { solutionTranslations } from '@/lib/solution/data'

export default function Page({ params }) {
  const { id, subId } = use(params)
  const { i18n } = useTranslation()
  const lang = ['ru', 'kg', 'en'].includes(i18n.language) ? i18n.language : 'ru'
  const uiT = solutionTranslations[lang]

  const section = solutionsData.find((s) => s.id === id)
  if (!section) return <div className="text-center py-20">{uiT.sectionNotFound}</div>

  const item = section.items.find((i) => i.id === subId)
  if (!item) return <div className="text-center py-20">{uiT.subsectionNotFound}</div>

  const title = item.title[lang] || item.title.ru
  const sectionTitle = section.title[lang] || section.title.ru
  const subsectionEntry = subsectionExtras[item.id] || {}
  const extra = subsectionEntry[lang] || subsectionEntry.ru || {}

  const solutionData = {
    title,
    mainDescription: `${uiT.subsectionDescriptionPrefix} "${title}"`,
    image: null,
    ...extra,
  }

  return (
    <div className="container mx-auto px-4 xl:px-0 max-w-[1280px] pt-4">
      <Under
        text={uiT.breadcrumbHome}
        link="/"
        text1={uiT.breadcrumbSolutions}
        link1="/solution"
        text2={sectionTitle}
        link2={section.href}
        text3={title}
      />
      <SolutionDetailBlock solution={solutionData} />
    </div>
  )
}