import './CalculatorInput.scss';
import { AiFillCar } from 'react-icons/ai';
import { MdDirectionsBus } from 'react-icons/md';
import { GiAirplaneDeparture } from 'react-icons/gi';

const CalculatorInput = ( { calculator, setCalculator, classes, title, ids  } ) => {
  return (
    <div className={ "calculators--menu__item calculators--menu__item--" + ids }>
      <input
        type="radio"
        name="calculator"
        id= { classes }
        checked = { calculator === ids }
        onChange={() => {
          setCalculator(ids)
        }} />
      <label htmlFor={ classes }>
        <div>
          <div className={ classes + "__icon calculators--menu__item__icon" } />
        </div>
      </label>
      <div className={ classes + "__title calculators--menu__item__title" }>
        { title }
      </div>
    </div>
  )
}

export default CalculatorInput;
