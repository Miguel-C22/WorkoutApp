import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

function useUserInfo() {
    const { user } = useUser();
    const [userInfo, setUserInfo] = useState({ userId: null, email: null });

    useEffect(() => {
        if (user) {
            const email = user.emailAddresses[0]?.emailAddress || null;
            const userId = user.id || null;
            setUserInfo({ userId, email });
        }
    }, [user]);

    return userInfo;
}

export default useUserInfo;