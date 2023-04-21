import react, {useState, useEffect } from 'react';
import './CalculatorPlane.scss';

const CalculatorPlane = () => {


  const [domestic, setDomestic] = useState(false);
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
      <form onSubmit={handleSubmit}>

      <div className="calculators--form__item calculators--form__item--radio">
        <div>
          <input className="calculators--form__item--input calculators--form__item--radio--input" type="checkbox" name="type" id="domestic" onChange= {() => {setDomestic(!domestic)}}/>
          <label htmlFor="domestic">Domestic Flight</label>
        </div>
        <label className="calculators--form__item--label calculators--form__item--radio--label" htmlFor="domestic">
        </label>
      </div>

        <div className="calculators--form__item calculators__form__item--drop">
          <select disabled={domestic}
            className="calculators--form__item--input calculators__form__item--drop--input"
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
            className="calculators--form__item--label calculators__form__item--drop--label"
            htmlFor="name"
          >
            Class
          </label>
        </div>

        <div className="calculators--form__item calculators--form__item--slider">
          <span>{ flightlength }</span>
          <input className="calculators--form__item--input calculators__form__item--slider--input" id="length" type="range" min="0" max="1" value={psuedoflightlength} disabled={domestic}
            onChange={(e) => {
              psuedosetflightLength(e.target.value);
            }}
          />
          <label className="calculators--form__item--label calculators__form__item--slider--label" htmlFor="length">Flight Length</label>
        </div>

        <div className="calculators--form__item calculators__form__item--insert">
          <input className="calculators--form__item--input calculators--form__item--insert--input" type="number" min="0" onChange={(e) => {
            setDistance(e.target.value);
            if (e.target.value) {
              e.target.classList.add("calculators--form__item--input--contains");
            } else {
              e.target.classList.remove("calculators--form__item--input--contains")
            }
          }}
          />
          <label className="calculators--form__item--label calculators--form__item--insert--label" htmlFor="distance">
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
    </div>
  )
}

export default CalculatorPlane;
