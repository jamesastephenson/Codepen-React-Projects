import "./styles.css";
import { useState } from "react";

// solution was to put this arr outside of state
var colorArr = [];

export default function App() {
  const [color, setColor] = useState("orange");

  // generates a hexcode for a color value
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    setColor(() => color);
    colorArr.push(color);
    //console.log(colorArr);
  }

  return (
    <div className="App">
      <h1>Get Random Color</h1>

      <div className="swatch" id="swatch" style={{ backgroundColor: color }}>
        <h1>Color</h1>
      </div>
      <div className="controls">
        <h3>Controls</h3>
        <button className="btn" onClick={getRandomColor}>
          Get New Color
        </button>
      </div>

      <div className="color-list">
        <h3>Your Colors</h3>
        <ol>
          {colorArr.map((item, index) => {
            return (
              <li key={index} style={{ backgroundColor: item }}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

// debrief notes:
//  -useState was a great way of handling the color changes within component
//  -useEffect DID work but was unnecessary, good to test though
//  -returning a map was the best way to make the list display
