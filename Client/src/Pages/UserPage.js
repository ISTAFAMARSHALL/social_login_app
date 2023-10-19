import React from 'react'
import { UserContext } from "../Context/User";
import { useContext } from "react";

function UserPage() {
    
    const {currentUser, setCurrentUser} = useContext(UserContext);

    console.log(currentUser);
    
  return (
    <div>UserPage</div>
  )
}

export default UserPage