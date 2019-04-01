function showBeers(elements) {
  elements.forEach(element => {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    const descWrapper = document.createElement("div");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    img.setAttribute("src", element.image_url);
    li.classList.add("list-element");
    imgWrapper.appendChild(img);
    imgWrapper.classList.add("imgWrapper");
    descWrapper.classList.add("descriptions");
    title.innerHTML = element.name;
    desc.innerHTML = element.description;
    descWrapper.appendChild(title);
    descWrapper.appendChild(desc);
    li.appendChild(imgWrapper);
    li.appendChild(descWrapper);
    ul.appendChild(li);
  });
}
