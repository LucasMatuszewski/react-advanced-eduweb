import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    const regex = /[0-9]+/; // check if contains numbers (plus = "more then one")

    // we can use our regex to test value from event (true if contains number)
    if (regex.test(value)) {
      setInputValue(value.replace(regex, "")); // replace all numbers with empty string
    } else {
      setInputValue(value);
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        data-testid="sample-input"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Default placeholder",
};

export default Input;
