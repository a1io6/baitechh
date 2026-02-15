import { CodeVerifyContent } from '@/components/auth/code/CodeVerify'
import React from 'react'
import { Suspense } from 'react'

function codeverify() {
  return (
    <Suspense fallback={null}>
      <CodeVerifyContent type="verify" />
    </Suspense>
  )
}

export default codeverify
