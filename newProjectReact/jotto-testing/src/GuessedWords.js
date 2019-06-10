import React from "react";
import PropTypes from "prop-types";

const guessedWords = props => {
  let content;
  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-intructions">Try to guess the secret word</span>
    );
  } else {
    const quessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{quessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <div data-test="component-guessed-word">{content}</div>
    </div>
  );
};

guessedWords.prototype = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
export default guessedWords;
