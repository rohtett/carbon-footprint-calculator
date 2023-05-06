import { useState, useEffect } from 'react';
import { Distance, EngineSize } from '../';
import './CalculatorCar.scss';

const CalculatorCar = ({Payload}) => {

  const [vehicle, setVehicle] = useState("Car");
  const [fuel, setFuel] = useState("Petrol");
  const [units, setUnits] = useState(sessionStorage.getItem("units") || "km");
  const [psuedosize, psuedosetSize] = useState(0);
  const [size, setSize] = useState("Small");
  const [distance, setDistance] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = new Payload();
    request.options.url = (vehicle==="MotorBike")?
      'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel'
      :'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromMotorBike'
    request.options.params = {
      distance: (units==="miles")? String(distance*1.60934): String(distance),
      type: (() => {
        if (vehicle==="MotorBike") return size + vehicle
        else {
          return size + fuel + vehicle;
        }
      })()
    }
    //below, this will ping the actual API
    //request.getPayload();
    console.log(request.options)
  }

  useEffect(() => {
    const getSize = () => {
      if (psuedosize == 2) return "Large";
      if (psuedosize == 1) return "Medium";
      if (psuedosize == 0) return "Small";
    }
    setSize(getSize)
  }, [psuedosize])

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
            { vehicle !== "Van" && (
              <option value="Hybrid">Hybrid</option>
            )}
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

        <EngineSize size = { size } setSize = { setSize } fuel = { fuel } vehicle = { vehicle } units = { units }  />

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

export default CalculatorCar;
