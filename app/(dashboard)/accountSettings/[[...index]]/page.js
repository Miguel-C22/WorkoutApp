'use client'
import { useState } from 'react'
import Profile from '../../../../components/AccountSettings/Profile'
import PR from '../../../../components/AccountSettings/PR'
import BIO from '../../../../components/AccountSettings/BIO'

function page() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  function ProfileComponent(){
    setSelectedComponent("profile")
  }
  function PRComponent (){
    setSelectedComponent("pr")
  }
  function BIOComponent (){
    setSelectedComponent("bio")
  }

 function renderComponent() {
    switch (selectedComponent) {
      case 'profile':
        return <Profile />;
      case 'pr':
        return <PR />;
      case 'bio':
        return <BIO />;
      default:
        return null;
    }
  }

  return (
    <div className='flex flex-col gap-8 items-center'>
      <button className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' onClick={ProfileComponent}>Profile</button>
      <button className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' onClick={PRComponent}>PRS</button>
      <button className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' onClick={BIOComponent}>BIO</button>
      {/* Render the selected component */}
      {renderComponent()}
    </div>
  )
}

export default page