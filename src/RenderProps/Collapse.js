import React, { useState } from 'react';

const Collapse = ({ render }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return render({ isCollapsed, toggle });
};

export default Collapse;
