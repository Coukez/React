import './App.css';
import Overview from './Overview/Overview';
import Order from './Order/Order';
import Impressum from './Impressum/Impressum';
import { useState } from 'react';
import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { OrderItems } from './Order/Order';

function App() {
  const [activetab, setactivetab] = useState(0)
  return (
    <div>
      <div className="header">
        <Header></Header>

        <div className="navigation">
          <div className="button" onClick={() => setactivetab(0)}>Overview</div>
          <div className="button" onClick={() => setactivetab(1)}>Order</div>
          <div className="button" onClick={() => setactivetab(2)}>Impressum</div>
        </div>
      </div>

      {activetab == 0 && <Overview />}
      {activetab == 1 && <Order />}
      {activetab == 2 && <Impressum />}

      <Footer></Footer>

    </div>
  );
}

export default App;
