import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className="head">
          <h1>Carbon Footprint Calculator</h1>
          <nav />
        </div>
      </header>
      <div className="container">
        <div className="separator">
          <h1>We can help you to:</h1>
          <div className="board" >
            <div className="board__item board__item--raise-awareness">
              <div>
                <div className="board__item--raise-awareness__icon board__item__icon" />
                <h2 className="board__item--raise-awareness__title board__item__title">
                  Raise Awareness
                </h2>
              </div>
              <p>
                Carbon footprint calculator can help you become more aware of their impact on the environment. By showing you how your travel choices contribute to climate change, you can understand the importance of reducing their carbon footprint.
              </p>
            </div>
            <div className="board__item board__item--informed-decisions">
              <div>
                <div className="board__item--informed-decisions__icon board__item__icon" />
                <h2 className="board__item--informed-decisions__title board__item__title">
                  Make Informed Decisions
                </h2>
              </div>
              <p>
                With information on the carbon emissions associated with different types of travel, the calculator can help you make more informed decisions about how to get around. This can include choosing more sustainable modes of travel, such as walking, cycling, or taking public transportation, or opting for more fuel-efficient vehicles.
              </p>
            </div>
            <div className="board__item board__item--track-progress">
              <div>
                <div className="board__item--track-progress__icon board__item__icon" />
                <h2 className="board__item--track-progress__title board__item__title">
                  Track Progress
                </h2>
              </div>
              <p>
                Carbon footprint calculator can help you track their progress over time. By entering your travel data on a regular basis, your can see how your carbon emissions are changing over time and identify areas where they can make improvements.
              </p>
            </div>
            <div className="board__item board__item--take-action">
              <div>
                <div className="board__item--take-action__icon board__item__icon" />
                <h2 className="board__item--take-action__title board__item__title">
                  Take Action
                </h2>
              </div>
              <p>
                Your carbon footprint calculator can help you take action to reduce their carbon footprint. By providing tips and suggestions for reducing carbon emissions, you can take steps to reduce your impact on the environment.
              </p>
            </div>
            <div className="board__item board__item--compare-footprints">
              <div>
                <div className="board__item--compare-footprints__icon board__item__icon" />
                <h2 className="board__item--compare-footprints__title board__item__title">
                  Compare Footprints
                </h2>
              </div>
              <p>
                Your carbon footprint calculator can also help users compare your carbon footprint to others. This can help users understand how their emissions compare to the global average or to others in their community, and motivate you to make changes to reduce their impact.
              </p>
            </div>
            <div className="board__item board__item--environmental-contribution">
              <div>
                <div className="board__item--environmental-contribution__icon board__item__icon" />
                <h2 className="board__item--environmental-contribution__title board__item__title">
                  Contribute to the Environment
                </h2>
              </div>
              <p>
                Finally, using the carbon footprint calculator can be a way for you to contribute to the environment. By taking steps to reduce your carbon footprint, you can help protect the planet and reduce the impact of climate change.
              </p>
              </div>
            </div>
          </div>
          <div>
          </div>
      </div>
    </div>
  );
}

export default App;
