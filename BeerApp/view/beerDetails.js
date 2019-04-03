function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const current_id = getUrlParameter("beerId");
const page = whatPageIs(current_id);
const beerList = new BeerList();

const current_beer = new Beer();
current_beer.beerFetchData(current_id).then(data => {
  displayBeerDetails(data);
  console.log(current_id);

  $(".back-btn").click(function(e) {
    e.preventDefault();
    window.location.href =
      "http://127.0.0.1:5500/pages/home.html#/page" + page + ".html";
  });
});

window.addEventListener("popstate", function(e) {
  e.preventDefault();
  e.state;
  console.log(e.state);
});
