const beerList = new BeerList();
beerList.showBeerList().then(function(data) {
  data.forEach(element => {
    console.log(element.id);
    console.log(element.name);
    console.log(element.first_brewed);
    console.log(element.description);
    console.log("=====================================");
  });
});

// const beers = fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(data => {
//     data.forEach(element => {
//       console.log(element);
//     });
//   });
