import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import "./App.css";

const App = () => {
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const [search, setSearch] = useState("");
  const [queryTag, setQueryTag] = useState("dogs");
  const [searchedPhotos, setSearchedPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, [queryTag]);

  const getPhotos = async () => {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APP_KEY}&tags=${queryTag}&per_page=25$safe_search=3&format=json&nojsoncallback=1`
    );
    const data = await response.json();
    setSearchedPhotos(data.photos.photo);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQueryTag(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          required
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="photoCollection">
        {searchedPhotos.map((searchedPhotos) => (
          <Photo
            key={searchedPhotos.id}
            title={searchedPhotos.title}
            identification={searchedPhotos.id}
            farmId={searchedPhotos.farm}
            serverId={searchedPhotos.server}
            secret={searchedPhotos.secret}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
