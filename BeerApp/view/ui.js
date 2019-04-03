function showBeers(elements) {
  const div_ul = document.getElementById("list");
  const ul = document.createElement("ul");
  ul.setAttribute("id", "list_beer");
  elements.forEach(element => {
    const li = document.createElement("li");
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    const descWrapper = document.createElement("div");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttonWrapper");
    const readMore = document.createElement("button");
    readMore.setAttribute("data-id", element.id);
    img.setAttribute("src", element.image_url);
    li.classList.add("list-element");
    imgWrapper.appendChild(img);
    imgWrapper.classList.add("imgWrapper");
    descWrapper.classList.add("descriptions");
    title.innerHTML = element.name;
    desc.innerHTML = element.description.substring(0, 100) + " .........";
    readMore.textContent = "Read More";
    readMore.classList.add("show-more");
    descWrapper.appendChild(title);
    descWrapper.appendChild(desc);
    buttonWrapper.appendChild(readMore);
    descWrapper.appendChild(buttonWrapper);
    li.appendChild(imgWrapper);
    li.appendChild(descWrapper);
    ul.appendChild(li);
  });
  div_ul.appendChild(ul);
}

function displayBeerDetails(data) {
  const image = document.getElementById("image-wrapper");
  const beer_desc = document.getElementById("beer-description");
  const img = document.createElement("img");
  img.setAttribute("href", data[0].image_url);
  image.appendChild(img);
  const name = document.createElement("p");
  name.setAttribute("id", "beer-name");
  name.setAttribute("class", "beer-name");
  name.innerHTML = data[0].name;
  beer_desc.appendChild(name);
  const ingredients = document.createElement("div");
  ingredients.setAttribute("class", "ingredients");
  const h3_ingredients = document.createElement("h3");
  h3_ingredients.textContent = "Ingredients:";
  ingredients.appendChild(h3_ingredients);
  const ingredients_hops = document.createElement("ul");
  ingredients_hops.setAttribute("class", "hops");
  data[0].ingredients.hops.forEach(ingredient => {
    const ingredientTag = document.createElement("li");
    ingredientTag.innerHTML = ingredient.name;
    ingredients_hops.appendChild(ingredientTag);
  });
  const ingredients_malts = document.createElement("ul");
  ingredients_malts.setAttribute("class", "malts");
  data[0].ingredients.malt.forEach(element => {
    const ingredientTag = document.createElement("li");
    ingredientTag.innerHTML = element.name;
    ingredients_malts.appendChild(ingredientTag);
  });
  const ul_container = document.createElement("div");
  ul_container.setAttribute("class", "ingredients-container");
  ul_container.appendChild(ingredients_hops);
  ul_container.appendChild(ingredients_malts);
  ingredients.appendChild(ul_container);
  const desc = document.createElement("div");
  desc.setAttribute("class", "description");
  const h3_desc = document.createElement("h3");
  h3_desc.textContent = "Description:";
  desc.appendChild(h3_desc);
  const desc_paragraf = document.createElement("p");
  desc_paragraf.innerHTML = data[0].description;
  desc.appendChild(desc_paragraf);
  const food_pairing = document.createElement("div");
  food_pairing.setAttribute("class", "food-pairing");
  const food_header = document.createElement("h3");
  food_header.textContent = "Food Pairing:";
  food_pairing.appendChild(food_header);
  const food = document.createElement("ul");
  data[0].food_pairing.forEach(el => {
    const food_item = document.createElement("li");
    food_item.textContent = el;
    food.appendChild(food_item);
  });
  food_pairing.appendChild(food);
  beer_desc.appendChild(ingredients);
  beer_desc.appendChild(desc);
  beer_desc.appendChild(food_pairing);
}

function removeContainerListBeer() {
  const list_container = document.getElementById("list");
  const list_beer = document.getElementById("list_beer");
  list_container.removeChild(list_beer);
}

function goTo(el) {
  const id = $(el).attr("data-id");
  window.location.href = "../pages/beerDetails.html?beerId=" + id;
}

function updateBeerList(currentPage) {
  beerList.loadBeerList(currentPage).then(function(data) {
    removeContainerListBeer();
    showBeers(data);
    $(".show-more").click(function() {
      goTo(this);
    });
  });
}

function displayPage(obj, page) {
  obj.loadBeerList(page).then(function(data) {
    if (data === []) {
      currentPage = currentPage - 1;
    }
    removeContainerListBeer();
    showBeers(data);
    $(".show-more").click(function() {
      goTo(this);
    });
  });
}

function whatPageIs(id) {
  let page;
  if (id <= 25) {
    page = 1;
  } else {
    page = Math.ceil(id / 25);
  }
  return page;
}

function getPageNumber(url) {
  const urlSplit = url.toString().split("#");
  const page = urlSplit[1].split(".");
  const page_number = page[0].split("").pop();
  return page_number;
}

function getUrl() {
  return window.location.href;
}
