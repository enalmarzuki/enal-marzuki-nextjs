import { useRef, useState, useEffect } from 'react';

const useIsInitialRender = () => {
  const isInitial = useRef(true);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    isInitial.current = false;
    setInitial(false);
  }, []);

  return initial;
};

export default useIsInitialRender;
