import React from 'react';
import '../App.scss';

const signup = () => {
  return (
    <div className="container">
      <div className="separator backdrop">
      </div>
      <div className="banner">
        <form className="signup__form">
          <div className="signup__form__item">
            <input className="signup__form__item--input"
              type="text" name="name" id="name"
              onChange={(e) => {
                if (e.target.value) {
                  e.target.classList.add("signup__form__item--input--contains");
                } else {
                  e.target.classList.remove("signup__form__item--input--contains")
                }
              }}/>
            <label className="signup__form__item--label" htmlFor="name">Name</label>
          </div>
          <div className="signup__form__item">
            <input className="signup__form__item--input"
              type="email" name="email" id="email"
              onChange={(e) => {
                if (e.target.value) {
                  e.target.classList.add("signup__form__item--input--contains");
                } else {
                  e.target.classList.remove("signup__form__item--input--contains")
                }
              }}/>
            <label className="signup__form__item--label" htmlFor="email">Email</label>
          </div>
          <div className="signup__form__item">
            <input className="signup__form__item--input"
              type="password" name="password" id="password"
              onChange={(e) => {
                if (e.target.value) {
                  e.target.classList.add("signup__form__item--input--contains");
                } else {
                  e.target.classList.remove("signup__form__item--input--contains")
                }
              }}/>
            <label className="signup__form__item--label" htmlFor="password">Password</label>
          </div>
          <div className="signup__form__item">
            <input className="signup__form__item--input"
              type="password" name="confirm-password"
              id="confirm-password" onChange={(e) => {
                if (e.target.value) {
                  e.target.classList.add("signup__form__item--input--contains");
                } else {
                  e.target.classList.remove("signup__form__item--input--contains")
                }
              }}/>
            <label className="signup__form__item--label" htmlFor="confirm-password">Confirm Password</label>
          </div>
          <button className="signup__form__button navigators__link--white" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default signup;
