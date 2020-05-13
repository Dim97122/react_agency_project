import React from 'react';
import UserContext from '../../contexts/UserContext'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import GlobalNavbar from '../Navbar/Global_Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Works from '../../pages/Works';


const App = () => {
  return (
    <>
      <UserContext.Provider value={{name: 'KIAVUE', first_name: 'Dimitri'}}>
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
      </UserContext.Provider>
    </>
  );
}
export default App;
