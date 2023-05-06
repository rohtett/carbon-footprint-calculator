import { useState, useEffect } from 'react';
import axios from 'axios';
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

  function Payload() {
    this.options = {
      method: 'GET',
      params: {},
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
      }
    }
    this.getPayload = async() => {
      try {
        const response = await axios.request(this.options);
        console.log(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='container'>
      <div className='separator'>
        <div className="calculators">
          <div className="calculators--menu">
            <CalculatorInput setCalculator = { setCalculator } calculator = { calculator }
              classes = "calculators--menu__item--car"
              ids = "CarTravel"
              title = "Car"
            />
            <CalculatorInput setCalculator = { setCalculator } calculator = { calculator }
              classes = "calculators--menu__item--public"
              ids = "PublicTransit"
              title = "Public Transport"
            />
            <CalculatorInput setCalculator = { setCalculator } calculator = { calculator }
              classes = "calculators--menu__item--plane"
              ids = "Flight"
              title = "Plane"
            />
          </div>
          { calculator === 'CarTravel' && <CalculatorCar Payload = { Payload } /> }
          { calculator === 'PublicTransit' && <CalculatorPublic Payload = { Payload } /> }
          { calculator === 'Flight' && <CalculatorPlane Payload = { Payload } /> }
        </div>
      </div>
    </div>
  )
}

export default GeoCalculator;
