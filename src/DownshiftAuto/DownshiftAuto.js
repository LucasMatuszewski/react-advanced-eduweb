import React from 'react';
import cx from 'classnames';
import Downshift from 'downshift';

const items = [
  { value: 'apple' },
  { value: 'orange' },
  { value: 'pineapple' },
  { value: 'banana' },
  { value: 'grape' },
];

const DownshiftAuto = () => (
  <Downshift>
    {({
      isOpen,
      inputValue,
      getInputProps,
      getMenuProps,
      getItemProps,
      selectedItem,
    }) => (
      <div className={cx('dropdown', { 'is-active': isOpen })}>
        <input
          type="text"
          className="input"
          placeholder="some"
          {...getInputProps()}
        />
        <div className="dropdown-menu">
          <div className="dropdown-content" {...getMenuProps()}>
            {items
              .filter((item) => !inputValue || item.value.includes(inputValue))
              .map(({ value }, index) => (
                <button
                  {...getItemProps({
                    key: value,
                    className: cx('dropdown-item', 'button', 'is-white', {
                      'is-active': value === selectedItem,
                    }),
                    index,
                    item: value,
                  })}
                >
                  {value}
                </button>
              ))}
          </div>
        </div>
      </div>
    )}
  </Downshift>
);

export default DownshiftAuto;
