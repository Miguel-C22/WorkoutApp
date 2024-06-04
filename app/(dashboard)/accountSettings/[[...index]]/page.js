'use client'
import { useState, useEffect } from 'react'
import Profile from '../../../../components/AccountSettings/Profile'
import PR from '../../../../components/AccountSettings/PR'
import BIO from '../../../../components/AccountSettings/BIO'
import { useUser } from '@clerk/clerk-react';
import useFetchUserData from '../../../../customHooks/fetchUserData'
import { useClerk } from '@clerk/nextjs';

function page() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const { user } = useUser();
  const {userData, fetchUserData} = useFetchUserData();
  const { signOut } = useClerk();
  
  useEffect(() => {
      if (user) {
          fetchUserData(user.id);
      }
  }, [user]);

  function handleComponentSelection(component) {
      setSelectedComponent(component);
      if (user) {
          fetchUserData(user.id);
      }
  }

  function renderComponent() {
      switch (selectedComponent) {
          case 'profile':
              return <Profile username={userData.userName} email={userData.email} profilePicture={userData.profilePicture} />;
          case 'pr':
              return <PR userData={userData} />;
          case 'bio':
              return <BIO userData={userData} />;
          default:
              return null;
      }
  }

  return (
    <div className='flex flex-col gap-8 items-center'>
      <button 
        className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' 
        onClick={() => handleComponentSelection('profile')}>
        Profile
      </button>
      <button 
        className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' 
        onClick={() => handleComponentSelection('pr')}>
        PRS
      </button>
      <button 
        className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' 
        onClick={() => handleComponentSelection('bio')}>
        BIO
      </button>
      <button 
        className='btn btn-error text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' 
        onClick={() => signOut({ redirectUrl: '/' })}
      >
        Sign Out
      </button>
      
      {/* Render the selected component */}
      {renderComponent()}
    </div>
  );
}

export default page

































/*

OLD WAY! KEEPING THIS JUST FOR NOW


function page() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [userData, setUserData] = useState()
  const { user } = useUser();
  
  useEffect(() => {
    if(user){
      fetchUserData(user.id)
    }
  },[user])

  async function fetchUserData(id){
    const response = await fetch(`http://localhost:3000/api/accountSettings/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setUserData(data.data[0])  
}

function handleComponentSelection(component) {
  setSelectedComponent(component);
  if (user) {
    fetchUserData(user.id);
  }
}

 function renderComponent() {
    switch (selectedComponent) {
      case 'profile':
        return <Profile username={userData.userName} email={userData.email} profilePicture={userData.profilePicture}/>;
      case 'pr':
        return <PR userData={userData}/>;
      case 'bio':
        return <BIO userData={userData}/>;
      default:
        return null;
    }
  }

  return (
    <div className='flex flex-col gap-8 items-center'>
      <button 
        className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' 
        onClick={() => handleComponentSelection('profile')}>
        Profile
      </button>
      <button 
        className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' 
        onClick={() => handleComponentSelection('pr')}>
        PRS
      </button>
      <button 
        className='btn bg-stone-900 text-white btn-md w-56 md:w-96 lg:w-96 sm:w-96' 
        onClick={() => handleComponentSelection('bio')}>
        BIO
      </button>
      {renderComponent()}
    </div>
  );
}

export default page

*/