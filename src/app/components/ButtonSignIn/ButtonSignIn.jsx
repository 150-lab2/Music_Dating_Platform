import PropTypes from "prop-types";
import "./style.css";

export const ButtonSignin = ({
  className,
  vectorStroke = "https://c.animaapp.com/GEfjQbNn/img/vector-1--stroke--1.svg",
}) => {
  return (
    <div className={`button-signin ${className}`}>
      <div className={`text-wrapper`}>Sign in</div>
      <img className="vector-stroke" alt="Vector stroke" src={vectorStroke} />
    </div>
  );
};

ButtonSignin.propTypes = {
  text: PropTypes.string,
  vectorStroke: PropTypes.string,
};
