function findIndex(arr, value) {
  const indexes = [];
  arr.forEach((el, index) => {
    if (el === value) {
      indexes.push(index);
    }
  });

  return indexes;
}

function returnLetter(input) {
  return word.find(letter => letter === input);
}
