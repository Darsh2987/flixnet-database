import React from "react";
import noImage from "../no-image.png";

const DisplayGrid = (props) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

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
              <p className="grid__item-vote">{item?.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayGrid;
