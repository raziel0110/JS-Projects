function showBeers(elements) {
  elements.forEach(element => {
    const ul = document.getElementById("list");
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
  ingredients.appendChild(ingredients_hops);
  ingredients.appendChild(ingredients_malts);
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
