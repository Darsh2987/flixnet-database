import React from "react";
import Header from "../components/Header";

const Banner = (props) => {
  const data = props.movie;

  const randomData = data[Math.floor(Math.random() * data.length - 1)];
  const backgroundImagePath = "https://image.tmdb.org/t/p/original" + randomData?.backdrop_path;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImagePath})`,
      }}
    >
      <Header setUsersChoice={props.setUsersChoice} />
      <div className="banner__contents">
        <div className="banner__contents-description">
          <h1 className="banner__contents-title">{randomData?.title || randomData?.name}</h1>
          <p className="banner__contents-overview">{truncate(randomData?.overview, 150)}</p>
          <p className="banner__contents-vote">{randomData?.vote_average}</p>
        </div>
      </div>

      <div className="banner--bottomfade"></div>
    </div>
  );
};

export default Banner;
