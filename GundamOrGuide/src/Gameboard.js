import "./styles.css";

export default function Gamebooard() {
  const gundamArr = [
    "Amuro Ray",
    "Bright Noah",
    "Fraw Bow",
    "Char Aznable",
    "Slegger Law",
    "Sayla Mass",
    "Degwin Sodo Zabi",
    "Quattro Bajina",
    "Kamille Bidan",
    "Reccoa Londe",
    "Jamaican Daninghan",
    "Paptimus Scirocco",
    "Kacricon Cacooler",
    "South Burning",
    "Full Frontal",
    "Alejandro Corner",
    "Revive Revival",
    "Bork Cry",
    "Job John",
    "Bring Stabity",
    "Biscuit Griffon",
    "Chibodee Crockett",
    "Master Asia",
    "Lockon Stratos",
    "Mu La Flaga",
    "Natora Einus",
    "Cancer Kafka",
    "Fixx Bloodman",
    "Zuchini Nicchini",
    "Allelujah Haptism",
    "Chad Chadan"
  ];

  const hitchhikerArr = [
    "Arthur Dent",
    "Ford Prefect",
    "Zaphod Beeblebrox",
    "Trillian Astra",
    "Slartibartfast",
    "Almighty Bob",
    "Blart Versenwald III",
    "Dan Streetmentioner",
    "Deep Thought",
    "Eccentrica Gallumbits",
    "Elvis Presley",
    "Enid Kapelsen",
    "Frankie Mouse",
    "Gag Halfrunt",
    "Googleplex Starthinker",
    "Hotblack Desiato",
    "Humma Kavula",
    "Hurling Frootmig",
    "Lazlar Lyricon",
    "Max Quordlepleen",
    "Mo Minetti",
    "Old Thrashbarg",
    "Oolon Colluphid",
    "Random Dent",
    "Reg Nullify",
    "Rob McKenna",
    "Trin Tragula",
    "Veet Voojagig",
    "Bowerick Wowbagger",
    "Yooden Vranx",
    "Zarniwoop Vann Harl"
  ];

  return (
    <div className="gameboard">
      <h1>{gundamArr[3]}</h1>

      <div className="controls">
        <button type="button">
          <h3>Gundam</h3>
        </button>
        <button type="button">
          <h3>Guide</h3>
        </button>
      </div>
    </div>
  );
}
