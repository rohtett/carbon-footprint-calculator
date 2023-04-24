import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import './SignMenu.scss';

const SignMenu = ({ isLoggedIn }) => {

  return isLoggedIn()? (
      <Link to="/account" className="head--loggedin">
        name
        <div className="head--loggedin__icon" />
        <BsPersonCircle />
      </Link>
  ): (
    <div className="head--login">
      <Link className="head__menu--link" to="/login"> Log in </Link>
      <div className="navigators__link navigators__link--green">
        <Link to="/signup/">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default SignMenu;
