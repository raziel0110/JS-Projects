import React from "react";
import PropTypes from "prop-types";

const guessedWords = props => {
  let content;
  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-intructions">Try to guess the secret word</span>
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
