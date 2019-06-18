// var favoriteFood = "grapes";

// var foodThoughts = function() {
//   console.log("Original favorite food " + favoriteFood);

//   var favoriteFood = "sushi";
//   console.log("New favorite food " + favoriteFood);
// };

// foodThoughts();

let statusKey = document.querySelector(".status-key");
let statusAjax = document.querySelector(".status-ajax");
let interval;

function make_ajax_request(e) {
  let that = this;
  statusAjax.innerHTML("That's enough waiting.Makin now tha ajax ");
  interval = setTimeout(function() {
    statusKey.innerHTML("Type here. I will detect when you stop typing");
    statusAjax.innerHTML("");
    that.value("");
  }, 2000);
}

document.querySelector(".autocomplete").addEventListener("keydown", () => {
  statusKey.innerHTML("waiting fore more keystrokes");
  clearInterval(interval);
});

document
  .querySelector(".autocomplete")
  .addEventListener("keydown", _debounce(make_ajax_request), 1300);
