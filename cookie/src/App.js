import './App.css';
import Cookie from './images/Cookie.png'
import {useEffect, useState} from 'react'
import ReactDOM from "react-dom/client";

function App() {
  const [cookieAmount, setCookieAmount] = useState(0)
  const [clickAmount, setClickAmount] = useState(1)
  const [price1, setprice1] = useState(25)
  const [price2, setprice2] = useState(50)
  
  let price1UpgradeValue = 25;
  let price2UpgradeValue = 50;
  let clickAmountUpgradeValue = 1;
  let cookie_per_click = 1 //cookies per click 
  let cookiePerInterval = 0.2

  const rounded = cookieAmount.toFixed(1)

  const onClick = () => {
    setCookieAmount(cookieAmount + clickAmount)
    console.log(cookieAmount) 
  }

    const onClickInterval = () => {
    if(cookieAmount >= price2){
      {SetInterval()}
      console.log('Interval Started')
      setprice2(price2 + price2UpgradeValue)
      
    }

    else{
      alert("not enough Dough you dummy")
    }
  };

  const onClickUpgradeClickValue = () => {
    if(cookieAmount >= price1){
      setClickAmount(clickAmount + clickAmountUpgradeValue)
      setprice1(price1 + price1UpgradeValue)
      setCookieAmount(cookieAmount - price1)
    }
  }

  function SetInterval(){
    setInterval(() => {
      setCookieAmount((cookieAmount) => cookieAmount + cookiePerInterval);
    }, 1000)
    setCookieAmount(cookieAmount - price2)
  }

  return (
    <div className="App">
      
      <h1>Cookie Clicker</h1>
        
       
        <img onClick={onClick} className='cookieImg' src={Cookie} alt="click me to get more of me" />
       
       
        <p><span>{rounded}</span> Cookies</p>
        
        
        <p>Cookies per Click: <span id="add_cookies"></span></p>
        
        
        <button id="change_cookie_per_click" onClick={onClickUpgradeClickValue}>
            Upgrade click value
            
        </button>

       
        <button id="addCookieInterval" onClick={onClickInterval}>
            automatically add <span id="IntervalCookie">{cookiePerInterval}</span>cookies/second
        </button>

    </div>
  );
}

export default App;
