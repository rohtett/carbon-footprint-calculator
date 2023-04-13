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
          <div className="facts">
            <div className="facts__item facts__item--climate-change">
              <h2 className="facts__item__title">
                Climate Change
              </h2>
              <p>
                Climate change is one of the biggest environmental challenges facing the world today. Carbon emissions from human activities, such as transportation, are a major contributor to this problem. By tracking your carbon footprint and taking steps to reduce it, you can help reduce your impact on the environment and slow the effects of climate change.
              </p>
            </div>
            <div className="facts__item facts__item--personal-responsibility">
              <h2 className="facts__item__title">
              Personal Responsbiliy
              </h2>
              <p>
                As an individual, you have a responsibility to do what you can to protect the environment. Tracking your carbon footprint and taking steps to reduce it is a way to fulfil this responsibility and contribute to a more sustainable future.
              </p>
            </div>
            <div className="facts__item facts__item--global-impact">
              <h2 className="facts__item__title">
              Global Impact
              </h2>
              <p>
                Carbon emissions are a global problem, and every individual's contribution adds up. By reducing your carbon footprint, you are making a positive impact on the environment and helping to protect it for future generations.
              </p>
            </div>
            <div className="facts__item facts__item--health-benefits">
              <h2 className="facts__item__title">
              Health Benefits
              </h2>
              <p>
                Some of the steps you can take to reduce your carbon footprint, such as walking or cycling instead of driving, can also have health benefits. By reducing your reliance on cars and other motorised vehicles, you can improve your physical health and reduce air pollution.
              </p>
            </div>
          </div>
          <div className="">
            <h2>Get started today</h2>
            <div className="navigators">
              <div className="navigators__link navigators__link--car">
                Car
              </div>
              <div className="navigators__link navigators__link--bus">
                Bus
              </div>
              <div className="navigators__link navigators__link--train">
                Train
              </div>
              <div className="navigators__link navigators__link--plane">
                Plane
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="board" >
            <div className="board__item board__item--raise-awareness">
              <div className="board__item--raise-awareness__icon board__item__icon" />
              <h2 className="board__item--raise-awareness__title board__item__title">
                Raise Awareness
              </h2>
            </div>
            <div className="board__item board__item--informed-decisions">
              <div className="board__item--informed-decisions__icon board__item__icon" />
              <h2 className="board__item--informed-decisions__title board__item__title">
                Make Informed Decisions
              </h2>
            </div>
            <div className="board__item board__item--take-action">
              <div className="board__item--take-action__icon board__item__icon" />
              <h2 className="board__item--take-action__title board__item__title">
                Take Environmental Action
              </h2>
            </div>
            <div className="board__item board__item--environmental-contribution">
              <div className="board__item--environmental-contribution__icon board__item__icon" />
              <h2 className="board__item--environmental-contribution__title board__item__title">
                Contribute to the Environment
              </h2>
              </div>
            <div className="board__item board__item--track-progress">
              <div className="board__item--track-progress__icon board__item__icon" />
              <h2 className="board__item--track-progress__title board__item__title">
                Track your Progress
              </h2>
            </div>
            <div className="board__item board__item--compare-footprints">
              <div className="board__item--compare-footprints__icon board__item__icon" />
              <h2 className="board__item--compare-footprints__title board__item__title">
                Compare Footprints
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
