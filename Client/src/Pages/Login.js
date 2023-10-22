import GitHubButton from 'react-github-btn'
import LinkedIn from "../Components/LinkedIn";
import { UserContext } from "../Context/User";
import { useContext } from "react";
import axios from 'axios';
import Google from "../Components/Google";


function Login({login , setLogin}) {

  const {currentUser, setCurrentUser} = useContext(UserContext);





  // const handleGitHubLogin = () => {
  //     // Redirect the user to GitHub OAuth page
  //     window.location.href = `https://github.com/login/oauth/authorize?client_id=Iv1.6185e0c26f25211b&scope=user`;
  // };

  // const handleGithubLogin = () => {
  //   // Handle GitHub login logic here
  //   // You can use the GitHub SDK functions to initiate the authentication process
  //   console.log('GitHub login clicked');

  //     // Redirect the user to the GitHub OAuth login page
  //     window.location.href = `https://github.com/login/oauth/authorize?client_id=Iv1.6185e0c26f25211b&scope=user`

  //     setLogin(true);
  // // After successful login, GitHub will redirect back to your app with an access token
  // // Extract the access token from the URL and store it for further use
  // const urlParams = new URLSearchParams(window.location.search);
  // const code = urlParams.get('code');

  // // Make a POST request to the GitHub API with the code to receive an access token
  // // Use the access token for further API requests
  // console.log('Received GitHub code:', code);

  // };


  const handleGithubLogin = async () => {
    console.log('GitHub login clicked');
    window.location.href = `https://github.com/login/oauth/authorize?client_id=Iv1.6185e0c26f25211b&scope=user`
    
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    setLogin(true);
    console.log('Code' , code)
    if (code) {

      const accessToken = await exchangeCodeForToken(code);
      // const accessToken = await exchangeCodeForToken(code);
      // // Use the access token for further API requests
      console.log('accessToken' , accessToken)
    }
  };

  const exchangeCodeForToken = async (code) => {
    try {
      const response = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: 'Iv1.6185e0c26f25211b',
        client_secret: '772ef24c4351e6bcdbaa8520eb14d293e0bee287',
        code: code,
      });
  
      // The response will contain the access token and other data
      const accessToken = response.data.access_token;
      console.log('Access Token:', accessToken);
      return accessToken;
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      throw error;
    }
  };

  // const exchangeCodeForToken = async (code) => {
  //   try {
  //     const response = await axios.post('https://github.com/login/oauth/access_token', {
  //       client_id: 'Iv1.6185e0c26f25211b',
  //       client_secret: '772ef24c4351e6bcdbaa8520eb14d293e0bee287',
  //       rediect_uri: "http://localhost:3000/userpage",
  //     });
  
  //     // The response will contain the access token and other data
  //     const accessToken = response.data.access_token;
  //     console.log('Access Token:', accessToken);
  //     return accessToken;
  //   } catch (error) {
  //     console.error('Error exchanging code for token:', error);
  //     throw error;
  //   }
  // };

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
    
  return (

    <div>
      <h1>Choose your login method below.</h1>
        
      <div id='wrapper'>

        <br></br>
      
        <Google setLogin={setLogin} ></Google>
        
        <br></br>
        
        <div onClick={handleGithubLogin} > 
          
          {/* Place this tag where you want the button to render */}
                 
          <GitHubButton 
          
          // href="https://github.com/buttons" 
          
          data-color-scheme="no-preference: light_high_contrast; light: light; dark: light;" data-size="large" aria-label="Follow @buttons on GitHub">Sign in with GitHub</GitHubButton>

        </div>
        
        <br></br>
        
        <div onClick={handleLinkedInLogin} > 
          <LinkedIn></LinkedIn>
        </div>
        
        <br></br>
        
      </div>
    </div>
  );
}
  

export default Login;