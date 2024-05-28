import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function AccountSettings() {

  return (
    <div className='flex justify-center items-center mb-8'>
      <UserProfile/>
    </div>
  )
}
export default AccountSettings