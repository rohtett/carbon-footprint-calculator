import React from 'react';
import '../App.scss';

const login = () => {
  return (
    <div className="container">
      <div className="separator backdrop" />
      <div className="banner">
        <form className="login__form">
        <div className="login__form__item">
          <input className="login__form__item--input"
            type="email" name="email" id="email" autoComplete="username"
            onChange={(e) => {
              if (e.target.value) {
                e.target.classList.add("login__form__item--input--contains");
              } else {
                e.target.classList.remove("login__form__item--input--contains")
              }
            }}/>
          <label className="login__form__item--label" htmlFor="email">Email</label>
        </div>
        <div className="login__form__item">
          <input className="login__form__item--input"
            type="password" name="password" id="password" autoComplete="current-password"
            onChange={(e) => {
              if (e.target.value) {
                e.target.classList.add("login__form__item--input--contains");
              } else {
                e.target.classList.remove("login__form__item--input--contains")
              }
            }}/>
          <label className="login__form__item--label" htmlFor="password">Password</label>
        </div>
          <button className="login__form__button" type="submit">Log In</button>
          <div className="oAuth">
            <h3>Sign In With</h3>
            <div className=" oAuth__button oAuth__button--google" />
            <div className="oAuth__button oAuth__button--microsoft" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
