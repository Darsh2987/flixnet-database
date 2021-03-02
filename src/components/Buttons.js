import React from "react";

const Buttons = (props) => {
  // Function to handle all category buttons
  function Category(e) {
    const target = e.target.dataset.category;
    const categoryRequest = target;
    props.setUsersChoice(categoryRequest);
  }

  return (
    // Category buttons
    <div className="categories">
      <button className="categories__button btn" onClick={Category} data-category="flixnetOriginals">
        Flixnet Originals
      </button>
      <button className="categories__button btn" onClick={Category} data-category="trending">
        Trending
      </button>
      <button className="categories__button btn" onClick={Category} data-category="popularMovies">
        Popular Movies
      </button>
      <button className="categories__button btn" onClick={Category} data-category="upcomingMovies">
        Upcoming Movies
      </button>
      <button className="categories__button btn" onClick={Category} data-category="popularTV">
        Popular TV
      </button>
      <button className="categories__button btn" onClick={Category} data-category="actionMovies">
        Action Movies
      </button>
      <button className="categories__button btn" onClick={Category} data-category="comedyMovies">
        Comedy Movies
      </button>
      <button className="categories__button btn" onClick={Category} data-category="horrorMovies">
        Horror Movies
      </button>
      <button className="categories__button btn" onClick={Category} data-category="romanceMovies">
        Romance Movies
      </button>
      <button className="categories__button btn" onClick={Category} data-category="documentaries">
        Documentaries
      </button>
    </div>
  );
};

export default Buttons;
