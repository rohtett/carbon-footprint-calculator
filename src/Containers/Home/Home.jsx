import { About, Links } from '../../Components';
import './Home.scss';

const Home = () => {

  return (
    <div className="container">
      <div className="separator">
        <About />
        <Links />
      </div>
    </div>
  )
}

export default Home;
