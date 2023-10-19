import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/User";
import { useContext } from "react";

function Navbar({login , setLogin}) {

    const {currentUser, setCurrentUser} = useContext(UserContext);

    return (

        <div id='navbar'>
            
            <NavLink className="button"
                exact 
                to="/"
                >
                <button className="button">Social Login App</button>
            </NavLink>
        
            {
                login ? 
                
                (
                    <>
                        <img src="" alt='' />
                        <>John Doe</>
                        <><button onClick={() => setLogin(null)}>Logout</button></>
                    </>
                ) 
                : 
                ( 
                    <NavLink className="button"
                        exact
                        to="/login">
                        <button>Login</button>
                    </NavLink>
                )
            }
            
        </div>    

    )
}
  
export default Navbar