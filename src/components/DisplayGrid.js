import React from "react";
import noImage from "../no-image.png";

const DisplayGrid = (props) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  // Function/conditional statment to apply a specific class name depending on the vote average value
  function setVoteClass(vote) {
    if (vote >= 8) {
      return "grid__item-vote--green";
    } else if (vote >= 5) {
      return "grid__item-vote--orange";
    } else {
      return "grid__item-vote--red";
    }
  }

  return (
    <div className="grid">
      {props.movie.map((item) => (
        <div
          className="grid__item"
          key={item.id}
          style={{
            backgroundImage: `url(${imageBaseUrl + item?.poster_path ? imageBaseUrl + item?.poster_path : noImage})`,
          }}
        >
          <div className="grid__item-inner">
            <div className="grid__item-description">
              <h1 className="grid__item-title">{item?.title || item?.name}</h1>
              <p className="grid__item-overview">{item?.overview}</p>
              <p className={`grid__item-vote ${setVoteClass(item.vote_average)}`}>{item?.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayGrid;
