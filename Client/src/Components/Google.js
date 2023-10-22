import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { UserContext } from "../Context/User";
import { useContext } from "react";

function Google({setLogin}) {

  const {currentUser, setCurrentUser} = useContext(UserContext);

    useEffect(() => {
        /* global google */
    
        google.accounts.id.initialize({
          client_id: "403940930490-9p5upakgv7g8brgiignanr4frs6r3rsv.apps.googleusercontent.com",
          callback: handleResponse
        });
    
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }  // customization attributes
        );
        
        google.accounts.id.prompt(); // also display the One Tap dialog
    
      }, [setLogin]);

      const handleResponse = (response) => {
        if (response.credential) {
            // User is authenticated, you can access user details from response.credential
            const idToken = response.credential;
            console.log('Google user ID token:', idToken);
            // handleCredentialResponse(idToken);
            let token = jwtDecode(idToken);
            setCurrentUser(token);
            setLogin(true);
            // Handle user data and authentication here
        } else {
            // User canceled or failed to authenticate
            console.error('Google login canceled or failed');
        }
      }


    return (
        <div id="buttonDiv"></div>
    )
}

export default Google