import react, {useState, useEffect } from 'react';
import './CalculatorPlane.scss';

const CalculatorPlane = () => {

  const [flightclass, setFlightClass] = useState("EconomyClass");
  const [psuedoflightlength, psuedosetflightLength] = useState(0);
  const [flightlength, setflightLength] = useState("Short");
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const getLength = () => {
      if (psuedoflightlength == 1) return "Long";
      if (psuedoflightlength == 0) return "Short";
    }
    setflightLength(getLength)
  }, [psuedoflightlength])

  const handleSubmit = () => {

  }

  return (
    <div className="calculators--form">
      <h1>Calculator Plane</h1>
      <form className="calculators--form" onSubmit={handleSubmit}>

        <div className="calculators--form__item">
          <select
            className="calculators--form__item--input"
            name="class"
            id="class"
            onChange={(e) => {
              setFlightClass(e.target.value)
            }}
          >
            <option value="EconomyClass">Economy</option>
            <option value="BusinessClass">Business</option>
            <option value="PremiumClass">Premium</option>
            <option value="FirstClass">First</option>
          </select>

          <label
            className="calculators--form__item--label"
            htmlFor="name"
          >
            Class
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

        <div className="calculators--form__item">
          <input type="range" min="0" max="1" value={psuedoflightlength}
            onChange={(e) => {
              psuedosetflightLength(e.target.value);
            }}
          />
        </div>

        <div className="calculators--form__item">
          { flightlength }
        </div>

        <button
          className="calculators--form__button"
          type="submit"
        >
          Calculate
        </button>
      </form>
      Query: { flightclass }
    </div>
  )
}

export default CalculatorPlane;
