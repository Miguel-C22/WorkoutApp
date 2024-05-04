import {currentUser} from "@clerk/nextjs/server";
async function MemberProfile() {
    const user = await currentUser()
    const userName = user.username
  return (
  <div>
    <span className="text-3xl">{userName}</span> 
  </div>
  )
}

export default MemberProfile