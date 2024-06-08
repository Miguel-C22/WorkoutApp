import React, {useEffect, useState} from 'react';
import { useUser } from '@clerk/clerk-react';

function useFetchUsersPosts(){
    const { user } = useUser();

    const [publicData, setPublicData] = useState([])
    const [privateData, setPrivateData] = useState([])

    useEffect(() => {
        if(user){
            fetchPosts(user.id);
        }
    },[user])

    async function fetchPosts(userId){
        try {
            const response = await fetch(`http://localhost:3000/api/createWorkout/${userId}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
                  
            const publicPosts = data.allWorkouts.filter((post) => post.postType === 'public');
            const privatePosts = data.allWorkouts.filter((post) => post.postType === 'private');
      
            setPublicData(publicPosts);
            setPrivateData(privatePosts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return {  fetchPosts, publicData, privateData }
}

export default useFetchUsersPosts