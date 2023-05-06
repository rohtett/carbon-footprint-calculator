import { useState } from 'react';
import './EngineSize.scss';

const EngineSize = ({ size, setSize, vehicle, fuel, units }) => {

  const [slider, setSlider] = useState('');

  const feetandinches = Array.from({ length: (20 * 12 + 1) - (13 * 12) }, (_, i) => `${Math.floor((i + 13 * 12) / 12)}'${((i + 13 * 12) % 12).toFixed(0)}"`);

  return (
    <div className="calculators--form__item calculators--form__item--slider">
      { vehicle === "MotorBike"? (
        <span>{`${size} (${slider} cc)`}</span>
      ): (
        <span>
          {units !== "miles"?
            `${size} (${slider/10} metres)`
            : `${size} (${slider})`
          }
        </span>
      )
      }
      { vehicle === "Car" &&
        <>
          { units==="km"? (
            <input id="size" className = "calculators--form__item--slider--input calculators--form__item--input"
              type="range" min="40" max="54"
              onChange={(e) => {
                setSlider(e.target.value);
                setSize(() => {
                  return e.target.value<45? "Small": e.target.value<50? "Medium": "Large";
                })
              }}
            />
          ): (
            <input id="size" className = "calculators--form__item--slider--input calculators--form__item--input"
              type="range" min="0" max="60"
              onChange={(e) => {
                setSlider(feetandinches[e.target.value]);
                setSize(() => {
                  return e.target.value<22? "Small": e.target.value<51? "Medium": "Large";
                })
              }}
            />
          )}
        </>
      }
      { vehicle === "Van" &&
        <>
          { units==="km"? (
            <input id="size" className = "calculators--form__item--slider--input calculators--form__item--input"
              type="range" min="40" max="54"
              onChange={(e) => {
                setSlider(e.target.value);
                setSize(() => {
                  return e.target.value<45? "Small": e.target.value<50? "Medium": "Large";
                })
              }}
            />
          ): (
            <input id="size" className = "calculators--form__item--slider--input calculators--form__item--input"
              type="range" min="0" max="84"
                onChange={(e) => {
                  setSlider(feetandinches[e.target.value]);
                  setSize(() => {
                  return e.target.value<22? "Small": e.target.value<60? "Medium": "Large";
                })
              }}
            />
          )}
        </>
      }
      { vehicle === "MotorBike"  &&
        <input id="size" className = "calculators--form__item--slider--input calculators--form__item--input"
          type="range" min="50" max="500" step="25"
            onChange={(e) => {
              setSlider(e.target.value);
              setSize(() => {
              return e.target.value<125? "Small": e.target.value<400? "Medium": "Large";
            })
          }}
        />
      }
      <label htmlFor="size" className = "calculators--form__item--slider--label calculators--form__item--label">Vehicle Length</label>
    </div>
  )
}

export default EngineSize;
