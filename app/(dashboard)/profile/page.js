import React from "react"
import UserProfileImage from "../../../components/UserProfileImage";
import UserName from "../../../components/UserName";
import Link from 'next/link';

function page() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 px-2 md:flex-row lg:gap-44 md:p-2">
        <UserProfileImage/>
          <div className="flex flex-col gap-2 flex-wrap text-center md:text-left">
            <UserName />
              <div className="flex flex-wrap gap-5 justify-center md:justify-start text-left">
                <div>
                  <p>PR Bench</p>
                  <label className="input input-bordered flex items-center gap-2">
                  <input type="number" className="grow w-24" placeholder="N/A" />
                  <span className="badge badge-info">lbs</span>
                  </label>
                </div>
                <div>
                  <p>PR Deadlift</p>
                  <label className="input input-bordered flex items-center gap-2">
                  <input type="number" className="grow w-24" placeholder="N/A" />
                  <span className="badge badge-info">lbs</span>
                </label>
              </div>
              <div>
                <p>PR Squat</p>
                <label className="input input-bordered flex items-center gap-2">
                <input type="number" className="grow w-24" placeholder="N/A" />
                <span className="badge badge-info">lbs</span>
              </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page