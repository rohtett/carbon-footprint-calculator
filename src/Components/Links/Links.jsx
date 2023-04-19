import { Link } from 'react-router-dom';
import './Links.scss';

const Links = () => {

  return (
    <div className="calculator__links">
      <div className="calculator__links--title">
        <h2>Get started today</h2>
        <p>Choose your calculator</p>
      </div>
      <div className="navigators">
        <Link to="/calculate#car">
          <div className="navigators__link navigators__link--white">
            Car
          </div>
        </Link>
        <Link to="calculate#public">
          <div className="navigators__link navigators__link--white">
            Bus
          </div>
        </Link>
        <Link to="calculate#public">
          <div className="navigators__link navigators__link--white">
            Train
          </div>
        </Link>
        <Link to="calculate#plane">
          <div className="navigators__link navigators__link--white">
            Plane
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Links;
