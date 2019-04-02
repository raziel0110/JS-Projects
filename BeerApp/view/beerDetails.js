function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const current_id = getUrlParameter("beerId");
const current_beer = new Beer();
current_beer.beerFetchData(current_id).then(data => {
  displayBeerDetails(data);
  console.log(current_id);
});

$(document).on("click", ".back-btn", function() {
  let page;
  if (current_id <= 25 && current_id > 1) {
    page = 1;
  } else {
    page = Math.ceil(current_id / 25);
  }

  window.location.href = "../pages/home.html";
  updateBeerList(page);
});
