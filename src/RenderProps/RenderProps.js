import React from 'react';
import cx from 'classnames';

import styles from './RenderProps.module.scss';
import Collapse from './Collapse';
import CollapseChildren from '../providers/CollapseChildren';
import Authorization from '../providers/Authorization';

const SomeComponent = ({ renderJsx, renderFunction }) => (
  <div>
    {renderJsx}
    {renderFunction('string rendered as argument from render function')}
  </div>
);

const ParentComponent = ({ children, someProps }) => (
  <div>
    <p>{children('argument passed to children function')}</p>
    <p>{someProps}</p>
  </div>
);

const RenderProps = () => {
  const listClass = (isCollapsed) =>
    cx(styles.list, {
      [styles.isCollapsed]: isCollapsed,
    });
  return (
    <div className="box">
      <h3 className="title is-3">Basic render props</h3>
      {/* convention is to name this prop "render" but it could be anything */}
      <SomeComponent
        renderJsx={<p>JSX rendered from props!</p>}
        renderFunction={(data) => <p>{data}</p>}
      />
      <br />
      <h3 className="title is-3">Render props as a Children</h3>
      <ParentComponent someProps="props passed to parent component">
        {(data) => <p>{data}</p>}
      </ParentComponent>
      <br />
      <h3 className="title is-3">Render props Collapse</h3>
      <Collapse
        render={({ isCollapsed, toggle }) => (
          <div>
            <button className="button is-dark is-large" onClick={toggle}>
              toggle
            </button>
            <ul className={listClass(isCollapsed)}>
              <li className="notification is-primary">collapse me!</li>
            </ul>
          </div>
        )}
      />
      <h3 className="title is-3">Nested Render Props</h3>
      <CollapseChildren>
        {({ isCollapsed2, toggle2 }) => (
          <Authorization>
            {({ isAuthorized, toggleAuth }) => (
              <div>
                <button
                  className="button is-warning is-rounded"
                  onClick={toggleAuth}
                >
                  Authorize toggle
                </button>
                <div className={listClass(!isAuthorized)}>
                  <button className="button is-dark is-large" onClick={toggle2}>
                    toggle
                  </button>
                  <ul className={listClass(isCollapsed2)}>
                    <li className="notification is-primary">collapse me!</li>
                  </ul>
                </div>
              </div>
            )}
          </Authorization>
        )}
      </CollapseChildren>
    </div>
  );
};

export default RenderProps;
