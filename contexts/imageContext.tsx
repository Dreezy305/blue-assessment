import { imageStore } from "@/store/image.store";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const ImageContextProvider: any = createContext(imageStore);

function ImageContext({ children }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPictures = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${process.env.API_KEY}`
      );
      if (response.status === 200) {
        setData(response?.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <ImageContextProvider.Provider value={{ data, loading }}>
      {children}
    </ImageContextProvider.Provider>
  );
}

export default ImageContext;
