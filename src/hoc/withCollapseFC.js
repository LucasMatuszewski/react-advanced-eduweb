import React, { useState } from 'react';

const withCollapseFC = (WrappedComponent) => {
  return (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggle = () => {
      setIsCollapsed((prevState) => !prevState);
    };
    return (
      <WrappedComponent isCollapsed={isCollapsed} toggle={toggle} {...props} />
    );
  };
};

export default withCollapseFC;
