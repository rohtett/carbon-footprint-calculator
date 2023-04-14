import React from 'react';
import '../App.scss';

const login = () => {
  return (
    <form className="login-form">
      <label className="login-form__label" htmlFor="email">Email</label>
      <input className="login-form__input" type="email" name="email" id="email" />

      <label className="login-form__label" htmlFor="password">Password</label>
      <input className="login-form__input" type="password" name="password" id="password" />

      <button className="login-form__button" type="submit">Log In</button>
    </form>
  );
};

export default login;
