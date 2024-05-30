import { UserProfile } from '@clerk/nextjs'
import { useEffect, useRef } from 'react'
import { useUser } from '@clerk/clerk-react';

function AccountSettings({username, email, profilePicture}) {
  // Stores the MongoDB profile data as references
  const prevEmail = useRef(email);
  const prevUsername = useRef(username);
  const prevProfilePicture = useRef(profilePicture);

  const { user } = useUser();

  useEffect(() => {
    // Capture the current MongoDB profile data
    const currentEmail = prevEmail.current
    const currentUserName = prevUsername.current
    const currentProfilePicture = prevProfilePicture.current

  /*
  If the Clerk's username, email, or profile picture doesn't match with the one in the MongoDB database, 
  it will trigger the newProfileData() function. This function updates the MongoDB profile data with 
  the new Clerk profile data.
  */
  if (user.username !== currentUserName || user.emailAddresses[0]?.emailAddress !== currentEmail || user.imageUrl !== currentProfilePicture){
     // Update the references with the new Clerk profile data
    // The useEffect will run again when the Clerk user's data changes, updating the previous data.
    prevUsername.current = user.username
    prevEmail.current = user.emailAddresses[0]?.emailAddress
    prevProfilePicture.current = user.imageUrl
    newProfileData()
  }
  },[user])


  async function newProfileData(){
    const data = {
      email: user.emailAddresses[0]?.emailAddress,
      userName: user.username,
      profilePicture: user.imageUrl
    }
    try {
      const response = await fetch(`http://localhost:3000/api/accountSettings/${user.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if(!response) {
        console.log("Failed")
      }
      console.log("Success")
    } catch (error) {
      
    }
  }
  
  return (
    <div className='flex justify-center items-center mb-8'>
      <UserProfile/>
    </div>
  )
}
export default AccountSettings