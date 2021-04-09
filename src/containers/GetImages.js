import { useState, useEffect } from 'react';
import { usePhotoSearch } from '../hooks/usePhotoSearch';
import { API_KEY } from '../api/api';

export const GetImages = () => {
  const [data, setData] = useState([]);
  const { API_URL } = usePhotoSearch();

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
  }, [API_URL]);

  return { data };
};
