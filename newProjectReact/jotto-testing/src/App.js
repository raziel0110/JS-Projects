import React from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Jotto</h2>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: "train",
            letterMatchCount: 3
          }
        ]}
      />
    </div>
  );
}

export default App;
