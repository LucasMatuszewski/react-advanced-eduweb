import React, { useState } from 'react';

const CollapseChildren = ({ children }) => {
  const [isCollapsed2, setIsCollapsed] = useState(false);

  const toggle2 = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return children({ isCollapsed2, toggle2 });
};

export default CollapseChildren;
