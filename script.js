/***
 * 1.addEventListener to take value from form
 * 2.pass the value to a function to generate card
 * 3. card shoud have: Name as Title, Location as H5, Photo as img, Decription as p, edit/remove button
 * 4. clear the list when hit add to list
 *
 */

//addlistener to form

document
  .getElementById("destination_details_form")
  .addEventListener("submit", createCard);

function createCard(event) {
  event.preventDefault();

  let name = event.target.elements["name"].value;
  let location = event.target.elements["location"].value;
  let image = event.target.elements["photo"].value;
  let descPara = event.target.elements["description"].value;

  resetForm(event.target);

  //create a title
  let wishListContainer = document.getElementById("destinations_container");
  if (wishListContainer.children.length === 0) {
    document.getElementById("title").innerHTML = "My WishList";
  }

  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let myImg = document.createElement("img");
  myImg.setAttribute("class", "card-img-top");
  myImg.setAttribute("alt", name);

  if (image.length < 1) {
    myImg.setAttribute(
      "src",
      "https://images-na.ssl-images-amazon.com/images/I/61fY5xqsTRL._SL1000_.jpg"
    );
  } else {
    myImg.setAttribute("src", image);
  }

  card.appendChild(myImg);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerHTML = name;
  cardBody.appendChild(cardTitle);

  let cardSubTitle = document.createElement("h6");
  cardSubTitle.setAttribute("class", "card-subtitle mb-2 text-muted");
  cardSubTitle.innerHTML = location;
  cardBody.appendChild(cardSubTitle);

  let cardPara = document.createElement("p");
  cardPara.setAttribute("class", "card-text");
  cardPara.innerHTML = descPara;
  cardBody.appendChild(cardPara);

  let btnDiv = document.createElement("div");
  btnDiv.setAttribute("class", "buttons_container");

  var EditBtn = document.createElement("button");
  EditBtn.setAttribute("class", "btn btn-warning");
  EditBtn.innerHTML = "Edit";
  EditBtn.addEventListener("click", editCard);

  var DeleteBtn = document.createElement("button");
  DeleteBtn.setAttribute("class", "btn btn-danger");
  DeleteBtn.innerHTML = "Remove";
  DeleteBtn.addEventListener("click", removeCard);

  btnDiv.appendChild(EditBtn);
  btnDiv.appendChild(DeleteBtn);

  cardBody.appendChild(btnDiv);
  card.appendChild(cardBody);

  document.getElementById("destinations_container").appendChild(card);
}

function removeCard(event) {
  let card = event.target.parentElement.parentElement.parentElement;
  card.remove();
}

function editCard(event) {
  let cardBody = event.target.parentElement.parentElement;
  let title = cardBody.children[0];
  let subTitle = cardBody.children[1];

  let card = cardBody.parentElement;
  let image = card.children[0];

  let newTitle = window.prompt("Enter new name");
  let newSubtitle = window.prompt("Enter new location");
  let newImage = window.prompt("Enter new photo url");

  if (newTitle.length > 0) {
    title.innerHTML = newTitle;
  }

  if (newSubtitle.length > 0) {
    subTitle.innerHTML = newSubtitle;
  }

  if (newImage.length > 0) {
    image.setAttribute("src", newImage);
  }
}

function resetForm(form) {
  for (let i = 0; i < form.length; i++) {
    form.elements[i].value = "";
  }
}
