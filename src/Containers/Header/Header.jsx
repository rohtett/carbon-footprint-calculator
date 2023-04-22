import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, SignMenu, Hamburger } from '../../Components/'
import './Header.scss';

const Header = () => {

  const [signState, setSignState] = useState({ name: "Rohit" })

  const [menu, setMenu] = useState(false);



  return (
    <header>
      <div className="head">
        <Link className="head__logo" to="/">
            <div className="head__logo--icon" />
            <h1 className="head__logo--title">Carbon Compass</h1>
        </Link>
        <Menu signState={signState} setSignState={setSignState}/>
        <div className="head__section">
          <SignMenu signState={signState} />
          <Hamburger signState={signState} />
        </div>
      </div>
    </header>
  )
}

export default Header;
