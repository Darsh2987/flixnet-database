import React from "react";

const Buttons = (props) => {
  // Functions - Category Buttons
  function Trending() {
    props.setUsersChoice(props.apiRequests.trending);
  }

  function PopularMovies() {
    props.setUsersChoice(props.apiRequests.popularMovies);
  }

  function PopularTV() {
    props.setUsersChoice(props.apiRequests.popularTV);
  }

  function UpcomingMovies() {
    props.setUsersChoice(props.apiRequests.upcomingMovies);
  }

  function ActionMovies() {
    props.setUsersChoice(props.apiRequests.actionMovies);
  }

  function ComedyMovies() {
    props.setUsersChoice(props.apiRequests.comedyMovies);
  }

  function HorrorMovies() {
    props.setUsersChoice(props.apiRequests.horrorMovies);
  }

  function RomanceMovies() {
    props.setUsersChoice(props.apiRequests.romanceMovies);
  }

  function Documentaries() {
    props.setUsersChoice(props.apiRequests.documentaries);
  }

  // One Function for all category buttons
  function Category(e) {
    const target = e.target.getAttribute("category");
    const categoryRequest = `apiRequests.${target}`;
    props.setUsersChoice(categoryRequest);
    console.log(categoryRequest);
    console.log(props.usersChoice);
  }

  return (
    <div>
      <button onClick={Category} category="trending">
        Trending
      </button>
      <button onClick={PopularMovies} category="popularMovies">
        Popular Movies
      </button>
      <button onClick={UpcomingMovies} category="upcomingMovies">
        Upcoming Movies
      </button>
      <button onClick={PopularTV} category="popularTV">
        Popular TV
      </button>
      <button onClick={ActionMovies} category="actionMovies">
        Action Movies
      </button>
      <button onClick={ComedyMovies} category="comedyMovies">
        Comedy Movies
      </button>
      <button onClick={HorrorMovies} category="horrorMovies">
        Horror Movies
      </button>
      <button onClick={RomanceMovies} category="romanceMovies">
        Romance Movies
      </button>
      <button onClick={Documentaries} category="documentaries">
        Documentaries
      </button>
    </div>
  );
};

export default Buttons;
