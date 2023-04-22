import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {

  return (
    <footer>
      <div className ="foot">
        <div className="foot__section">
          <h2 className="foot__section__title">Menu</h2>
          <div className="foot__section__content">
            <p className="foot__section__content__link">
              <Link to="/calculate">Calculate</Link>
            </p>
            <p className="foot__section__content__link">
              <Link to="/my-journey">My Journey</Link>
            </p>
            <p className="foot__section__content__link">
              <Link to="/leagues">Leagues</Link>
            </p>
            <p className="foot__section__content__link">
              <Link to="/faq">FAQ</Link>
            </p>
          </div>
        </div>
        <div className="foot__section">
          <h2 className="foot__section__title">The Team</h2>
          <div className="foot__section__content">
            <p className="foot__section__content__link">
              <a href="https://github.com/Osomasi" target="_blank">Masi David Emil</a>
            </p>
            <p className="foot__section__content__link">
              <a href="https://github.com/rohtett" target="_blank">Rohit Naidu</a>
            </p>
          </div>
        </div>
        <div className="foot__section">
          <h2 className="foot__section__title" >Icons</h2>
          <div className="foot__section__content">
            <p className="foot__section__content__link">
              <a href="https://www.flaticon.com/free-icon/sustainable_2942555" target="_blank" title="sustainable icons">Sustainable</a>
            </p>
            <p className="foot__section__content__link">
              <a href="https://www.flaticon.com/free-icon/self-awareness_3062213" target="_blank" title="knowledge icon">Knowledge</a>
            </p>
            <p className="foot__section__content__link">
              <a href="https://www.flaticon.com/free-icon/benchmarking_8439085" target="_blank" title="compare icon">Compare Icon</a>
            </p>
            <p className="foot__section__content__link">
              <a href="https://www.flaticon.com/free-icon/actionable_9422976" target="_blank" title="actionable icon">Actionable</a>
            </p>
            <p className="foot__section__content__link">
              <a href="https://www.flaticon.com/free-icon/track_7958863" target="_blank" title="track icon">Business and Finance</a>
            </p>
            <p className="foot__section__content__link">
              <a href="https://www.flaticon.com/free-icon/decision-making_1404758" target="_blank" title="decision making icon">Decision Making</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
