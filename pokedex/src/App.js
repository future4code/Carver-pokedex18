import React from 'react'
import GlobalState from './global/GlobalState';
import Router from "./routes/Router"
import Headers from './constants/Header';



function App() {
  return (
   
    <GlobalState>
          <Headers/>
          <Router/>
    </GlobalState>
  );
}

export default App;
