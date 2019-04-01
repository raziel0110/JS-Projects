function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const current_id = getUrlParameter("beerId");
console.log(current_id);
const current_beer = new Beer();
current_beer.MovieFetchData(current_id).then(data => {
  console.log(data);
});
