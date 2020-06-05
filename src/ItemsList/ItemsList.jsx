import React from 'react';
import cx from 'classnames';

import styles from './ItemList.module.scss';
import withCollapse from '../hoc/withCollapse';

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
      </div>
    );
  }
}

export default withCollapse(ItemsList);
