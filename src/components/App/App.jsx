import React, { useState } from 'react';
import UserContext from '../../contexts/UserContext';
import CounterContext from '../../contexts/CounterContext'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "antd/dist/antd.css";
import GlobalNavbar from '../Navbar/Global_Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Works from '../../pages/Works';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0)
  return (
    <>
      <UserContext.Provider value={{name: 'KIAVUE', first_name: 'Dimitri'}}>
        <CounterContext.Provider value={{
            currentNumber,
            increment: () => setCurrentNumber(currentNumber + 1),
            decrement: () => setCurrentNumber(currentNumber - 1)
          }}>
          < Router >
            < GlobalNavbar />
              < Switch >
                < Route path="/about" >
                  < About />
                </ Route>
                < Route path={`/works`}>
                  < Works />
                </ Route >
                < Route exact path="/">
                  < Home />
                </ Route>
              </ Switch >
          </ Router >
        </CounterContext.Provider>
      </UserContext.Provider>
    </>
  );
}
export default App;
