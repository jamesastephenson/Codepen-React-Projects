import "./styles.css";
import GenerateUser from "./GenerateUser.js";
import SearchBar from "./SearchBar.js";
import Results from "./Results.js";

// TO DO:
// -get Results.js to output the user info
// -get SearchBar.js to receive data from API (passing w/ props)

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <GenerateUser />
      <Results />
      <SearchBar />
    </div>
  );
}
