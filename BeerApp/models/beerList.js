class BeerList {
  constructor() {
    this.beers = [];
  }

  showBeerList() {
    return $.ajax("https://api.punkapi.com/v2/beers", {
      methid: "GET",
      succes: beers => {
        beers.forEach(beer => {
          const newBeer = new Beer();
          newBeer.id = beer.id;
          newBeer.name = beer.name;
          newBeer.image_url = beer.image_url;
          newBeer.description = beer.description;
          newBeer.food_pairing = beer.food_pairing;
          newBeer.first_brewed = beer.first_brewed;

          this.beers.push(newBeer);
        });
      },

      error: function() {
        console.log("Erorr");
      }
    });
  }
}
