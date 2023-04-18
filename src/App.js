import './App.scss';
import { Home, Login, Signup, Error, GeoCalculator } from './Pages';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  const isLoggedIn =()=>{
    const user = JSON.parse(localStorage.getItem('user')); // checking if user is logged in in the local storage as their user object is stored there
    return user !== null && user !== undefined; //checking for null and undefined which will return true if user is logged in.
  }
  return (
    <div className="App">
      <header>
        <div className="head">
          <Link to="/carbon-footprint-calculator">
              <div className="logo" /><h1>Carbon Compass</h1>
          </Link>
          <nav>
            <div className="desktop">
              <div className="desktop__signin">
                <Link to="carbon-footprint-calculator/login"> Log in </Link>
                <div className="navigators__link navigators__link--green">
                  <Link to="carbon-footprint-calculator/signup/">
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="desktop__signed">
              </div>
            </div>
            <div className="hamburger">
              <div className="hamburger--icon">
                <HiBars3CenterLeft />
              </div>
              <div className="hamburger--menu">
                <div className="hamburger--menu__signin">
                </div>
                <div className="hamburger--menu__signed">
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="wrapper">
        <Routes>
        <Route path = "/carbon-footprint-calculator/" element= { <Home /> } key = { document.location.href } />
        <Route path = "/carbon-footprint-calculator/signup" element= { <Signup /> } key = { document.location.href } />
        <Route path = "/carbon-footprint-calculator/login" element= { <Login /> } key = { document.location.href } />
        <Route path = "/carbon-footprint-calculator/geocalculator" element= { <GeoCalculator /> } key = { document.location.href } />
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
                <a href="https://www.flaticon.com/free-icon/sustainable_2942555" target="_blank" title="sustainable icons">Sustainable</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icon/self-awareness_3062213" target="_blank" title="knowledge icon">Knowledge</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icon/benchmarking_8439085" target="_blank" title="compare icon">Compare Icon</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icon/actionable_9422976" target="_blank" title="actionable icon">Actionable</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icon/track_7958863" target="_blank" title="track icon">Business and Finance</a>
              </p>
              <p className="foot__section__content__link">
                <a href="https://www.flaticon.com/free-icon/decision-making_1404758" target="_blank" title="decision making icon">Decision Making</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
