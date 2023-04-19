import react, { useState, useEffect } from 'react';
import './CalculatorPublic.scss';

const CalculatorPublic = () => {

  const handleSubmit = () => {

  }

  const [transit, setTransit] = useState("ClassicBus");
  const [distance, setDistance] = useState(0);

  return (
    <div className="calculators--form">
      <h1>Calculator Public</h1>
      <form className="calculators--form" onSubmit={handleSubmit}>

        <div className="calculators--form__item">
          <select
            className="calculators--form__item--input"
            name="transit"
            id="transit"
            onChange={(e) => {
              setTransit(e.target.value)
            }}
          >
            <option value="ClassicBus">Classic Bus</option>
            <option value="EcoBus">Eco Bus</option>
            <option value="Coach">Coach</option>
            <option value="NationalTrain">National Train</option>
            <option value="LightRail">Light Rail/Tram</option>
            <option value="Subway">Subway/Underground</option>
            <option value="FerryOnFoot">Ferry (on Foot)</option>
            <option value="FerryInCar">Ferry (in Car)</option>
          </select>

          <label
            className="calculators--form__item--label"
            htmlFor="name"
          >
            Transit Type
          </label>
        </div>

        <div className="calculators--form__item">
          <input type="number" min="0"
            onChange={(e) => {
              setDistance(e.target.value);
            }}
          />
          <label htmlFor="distance">
            Distance
          </label>
        </div>
        <button
          className="calculators--form__button"
          type="submit"
        >
          Calculate
        </button>
      </form>
      Query: { transit }
    </div>
  )
}

export default CalculatorPublic;
