import './App.scss';
import { Header, Footer, Home, GeoCalculator, Login, Signup } from './Containers';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  const isLoggedIn =()=>{
    const user = JSON.parse(localStorage.getItem('user')); // checking if user is logged in in the local storage as their user object is stored there
    return user !== null && user !== undefined; //checking for null and undefined which will return true if user is logged in.
  }

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path = "/" element= { <Home /> } key = { document.location.href } />
          <Route path = "/signup" element= { <Signup /> } key = { document.location.href } />
          <Route path = "/login" element= { <Login /> } key = { document.location.href } />
          <Route path = "/calculate" element= { <GeoCalculator /> } key = { document.location.href } />
          <Route path = "*" element= { <Error /> } key = { document.location.href } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const Error = () => {
  return (
    <div className="container">
      <div className="separator">
        <h1>Erro 404.</h1>
      </div>
      <div className="banner">
      </div>
    </div>
  )
}

export default App;
