import { RefObject, useEffect } from 'react';

export const useOutsideAlerter = (
  ref: RefObject<any>,
  fn: () => void,
): void => {
  const handleClickOutside = ({ target }: MouseEvent) => {
    if (ref.current && !ref?.current?.contains(target)) {
      fn();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
