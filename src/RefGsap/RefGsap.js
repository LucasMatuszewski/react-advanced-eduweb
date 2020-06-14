import React, { useRef, useEffect } from 'react';
import styles from './RefGsap.module.scss';
import { gsap } from 'gsap';

const RefGsap = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { filter: 'hue-rotate(68deg)', duration: 3 });
    gsap.from(boxRef.current, {
      y: '-300%',
      x: '-100%',
      scale: 5,
      duration: 3,
      opacity: 0.3,
    });
  }, [boxRef]);

  return (
    <div className={styles.container}>
      <h3 className="title is-h3">GreenSock Animation Platform</h3>
      <div ref={boxRef} className={styles.box} />
    </div>
  );
};

export default RefGsap;
