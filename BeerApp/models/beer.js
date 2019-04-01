class Beer {
  constructor() {
    this._id = "";
    this.name = "";
    this.image_url = "";
    this.description = "";
    this.foof_pairing = [];
    this.first_brewed = "";
    this.brewers_tips = "";
    this.ingredients = [];
  }

  beerFetchData(id) {
    return $.ajax("https://api.punkapi.com/v2/beers/" + id, {
      method: "GET",
      success: data => {
        this._id = data.id;
        this.name = data.name;
        this.image_url = data.image_url;
        this.description = data.description;
        this.first_brewed = data.first_brewed;
        this.brewers_tips = data.brewers_tips;
        this.ingredients = data.ingredients;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
