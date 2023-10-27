import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/User";
import { useContext } from "react";

function Navbar({login , setLogin}) {

    const {currentUser , setCurrentUser} = useContext(UserContext);
    console.log(currentUser);

    return (

        <div id='navbar'>
            
            Social Login App

            <span></span>
        
            {
                login ? 
                
                (
                    <>
                        {/* <img src={currentUser.picture} alt="currentUser.name" /> */}
                        <>{currentUser.name}</>
                        <><button onClick={() => setLogin(false)}>Logout</button></>
                    </>
                ) 
                : 
                ( 
                    <NavLink className="button"
                        exact
                        to="/">
                        <button>Login</button>
                    </NavLink>
                )
            }
            
        </div>    

    )
}
  
export default Navbar