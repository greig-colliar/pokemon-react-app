import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About';
import {useEffect, useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState();
  useEffect(()=> {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
  })

  return (
    <Router>
      <div className="App">
        <h1 className="text-2xl">It's working now???</h1>
      </div>

      <Switch>
        <Route path="/about/:slug">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
