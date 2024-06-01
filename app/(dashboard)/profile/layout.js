"use client"
import { useState } from 'react'
import CreateWorkout  from "../../../components/ProfilePage/CreateWorkout"
import PostPage from "../../../components/ProfilePage/PostPage"
import Private from "../../../components/ProfilePage/Private"
import Saved from "../../../components/ProfilePage/Saved"

function layout({children}) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  function handleComponentSelection(component) {
    setSelectedComponent(component);
    
  }

  function renderComponent() {
    switch (selectedComponent) {
        case 'profile':
            return <PostPage />
        case 'pr':
            return  <Private />
        case 'bio':
            return <Saved />
        default:
            return null;
    }
}
  
  return (
    <div>
      {children}
      <CreateWorkout />
      <div className="flex justify-center gap-4 mt-24">
        <button 
          onClick={() => handleComponentSelection('profile')}>
          Posts
        </button>
        <span>|</span>
        <button 
          onClick={() => handleComponentSelection('pr')}>
          Private
        </button>
        <span>|</span>
        <button 
          onClick={() => handleComponentSelection('bio')}>
          Saved
        </button>
      </div>
      {/* Render the selected component */}
      {renderComponent()}
    </div>
  )
}

export default layout