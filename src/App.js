import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
Switch

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>

      <Route path='/' />
      <Route path='/login'/>
      <Route path='/post/:id' />

      </Switch>

    </div>
  );
}

export default App;
