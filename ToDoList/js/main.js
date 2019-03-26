$(document).ready(function() {
  populateList();
  $("#button-addon2").click(function() {
    const newItem = $("#newItem").val();
    addNewItem(newItem);
    addTolocalStorage(newItem);
  });
});

$("input[name=newItem]").on("focus", () => {
  $("input[name=newItem]").val("");
});

$(document).on("click", ".removeElement", function() {
  const valueItem = $(this)
    .parent()
    .text();
  const newValue = removeFinalLetter(valueItem);
  removeFromLocalStorage(newValue);

  $(this)
    .parent()
    .remove();
});

$(document).on("dblclick", ".list-element", function() {
  const valueItem = $(this).text();
  const newValue = removeFinalLetter(valueItem);
  removeFromLocalStorage(newValue);
  $(this).remove();
});

function getFromLocalStorage() {
  let items;
  const itemLs = localStorage.getItem("items");
  if (itemLs === null) {
    items = [];
  } else {
    items = JSON.parse(itemLs);
  }
  return items;
}

function addTolocalStorage(item) {
  const items = getFromLocalStorage();
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

function populateList() {
  const items = getFromLocalStorage();
  for (let item of items) {
    addNewItem(item);
  }
}

function addNewItem(item) {
  const listElement = $(
    '<li class="list-group-item d-flex justify-content-between align-items-center list-element"></li>'
  );
  const span = $(
    '<span class="badge badge-danger badge-pill removeElement"></span>'
  );
  span.html("x");
  listElement.html(item);
  listElement.append(span);
  $("#list-group").append(listElement);
}

function removeFinalLetter(value) {
  let string = "";
  const arr = value.toString().split("");
  arr.pop();
  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
  }
  return string;
}

function removeFromLocalStorage(item) {
  let items = getFromLocalStorage();
  for (let i = 0; i < items.length; i++) {
    if (item === items[i]) {
      items.splice(i, 1);
    }
  }
  localStorage.setItem("items", JSON.stringify(items));
}
