import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { SignMenu } from '../';
import './Hamburger.scss';

const Hamburger = ({ isLoggedIn }) => {

  const handleClick = e => {
    const hamburger = document.querySelector(".head__hamburger__icon");
    const menu = document.querySelector("head__hamburger__menu");
    if (e.target !== hamburger && e.target !== menu) {
      setMenu(false);
    }
  }

  const [menu, setMenu] = useState();

  useEffect(() => {

    document.addEventListener("click", e => { handleClick(e) });

    return () => {
      document.addEventListener("click", e => { handleClick(e) });

    }
  }, [menu])

  return (
    <div className="head__hamburger">
      <div className="head__hamburger__icon" onClick= {() => {
        setMenu(!menu)
      }}/>
      <div className={menu? "head__hamburger__menu head__hamburger__menu--open": "head__hamburger__menu"}>
        { isLoggedIn && <SignMenu isLoggedIn = { isLoggedIn } /> }
        <ul>
          <Link to="/calculate">
            <li className= "head__hamburger__menu--link head__menu--link">
              Calculate
            </li>
          </Link>
          <Link to="/my-journey">
            <li className="head__hamburger__menu--link head__menu--link">
              My Journey
            </li>
          </Link>
          <Link to="/leagues">
            <li className="head__hamburger__menu--link head__menu--link">
              Leagues
            </li>
          </Link>
          <Link to="/faq">
            <li className="head__hamburger__menu--link head__menu--link">
              FAQ
            </li>
          </Link>
        </ul>
        { !isLoggedIn && <SignMenu isLoggedIn = { isLoggedIn } /> }
      </div>
    </div>
  )
}

export default Hamburger;
