import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react';

function useFetchUserData() {
    const [userData, setUserData] = useState(null);
    const { user } = useUser();

    async function fetchUserData(id) {
        const response = await fetch(`http://localhost:3000/api/accountSettings/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setUserData(data.data[0]);
    }

    useEffect(() => {
        if (user) {
            fetchUserData(user.id);
        }
    }, [user]);

    return { userData, fetchUserData };
}

export default useFetchUserData;