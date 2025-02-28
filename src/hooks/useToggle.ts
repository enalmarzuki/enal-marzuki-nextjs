import { useCallback, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

export function useToggle(
  defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!defaultValue);

  const onToggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return [value, onToggle, setValue];
}
