import React from "react";

const DisplayGrid = (props) => {
  return (
    <div className="grid">
      {props.movie.map((item) => (
        <div
          className="grid__item"
          key={item.id}
          style={{
            backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + item.poster_path})`,
          }}
        >
          <div className="grid__item-inner">
            <div className="grid__item-description">
              <h1 className="grid__item-title">{item.title || item.name}</h1>
              <p className="grid__item-overview">{item.overview}</p>
              <p className="grid__item-vote">{item.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayGrid;
