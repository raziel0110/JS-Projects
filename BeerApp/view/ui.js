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
    desc.innerHTML = element.description;
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
  name.innerHTML = data[0].name;
  beer_desc.appendChild(name);
  const ingredients = document.createElement("div");
  ingredients.setAttribute("class", "ingredients");
  const ingredients_hops = document.createElement("ul");
  ingredients_hops.setAttribute("class", "ingredients-ul");

  data[0].ingredients.hops.forEach(ingredient => {
    console.log(ingredient.name);
    const ingredientTag = document.createElement("li");
    ingredientTag.innerHTML = ingredient.name;
    ingredients.appendChild(ingredientTag);
  });
  beer_desc.appendChild(ingredients);
}
