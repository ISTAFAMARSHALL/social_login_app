import GitHubButton from 'react-github-btn'
import LinkedIn from "../Components/LinkedIn";
import { UserContext } from "../Context/User";
import { useContext , useEffect } from "react";
import { Octokit } from "octokit";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import Google from "../Components/Google";

function GitHub ({setLogin}) {

    const {currentUser, setCurrentUser} = useContext(UserContext);
  
    const handleGithubLogin = async () => {
        console.log('GitHub login clicked');
        window.location.href = "http://localhost:3001/login";
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        const code = params.get("code");
        console.log("Code" , params.get("code"))

        if (code) {
            fetch(`http://localhost:3001/callback?code=${code}`, {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({ code: code }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Access Token", data.access_token);
                handleGuthubRes(data.access_token);
            })
            .catch((error) => {
                console.error("Error retrieving access token:", error);
            });
        }
        setLogin(true);
    };


        
    const handleGuthubRes = async (token) => {      
            console.log('GitHub Token in GithubRes', token)
            const octokit = new Octokit({
            auth: token, // Replace with your personal access token
            });
            console.log('Octokit', octokit)
            try {
            console.log('Octokit', octokit)
            const {
                data: { login },
            } = await octokit.rest.users.getAuthenticated();
            console.log('User Login', login)
            
            } catch (error) {
            console.error("Error logging in:", error);
            }
    };
    
  
  
    return (
        <div onClick={handleGithubLogin} > 
          
        {/* Place this tag where you want the button to render */}
               
        <GitHubButton 
        
        // href="https://github.com/buttons" 
        
        data-color-scheme="no-preference: light_high_contrast; light: light; dark: light;" data-size="large" aria-label="Follow @buttons on GitHub">Sign in with GitHub</GitHubButton>

      </div>
    )
}
  
export default GitHub