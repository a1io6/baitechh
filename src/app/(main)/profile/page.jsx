import SidebarApp from '@/components/profile/sidebarapp/SideBarApp'
import React, { Suspense } from 'react'

function page() {
  return (
    <>
      <Suspense fallback={null}>
        <SidebarApp />
      </Suspense>
    </>
  )
}

export default page
