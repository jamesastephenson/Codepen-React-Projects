import "./styles.css";
import Author from "./Author.js";
import axios from "axios";
import Banner from "./Banner.js";
import Lead from "./Lead.js";

import { useState, useEffect } from "react";

export default function App() {
  var endpointArr = [
    "https://openlibrary.org/authors/OL31827A.json",
    "https://openlibrary.org/authors/OL116256A.json",
    "https://openlibrary.org/authors/OL33146A.json",
    "https://openlibrary.org/authors/OL19441A.json",
    "https://openlibrary.org/authors/OL29858A.json"
  ];

  //note: in the future, images should be hosted locally
  var imageArr = [
    "https://api.time.com/wp-content/uploads/2014/06/james-joyce.jpg",
    "https://literariness.org/wp-content/uploads/2018/01/ts-eliot-9286072-1-402.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Kafka.jpg/1200px-Kafka.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Joseph_Conrad-remastered_to_black_and_white.png",
    "https://cdn.britannica.com/72/6372-050-FB63515E/Samuel-Beckett-1965.jpg"
  ];

  function GetAuthorName(endpoint) {
    // set state variables
    const [authorName, setAuthorName] = useState();
    useEffect(() => {
      axios
        .get(endpoint)
        .then((res) => {
          //console.log(res);
          setAuthorName(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [endpoint]);
    return authorName;
  }

  function GetAuthorBio(endpoint) {
    // set state variables
    const [authorBio, setAuthorBio] = useState();

    useEffect(() => {
      axios
        .get(endpoint)
        .then((res) => {
          //console.log(res);
          setAuthorBio(res.data.bio.value);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [endpoint]);
    // trim wikipedia info tags
    return authorBio;
  }

  return (
    <div className="App" id="App">
      <div className="Grain"></div>
      {/* Top Banner Component */}
      <Banner />

      <div className="body">
        {/* Author Div Component */}
        <div id="container">
          {/* Lead Text Component */}
          <Lead />

          <Author
            name={GetAuthorName(endpointArr[0])}
            bio={GetAuthorBio(endpointArr[0])}
            image={imageArr[0]}
          />
          <Author
            name={GetAuthorName(endpointArr[1])}
            bio={GetAuthorBio(endpointArr[1])}
            image={imageArr[1]}
          />
          <Author
            name={GetAuthorName(endpointArr[2])}
            bio={GetAuthorBio(endpointArr[2])}
            image={imageArr[2]}
          />
          <Author
            name={GetAuthorName(endpointArr[3])}
            bio={GetAuthorBio(endpointArr[3])}
            image={imageArr[3]}
          />
          <Author
            name={GetAuthorName(endpointArr[4])}
            bio={GetAuthorBio(endpointArr[4])}
            image={imageArr[4]}
          />
        </div>
      </div>
    </div>
  );
}
