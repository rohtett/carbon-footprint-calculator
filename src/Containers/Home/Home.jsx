import { Facts, Links } from '../../Components';
import { Badges } from '../../Containers';
import './Home.scss';

const Home = () => {

  return (
    <div className="container">
      <div className="separator">
        <Facts />
        <Links />
      </div>
      <div className="banner">
        <Badges />
      </div>
    </div>
  )
}

export default Home;
