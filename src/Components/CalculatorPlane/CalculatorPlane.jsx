import { useState, useEffect, useRef } from 'react';
import { Distance } from '../';
import './CalculatorPlane.scss';

const CalculatorPlane = ({Payload}) => {
  const [domestic, setDomestic] = useState(false);
  const [distance, setDistance] = useState(0);
  const [units, setUnits] = useState(sessionStorage.getItem("units") || "km");
  const [psuedoflightlength, psuedosetflightLength] = useState(0);
  const [flightlength, setflightLength] = useState("Short");
  const classRef= useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = new Payload();
    request.options.url = 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight';
    request.options.params = {
      distance: (units==="miles")? String(distance*1.60934): String(distance),
      type: (() => {
        if (domestic) return "DomesticFlight"
        else {
          return flightlength + classRef.current.value + "Flight";
        }
      })()
    }
    //below, this will ping the actual API
    //request.getPayload();
    console.log(request.options)
  }

  const convert = (value) => {
    if (units === "miles") {
      return value * 1.609344;
    } else return value;
  }

  useEffect(() => {
    const getLength = () => {
      return (psuedoflightlength ===1)? "Long": "Short"
    }
    setflightLength(getLength)
  }, [psuedoflightlength])

  return (
    <div className="calculators--form">
      <form onSubmit={ handleSubmit }>
        <div className="calculators--form__item calculators--form__item--radio">
          <div>
            <input
            type="radio" name="type" id="international" value="International"
            checked = {!domestic}
            onChange= {() => {setDomestic(false)}}/>
            <label htmlFor="international">International Flight</label>
            <input
            type="radio" name="type" id="domestic" value="Domestic"
            checked= {domestic}
            onChange= {() => {setDomestic(true)}}/>
            <label htmlFor="domestic">Domestic Flight</label>
          </div>
          <label className="calculators--form__item--label calculators--form__item--radio--label">Flight Type</label>
        </div>
        <div className="calculators--form__item calculators__form__item--drop">
          <select disabled={domestic} ref={classRef}
            className="calculators--form__item--input calculators__form__item--drop--input"
            name="class"
            id="class"
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
          <input className="calculators--form__item--input calculators__form__item--slider--input" id="length" type="range"
            min="0" max="1" value={psuedoflightlength} disabled={domestic}
            onChange={(e) => {
              psuedosetflightLength(e.target.value);
            }}
          />
          <label className="calculators--form__item--label calculators__form__item--slider--label" htmlFor="length">Flight Length</label>
        </div>

        <Distance setDistance = { setDistance } units = { units } setUnits = { setUnits } />
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
