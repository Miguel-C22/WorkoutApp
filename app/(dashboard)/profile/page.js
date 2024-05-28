import React from "react"
import UserProfileImage from "../../../components/UserProfileImage";
import UserName from "../../../components/UserName";
import useSaveNewUser from "../../../customHooks/saveNewUser"

function page() {

  /* 
    This page is the initial landing page for users after signing in or opening the application.
    It runs a custom hook, useSaveNewUser, which is specifically designed to handle new user information 
    and save it to the server.
  */
  useSaveNewUser() 

  
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 px-2 md:flex-row lg:gap-44 md:p-2">
        <UserProfileImage/>
          <div className="flex flex-col gap-2 flex-wrap text-center md:text-left">
            <UserName />
          <div className="stats shadow flex flex-wrap sm:flex-nowrap">
            <div className="stat shadow">
              <div className="stat-title">Bench</div>
              <div className="stat-value text-2xl">295 lbs</div>
              <div className="stat-desc">Personal Record</div>
            </div>           
            <div className="stat shadow">
            <div className="stat-title">Squat</div>
              <div className="stat-value text-2xl">475 lbs</div>
              <div className="stat-desc">Personal Record</div>
            </div>         
            <div className="stat shadow">
            <div className="stat-title">Deadlift</div>
              <div className="stat-value text-2xl">N/A lbs</div>
              <div className="stat-desc">Personal Record</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page