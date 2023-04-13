import './App.scss';
import Home from './Pages/home'
import SignUp from './Pages/signup'
import Error from './Pages/404'
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <div className="head">
          <h1>Carbon Footprint Calculator</h1>
          <nav />
        </div>
      </header>
      <Routes>
        <Route path = "/carbon-footprint-calculator/" element= { <Home /> } key = { document.location.href } />
        <Route path = "/carbon-footprint-calculator/signup" element= { <SignUp /> } key = { document.location.href } />
        <Route path = "*" element= { <Error /> } key = { document.location.href } />
      </Routes>
    </div>
  );
}

export default App;
