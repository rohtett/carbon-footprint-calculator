import react, { useState, useEffect } from 'react';
import './CalculatorPublic.scss';

const CalculatorPublic = () => {

  const handleSubmit = () => {
    //
  }

  const [transit, setTransit] = useState("ClassicBus");
  const [psuedotransit, psuedosetTransit] = useState("Bus");
  const [distance, setDistance] = useState(0);

  return (
    <div className="calculators--form">
      <form onSubmit={handleSubmit}>

      <div className="calculators--form__item">
        <select
          className="calculators--form__item--input"
          name="transit"
          id="transit"
          onChange={(e) => {
            psuedosetTransit(e.target.value)
          }}
        >
          <option value="Bus">Bus</option>
          <option value="Rail">Rail</option>
          <option value="Ferry">Ferry</option>
        </select>

        <label
          className="calculators--form__item--label"
          htmlFor="name"
        >
          Transit Type
        </label>
      </div>

        <div className="calculators--form__item">
          <select
            className="calculators--form__item--input"
            name="transit"
            id="transit"
            onChange={(e) => {
              setTransit(e.target.value)
            }}
          >
          {
            psuedotransit == "Bus" && (
              <>
                <option value="ClassicBus">Classic Bus</option>
                <option value="EcoBus">Eco Bus</option>
                <option value="Coach">Coach</option>
              </>
            )
          }
          {
            psuedotransit == "Rail" && (
              <>
              <option value="NationalTrain">National Train</option>
              <option value="LightRail">Light Rail/Tram</option>
              <option value="Subway">Subway/Underground</option>
              </>
            )
          }
          {
            psuedotransit=="Ferry" && (
              <>
              <option value="FerryOnFoot">Ferry (on Foot)</option>
              <option value="FerryInCar">Ferry (in Car)</option>
              </>
            )
          }
          </select>

          <label
            className="calculators--form__item--label calculators--form__item--drop--label"
            htmlFor="name"
          >
            Transit Type
          </label>
        </div>


        <div className="calculators--form__item calculators--form__item--insert">
          <input className="calculators--form__item--input calculators--form__item--insert--input" type="number" min="0"
            onChange={(e) => {
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

export default CalculatorPublic;
