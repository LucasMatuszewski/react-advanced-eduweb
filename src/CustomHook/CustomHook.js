import React, { useState, useRef } from 'react';
import cx from 'classnames';

import { useOutsideClick } from '../hooks/useOutsideClick';

const CustomHook = () => {
  const [isTooltipOpen, setTooltipVisibility] = useState(false);
  const [isModalOpen, setModalVisibility] = useState(false);
  const modalRef = useRef(null);
  const tooltipRef = useRef(null);

  useOutsideClick(modalRef, setModalVisibility);
  useOutsideClick(tooltipRef, setTooltipVisibility);

  return (
    <div>
      <button
        className="is-large button is-primary"
        onClick={() => setTooltipVisibility(true)}
      >
        Open tooltip
      </button>
      {isTooltipOpen ? (
        <div ref={tooltipRef} className="notification is-primary">
          Lorem ipsum dolor sit amet...
        </div>
      ) : (
        ''
      )}
      <button
        className="is-large button is-primary"
        onClick={() => setModalVisibility(true)}
      >
        Open Modal
      </button>
      <div className={cx('modal', { 'is-active': isModalOpen })}>
        <div className="modal-background"></div>
        <div ref={modalRef} className="modal-content">
          <article className="message">
            <div className="message-header">
              <p>Hello World</p>
              <button
                className="delete"
                aria-label="delete"
                onClick={() => setModalVisibility(false)}
              ></button>
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
              porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
              Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor
              ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
              sem eget, facilisis sodales sem.
            </div>
          </article>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModalVisibility(false)}
        ></button>
      </div>
    </div>
  );
};

export default CustomHook;
