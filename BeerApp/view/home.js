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
let currentPage = 1;
console.log(currentPage);
beerList.loadBeerList(currentPage).then(function(data) {
  showBeers(data);
  $(".show-more").click(function() {
    goTo(this);
  });
});
const pagination = document.createElement("div");
pagination.setAttribute("class", "pagination");
const next = document.createElement("button");
next.setAttribute("id", "next-btn");
next.innerHTML = "Next Page";
const prev = document.createElement("button");
prev.setAttribute("id", "prev-btn");
prev.innerHTML = "Prev Page";
pagination.appendChild(prev);
pagination.appendChild(next);
beersList.appendChild(pagination);

$(document).on("click", "#next-btn", function() {
  if (currentPage > 12) {
    currentPage = 13;
  } else {
    currentPage++;
  }
  console.log(currentPage);
  beerList.loadBeerList(currentPage).then(function(data) {
    if (data === []) {
      currentPage = currentPage - 1;
    }
    console.log(data);
    removeContainerListBeer();
    showBeers(data);
    $(".show-more").click(function() {
      goTo(this);
    });
  });
});

$(document).on("click", "#prev-btn", function() {
  if (currentPage < 2) {
    currentPage = 1;
  } else {
    currentPage--;
  }
  updateBeerList(currentPage);
});
