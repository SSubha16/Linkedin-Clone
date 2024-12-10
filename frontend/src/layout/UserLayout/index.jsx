import NavbarComponent from '@/components/navbar'
import React from 'react'

function UserLayout({children}) {
  return (
    <div>
        <NavbarComponent />
        {children}
    </div>
  )
}

export default UserLayout