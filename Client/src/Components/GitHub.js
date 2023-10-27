import GitHubButton from 'react-github-btn'
import LinkedIn from "../Components/LinkedIn";
import { UserContext } from "../Context/User";
import { useContext , useEffect, useState } from "react";
import { Octokit } from "octokit";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import Google from "../Components/Google";

function GitHub ({login, setLogin}) {

    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [accessTokenB, setAccessTokenB] = useState(null);

    const client_id = 'Iv1.6185e0c26f25211b';
    const client_secret = '772ef24c4351e6bcdbaa8520eb14d293e0bee287';
    const redirectUri = "http://localhost:3000/callback";

  const handleLogin = () => {
    console.log('GitHub login clicked');
    const clientId = "Iv1.6185e0c26f25211b";
    const redirectUri = "http://localhost:3000/";
    const scope = "user";

    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.replace(githubOAuthUrl);
  };

  useEffect(() => {
    const octokit = new Octokit();
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
      console.log("Code", code);  
      getToken(code);
    }
  }, []); // Added an empty dependency array

    


  const getToken = async (code) => {
    try {
      const response = await fetch(`http://localhost:3001/callback?code=${code}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Access Token", data.access_token);
      getAuthenticatedUser(data.access_token);
    } catch (error) {
      console.error("Error retrieving access token:", error);
    }
  };

  const getAuthenticatedUser = async (userToken) => {
    try {
      const octokit = new Octokit({ auth: userToken });
      const { data } = await octokit.request("GET /user");
      console.log("Authenticated User Data:", data);

      const loggedInUser = {
        service: "github",
        name: data.name,
        picture: data.avatar_url,
      };

      setCurrentUser(loggedInUser);
      setLogin(true);
      console.log('currentUser', loggedInUser);
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };


  //       const getAuthenticatedUser = async (userToken) => {
  //           console.log("auth")
  //           const octokit = new Octokit({
  //               auth: userToken,
  //             });
        
  //           try {
  //             const { data } = await octokit.request("GET /user");
  //             console.log("Authenticated User Data:", data);
              
  //             const loginedInUser = {
  //               service: "github",
  //               name: data.name,
        
  //               picture: data.avatar_url,
  //             }
        
  //               setCurrentUser(loginedInUser);
  //               setLogin(true);
  //               console.log('currentUser', loginedInUser);

  //           } catch (error) {
  //             console.error("Error retrieving user data:", error);
  //           }
  //         };


            
  
    return (
        <div onClick={handleLogin} > 
          
        {/* Place this tag where you want the button to render */}
               
        <GitHubButton 
        
        // href="https://github.com/buttons" 
        
        data-color-scheme="no-preference: light_high_contrast; light: light; dark: light;" data-size="large" aria-label="Follow @buttons on GitHub">Sign in with GitHub</GitHubButton>

      </div>
    )
}
  
export default GitHub