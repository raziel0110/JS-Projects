class BeerList {
  constructor() {
    this.beers = [];
  }

  loadBeerList(currentPage) {
    return $.ajax(
      "https://api.punkapi.com/v2/beers?page=" + currentPage + "&per_page=25",
      {
        method: "GET",
        succes: beers => {
          this.beers = [];
          beers.forEach(beer => {
            const newBeer = new Beer();
            newBeer.id = beer._id;
            newBeer.name = beer.name;
            newBeer.image_url = beer.image_url;
            newBeer.description = beer.description;
            newBeer.food_pairing = beer.food_pairing;
            newBeer.first_brewed = beer.first_brewed;
            newBeer.brewers_tips = beer.brewers_tips;
            newBeer.ingredients = beer.ingredients;
            this.beers.push(newBeer);
          });
        },

        error: function() {
          console.log("Erorr");
        }
      }
    );
  }

  nextPage() {}
}
