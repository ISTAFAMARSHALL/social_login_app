import { useEffect } from "react";
import GitHubButton from 'react-github-btn'
import LinkedIn from "../Components/LinkedIn";
import jwtDecode from "jwt-decode";
import { UserContext } from "../Context/User";
import { useContext } from "react";


function Login({login , setLogin}) {

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

  }, [login]);

  const handleResponse = (response) => {
    if (response.credential) {
        // User is authenticated, you can access user details from response.credential
        const idToken = response.credential;
        console.log('Google user ID token:', idToken);
        handleCredentialResponse(idToken);
        
        // Handle user data and authentication here
    } else {
        // User canceled or failed to authenticate
        console.error('Google login canceled or failed');
    }
  }

  const handleGitHubLogin = () => {
      // Redirect the user to GitHub OAuth page
      window.location.href = `https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&scope=user`;
  };

  const handleLinkedInLogin = () => {
      // Authenticate using the LinkedIn SDK
      IN.User.authorize(function () {
        // User is authenticated, you can fetch user details using the LinkedIn API
        IN.API.Profile('me').result(function (user) {
          console.log('LinkedIn user:', user.values[0]);
          // Handle user data and authentication here
        });
      });
  };
    
  function handleCredentialResponse(response) {

    let token = jwtDecode(response);
    
    setCurrentUser(token);
    setLogin(true);
    console.log("Decoded JWT ID token: ", token)

  }
    
  return (

    <div>
      <h1>Choose your login method below.</h1>
        
      <div id='wrapper'>

        <br></br>
      
        <div id="buttonDiv"></div>
        
        <br></br>
        
        <div onClick={handleGitHubLogin} > 
          
          {/* Place this tag where you want the button to render */}
                 
          <GitHubButton href="https://github.com/buttons" data-color-scheme="no-preference: light_high_contrast; light: light; dark: light;" data-size="large" aria-label="Follow @buttons on GitHub">Sign in with GitHub</GitHubButton>

        </div>
        
        <br></br>
        
        <div onClick={handleLinkedInLogin} > 
          <LinkedIn></LinkedIn>
            LinkedIn 
        </div>
        
        <br></br>
        
      </div>
    </div>
  );
}
  

export default Login;