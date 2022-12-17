import "./TrainHeader.css";

export const TrainHeader = ({ title, visibility }) => {
  return (
    <div className="inner-left-1 innerleft-2">
      <img
        className="inner-left-img"
        src="https://gym.oceanwp.org/wp-content/uploads/2022/04/fitness-1.png"
        alt="innerleft-img"
      />
      <h3 className="inner-heading">
        {title} <span style={{ color: "#0eb290", visibility }}>BODY</span>
      </h3>
      <p className="inner-paragraph">
        class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt
        mattis, tortor.
      </p>
    </div>
  );
};
