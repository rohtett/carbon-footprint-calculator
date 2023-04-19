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
    //consideration for submit:
    //motorbikes only have one type of fuel
  }

  return (
    <div className="calculators--form">
      <h1>Calculator Car</h1>
      <form className="calculators--form" onSubmit={handleSubmit}>
        <div className="calculators--form__item">

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
            }}
            checked = { vehicle === "MotorBike" }
          />
          <label htmlFor="bike">Bike</label>

        </div>
        {
          vehicle != "MotorBike" && (
            <div className="calculators--form__item">

              <select
                className="calculators--form__item--input"
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
                className="calculators--form__item--label"
                htmlFor="name"
              >
                Fuel Type
              </label>
            </div>
          )
        }

        <div className="calculators--form__item">
          <input type="range" min="0" max="2" value={psuedosize}
            onChange={(e) => {
              psuedosetSize(e.target.value);
            }}
          />
        </div>

        <div className="calculators--form__item">
          { size }
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
      Query: { size + fuel + vehicle }
    </div>
  )
}

export default CalculatorCar;
