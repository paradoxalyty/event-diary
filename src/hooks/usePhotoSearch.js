import { useState, useContext, useEffect } from 'react';
import { FormContext } from '../contexts/FormContext';

export const usePhotoSearch = () => {
  const [query, setQuery] = useState('nature');
  const { searchQuery } = useContext(FormContext);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const API_URL = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&page_1&per_page=12`;

  return { API_URL };
};
