import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../api/api';

export const GetImages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responce = await fetch(API_URL, {
          headers: {
            Authorization: API_KEY,
          },
        });
        const { photos } = await responce.json();
        return photos;
      } catch (err) {
        console.log(err);
      }
    };

    const setImages = async () => {
      const images = await fetchImages();
      setData(images);
    };

    setImages();
  }, []);

  return { data };
};
