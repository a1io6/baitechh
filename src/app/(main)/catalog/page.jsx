import CatalogPage from '@/components/CatalogePage/CatalogePage'
import React from 'react'
import { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={null}>
      <CatalogPage />
    </Suspense>
  )
}

export default page
