import ResetPasswordCode, { ResetPasswordCodeContent } from '@/components/auth/resetpassword/ResetPassword'
import React from 'react'
import { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordCodeContent />
    </Suspense>
  )
}

export default page
