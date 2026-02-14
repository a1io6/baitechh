import SolutionDetailPage from '@/components/solution/SolutionDetail'
import React from 'react'

export const dynamicParams = false

export async function generateStaticParams() {
  return [{ id: "1" }]
}

export default function Page() {
  return (
    <>
      <SolutionDetailPage/>
    </>
  )
}

