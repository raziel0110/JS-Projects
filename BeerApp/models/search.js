class Search {
  constructor() {
    this.items = [];
  }

  searchBeer(name) {
    return $.ajax("https://api.punkapi.com/v2/beers?beer_name=" + name, {
      method: "GET",
      success: beers => {
        console.log(beers);
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
          this.items.push(newBeer);
        });
      },

      error: function() {
        console.log("Erorr");
      }
    });
  }
}
