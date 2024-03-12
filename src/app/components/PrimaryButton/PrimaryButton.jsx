import PropTypes from "prop-types";
import "./style.css";

export const PrimaryButton = ({
  className,
  vector = "https://c.animaapp.com/GEfjQbNn/img/vector-1--stroke--1.svg",
}) => {
  return (
    <div className={`primary-button ${className}`}>
      <div className={`text`}>Sign Up</div>
      <img className="vector" alt="Vector" src={vector} />
    </div>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  vector: PropTypes.string,
};