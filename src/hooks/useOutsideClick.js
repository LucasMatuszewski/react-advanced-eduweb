import { useEffect } from 'react';
export const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(false);
    };
    document.addEventListener('mousedown', listener);
    // Clean effects after unmounting of this component:
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });
};
