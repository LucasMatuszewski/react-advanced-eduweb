import React from 'react';
import cx from 'classnames';

import styles from './ItemList.module.scss';
import withCollapseFC from '../hoc/withCollapseFC';
import withAuth from '../hoc/withAuth';

const items = [
  'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem',
  'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem',
  'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem',
  'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem',
];

class ItemsList extends React.Component {
  render() {
    const listClass = cx(styles.list, {
      [styles.isCollapsed]: this.props.isCollapsed === true,
    });
    return (
      <div>
        <button
          className="button is-warning is-large is-rounded"
          onClick={this.props.toggleAuth}
        >
          Authorization
        </button>
        {this.props.isAuthorized ? (
          <>
            <button
              className="button is-primary is-large is-rounded"
              onClick={this.props.toggle}
            >
              Collapse
            </button>
            <ul className={listClass}>
              {items.map((item, i) => (
                <li className="notification is-primary" key={i}>
                  <button className="delete"></button>
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    );
  }
}

// We can use compose() from Recompose library to do it like this:
// export default compose({withAuth, withCollapseFC}, ItemsList);
// But HOCs are not recommended pattern and Recompose is not supported since Hooks introduction
export default withAuth(withCollapseFC(ItemsList));
