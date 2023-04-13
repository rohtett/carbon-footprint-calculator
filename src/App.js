import './App.scss';
import Home from './Pages/home'
import SignUp from './Pages/signup'
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
        <Route path = "/carbon-footprint-calculator/" element= { <Home /> } />
        <Route path = "/carbon-footprint-calculator/signup" element= { <SignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
