import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messagesFr from '../../translation/fr';
import messagesEn from '../../translation/en';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "antd/dist/antd.css";
import GlobalNavbar from '../Navbar/Global_Navbar';
import StudyCase from '../../pages/StudyCase'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Works from '../../pages/Works';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const local_language = navigator.language.substring(0,2);

const App = () => {
  const [language, setLanguage] = useState('fr')

  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        < Router >
          < GlobalNavbar modify={setLanguage}/>
            < Switch >
              < Route exact path="/about" >
                < About />
              </ Route>
              < Route exact path={`/works`}>
                < Works modify={setLanguage}/>
              </ Route >
              < Route path= "/works/:projectSlug">
                < StudyCase/>
              </ Route >
              < Route exact path="/">
                < Home />
              </ Route>
            </ Switch >
        </ Router >
      </IntlProvider>
    </>
  );
}
export default App;
