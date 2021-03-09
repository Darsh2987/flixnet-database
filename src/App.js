import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import apiRequests from "./apiRequests";
import Banner from "./components/Banner";
import DisplayGrid from "./components/DisplayGrid";
import Buttons from "./components/Buttons";

function App() {
  const [movie, setMovie] = useState([]);
  const [usersChoice, setUsersChoice] = useState("popularMovies"); // On the first initial load use popular movies data in this state

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      const request = await axios(apiRequests[usersChoice]);
      setMovie(request.data.results);
    }

    fetchData();
  }, [usersChoice]);

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
    <div className="App">
      <Banner movie={movie} setUsersChoice={setUsersChoice} setVoteClass={setVoteClass} />
      <DisplayGrid movie={movie} />
    </div>
  );
}

export default App;
