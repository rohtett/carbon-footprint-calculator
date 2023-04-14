import './App.scss';
import Home from './Pages/home'
import SignUp from './Pages/signup'
import Login from './Pages/login';
import Error from './Pages/404'
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <div className="head">
          <Link to="/carbon-footprint-calculator">
              <div className="logo" /><h1>Carbon Compass</h1>
          </Link>
          <nav>
            <div className="navigators__link navigators__link--green">
              <Link to="carbon-footprint-calculator/signup/">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="wrapper">
        <Routes>
        <Route path = "/carbon-footprint-calculator/" element= { <Home /> } key = { document.location.href } />
        <Route path = "/carbon-footprint-calculator/signup" element= { <SignUp /> } key = { document.location.href } />
        <Route path = "/carbon-footprint-calculator/login" element= { <Login /> } key = { document.location.href } />
        <Route path = "*" element= { <Error /> } key = { document.location.href } />
      </Routes>
      </div>
      <footer>
        <div className ="foot">
          <div className="foot__section">
            <h2 className="foot__section__title">The Team</h2>
            <div className="foot__section__content">
              <p className="foot__section__content__link">
                <a href="https://github.com/Osomasi" target="_blank">Masi David Emil</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://github.com/rohtett" target="_blank">Rohit Naidu</a>
              </p>
            </div>
          </div>
          <div className="foot__section">
            <h2 className="foot__section__title" >Icons</h2>
            <div className="foot__section__content">
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icons/sustainable" target="_blank" title="sustainable icons">Sustainable</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icons/knowledge" target="_blank" title="knowledge icons">Knowledge</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icons/compare" target="_blank" title="compare icons">Compare Icon</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icons/actionable" target="_blank" title="actionable icons">Actionable</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icons/business-and-finance" target="_blank" title="business and finance icons">Business and Finance</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icons/decision-making" target="_blank" title="decision making icons">Decision Making</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
