import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import './GlobalNavbar.css';
import french_flag from '../../../assets/img/france.png';
import english_flag from '../../../assets/img/uk.png';

const GlobalNavbar = ( {modify} ) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
        <Link to="/">
          <div className="navbar-brand">LOGO</div>
        </Link>
        <div className="navbar-nav">
          <Link to="/about">
            <div className="nav-item nav-link">About </div>
          </Link>
          <Link to="/works">
            <div className="nav-item nav-link">Works </div>
          </Link>
        </div>
        <div className="dropdown" style={{float: "left"}}>
          <button className="dropbtn"><FormattedMessage id="lang" /></button>
          <div className="dropdown-content">
            <button onClick={()=> modify('fr')}>
              <img src={french_flag}/>
            </button>
            <button onClick={()=> modify('en')}>
              <img src={english_flag}/>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default injectIntl(GlobalNavbar);
