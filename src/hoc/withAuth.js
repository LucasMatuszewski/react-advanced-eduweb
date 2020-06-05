import React, { useState } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const toggleAuth = () => {
      setIsAuthorized((prevState) => !prevState);
    };
    return (
      <WrappedComponent
        isAuthorized={isAuthorized}
        toggleAuth={toggleAuth}
        {...props}
      />
    );
  };
};

export default withAuth;
