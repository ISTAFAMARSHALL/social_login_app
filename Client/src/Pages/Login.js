import Google from "../Images/google.png";
import Github from "../Images/github.png";
import { useEffect, useState } from "react";

function Login() {

  const handleFacebookLogin = () => {
      console.log('Facebook Login')
      // Initialize the Facebook SDK
      FB.login(function(response) {
        if (response.authResponse) {
          // User is logged in, you can access the authResponse.accessToken here
          const accessToken = response.authResponse.accessToken;
          console.log('Facebook access token:', accessToken);
        } else {
          // User canceled the login or didn't authorize the app
          console.log('Facebook login canceled.');
        }
      }, { scope: 'public_profile,email' }); // Specify the required permissions
    
  };


    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: "403940930490-9p5upakgv7g8brgiignanr4frs6r3rsv.apps.googleusercontent.com",
          callback: handleResponse
        })
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme: "outline", size: "large"}
        );
    
        // google.accounts.id.prompt();
    
      }, []);

    //   const handleResponse = (response) => {
    //     if (response.credential) {
    //         // User is authenticated, you can access user details from response.credential
    //         const idToken = response.credential;
    //         console.log('Google user ID token:', idToken);
    //         // Handle user data and authentication here
    //     } else {
    //         // User canceled or failed to authenticate
    //         console.error('Google login canceled or failed');
    //     }
    // }

    const handleGoogleLogin = async () => {
        
          google.accounts.id.initialize({
            client_id: "403940930490-9p5upakgv7g8brgiignanr4frs6r3rsv.apps.googleusercontent.com",
            callback: handleResponse
          })
    
        //   const handleResponse = (response) => {
        //     if (response.credential) {
        //         // User is authenticated, you can access user details from response.credential
        //         const idToken = response.credential;
        //         console.log('Google user ID token:', idToken);
        //         // Handle user data and authentication here
        //     } else {
        //         // User canceled or failed to authenticate
        //         console.error('Google login canceled or failed');
        //     }
        
        // }
      };

      const handleResponse = (response) => {
        if (response.credential) {
            // User is authenticated, you can access user details from response.credential
            const idToken = response.credential;
            console.log('Google user ID token:', idToken);
            // Handle user data and authentication here
        } else {
            // User canceled or failed to authenticate
            console.error('Google login canceled or failed');
        }

    // const handleGoogleLogin = () => {
    //     // Define the configuration for Google Identity Services
    //     const gsiConfig = {
    //       client_id: '403940930490-9p5upakgv7g8brgiignanr4frs6r3rsv.apps.googleusercontent.com',
    //     };
    
    //     // Initialize Google Identity Services
    //     const gsi = google.accounts.id.initialize(gsiConfig);
    
    //     // Prompt the user to select a Google account for authentication
    //     gsi.prompt()
    //       .then((response) => {
    //         if (response.credential) {
    //           // User is authenticated, you can access user details from response.credential
    //           const idToken = response.credential;
    //           console.log('Google user ID token:', idToken);
    //           // Handle user data and authentication here
    //         } else {
    //           // User canceled or failed to authenticate
    //           console.error('Google login canceled or failed');
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Error during Google login:', error);
    //       });
      };

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
    
    const t = FB.login(function(response){
      // handle the response 
    });
    
    return (
        <div>
            
            <h1>Choose your login method below.</h1>
            
            <div id='wrapper'>

            <div onClick={handleFacebookLogin} > 
            {/* <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
                </fb:login-button> */}
                <img src={""} alt='' /> 
                {t}
                Facebook 
            </div>
            <br></br>
            <div onClick={handleGoogleLogin} >
            <div id="signInDiv" ></div>
                <img img src={""} alt='' /> 
                Google 
            </div>
            <br></br>
            <div onClick={handleGitHubLogin} > 
                <img img src={""} alt='' /> 
                Github 
            </div>
            <br></br>
            <div onClick={handleLinkedInLogin} > 
                <img img src={""} alt='' /> 
                LinkedIn 
            </div>
            <br></br>
            </div>
        </div>
    );
}
  

export default Login;