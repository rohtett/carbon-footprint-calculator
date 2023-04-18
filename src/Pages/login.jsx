import React from 'react';
import { useState } from "react";
import '../App.scss';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const HandleLogin = async (e) =>{
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password,
      });
      console.log(response.data);

      if (response.data===200) {
        alert('Login Successful');
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

const Login = () => {
  return (
    <div className="container">
      <div className="separator backdrop" />
      <div className="banner">
        <form className="login__form" onSubmit={HandleLogin}>
        <div className="login__form__item">
          <input className="login__form__item--input"
            type="email" name="email" id="email" autoComplete="username" value={email}
            onChange={(e) => {
              setEmail(e.target.value)
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
            type="password" name="password" id="password" autoComplete="current-password" value={password}
            onChange={(e) => {
              setPassword(e.target.value)
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
}

export default Login;
