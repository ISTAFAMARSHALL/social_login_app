import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Login from './Pages/Login';
import UserPage from './Pages/UserPage';
import { UserContext } from "./Context/User";
import { useContext } from "react";


function App() {

  const {currentUser , setCurrentUser} = useContext(UserContext);
  const [login, setLogin] = useState(false)

  return (
    <div className="App">

      <Navbar login={login} setLogin={setLogin} />

      <Switch>

      {
        login ? 
        
        (
          
          <Route exact path='/' >
            <UserPage setLogin={setLogin} />   
          </Route>
          
        ) 
        : 
        (
          <Route path='/'>
          <Login login={login} setLogin={setLogin} />
          </Route>
        )
      }
      
      <Route path='/post/:id' />

      </Switch>

    </div>
  );

}

export default App;
