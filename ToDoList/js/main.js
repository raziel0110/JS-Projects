let values = [];
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
  $("#areyousure").show("fast");
  const that = $(this);
  $("#yes").click(function() {
    const valueItem = that.parent().text();
    const newValue = removeFinalLetter(valueItem);
    removeFromLocalStorage(newValue);
    that.parent().remove();
    $("#areyousure").hide();
  });
  $("#no").click(function() {
    $("#areyousure").hide();
  });
});

$(document).on("dblclick", ".list-element", function() {
  const valueItem = $(this).text();
  const newValue = removeFinalLetter(valueItem);
  values.push(newValue);
  const newTag = $('<div class="input-group list-input-group"></div>');
  const input = $(
    '<input type="text" name="inputItem" class="form-control inputValue" aria-description="replace" />'
  );
  input.val(newValue);
  const replace_btn_holder = $('<div class="input-group-append"></div>');
  const replace_btn = $(
    '<button class="btn btn-outline-warning replace-btn" type="button">Replace</button>'
  );
  replace_btn_holder.append(replace_btn);
  newTag.append(input);
  newTag.append(replace_btn_holder);
  $(this).replaceWith(newTag);
});

$(document).on("click", ".replace-btn", function() {
  const newVal = $("input[name=inputItem]").val();
  const oldVal = values[0];
  console.log(newVal);
  console.log(oldVal);
  $(".list-input-group").replaceWith(replaceValue(newVal));
  updateLocalStorage(oldVal, newVal);
  values = [];
});

function replaceValue(value) {
  const listElement = $(
    '<li class="list-group-item d-flex justify-content-between align-items-center list-element"></li>'
  );
  const span = $(
    '<span class="badge badge-danger badge-pill removeElement"></span>'
  );
  span.html("x");
  listElement.html(value);
  listElement.append(span);
  $("#list-group").append(listElement);
}

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

function updateLocalStorage(oldVal, newVal) {
  let items = getFromLocalStorage();
  for (let i = 0; i < items.length; i++) {
    if (oldVal === items[i]) {
      items[i] = newVal;
    }
  }
  localStorage.setItem("items", JSON.stringify(items));
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
