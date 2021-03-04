import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import apiRequests from "./apiRequests";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import DisplayGrid from "./components/DisplayGrid";

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

  return (
    <div className="App">
      <Banner movie={movie} />
      <Buttons apiRequests={apiRequests} setUsersChoice={setUsersChoice} />
      <DisplayGrid movie={movie} />
    </div>
  );
}

export default App;
