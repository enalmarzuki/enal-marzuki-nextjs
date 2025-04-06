import { useRef, useEffect, useState } from 'react';

const useIsInitialRender = () => {
  const isInitial = useRef(true);

  useEffect(() => {
    isInitial.current = false;
  }, []);

  return isInitial.current;
};

export default useIsInitialRender;
