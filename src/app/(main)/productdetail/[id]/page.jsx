import ProductDetail from '@/components/product/ProductDetail'
import React from 'react'

const PRODUCTS_API_URL = 'http://157.230.138.217:3001/products/products/'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      headers: { 'ngrok-skip-browser-warning': 'true' },
      cache: 'no-store',
    })

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    const products = Array.isArray(data) ? data : data?.results || []

    return products
      .filter((product) => product?.id !== undefined && product?.id !== null)
      .map((product) => ({ id: String(product.id) }))
  } catch {
    return []
  }
}

export default function Page() {
  return (
    <>
      <ProductDetail/>
    </>
  )
}
