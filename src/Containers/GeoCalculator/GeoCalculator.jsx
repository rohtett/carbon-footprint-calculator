import react, { useState, useEffect } from 'react';
import { CalculatorCar, CalculatorPublic, CalculatorPlane, CalculatorInput } from '../../Components';
import './GeoCalculator.scss';

function GeoCalculator() {

  //dictates which calculator is shown
  const [calculator, setCalculator] = useState("car");

  //retrieves the hash from url
  const hash = window.location.hash.slice(1,window.location.hash.length);

  //IMPORTANT: the useEffect will prevent the calculator constantly being set to hash
  useEffect(() => {
    if (hash && hash !== calculator) {
      setCalculator(hash);
    }
  }, [hash])

  return (
    <div className='container'>
      <div className='separator'>
        <div className="calculators">
          <div className="calculators--menu">
            <CalculatorInput setCalculator = { setCalculator } calculator = { calculator }
              classes = "calculators--menu__item--car"
              ids = "car"
              title = "Car"
            />
            <CalculatorInput setCalculator = { setCalculator } calculator = { calculator }
              classes = "calculators--menu__item--public"
              ids = "public"
              title = "Public Transport"
            />
            <CalculatorInput setCalculator = { setCalculator } calculator = { calculator }
              classes = "calculators--menu__item--plane"
              ids = "plane"
              title = "Plane"
            />
          </div>
          { calculator === 'car' && <CalculatorCar /> }
          { calculator === 'public' && <CalculatorPublic /> }
          { calculator === 'plane' && <CalculatorPlane /> }
        </div>
      </div>
      <div className='banner'>

      </div>
    </div>
  )
}

export default GeoCalculator;
