import Google from "../Images/google.png";
import Github from "../Images/github.png";

function Login() {

    const handleFacebookLogin = () => {
        console.log('Facebook Login')
        // Initialize the Facebook SDK
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 'YOUR_FACEBOOK_APP_ID',
                cookie: true,
                xfbml: true,
                version: 'v10.0',
            });

            // Trigger the Facebook login dialog
            window.FB.login(
            function (response) {
                if (response.authResponse) {
                // User is authenticated, you can fetch user details using the Graph API
                window.FB.api('/me', function (user) {
                    console.log('Facebook user:', user);
                    // Handle user data and authentication here
                });
                } else {
                // User canceled or failed to authenticate
                console.log('Facebook login canceled or failed');
                }
            },
            { scope: 'email' } // Define the requested permissions here
            );
        };

        // Load the Facebook SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    const handleGoogleLogin = () => {
        console.log('Google Login')
    }

    const handleGitHubLogin = () => {
        console.log('GitHub Login')
    }

    const handleLinkedInLogin = () => {
        console.log('LinkedIn Login')
    }

    return (
        <div>
            
            <h1>Choose your login method below.</h1>
            
            <div id='wrapper'>

            <div onClick={handleFacebookLogin} > 
                <img src={""} alt='' /> 
                Facebook 
            </div>
            <br></br>
            <div onClick={handleGoogleLogin} > 
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