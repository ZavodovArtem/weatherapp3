import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Weather from './components/Weather';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather' element= {<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
