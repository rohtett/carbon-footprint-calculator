import { useRef } from 'react';
import './Distance.scss';

const Distance = ({ setDistance, units, setUnits }) => {

  const inputRef= useRef(null);

  return (
    <div className="calculators--form__item calculators__form__item--insert">
      <input className="calculators--form__item--input calculators--form__item--insert--input" type="number" min="0"
        ref = {inputRef}
        onChange={(e) => {
          setDistance(e.target.value);
          if (e.target.value) {
            e.target.classList.add("calculators--form__item--input--contains");
          } else {
            e.target.classList.remove("calculators--form__item--input--contains")
          }
        }}
      />
      <label className="calculators--form__item--label calculators--form__item--insert--label" htmlFor="distance"
        onClick={() => {
          inputRef.current.focus();
        }}
      >Distance
      </label>
      <div className="calculators__form__item--insert__toggle">
        <div className="calculators__form__item--insert__toggle--unit">
          <input className="calculators__form__item--insert__toggle--unit--input"
            type="radio" id="km" name="units" value="km"
            checked = { units==="km" }
            onChange= {(e) => {
              setUnits(e.target.value)
              sessionStorage.setItem("units", e.target.value)
            }}
          />
          <label className="calculators__form__item--insert__toggle--unit--label" htmlFor="km" htmlFor="km">km</label>
        </div>
        <div className="calculators__form__item--insert__toggle--unit">
          <input className="calculators__form__item--insert__toggle--unit--input"
            type="radio" id="miles" name="units" value="miles"
            checked = { units==="miles" }
            onChange= {(e) => {
              setUnits(e.target.value)
              sessionStorage.setItem("units", e.target.value)
            }}
          />
          <label className="calculators__form__item--insert__toggle--unit--label" htmlFor="miles">miles</label>
        </div>
      </div>
    </div>
  )
}

export default Distance;
