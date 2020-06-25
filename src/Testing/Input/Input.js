import React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder }) => (
  <input data-testid="sample-input" placeholder={placeholder} />
);

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Default placeholder",
};

export default Input;
