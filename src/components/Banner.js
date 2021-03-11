import React from "react";
import Header from "../components/Header";

const Banner = (props) => {
  // variable to store movie array of objects passed in from the movie state
  const data = props.movie;

  // Select a random object/movie from the "data" array
  const randomData = data[Math.floor(Math.random() * data.length - 1)];

  // Image path of the random selected object from the "data" array
  const backgroundImagePath = "https://image.tmdb.org/t/p/original" + randomData?.backdrop_path;

  // Truncate function to show only a specified amout of letter
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
          <h1 className="banner__contents-title">{truncate(randomData?.title, 20) || truncate(randomData?.name, 20)}</h1>
          <p className="banner__contents-overview">{truncate(randomData?.overview, 150)}</p>
          <p className={`banner__contents-vote ${props.setVoteClass(randomData?.vote_average)}`}>{randomData?.vote_average}</p>
        </div>
      </div>

      <div className="banner--bottomfade"></div>
    </div>
  );
};

export default Banner;
