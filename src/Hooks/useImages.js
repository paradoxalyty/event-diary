import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../api/api";

export const useImages = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {

            try {
                const responce = await fetch(API_URL, {
                    headers: {
                        'Authorization': API_KEY,
                    },
                })
                const { photos } = await responce.json();
                return photos;

            } catch (err) {
                console.log(err)
            }
        };

        const getImages = async () => {
            const images = await fetchImages();
            setData(images);
        }

        getImages();

    }, []);

    return { data };

};