$(document).ready(function() {
  populateList();
  $("#button-addon2").click(function() {
    const newItem = $("#newItem").val();
    
    if (newItem.trim() !== "") {
      if (checkifExists(newItem)) {
        $("#errorMessageModal").show();
        $("#retry").click(function() {
          $("#errorMessageModal").hide();
        });
        $(".input-group").addClass("error");
        setInterval(function() {
          $(".input-group").removeClass("error");
        }, 3000);;
      }else {
        addNewItem(newItem);
        addTolocalStorage(newItem);
      
     
      } 
    }
  });

  $("input[name=newItem]").on("focus", function() {
    $(this).val("");
  });

  $(document).on("keyup", "input[name=newItem]", function(event) {
    if (event.keyCode == 13) {
      $("#button-addon2").click();
    }
  });

  $(document).on("dblclick", ".list-element", function() {
    const valueItem = $(this).text();
    const newValue = removeFinalLetter(valueItem);
    $(this).html("");
    $(event.target)
      .children()
      .remove();
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
    $(this).append(newTag);

    $(".replace-btn").click(function() {
      const newVal = $("input[name=inputItem]").val();
      const li = $(".list-input-group").parent(".list-element");
      $(".list-input-group")
        .parent()
        .html(newVal);
      const span = $(
        '<span class="badge badge-danger badge-pill removeElement"></span>'
      );
      span.html("x");
      li.append(span);
      $(".list-input-group").remove();
      updateLocalStorage(newValue, newVal);
      values = [];
    });
  });
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
  const newItems = [];
  items.forEach(item => {
    if (item === oldVal) {
      item = newVal;
    }
    newItems.push(item);
  });
  console.log(newItems);
  localStorage.setItem("items", JSON.stringify(newItems));
}
function checkIfIsEmpty(){
  const items = getFromLocalStorage();
  if(items.length == 0){
    return true;
  } else {
    return false;
  }
}

function checkifExists(val) {
  const items = getFromLocalStorage();
  let eq = function(el){
    return el === val;
  }

  return items.some(eq);

}
function addTolocalStorage(item) {
  const items = getFromLocalStorage();
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

function populateList() {
  const items = getFromLocalStorage();
  items.forEach(item => {
    addNewItem(item);
  });
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
