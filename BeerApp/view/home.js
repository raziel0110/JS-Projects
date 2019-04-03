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

let currentPage = 1;
let url = getUrl();
if (getPageNumber(getUrl()) < 14) {
  currentPage = getPageNumber(getUrl());
  url = "http://127.0.0.1:5500/pages/home.html#/page" + currentPage + ".html";
  history.replaceState({ page: currentPage }, "", url);
} else {
  currentPage = 1;
  url = "http://127.0.0.1:5500/pages/home.html#/page" + currentPage + ".html";
  history.replaceState({ page: currentPage }, "", url);
}
window.location.replace(url);
const beersList = document.getElementById("beersList");
const ulList = document.getElementById("list");
const search = new Search();
const beerList = new BeerList();

console.log(currentPage);
beerList.loadBeerList(currentPage).then(function(data) {
  showBeers(data);
  $(".show-more").click(function(e) {
    e.preventDefault();
    goTo(this);
  });
});
$(document).on("click", "#search-btn", function() {
  const input = document.getElementById("searchName").value;
  console.log(input);
  if (input !== "") {
    search.searchBeer(input).then(beers => {
      console.log(beers);
      removeContainerListBeer();
      if (beers === null) {
        console.log("no beer");
      } else {
        showBeers(beers);
        $(".show-more").click(function() {
          goTo(this);
        });
      }
    });
  }
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

$(document).on("click", "#next-btn", function(e) {
  e.preventDefault();
  if (currentPage > 12) {
    currentPage = 13;
  } else {
    currentPage++;
    history.pushState(
      { page: currentPage },
      "random",
      url + "/page" + currentPage + ".html"
    );
  }
  console.log(history.state);
  displayPage(beerList, currentPage);
});

$(document).on("click", "#prev-btn", function() {
  if (currentPage < 2) {
    currentPage = 1;
  } else {
    currentPage--;
    history.pushState(
      { page: currentPage },
      "random",
      url + "/page" + currentPage + ".html"
    );
  }
  console.log(history.state);
  displayPage(beerList, currentPage);
});
window.addEventListener("popstate", function(e) {
  const page = e.state;
  console.log(page);

  if (page !== null) {
    displayPage(beerList, parseInt(page.page));
  }
});
