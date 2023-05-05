import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__header__title">How Big is your Carbon Footprint?</h1>
        <p className="about__header__title__info">
          Climate change is one of the biggest environmental challenges facing the world today. Carbon emissions from human activities, such as transportation, are a major contributor to this problem. By tracking your carbon footprint and taking steps to reduce it, you can help reduce your impact on the environment and slow the effects of climate change.
      </p>
      </div>
      <div className="about__badges">
      <div className="about__badges__item about__badges__item--raise-awareness">
        <div className="about__badges__item--raise-awareness__icon about__badges__item__icon" />
        <h2 className="about__badges__item--raise-awareness__title about__badges__item__title">
          Raise Awareness
        </h2>
      </div>
      <div className="about__badges__item about__badges__item--informed-decisions">
        <div className="about__badges__item--informed-decisions__icon about__badges__item__icon" />
        <h2 className="about__badges__item--informed-decisions__title about__badges__item__title">
          Informed Decisions
        </h2>
      </div>
      <div className="about__badges__item about__badges__item--take-action">
        <div className="about__badges__item--take-action__icon about__badges__item__icon" />
        <h2 className="about__badges__item--take-action__title about__badges__item__title">
          Take Action
        </h2>
      </div>
      <div className="about__badges__item about__badges__item--environmental-contribution">
        <div className="about__badges__item--environmental-contribution__icon about__badges__item__icon" />
        <h2 className="about__badges__item--environmental-contribution__title about__badges__item__title">
          Contribute
        </h2>
      </div>
      </div>
    </div>
  )
}

export default About;
