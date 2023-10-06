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
                    <ul>
                        <li>
                            <img src="" alt='' />
                            <li>John Doe</li>
                            <li><button onClick={() => setUser(false)}>Logout</button></li>
                        </li>
                    </ul>
                ) : (

                <NavLink className="button"
                    exact
                    to="/login"
                >
                <button>Login</button>
                </NavLink>
                )
            }
        </span>

      </div>    

    )
}
  
export default Navbar