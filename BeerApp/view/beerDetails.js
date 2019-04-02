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
});
