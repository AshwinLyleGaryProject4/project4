import { useState, useEffect } from "react";
import axios from "axios";

const HeaderForm = ({ handleSearch }) => {
  const [userSearchInput, setUserSearchInput] = useState("");

  return (
    <header>
      <h1>
        Quick <span>Flick</span> Picker
      </h1>

      <form
        onSubmit={(event) => {
          handleSearch(event, userSearchInput);
        }}
        action="search"
      >
        Search
        <label htmlFor="searchBar"></label>
        <input
          onChange={(event) => {
            setUserSearchInput(event.target.value);
          }}
          value={userSearchInput}
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default HeaderForm;