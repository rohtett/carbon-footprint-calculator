import react, { useState, useEffect } from 'react';
import './CalculatorCar.scss';

const CalculatorCar = () => {

  const [vehicle, setVehicle] = useState("Car");
  const [fuel, setFuel] = useState("Petrol");
  const [psuedosize, psuedosetSize] = useState(0);
  const [size, setSize] = useState("Small");
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const getSize = () => {
      if (psuedosize == 2) return "Large";
      if (psuedosize == 1) return "Medium";
      if (psuedosize == 0) return "Small";
    }
    setSize(getSize)
  }, [psuedosize])

  const handleSubmit = () => {
    //
  }

  return (
    <div className="calculators--form">
      <form onSubmit={handleSubmit}>
        <div className="calculators--form__item calculators--form__item--radio">

          <div>
            <input type="radio" name="type" id="car"
              onChange = { (e) => {
                setVehicle("Car")
              }}
            checked = { vehicle === "Car" }
            />
            <label htmlFor="car">Car</label>

            <input type="radio" name="type" id="van"
              onChange = {(e) => {
                setVehicle("Van")
              }}
              checked = { vehicle === "Van" }
            />
            <label htmlFor="van">Van</label>

            <input type="radio" name="type" id="bike"
              onChange = {(e) => {
                setVehicle("MotorBike")
                setFuel("")
              }}
              checked = { vehicle === "MotorBike" }
            />
            <label htmlFor="bike">Bike</label>
          </div>

          <label className="calculators--form__item--label calculators--form__item--radio--label">Vehicle</label>

        </div>

        <div className="calculators--form__item--drop calculators--form__item">

          <select disabled = { vehicle== "MotorBike" }
            className="calculators--form__item--input calculators--form__item--drop--input"
            name="fuel"
            id="fuel"
            onChange={(e) => {
              setFuel(e.target.value)
            }}
          >
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="CNG">CNG</option>
            <option value="LPG">LPG</option>
          </select>

          <label
            className="calculators--form__item--label calculators--form__item--drop--label"
            htmlFor="name"
          >
            Fuel Type
          </label>
        </div>

        <div className="calculators--form__item calculators--form__item--slider">
          <span>{ size }</span>
          <input id="size" className = "calculators--form__item--slider--input calculators--form__item--input" type="range" min="0" max="2" value={psuedosize}
            onChange={(e) => {
              psuedosetSize(e.target.value);
            }}
          />
          <label for="size" className = "calculators--form__item--slider--label calculators--form__item--label">Size</label>
        </div>

        <div className="calculators--form__item calculators--form__item--insert">
          <input className="calculators--form__item--input calculators--form__item--insert--input" type="number" min="0" id="distance"
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

export default CalculatorCar;
