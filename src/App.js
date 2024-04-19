import './App.css';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
/* import AboutUs from './components/AboutUs'; */
import React, { useState } from 'react';
import TextBox from './components/TextBox';
/* import {Routes, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'; */

function App() {
  const [Mode, setMode] = useState('light');
  const [myBtn, setmyBtn] = useState("Enable DarkMode");
  const [textBox, settextBox] = useState('light');
  const [alerts, setAlerts] = useState(null);


  const showAlerts = (massage, result) => {
    setAlerts({
      msg: massage,
      type: result
    })
    setTimeout(() => {
      setAlerts(null);
    }, 1500);
  }

  const changeMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      setmyBtn('Disable Darkmode');
      document.body.style.backgroundColor = 'rgba(5, 17, 20, 1)';
      settextBox('dark')
      showAlerts("Dark mode is Enable:", "successs");
 
    }
    else {
      setMode('light');
      setmyBtn('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
      settextBox('light');
      showAlerts("Light mode is Enable:", 'success');
    }
  }
  return (
    <>
   
      <Navbar navbar="WordCounter" mode={Mode} changeMode={changeMode} myBtn={myBtn} />
      <Alerts alerts={alerts} />
        <div className="container my-3">
        <TextBox textHeading="Sanjay Notes" textBox={textBox} showAlerts={showAlerts}/>
        </div>
     
    </>
   /*  <>
    <Router>
      <Navbar navbar="WordCounter" mode={Mode} changeMode={changeMode} myBtn={myBtn} />
      <Alerts alerts={alerts} />
        <div className="container my-3">
     <Routes>
          <Route path="/about" element={<AboutUs/>} mode={Mode} />
          <Route path="/" element={<TextBox textHeading="Sanjay Notes" textBox={textBox} showAlerts={showAlerts}/>} />
      </Routes>
        </div>
      </Router>
    </> */
  );
}
export default App; 
