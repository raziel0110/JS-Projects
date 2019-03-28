function getFromLocalStorage(name) {
  let names = [];
  const ls = localStorage.getItem(name);
  if (ls === null) {
    names = [];
  } else {
    names = JSON.parse(ls);
  }

  return names;
}
