import { NavLink } from "react-router-dom"

function Navbar({user, setUser}) {

    return (

        <div id='navbar'>
            
            <NavLink className="button"
                exact 
                to="/"
                >
                <button className="button">Social Login App</button>
            </NavLink>
        
            {
                user ? 
                
                (
                    <>
                        <img src="" alt='' />
                        <>John Doe</>
                        <><button onClick={() => setUser(false)}>Logout</button></>
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