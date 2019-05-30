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

function addLocalStorage(name, item) {
  const items = getFromLocalStorage(name);
  items.push(item);
  localStorage.setItem(name, JSON.stringify(items));
}

function updateUserState(user) {
  let users = getFromLocalStorage("users");
  users.forEach(element => {
    if (element.name === user.name) {
      element.isLogged = false;
      console.log(element.isLogged);
    }
  });
  localStorage.setItem("users", JSON.stringify(users));
}

function checkifExists(val) {
  const items = getFromLocalStorage("items");
  return items.some(itemVal => val === itemVal);
}

function checkIfUserExist(user, list) {
  return list.some(listItem => user === listItem.name);
}
