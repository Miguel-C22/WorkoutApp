'use client'
import { useState, useEffect } from 'react'
import Profile from '../../../../components/AccountSettings/Profile'
import PR from '../../../../components/AccountSettings/PR'
import BIO from '../../../../components/AccountSettings/BIO'

function page() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [userData, setUserData] = useState()

  useEffect(() => {
    fetchUserData()
  },[])

  async function fetchUserData(){
    const response = await fetch("http://localhost:3000/api/accountSettings/user_2gyzxdzRdeFf7M05mBnWqbi7Z1n", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setUserData(data.data[0])
}

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
        return <PR userData={userData} fetchUpdatedData={fetchUserData} />;
      case 'bio':
        return <BIO userData={userData} fetchUpdatedData={fetchUserData}/>;
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