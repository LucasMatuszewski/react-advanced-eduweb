import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [isErrorVisible, setErrorVisibility] = useState(false);

  const handleChange = ({ target: { value } }) => {
    const regex = /[0-9]+/; // check if contains numbers (plus = "more then one")

    // we can use our regex to test value from event (true if contains number)
    if (regex.test(value)) {
      setInputValue(value.replace(regex, "")); // replace all numbers with empty string
      setErrorVisibility(true);
    } else {
      setInputValue(value);
      setErrorVisibility(false);
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
      {isErrorVisible ? (
        <p>
          <strong>Error:</strong> You can't pass digits into this field
        </p>
      ) : null}
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "Default placeholder",
};

export default Input;
