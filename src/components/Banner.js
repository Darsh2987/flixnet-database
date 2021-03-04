import React, { useState, useEffect } from "react";
import axios from "axios";
import apiRequests from "../apiRequests";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      const requestOne = await axios(apiRequests.flixnetOriginals);
      const requestTwo = await axios(apiRequests.trending);
      const requests = requestOne.data.results.concat(requestTwo.data.results);
      const randomRequest = Math.floor(Math.random() * requests.length - 1);
      setBannerMovie(requests[randomRequest]);
    }
    fetchData();
  }, []);

  const backgroundImagePath = imgBaseUrl + bannerMovie.backdrop_path;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        width: "100%",
        height: "200px",
      }}
    ></div>
  );
};

export default Banner;

// https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}

// `url({imgBaseUrl + bannerMovie.backdrop_path})`

// url("https://image.tmdb.org/t/p/original/41ZBU34r8WqCBSczUzL7SMQAgX3.jpg")
