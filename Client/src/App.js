import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Login from './Pages/Login';


function App() {

  const [user, setUser] = useState(true)

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
          <Login></Login>
          </Route>
        )
      }
      
      <Route path='/post/:id' />

      </Switch>

    </div>
  );

}

export default App;
