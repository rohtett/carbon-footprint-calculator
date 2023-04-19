import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import './Header.scss';

const Header = () => {

  return (
    <header>
      <div className="head">
        <Link to="/">
            <div className="logo" /><h1>Carbon Compass</h1>
        </Link>
        <nav>
          <div className="desktop">
            <div className="desktop__signin">
              <Link to="/login"> Log in </Link>
              <div className="navigators__link navigators__link--green">
                <Link to="/signup/">
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
  )
}

export default Header;
