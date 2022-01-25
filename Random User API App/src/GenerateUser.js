import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

// add user data to an array, put them in a list

export default function GenerateUser() {
  function GenerateNewUser(endpoint) {
    const [user, setUser] = useState();
    useEffect(() => {
      axios
        .get(endpoint)
        .then((res) => {
          //console.log(res.data.results);
          setUser(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [endpoint]);
    console.log(user);
  }

  return (
    <div className="Results">
      <h3 className="ResultHeader">Generate User</h3>
      <h4 className="ResultSubheader">
        Some info some info some info some info
      </h4>
      <button
        type="submit"
        className="SearchBtn"
        onSubmit={GenerateNewUser("https://randomuser.me/api")}
      >
        / asdf
      </button>
    </div>
  );
}
