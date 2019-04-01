// async function getBeer() {
//   try {
//     const resp = await fetch("https://api.punkapi.com/v2/beers");
//     return new Promise((resolve, reject) => {
//       resolve(resp.json());
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// const beers = getBeer().then(data => {
//   console.log(data);
// });
const beersList = document.getElementById("beersList");
const ulList = document.getElementById("list");

const beerList = new BeerList();
beerList.loadBeerList().then(function(data) {
  showBeers(data);

  $(".show-more").click(function() {
    const id = $(this).attr("data-id");
    window.location.href = "../pages/beerDetails.html?beerId=" + id;
  });
});
