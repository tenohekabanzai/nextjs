'use client'

import UserState from '@/context'
import React from 'react'

const CommonLayout = ({children}) => {
  return (
    <UserState>{children}</UserState>
  )
}

export default CommonLayout
