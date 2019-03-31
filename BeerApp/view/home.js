// const beerList = new BeerList();
// beerList.showBeerList().then(function(data) {
//   console.log(data);
// });

const beers = fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
  .then(function(response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
