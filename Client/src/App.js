import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Login from './Pages/Login';


function App() {

  const [user, setUser] = useState(false)

  return (
    <div className="App">

      <Navbar user={user} setUser={setUser} />

      <Switch>

      {
        user ? (
          
          <Route path='/' />      
          
        ) 
        : 
        (
          <Route path='/login'>
          <Login user={user} setUser={setUser} />
          </Route>
        )
      }
      
      <Route path='/post/:id' />

      </Switch>

    </div>
  );

}

export default App;
