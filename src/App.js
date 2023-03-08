import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>

      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <TextForm heading="Enter the text to Analyze Below" mode={mode} showAlert={showAlert} />
      {/* <div className="container my-3">
        { {<BrowserRouter> }
          <Routes>
            <Route exact path="/About" 
            element={<About />} />
            < Route exact path="/" 
          </Routes>}
          { </BrowserRouter> }
      </div> */}
    </>
  );
}

export default App;
