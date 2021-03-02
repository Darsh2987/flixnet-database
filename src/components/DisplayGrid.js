import React from "react";

const DisplayGrid = (props) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="grid">
      {props.movie.map((item) => (
        <div className="grid__item" key={item.id}>
          <h1 className="grid__item-title">{item.title || item.name}</h1>
          <p className="grid__item-overview">{item.overview}</p>
          <p className="grid__item-vote">{item.vote_average}</p>
          <p className="grid__item-releasedate">{item.release_date}</p>
          <img className="grid__item-image" src={imgBaseUrl + item.poster_path} style={{ width: "200px" }} alt={item.title || item.name} />
        </div>
      ))}
    </div>
  );
};

export default DisplayGrid;
