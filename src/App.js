import React from 'react';
import styles from './App.module.scss';
import cx from 'classnames';

import ItemsList from './ItemsList/ItemsList';

function App() {
  return (
    <div className={cx(styles.App, 'box')}>
      <div className="box">
        <h1 className="title is-1">hello world</h1>
        <ItemsList />
      </div>
    </div>
  );
}

export default App;
