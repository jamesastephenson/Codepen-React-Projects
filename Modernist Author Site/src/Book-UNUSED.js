import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Book() {
  /*var bookEndpoints = [
    "https://openlibrary.org/works/OL86329W.json",
    "https://openlibrary.org/works/OL86344W.json",
    ""
  ];*/

  function GetBookInfo() {
    // set state variables
    {
      const [bookInfo, setBookInfo] = useState([]);

      useEffect(() => {
        axios
          .get("https://openlibrary.org/books/OL7163035M.json")
          .then((res) => {
            //console.log(res);
            setBookInfo(res.data.title);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return bookInfo;
    }
  }

  return (
    <div className="Book">
      <h2 className="BookName">{GetBookInfo()}</h2>

      {/* save image locally unless you're getting it from an API */}
      <img
        src="https://kbimages1-a.akamaihd.net/02a5ec21-2a7f-45f2-8bac-5e45d0fe3e14/1200/1200/False/dubliners-152.jpg"
        alt="Dubliners book cover"
      />

      {/* make this horizontal line verical on larger screens to divide */}
      <hr />

      <p>{GetBookInfo("description")}</p>
    </div>
  );
}

/*function GetBookInfo(section) {
  // set state variables
  if (section === "title") {
    const [bookInfo, setBookInfo] = useState([]);

    useEffect(() => {
      axios
        .get("https://openlibrary.org/books/OL7163035M.json")
        .then((res) => {
          //console.log(res);
          setBookInfo(res.data.title);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return bookInfo;
  } else if (section === "description") {
    const [bookInfo, setBookInfo] = useState([]);

    useEffect(() => {
      axios
        .get("https://openlibrary.org/books/OL7163035M.json")
        .then((res) => {
          //console.log(res);
          setBookInfo(res.data.description.value);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return bookInfo;
  }
}*/
