import React from "react";

const Buttons = (props) => {
  // Function to handle all category buttons
  function Category(e) {
    const target = e.target.dataset.category;
    const categoryRequest = target;
    props.setUsersChoice(categoryRequest);
  }

  return (
    <ul className={`categories ${props.hideHamburgerIcon ? "nav-overlay--visible" : ""}`}>
      <li className="categories__button btn" onClick={Category} data-category="flixnetOriginals" tabIndex="1">
        Flixnet Originals
      </li>
      <li className="categories__button btn" onClick={Category} data-category="trending" tabIndex="1">
        Trending
      </li>
      <li className="categories__button categories__button-movies">
        Movies
        <ul>
          <li className="categories__button btn" onClick={Category} data-category="popularMovies" tabIndex="1">
            Popular Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="upcomingMovies" tabIndex="1">
            Upcoming Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="actionMovies" tabIndex="1">
            Action Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="comedyMovies" tabIndex="1">
            Comedy Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="horrorMovies" tabIndex="1">
            Horror Movies
          </li>
          <li className="categories__button btn" onClick={Category} data-category="romanceMovies" tabIndex="1">
            Romance Movies
          </li>
        </ul>
      </li>
      <li className="categories__button btn" onClick={Category} data-category="popularTV" tabIndex="1">
        Popular TV
      </li>
      <li className="categories__button btn" onClick={Category} data-category="documentaries" tabIndex="1">
        Documentaries
      </li>
    </ul>
  );
};

export default Buttons;
