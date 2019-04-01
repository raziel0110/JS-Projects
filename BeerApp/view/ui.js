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
