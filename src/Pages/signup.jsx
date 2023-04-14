import React from 'react';
import '../App.scss';

const signup = () => {
  return (
    <div className="container">
      <div className="separator">
      </div>
      <div className="banner">
        <form className="sign-up-form">
          <label className="sign-up-form__label" htmlFor="name">Name</label>
          <input className="sign-up-form__input" type="text" name="name" id="name" />

          <label className="sign-up-form__label" htmlFor="email">Email</label>
          <input className="sign-up-form__input" type="email" name="email" id="email" />

          <label className="sign-up-form__label" htmlFor="password">Password</label>
          <input className="sign-up-form__input" type="password" name="password" id="password" />

          <label className="sign-up-form__label" htmlFor="confirm-password">Confirm Password</label>
          <input className="sign-up-form__input" type="password" name="confirm-password" id="confirm-password" />

          <button className="sign-up-form__button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default signup;
