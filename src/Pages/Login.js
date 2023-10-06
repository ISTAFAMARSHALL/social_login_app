import Google from "../Images/google.png";
import Github from "../Images/github.png";

function Login() {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }
    
    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    };

    return (
        <div>
            <h1>Choose Login</h1>
            <div id='wrapper'>

            <div onClick={google} > 
                <img src={Google} alt='' /> 
                Google 
            </div>

            <div onClick={github} > 
                <img img src={Github} alt='' /> 
                Github 
            </div>

            </div>
        </div>
    );
}
  

export default Login;