import Google from "../Images/google.png";
import Github from "../Images/github.png";

function Login() {

    const handleFacebookLogin = () => {
        console.log('Facebook Login')
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
            <h1>Choose Login</h1>
            <div id='wrapper'>

            <div onClick={handleFacebookLogin} > 
                <img src={Facebook} alt='' /> 
                Facebook 
            </div>

            <div onClick={handleGoogleLogin} > 
                <img img src={Google} alt='' /> 
                Google 
            </div>

            <div onClick={handleGitHubLogin} > 
                <img img src={Github} alt='' /> 
                Github 
            </div>

            <div onClick={handleLinkedInLogin} > 
                <img img src={LinkedIn} alt='' /> 
                LinkedIn 
            </div>

            </div>
        </div>
    );
}
  

export default Login;