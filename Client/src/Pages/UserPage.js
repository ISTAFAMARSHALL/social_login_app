import React from 'react'
import { UserContext } from "../Context/User";
import { useContext } from "react";

function UserPage({setLogin}) {
    
    const {currentUser, setCurrentUser} = useContext(UserContext);

    console.log(currentUser);

    function handleSignout(e) {
      setLogin(false)
      setCurrentUser(null)      
    }

  return (

    <div>
        <h1></h1>
        <img src={currentUser.picture} alt="user.name"></img>
        <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p>
        <br></br>
        <button onClick={ (e)=> handleSignout(e)}>Sign out</button>
    </div>
    
  )
}

export default UserPage