import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About';
import Home from './Home';
import {useEffect, useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState();
  // when dom loads use useEffect to grab pokemon data from api
  useEffect(()=> {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        // map the results and use idx to grab the information
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1};
        });
        // set pokemon to results
        setPokemon({ ...data, results});
      });
  })

  return (
    <Router>
      <div className="App">
        <h1 className="text-2xl">It's working now???</h1>
        <home
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
