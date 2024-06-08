"use client"
import { useState, useEffect } from 'react'
import CreateWorkout  from "../../../components/ProfilePage/CreateWorkout"
import PostPage from "../../../components/ProfilePage/PostPage"
import Private from "../../../components/ProfilePage/Private"
import Saved from "../../../components/ProfilePage/Saved"

import useFetchUsersPosts from '../../../customHooks/fetchUsersPosts'

function layout({children}) {
  const [selectedComponent, setSelectedComponent] = useState('public');

  const { fetchPosts, publicData, privateData } = useFetchUsersPosts();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleWorkoutSubmission = async () => {
    setLoading(true);
    await fetchPosts();
    setLoading(false);
  };

  function handleComponentSelection(component) {
    setSelectedComponent(component);
    
  }

  function renderComponent() {
    switch (selectedComponent) {
        case 'public':
            return <PostPage  publicData={publicData} loading={loading} />
        case 'private':
            return  <Private />
        case 'saved':
            return <Saved />
        default:
            return <p>Error</p>;
    }
}
  
  return (
    <div>
      {children}
      <CreateWorkout onWorkoutSubmit={handleWorkoutSubmission}/>
      <div className="flex justify-center gap-4 mt-24">
        <button 
          onClick={() => handleComponentSelection('public')}>
          Posts
        </button>
        <span>|</span>
        <button 
          onClick={() => handleComponentSelection('private')}>
          Private
        </button>
        <span>|</span>
        <button 
          onClick={() => handleComponentSelection('saved')}>
          Saved
        </button>
      </div>
      {/* Render the selected component */}
      {renderComponent()}
    </div>
  )
}

export default layout