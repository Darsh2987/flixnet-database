import React from "react";

const DisplayGrid = (props) => {
  return (
    <div>
      {props.movie.map((item) => (
        <div>
          <h1>{item.title || item.name}</h1>
          <p>{item.overview}</p>
          <img src={"https://image.tmdb.org/t/p/w1280" + item.poster_path} style={{ width: "200px" }} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default DisplayGrid;
