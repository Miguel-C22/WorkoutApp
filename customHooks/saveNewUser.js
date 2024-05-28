//Server Side Custom Hook

import {currentUser} from "@clerk/nextjs/server";
async function SaveNewUser() {

    const user = await currentUser()

    async function SaveNewUserInfo() {
        let allUsers = [];
    
        try {
            const response = await fetch("http://localhost:3000/api/users", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            allUsers = data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        return allUsers; 
    }
    
    // Call the function
    SaveNewUserInfo().then((users) => {
        const userIdToFind = user.id
        const filteredUsers = users.filter(u => u.userId === userIdToFind);
       
        /*This checks if the user already has an account. 
        If its a new user then the new user will be added to the database */
        if(filteredUsers.length === 0){
            postUserData();
        }   
    }).catch((error) => {
        console.error('Error:', error);
    });
  
    async function postUserData() {
        const data = {  
            email: user.emailAddresses[0]?.emailAddress,
            userId: user.id ,
            userName: user.username,
            profilePicture: user.imageUrl
        }
      try {
        const response = await fetch('http://localhost:3000/api/accountSettings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          console.log('Network response was not ok');
        }
  
        const result = await response.json();
        console.log('Data successfully posted:', result);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
}

export default SaveNewUser