import { useState } from "react";


const HeaderForm = ({ handleSearch }) => {
  const [userSearchInput, setUserSearchInput] = useState("");

  return (
    <header>

      <h1>
        Quick <span>Flick</span> Picker
      </h1>

      <div className="headerForm">
        <form
          onSubmit={(event) => {
            handleSearch(event, userSearchInput);
          }}
          action="search"
        >
          Search your favorite movies!
          <label htmlFor="searchBar"></label>
          <input
            onChange={(event) => {
              setUserSearchInput(event.target.value);
            }}
            value={userSearchInput}
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search" required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default HeaderForm;
