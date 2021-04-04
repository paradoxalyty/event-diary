import { useState } from 'react';

export const useFormData = () => {
  let [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(++count);
  };

  return {
    count,
    handleCount,
  };
};
