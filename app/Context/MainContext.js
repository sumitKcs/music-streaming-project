import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();
const albumFeatureURL = `https://saavanapi.herokuapp.com/result/?query=`;
const dynamicFeaturedData = [
  {
    id: 1,
    URL: `${albumFeatureURL}https://www.jiosaavn.com/featured/rap-ka-badshah/JKy,RYg3-xI_`,
  },

  {
    id: 2,
    URL: `${albumFeatureURL}https://www.jiosaavn.com/featured/garma-garam/KsNSWjWnbqxFo9wdEAzFBA__`,
  },
];
const dynamicAlbumData = [
  {
    id: 1,
    URL: `${albumFeatureURL}https://www.jiosaavn.com/album/phir-na-aisi-raat-aayegi-from-laal-singh-chaddha/RzPgiZwKDlE_`,
  },

  {
    id: 2,
    URL: `${albumFeatureURL}https://www.jiosaavn.com/album/aahista-aahista/RtfMsWtJbzI_`,
  },

  {
    id: 3,
    URL: `${albumFeatureURL}https://www.jiosaavn.com/album/workout-bollywood-style:-30-mins-non-stop-mix/snNcXZUfZe0_`,
  },
  {
    id: 4,
    URL: `${albumFeatureURL}https://www.jiosaavn.com/album/khuda-haafiz-chapter-2--agnipariksha/9g9GWN941ig_`,
  },
];

const AppProvider = ({ children }) => {
  const [albumData, setAlbumData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL = `https://saavanapi.herokuapp.com/`;

  useEffect(() => {
    try {
      setIsLoading(true);
      const getSongsData = async () => {
        const tempAlbumArr = [];
        const tempFeaturedArr = [];
        for (let i = 0; i < dynamicFeaturedData.length; i++) {
          const res = await axios.get(dynamicFeaturedData[i].URL);
          const { image, listid, listname, songs } = res.data;
          const tempObj = {
            id: i,
            listid,
            listname,
            image,
            songs,
          };
          tempFeaturedArr.push(tempObj);
          //   console.log(tempFeaturedArr);
        }
        //console.log("featured Data: ", tempFeaturedArr);
        setFeaturedData(tempFeaturedArr);
        for (let i = 0; i < dynamicAlbumData.length; i++) {
          const res = await axios.get(dynamicAlbumData[i].URL);
          const {
            albumid,
            title,
            image,
            name,
            primary_artists,
            primary_artists_id,
            release_date,
            year,
            songs,
          } = res.data;

          const tempObj = {
            id: i,
            albumid,
            title,
            image,
            name,
            primary_artists,
            primary_artists_id,
            release_date,
            year,
            songs,
          };

          tempAlbumArr.push(tempObj);
        }
        //console.log("album data: ", tempAlbumArr);
        setAlbumData(tempAlbumArr);
      };

      getSongsData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider value={{ featuredData, albumData }}>
      {children}
    </AppContext.Provider>
  );
};

//global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
