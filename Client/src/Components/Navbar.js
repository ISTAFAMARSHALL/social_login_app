import { NavLink } from "react-router-dom"

function Navbar({user, setUser}) {

    return (

      <div id='navbar'>

        <span>
            <NavLink className="button"
                exact 
                to="/"
                >
                <button className="button">Social Login App</button>
            </NavLink>
        </span>

        <span>
            {
                user ? (
                    <span>
                        <ul>
                            <img src="" alt='' />
                            <li>John Doe</li>
                            <li><button onClick={() => setUser(false)}>Logout</button></li>
                        </ul>
                    </span>
                ) 
                : 
                ( <NavLink className="button"
                    exact
                    to="/login">
                        <button>Login</button>
                    </NavLink>
                )
            }
        </span>

      </div>    

    )
}
  
export default Navbar