import React, { useState } from 'react';

const Authorization = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const toggleAuth = () => {
    setIsAuthorized((prevState) => !prevState);
  };
  return children({ isAuthorized, toggleAuth });
};

export default Authorization;
