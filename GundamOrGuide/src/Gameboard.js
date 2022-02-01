import "./styles.css";
import { useState } from "react";

export default function Gamebooard() {
  const objectArr = [
    { name: "Amuro Ray", series: "Gundam" },
    { name: "Bright Noah", series: "Gundam" },
    { name: "Fraw Bow", series: "Gundam" },
    { name: "Char Aznable", series: "Gundam" },
    { name: "Slegger Law", series: "Gundam" },
    { name: "Sayla Mass", series: "Gundam" },
    { name: "Degwin Sodo Zabi", series: "Gundam" },
    { name: "Quattro Bajina", series: "Gundam" },
    { name: "Kamille Bidan", series: "Gundam" },
    { name: "Reccoa Londe", series: "Gundam" },
    { name: "Jamaican Daninghan", series: "Gundam" },
    { name: "Paptimus Scirocco", series: "Gundam" },
    { name: "Kacricon Cacooler", series: "Gundam" },
    { name: "South Burning", series: "Gundam" },
    { name: "Full Frontal", series: "Gundam" },
    { name: "Alejandro Corner", series: "Gundam" },
    { name: "Revive Revival", series: "Gundam" },
    { name: "Bork Cry", series: "Gundam" },
    { name: "Job John", series: "Gundam" },
    { name: "Bring Stabity", series: "Gundam" },
    { name: "Biscuit Griffon", series: "Gundam" },
    { name: "Chibodee Crockett", series: "Gundam" },
    { name: "Master Asia", series: "Gundam" },
    { name: "Lockon Stratos", series: "Gundam" },
    { name: "Mu La Flaga", series: "Gundam" },
    { name: "Natora Einus", series: "Gundam" },
    { name: "Cancer Kafka", series: "Gundam" },
    { name: "Fixx Bloodman", series: "Gundam" },
    { name: "Zuchini Nicchini", series: "Gundam" },
    { name: "Allelujah Haptism", series: "Gundam" },
    { name: "Chad Chadan", series: "Gundam" },
    { name: "Arthur Dent", series: "Guide" },
    { name: "Ford Prefect", series: "Guide" },
    { name: "Zaphod Beeblebrox", series: "Guide" },
    { name: "Trillian Astra", series: "Guide" },
    { name: "Slartibartfast", series: "Guide" },
    { name: "Almighty Bob", series: "Guide" },
    { name: "Blart Versenwald III", series: "Guide" },
    { name: "Dan Streetmentioner", series: "Guide" },
    { name: "Deep Thought", series: "Guide" },
    { name: "Eccentrica Gallumbits", series: "Guide" },
    { name: "Elvis Presley", series: "Guide" },
    { name: "Enid Kapelsen", series: "Guide" },
    { name: "Frankie Mouse", series: "Guide" },
    { name: "Gag Halfrunt", series: "Guide" },
    { name: "Googleplex Starthinker", series: "Guide" },
    { name: "Hotblack Desiato", series: "Guide" },
    { name: "Humma Kavula", series: "Guide" },
    { name: "Hurling Frootmig", series: "Guide" },
    { name: "Lazlar Lyricon", series: "Guide" },
    { name: "Max Quordlepleen", series: "Guide" },
    { name: "Mo Minetti", series: "Guide" },
    { name: "Old Thrashbarg", series: "Guide" },
    { name: "Oolon Colluphid", series: "Guide" },
    { name: "Random Dent", series: "Guide" },
    { name: "Reg Nullify", series: "Guide" },
    { name: "Rob McKenna", series: "Guide" },
    { name: "Trin Tragula", series: "Guide" },
    { name: "Veet Voojagig", series: "Guide" },
    { name: "Bowerick Wowbagger", series: "Guide" },
    { name: "Yooden Vranx", series: "Guide" },
    { name: "Zarniwoop Vann Harl", series: "Guide" }
  ];

  // PROBABLY NEED STATE FOR GAMESTART
  // score currently isn't working
  const [score, setScore] = useState(0);
  const [arrPosition, setArrPosition] = useState(0);

  // Randomize list with Fisher-Yates algorithm
  function RandomizeArray(array) {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // Initialize game state, randomize object arr
  function GameStart() {
    RandomizeArray(objectArr);
  }

  // Check if current item is from Gundam, update score if it is
  function ChooseGundam() {
    if (objectArr[arrPosition].series === "Gundam") {
      setScore(score + 1);
      //console.log(score);
    }
    NextItem();
  }

  // Check if current item is from Guide, update score if it is
  function ChooseGuide() {
    if (objectArr[arrPosition].series === "Guide") {
      setScore(score + 1);
      //console.log(score);
    }
    NextItem();
  }

  // Move to next arr position, end game if at end of arr
  function NextItem() {
    if (arrPosition === objectArr.length - 1) {
      GameEnd();
    } else {
      setArrPosition(arrPosition + 1);
    }
  }

  // End game and display final score
  function GameEnd() {
    alert(`Final Score: ${score}`);
  }

  //GameStart();
  //console.log(objectArr);

  return (
    <div className="gameboard">
      <h1>{objectArr[arrPosition].name}</h1>

      <div className="controls">
        <button type="button" onClick={ChooseGundam} className="gundam">
          <h3>Gundam</h3>
        </button>
        <button type="button" onClick={ChooseGuide} className="guide">
          <h3>Guide</h3>
        </button>
      </div>
    </div>
  );
}
