import { Link } from 'react-router-dom';
import './Links.scss';

const Links = () => {

  return (
    <div className="calculator">
      <div className="calculator__info">
        <h3>Tracking your carbon footprint and taking steps to reduce it is an important way to contribute to the environment and protect the planet for future generations.</h3>
      </div>
      <div className="calculator__links">
        <div className="calculator__links--title">
          <h2>Get Started Today</h2>
        </div>
        <div className="navigators">
          <Link to="/calculate#car">
            <div className="navigators__link navigators__link--white">
              Car Travel
            </div>
          </Link>
          <Link to="calculate#public">
            <div className="navigators__link navigators__link--white">
              Bus Travel
            </div>
          </Link>
          <Link to="calculate#public">
            <div className="navigators__link navigators__link--white">
              Train Travel
            </div>
          </Link>
          <Link to="calculate#plane">
            <div className="navigators__link navigators__link--white">
              Air Travel
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Links;
