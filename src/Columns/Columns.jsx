import React from 'react';
import cx from 'classnames';

import styles from './Columns.module.scss';
import withCollapse from '../hoc/withCollapse';

const Columns = ({ isCollapsed, toggle }) => {
  const listClass = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed === true,
  });

  return (
    <div>
      <button className="button is-dark is-large" onClick={toggle}>
        Toggle me
      </button>
      <div className={listClass}>Lorem ipsum dolor</div>
    </div>
  );
};

export default withCollapse(Columns);
