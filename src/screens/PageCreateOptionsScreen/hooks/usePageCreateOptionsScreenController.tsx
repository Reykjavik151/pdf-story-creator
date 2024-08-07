import { useState } from 'react';

export const usePageCreateOptionsScreenController = () => {
  const [titleInputValue, setTitleInputValue] = useState('');

  return { titleInputValue, onTitleInputChange: setTitleInputValue };
};
