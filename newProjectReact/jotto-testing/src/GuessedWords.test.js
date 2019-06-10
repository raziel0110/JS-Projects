import React from "react";
import Enzyme, { shallow } from "enzyme";

import { findByTestAttribute, checkProps } from "../test/testUtility";
import Adapter from "enzyme-adapter-react-16";
import GuessedWords from "./GuessedWords";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test(" does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it("render without error", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });

  it("renders intructions to guess a word", () => {
    const intructions = findByTestAttribute(wrapper, "guess-intructions");
    expect(intructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  it("renders without errors", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });
  it("renders guessed words section", () => {
    const guessedWordDiv = findByTestAttribute(wrapper, "guessed-words");
    expect(guessedWordDiv.length).toBe(1);
  });
  it("correct numbers of guessed words", () => {
    const guessedWordNodes = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
