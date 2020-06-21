import React from 'react';
import styles from './App.module.scss';
import cx from 'classnames';

import ItemsList from './ItemsList/ItemsList';
import Columns from './Columns/Columns';

import RenderProps from './RenderProps/RenderProps';
import DownshiftAuto from './DownshiftAuto/DownshiftAuto';
import RefGsap from './RefGsap/RefGsap';
import CustomHook from './CustomHook/CustomHook';
import CompoundComponent from './CompoundComponent/CompoundComponent';

function App() {
  return (
    <>
      <div className={cx(styles.App, 'box')}>
        <h1 className="title is-1">Advanced React Eduweb Hallo Roman</h1>
        <hr />
        <h2 className="title is-2">Higher Order Component (HOC)</h2>
        <h3 className="title is-3">Basic HOC</h3>
        <Columns buttonName="Toggle me" />
        <div className="box">
          <h3 className="title is-3">HOC in HOC</h3>
          <ItemsList />
        </div>
      </div>
      <div className="box">
        <h2 className="title is-2">Render Props</h2>
        <RenderProps />
      </div>
      <div className="box">
        <h2 className="title is-2">Autocomplete with Downshift</h2>
        <DownshiftAuto />
      </div>
      <div className="box">
        <h2 className="title is-2">Ref Hook + Gsap</h2>
        <RefGsap />
      </div>
      <div className="box">
        <h2 className="title is-2">Custom Hook</h2>
        <CustomHook />
      </div>
      <div className="box">
        <h2 className="title is-2">Compound Components (komponenty złożone)</h2>
        <p>
          We use this pattern for internally connected components, usually for
          some libraries we want to publish on NPM. In normal apps it's usually
          better to use other patterns.
        </p>
        <CompoundComponent />
      </div>
    </>
  );
}

export default App;
