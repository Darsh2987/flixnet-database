import React from "react";

const Buttons = (props) => {
  // Function to handle all category buttons
  function Category(e) {
    const target = e.target.dataset.category;
    const categoryRequest = target;
    props.setUsersChoice(categoryRequest);
  }

  return (
    // <div className="categories">
    //   <button className="categories__button btn" onClick={Category} data-category="flixnetOriginals">
    //     Flixnet Originals
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="trending">
    //     Trending
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="popularMovies">
    //     Popular Movies
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="upcomingMovies">
    //     Upcoming Movies
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="popularTV">
    //     Popular TV
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="actionMovies">
    //     Action Movies
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="comedyMovies">
    //     Comedy Movies
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="horrorMovies">
    //     Horror Movies
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="romanceMovies">
    //     Romance Movies
    //   </button>
    //   <button className="categories__button btn" onClick={Category} data-category="documentaries">
    //     Documentaries
    //   </button>
    // </div>
    // Category buttons
    <ul className="categories">
      <li className="categories__button btn" onClick={Category} data-category="flixnetOriginals" tabindex="1">
        Flixnet Originals
      </li>
      <li className="categories__button btn" onClick={Category} data-category="trending" tabindex="1">
        Trending
      </li>
      <li className="categories__button categories__button-movies">
        Movies
        <ul>
          <li className="categories__button btn" onClick={Category} data-category="popularMovies" tabindex="1">
            Popular Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="upcomingMovies" tabindex="1">
            Upcoming Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="actionMovies" tabindex="1">
            Action Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="comedyMovies" tabindex="1">
            Comedy Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="horrorMovies" tabindex="1">
            Horror Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="romanceMovies" tabindex="1">
            Romance Movies
          </li>
        </ul>
      </li>
      <li className="categories__button btn" onClick={Category} data-category="popularTV" tabindex="1">
        Popular TV
      </li>
      <li className="categories__button btn" onClick={Category} data-category="documentaries" tabindex="1">
        Documentaries
      </li>
    </ul>
  );
};

export default Buttons;
