import "./styles.css";
import React, { useState } from "react";

// search filter works with test arr, just get the actual user data passed in

export default function SearchBar() {
  const testUserArr = ["john", "joseph", "jeremy", "julian", "bob", "bill"];

  // search field value
  const [search, setSearch] = useState("");
  // search result
  const [foundUsers, setFoundUsers] = useState(testUserArr);

  // filter results based on search
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = testUserArr.filter((user) => {
        return user.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(testUserArr); // show all if no search term
    }

    setSearch(keyword);
  };

  return (
    <div className="SearchBar">
      <h2 class="SearchHeader">Search</h2>
      <input
        type="search"
        value={search}
        onChange={filter}
        className="SearchInput"
        placeholder="Search..."
      />
      <button type="submit" className="SearchBtn">
        Go!
      </button>
      <hr />

      {foundUsers.length > 0 ? (
        foundUsers.map((user) => (
          <div className="userRow">
            <p className="user">{user}</p>
          </div>
        ))
      ) : (
        <p>No users</p>
      )}
    </div>
  );
}
