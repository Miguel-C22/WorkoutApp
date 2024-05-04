import {currentUser} from "@clerk/nextjs/server";
async function MemberProfile() {
    const user = await currentUser()
    const userImage = user.imageUrl
    return (
    <div >
      <img className="h-44 w-44 rounded-full object-cover border-solid border-black border-4" src={userImage} alt="" />
    </div>
    );
    
}

export default MemberProfile


