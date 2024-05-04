import {React, useState} from 'react'

function ProfilePages() {
    const [post, setPost] = useState(false)
    const [privateWorkouts, setPrivate] = useState(false)
    const [saved, setSaved] = useState(false)

    async function displayPosts(){
        setPost(true)
        setPrivate(false)
        setSaved(false)
        return (
            <div>
                {/* PostComponent */}
            </div>
        )
    }
    async function displayPrivate(){
        setPrivate(true)
        setPost(false)
        setSaved(false)
        return (
            <div>
                  {/* PrivateComponent */}
            </div>
        )
    }
    async function displaySaved(){
        setSaved(true)
        setPost(false)
        setPrivate(false)
        return (
            <div>
                  {/* SavedComponent */}
            </div>
        )
    }

  return (
    <div className="flex justify-center gap-4 mt-24">
      <button>Posts</button>
      <span>|</span>
      <button>Private</button> 
      <span>|</span>
      <button>Saved</button>
    </div> 
  )
}

export default ProfilePages