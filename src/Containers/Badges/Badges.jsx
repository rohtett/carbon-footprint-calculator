import './Badges.scss';

const Badges = () => {

  return (
    <div className="badges" >
      <div className="badges__item badges__item--raise-awareness">
        <div className="badges__item--raise-awareness__icon badges__item__icon" />
        <h2 className="badges__item--raise-awareness__title badges__item__title">
          Raise Awareness
        </h2>
      </div>
      <div className="badges__item badges__item--informed-decisions">
        <div className="badges__item--informed-decisions__icon badges__item__icon" />
        <h2 className="badges__item--informed-decisions__title badges__item__title">
          Make Informed Decisions
        </h2>
      </div>
      <div className="badges__item badges__item--take-action">
        <div className="badges__item--take-action__icon badges__item__icon" />
        <h2 className="badges__item--take-action__title badges__item__title">
          Take Environmental Action
        </h2>
      </div>
      <div className="badges__item badges__item--environmental-contribution">
        <div className="badges__item--environmental-contribution__icon badges__item__icon" />
        <h2 className="badges__item--environmental-contribution__title badges__item__title">
          Contribute to the Environment
        </h2>
        </div>
      <div className="badges__item badges__item--track-progress">
        <div className="badges__item--track-progress__icon badges__item__icon" />
        <h2 className="badges__item--track-progress__title badges__item__title">
          Track your Progress
        </h2>
      </div>
      <div className="badges__item badges__item--compare-footprints">
        <div className="badges__item--compare-footprints__icon badges__item__icon" />
        <h2 className="badges__item--compare-footprints__title badges__item__title">
          Compare Footprints
        </h2>
      </div>
    </div>
  )
}

export default Badges;
