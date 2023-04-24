import './Menu.scss';
import { Link } from 'react-router-dom';
import { Hamburger, SignMenu } from '../';

const Menu = ({ isLoggedIn }) => {

  return (
    <ul className="head__menu">
      <li className= "head__menu--link">
        <Link to="/calculate">Calculate</Link>
      </li>
      <li className="head__menu--link">
        <Link to="/my-journey">My Journey</Link>
      </li>
      <li className="head__menu--link">
        <Link to="/leagues">Leagues</Link>
      </li>
      <li className="head__menu--link">
        <Link to="/faq">FAQ</Link>
      </li>
    </ul>
  )
}

export default Menu;
