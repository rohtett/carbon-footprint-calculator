import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.scss';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) =>{
    e.preventDefault();
    if (password!==confirmPassword){
      alert('Passwords do not match');
      return;
    }
    try{
      const response = await axios.post('http://localhost:8000/signup', {
        name,
        email,
        password,
      });
      console.log(response.data);
    }catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="container">
      <div className="separator backdrop"></div>
      <div className="banner">
        <form className="signup__form" onSubmit={handleSignup}>
          <div className="signup__form__item">
            <input
              className="signup__form__item--input"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (e.target.value) {
                    e.target.classList.add("signup__form__item--input--contains");
                  } else {
                    e.target.classList.remove("signup__form__item--input--contains")
                  }
                }}
                />
            <label
              className="signup__form__item--label"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="signup__form__item">
            <input
              className="signup__form__item--input"
              type="email"
              name="email"
              id="email"
              autoComplete="username"
              value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                    if (e.target.value) {
                        e.target.classList.add("signup__form__item--input--contains");
                        } else {
                        e.target.classList.remove("signup__form__item--input--contains")
                        }
                    }}

            />
            <label
              className="signup__form__item--label"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="signup__form__item">
            <input
              className="signup__form__item--input"
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                      if (e.target.value) {
                          e.target.classList.add("signup__form__item--input--contains");
                          } else {
                          e.target.classList.remove("signup__form__item--input--contains")
                        }
                    }}

            />
            <label
              className="signup__form__item--label"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="signup__form__item">
            <input
              className="signup__form__item--input"
              type="password"
              name="confirm-password"
              id="confirm-password"
              autoComplete="new-password"
              value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                      if (e.target.value) {
                          e.target.classList.add("signup__form__item--input--contains");
                        } else {
                          e.target.classList.remove("signup__form__item--input--contains")
                        }
                    }}

            />
            <label
              className="signup__form__item--label"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
          </div>
          <button
            className="signup__form__button"
            type="submit"
          >
            Sign Up
          </button>
            <p>Already have an account? <Link to="/login">Log in instead</Link></p>
          <div className="oAuth">
            <h3>Sign In With</h3>
            <div className=" oAuth__button oAuth__button--google" />
            <div className="oAuth__button oAuth__button--microsoft" />
          </div>
        </form>
      </div>
    </div>
  );
}


export default Signup;
