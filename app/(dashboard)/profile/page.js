import React from "react"
import UserProfileImage from "../../../components/UserProfileImage";
import UserName from "../../../components/UserName";
import useSaveNewUser from "../../../customHooks/saveNewUser"
import {currentUser} from "@clerk/nextjs/server";

async function page() {
  const user = await currentUser()

  let userData = []
  /* 
    This page is the initial landing page for users after signing in or opening the application.
    It runs a custom hook, useSaveNewUser, which is specifically designed to handle new user information 
    and save it to the server.
  */
  useSaveNewUser() 
  
   const response = await fetch(`http://localhost:3000/api/accountSettings/${user.id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        userData = data.data[0]
  
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <UserProfileImage/>
      <UserName />
      <div className="stats shadow flex flex-wrap text-center mx-8 sm:flex-nowrap sm:text-left">
        <div className="stat shadow">
          <div className="stat-title">Bench</div>
          <div className="stat-value text-2xl">{userData.prBench} lbs</div>
          <div className="stat-desc">Personal Record</div>
        </div>           
        <div className="stat shadow">
          <div className="stat-title">Squat</div>
          <div className="stat-value text-2xl">{userData.prSquat} lbs</div>
          <div className="stat-desc">Personal Record</div>
          </div>         
        <div className="stat shadow">
          <div className="stat-title">Deadlift</div>
          <div className="stat-value text-2xl">{userData.prDeadLift} lbs</div>
          <div className="stat-desc">Personal Record</div>
        </div>
      </div>
      <div className="px-12 lg:px-56 md:px-56 text-center">
        <p>{userData.bio}</p>
      </div>
    </div>
  )
}

export default page