import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Login from './Pages/Login';
import UserPage from './Pages/UserPage';


function App() {

  const [login, setLogin] = useState({})

  return (
    <div className="App">

      <Navbar login={login} setLogin={setLogin} />

      <Switch>

      {
        login ? (
          
          <Route path='/' >
            <UserPage />   
          </Route>
          
        ) 
        : 
        (
          <Route path='/login'>
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
